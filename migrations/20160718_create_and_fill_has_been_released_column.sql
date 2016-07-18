ALTER TABLE datasets
ADD COLUMN has_been_releasedd TINYINT DEFAULT 0
AFTER source_link;

UPDATE datasets SET has_been_released = 1;

UPDATE datasets SET has_been_released = 0 WHERE lincs_id = "LDS-1243";
UPDATE datasets SET has_been_released = 0 WHERE lincs_id = "LDS-1264";
UPDATE datasets SET has_been_released = 0 WHERE lincs_id = "LDS-1266";
UPDATE datasets SET has_been_released = 0 WHERE lincs_id = "LDS-1287";
UPDATE datasets SET has_been_released = 0 WHERE lincs_id = "LDS-1288";
UPDATE datasets SET has_been_released = 0 WHERE lincs_id = "LDS-1289";
UPDATE datasets SET has_been_released = 0 WHERE lincs_id = "LDS-1294";
UPDATE datasets SET has_been_released = 0 WHERE lincs_id = "LDS-1295";
UPDATE datasets SET has_been_released = 0 WHERE lincs_id = "LDS-1299";
UPDATE datasets SET has_been_released = 0 WHERE lincs_id = "LDS-1303";
UPDATE datasets SET has_been_released = 0 WHERE lincs_id = "LDS-1307";
UPDATE datasets SET has_been_released = 0 WHERE lincs_id = "LDS-1311";
UPDATE datasets SET has_been_released = 0 WHERE lincs_id = "LDS-1319";
UPDATE datasets SET has_been_released = 0 WHERE lincs_id = "LDS-1323";
UPDATE datasets SET has_been_released = 0 WHERE lincs_id = "LDS-1327";
UPDATE datasets SET has_been_released = 0 WHERE lincs_id = "LDS-1331";
UPDATE datasets SET has_been_released = 0 WHERE lincs_id = "LDS-1335";