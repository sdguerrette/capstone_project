SELECT * FROM cases_first_year_county
LIMIT 10;

SELECT * FROM cases_first_year_county
WHERE "FIPS" IS NULL;

DELETE FROM cases_first_year_county
WHERE "FIPS" IS NULL;

SELECT * FROM cases_first_year_county
WHERE "code3" <> 840;

DELETE FROM cases_first_year_county
WHERE "code3" <> 840;

SELECT COUNT("FIPS") FROM cases_first_year_county;

ALTER TABLE cases_first_year_county
RENAME COLUMN "3/31/21" to "First_yr_cases";

ALTER TABLE cases_first_year_county
	DROP "UID", 
	DROP "code3",
	DROP "Admin2",
	DROP "Province_State";
	
ALTER TABLE cases_first_year_county
	DROP "index";