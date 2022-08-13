SELECT * FROM cases_first_year_county

ALTER TABLE cases_first_year_county
RENAME COLUMN "FIPS" TO fips2

SELECT * 
INTO cases_merged_full
FROM deaths_merged_full as dm
LEFT JOIN cases_first_year_county as cy
ON (dm."FIPS" = cy.fips2)


SELECT * FROM cases_merged_full

ALTER TABLE cases_merged_full
	DROP COLUMN fips2,
	DROP COLUMN first_yr_deaths