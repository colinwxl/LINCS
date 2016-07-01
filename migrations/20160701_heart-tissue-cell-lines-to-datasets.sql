INSERT INTO `cells_datasets` ( `cell_id`, `dataset_id`)
VALUES (
		(SELECT id FROM cells WHERE name = "Cardiomyocytes  Line A"), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1237")
); 


INSERT INTO `cells_datasets` ( `cell_id`, `dataset_id`)
VALUES (
		(SELECT id FROM cells WHERE name = "Cardiomyocytes  Line B"), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1237")
); 


INSERT INTO `cells_datasets` ( `cell_id`, `dataset_id`)
VALUES (
		(SELECT id FROM cells WHERE name = "Cardiomyocytes  Line D"), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1237")
); 


INSERT INTO `cells_datasets` ( `cell_id`, `dataset_id`)
VALUES (
		(SELECT id FROM cells WHERE name = "Cardiomyocytes  Line A"), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1239")
); 


INSERT INTO `cells_datasets` ( `cell_id`, `dataset_id`)
VALUES (
		(SELECT id FROM cells WHERE name = "Cardiomyocytes  Line B"), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1239")
); 


INSERT INTO `cells_datasets` ( `cell_id`, `dataset_id`)
VALUES (
		(SELECT id FROM cells WHERE name = "Cardiomyocytes  Line D"), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1239")
); 


INSERT INTO `cells_datasets` ( `cell_id`, `dataset_id`)
VALUES (
		(SELECT id FROM cells WHERE name = "Cardiomyocytes  Line E"), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1239")
); 


INSERT INTO `cells_datasets` ( `cell_id`, `dataset_id`)
VALUES (
		(SELECT id FROM cells WHERE name = "Cardiomyocytes  Line D"), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1266")
);