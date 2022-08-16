select "social_context_county" from "social_context_county"
limit 10

ALTER TABLE svi_2018_county
ADD PRIMARY KEY("FIPS") 

ALTER TABLE social_context_county
ADD PRIMARY KEY("FIPS") 

ALTER TABLE svi_2018_county
ADD FOREIGN KEY("FIPS") REFERENCES social_context_county("FIPS")

SELECT * FROM svi_2018_county
limit 10

SELECT 
	dy."FIPS",
	dy.first_yr_deaths,
	bd.num_beds,
	dm.dem_pct,
	sc."Agreeableness",
	sc."Belief In Science",
	sc."Collectivism",
	sc."Conflict Awareness",
	sc."Conscientiousness",
	sc."Empathy",
	sc."Employment Rate",
	sc."Entrepreneurship",
	sc."Extraversion",
	sc."Gender Equality",
	sc."Hopefulness",
	sc."Income Per Capita",
	sc."Neuroticism",
	sc."Openness",
	sc."Religiosity",
	sc."Risk Taking",
	sc."Selflessness",
	sc."Tolerance",
	sc."Work Ethic"
INTO sc_pol_dem_bed_death
FROM social_context_county as sc
JOIN deaths_first_year_county as dy
ON (sc."FIPS" = dy."FIPS")
	JOIN "2020_dem_pct" as dm
	ON (sc."FIPS" = dm.county_fips)
		LEFT JOIN beds_per_county as bd
		ON (sc."FIPS" = bd.fips);

ALTER TABLE sc_pol_dem_bed_death
RENAME COLUMN "FIPS" TO "fips2"

SELECT * 
INTO deaths_merged_full
FROM svi_2018_county as sv
JOIN sc_pol_dem_bed_death as sc
ON (sv."FIPS" = sc."fips2")

SELECT "FIPS", num_beds FROM deaths_merged_full
WHERE num_beds IS NULL

UPDATE deaths_merged_full
SET num_beds = 0
WHERE num_beds IS NULL;

DELETE FROM deaths_merged_full
WHERE "Entrepreneurship" IS NULL;

ALTER TABLE deaths_merged_full
DROP COLUMN fips2