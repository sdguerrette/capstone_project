# Capstone Project - Deliverable 2

## Topic / Problem Statement

Using  state and county demographics, social vulnerability data, social context, political affiliation and hospital capacity data to predict the case and death rate of covid-19 over the first year of the virus (march 2020-march 2021).  Specifically, the development of modeling capabilities to predict higher risk of cases and a higher mortality rate at the county level.  A successful model could be helpful in managing a similar outbreak with similar R0 behavior to Covid.



## Data Sources
- US census: https://www2.census.gov/programs-surveys/popest/datasets/2020-2021/counties/totals/
- Social Context for Understanding a Region: https://www.statsamerica.org/downloads/default.aspx
- social vulnerability index(SVI): https://www.atsdr.cdc.gov/placeandhealth/svi/
- Case Time Series Data - Johns Hopkins University: https://github.com/govex/COVID-19
- Death Time Series Data - Johns Hopkins University: https://github.com/govex/COVID-19

- Election Results by county - Harvard University :
https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/VOQCHQ
- Hospital Capacity by county - https://hifld-geoplatform.opendata.arcgis.com/datasets/geoplatform::hospitals/about



## Project steps
1. load csv files into AWS RDS - Postgres SQL database
2. Perform table joins and data cleansing with SQL to develop files for analysis
3. Loading data from the AWS-Postgres database into Python/Pandas via SQAlchemy reads.
4. Pandas/Jupyter notebooks to explore the data including graphical review and correlation
5. Save intermediate and final analysis tables into the AWS-Postgres database.
6. Conduct feature analysis and separate target variable in preparation for modeling.
7. Develop and analyze the performance of one or more Machine Learning models to predict county "hotspots".
    a. Scale features as needed for modeling
    b. Separate target variable(s)
    c. Fit and Train the selected model.
10. Analyze performance of the model output with metrics such as Accuracy, Confusion Matrix, Mean Squared Error, MAPE as appropriate
11. Perform tuning of the model as needed to improve performance via Hyperparameters
12. Create Project Visualization via Tableau Story
13. Create Final Project Review in Google Slides

## Communication Protocols
- main communication through Slack channel
- collaborative work done via Zoom 
- emergency communication via email if need be

## Segment 2 Deliverables
1. Completed AWS Database with SQL code to manage tables and merge data
2. Database ERD
3. Pandas notebooks for reading files form AWS Postgres via SQAlchemy
4. Pandas notebooks for Machine Learning model(s)
5. Dashboard Overview presentation
6. Project Presentation Draft Updated
7. Github repsository updated with relevant files in "Main" branch

