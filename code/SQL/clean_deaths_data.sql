SELECT * FROM deaths_first_year_county
LIMIT 10;

SELECT * FROM deaths_first_year_county
WHERE "FIPS" IS NULL;

DELETE FROM deaths_first_year_county
WHERE "FIPS" IS NULL;

SELECT * FROM deaths_first_year_county
WHERE "code3" <> 840;

DELETE FROM deaths_first_year_county
WHERE "code3" <> 840;

SELECT COUNT("FIPS") FROM deaths_first_year_county;

ALTER TABLE deaths_first_year_county
RENAME COLUMN "3/31/21" to "first_yr_deaths";

ALTER TABLE deaths_first_year_county
	DROP "UID", 
	DROP "code3",
	DROP "Admin2",
	DROP "Province_State",
	DROP "index";
