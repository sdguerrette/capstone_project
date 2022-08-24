# Capstone Project 
## [Dashboard]<https://https://public.tableau.com/app/profile/bill.remy/viz/CapstoneFinal_16607545459470/ProjectStoryboard#1>
## [Project Presentation](https://docs.google.com/presentation/d/1kE4QF0gfoAloIRoChRrmSqW5rIKJxH974ZjqdPmSTww/edit#slide=id.g143434d59db_2_13)

## Topic / Problem Statement

The Covid-19 pandemic has proven that the United States is woefully unprepared to deal with an easily transmissible and extremely contagious disease, and also that a quick, informed, and ready response is key to not only saving lives, but keeping the country running on the socio-economic level. This project seeks to determine which counties are most in need of extra resources to improve their readiness and responsiveness in the face of a similar crisis.

## Project Outline and Machine Learning Overview
### Data Gathering
We chose to structure our model around data that describes the social, economic, political, and medical standing of each county in the United States. The following datasets were incorporated into the project (All data was gathered in CSV form from free-to-access web portals):
- [Social Context for Understanding a Region](https://www.statsamerica.org/downloads/default.aspx)
- [Social Vulnerability Index](https://www.atsdr.cdc.gov/placeandhealth/svi/)
- [Case Time Series Data - JHU]( https://github.com/CSSEGISandData/COVID-19/blob/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_US.csv)
- [Death Time Series Data - JHU](https://github.com/CSSEGISandData/COVID-19/blob/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_US.csv)
- [Election Results - Harvard University](https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/VOQCHQ)
- [Hospital Capacity](https://hifld-geoplatform.opendata.arcgis.com/datasets/geoplatform::hospitals/about)
- [Community Resilience Estimates](https://uscensus.maps.arcgis.com/home/item.html?id=36d5cbbcd9fd440e91d87edd8bc9c801#overview)

### Data Processing (SQL and Pandas)
- Initial data pre-processing involved dropping unnecessary columns from tables (such as latitude and longitude or county name)
- In order to join the tables into a singular dataset, a unique key was required and needed to be present in each data set. For our purposes, we used FIPS (Federal Information Processing Standards) numbers for each county.
- In the CRE table, the FIPS number was separated between State and County columns. We utilized pandas to fill leading zeros where needed and concatenate these columns together to provide us with the proper code for each county.
- The Social Context data came in a long format, with a row for each survey question for each county. We used pandas to pivot this data into a wide format grouped by unique FIPS number.
- The SVI data included 122 columns, but many of them contained only margin of error information for each datapoint. We used pandas and regular expression strings to remove these columns from the dataset, leaving only the features containing useable response data.
- After the above, we use python to connect to an AWS RDS instance and write each of the CSV files into the database as a table.
- PostgresSQL was used to join the needed columns from each of the tables into two master tables, with each including either cases or deaths data for each county along with the feature data.
- Each machine learning file was then connected to this database to read in from these master files.
### Feature Selection
- We began by including all columns that contained survey response data or discrete data points such as vote percentages or number of available hospital beds. As we began applying different models to this data, we found certain features were confusing our model, namely from the SVI dataset. 
- As we examined this SVI data more closely, we determined that there were two problems: 
 1. Many of the columns contained data that overlapped with other features, or was grouped with others into meta-columns that contained flags or sums across question categories.
 2. We originally overlooked the fact that each feature had a column for discrete values as well as a column representing a percentage of the county population
- Upon finding these issues, we decided to drop the entire dataset in favor of a new source. This new data came from the U.S. Census and contained Community Resilience Estimates for each county. In essence, this data included much of the same information as the SVI source, but compacted it down into only a few columns that reference how many risk factors were present for each response. 
- Further feature selection involved determining whether or not to include purely descriptive data for each county, such as area, population density, and total population. In the end, only county area was kept, as it showed a positive impact on model performance
- Our final models include 24 features pulled from the CRE, Social Context, Hospital Beds, and Election Results datasets.

### Model 
- The goal of our model is to classify each county by case and death percentage, with a "high" classification given to those counties whose percentages fell two standard deviations above the mean. In essence, our model attempts to predict the high-end outliers.
- Our data was randomly split into training and testing groups using python and the sklearn library. 70% of the counties were assigned as the train group, and 30% were assigned as the test group.
- Since we were only trying to predict these outliers, our data was highly imbalanced. We attempted both over- and under- sampling the data, but in the end chose to do both using the SMOTEENN method of resampling. This provided our model with more "high" classification datasets to learn from, and greatly increased the efficacy of our model.

#### Model Selection
- At first, we tried using an artificial neural network model, with our rationale being that our data was fairly complicated and diverse. However, after trying a variety of models utilizing different numbers of neurons, hidden layers, and activation functions, we were unsatisfied with its performance.
- Next, we decided to try a Decision tree classifier model, and were happily surprised when it outperformed the neural network models. After applying our SMOTEENN resampling, our results were approaching useable levels. Stepping up to a Random Forest model yielded further increases, and we settled on this as our final model type.
- While we are satisfied with the performance of the Random Forest, we recognize that it can be susceptible to overfitting, especially in concert with data resampling. However, the the results stayed strong when compared against multiple random seeds, and we believe that in the end, our choice is the best we could make. 

#### Model Changes
- Previously, we had attempted to perform regression analysis on our features to predict a case/death percentage number for each county. This encompassed multiple neural network models, linear regressors, Random Forest Regressors, and Possion Regressors. However, we were unsatisfied both with the results. The models struggled to predict those counties with very low or high incidence rates, instead lumping predictions too tightly around the mean of the dataset.  
#### Model Training
- Our Decision Tree and Random Forest models have been trained using the SMOTEENN resampled data, and have been left unscaled. We tested removing, adding, and altering a variety of the features, and were able to use feature-importance readings to pair down our dataset to its final form.
- After training based on the split datasets, we applied the trained model to the entire dataset as a whole to mimic the input given if a new pandemic were to arise. 
#### Model Results
- The following classification reports showcase the performance of each of our models.
- Case Percent Model -  
![Screen Shot 2022-08-21 at 9 45 07 PM](https://user-images.githubusercontent.com/100643755/185841202-706d1eaf-fd62-463d-ad35-19408a934e69.png)


- Death Percent Model - 
![Screen Shot 2022-08-21 at 9 44 52 PM](https://user-images.githubusercontent.com/100643755/185841191-232f944f-d899-4984-b355-2125f6639abd.png)

- The models do a very good job at catching all of the actual "high" classifications, but also tend to predict a relatively equal portion of "low" classifications as "high". While this is not ideal, we are comfortable with predicting a surplus of counties to need extra help, so long as it means the counties that do most require aid also receive it. We believe this is preferable to predicting fewer "high" classifications, but missing out on some of those counties that are indeed in most need of help.
