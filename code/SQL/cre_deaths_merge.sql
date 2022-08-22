SELECT ce.*,
	d.first_yr_deaths
INTO cre_deaths_county	
FROM cre_cases_county as ce
LEFT JOIN deaths_first_year_county as d
ON( ce."FIPS" = d."FIPS")

ALTER TABLE cre_deaths_county
DROP COLUMN first_yr_cases

SELECT * FROM cre_deaths_county