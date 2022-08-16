SELECT * FROM social_context_county
limit 100

SELECT COUNT("index") FROM social_context_county
WHERE "Income Mobility" IS NULL

ALTER TABLE social_context_county
DROP "Income Mobility"
DROP "index"

ALTER TABLE social_context_county
RENAME COLUMN "IBRC_Geo_ID" TO "FIPS"