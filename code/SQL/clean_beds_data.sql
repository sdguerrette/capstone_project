SELECT * FROM hospital_beds_county
LIMIT 10;

SELECT * FROM hospital_beds_county
WHERE "NAICS_CODE" = 622110;

SELECT * FROM hospital_beds_county
WHERE "BEDS" < 0;

UPDATE hospital_beds_county
SET "BEDS" = 0
WHERE "BEDS" < 0;

SELECT * FROM hospital_beds_county
WHERE "BEDS" = 0;

SELECT "COUNTYFIPS", SUM("BEDS") 
INTO beds_per_county
FROM hospital_beds_county
WHERE "NAICS_CODE" = 622110
GROUP BY "COUNTYFIPS"
ORDER BY "COUNTYFIPS" DESC;

SELECT * FROM beds_per_county
LIMIT 100;


DELETE FROM beds_per_county
WHERE "COUNTYFIPS" = 'NOT AVAILABLE';

ALTER TABLE beds_per_county	
RENAME COLUMN "sum" TO "num_beds";

ALTER TABLE beds_per_county 
ADD FIPS INT NULL;

UPDATE beds_per_county 
SET FIPS =CAST("COUNTYFIPS" AS INT)

ALTER TABLE beds_per_county
DROP "COUNTYFIPS";

SELECT COUNT(fips) FROM beds_per_county
WHERE num_beds>0;
