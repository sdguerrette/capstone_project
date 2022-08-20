SELECT * FROM cre_19_county
LIMIT 10

SELECT 
	ce."POPUNI",
	ce."PRED0_PE",
	ce."PRED12_PE",
	ce."PRED3_PE",
	bp."num_beds",
	dp."dem_pct",
	sc.*,
	sv."AREA_SQMI",
	cy."first_yr_cases"
INTO cre_cases_county
FROM cre_19_county as ce
LEFT JOIN cases_first_year_county as cy
ON (ce."FIPS" = cy."fips2")
LEFT JOIN beds_per_county AS bp
ON (ce."FIPS" = bp."fips")
LEFT JOIN "2020_dem_pct" as dp
ON (ce."FIPS" = dp."county_fips")
LEFT JOIN "social_context_county" as sc
ON (sc."FIPS" = ce."FIPS")
LEFT JOIN svi_2018_county as sv
ON (ce."FIPS" = sv."FIPS")

SELECT * FROM cre_cases_county

SELECT * FROM cre_cases_county
WHERE num_beds IS NULL

UPDATE cre_cases_county
SET num_beds = 0
WHERE num_beds IS NULL

SELECT * FROM cre_cases_county
WHERE "FIPS" IS NULL

DELETE FROM cre_cases_county
WHERE "FIPS" IS NULL

DELETE FROM cre_cases_county
WHERE "Entrepreneurship" IS NULL

DELETE FROM cre_cases_county
WHERE "dem_pct" IS NULL

DELETE FROM cre_cases_county
WHERE "AREA_SQMI" IS NULL