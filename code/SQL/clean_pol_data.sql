SELECT * FROM election_results_county
LIMIT 10;

SELECT COUNT(county_fips) FROM election_results_county
WHERE "year" = 2020;

SELECT * FROM election_results_county
WHERE county_fips IS NULL;

DELETE FROM election_results_county
WHERE county_fips IS NULL;

SELECT county_fips, (SUM(candidatevotes)/totalvotes*100) as "dem_pct" 
INTO "2020_dem_pct"
FROM election_results_county
WHERE "year" = 2020 AND "party" = 'DEMOCRAT'
GROUP BY county_fips, totalvotes
ORDER BY county_fips DESC;