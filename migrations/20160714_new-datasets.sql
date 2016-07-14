INSERT INTO datasets 
  (description, full_assay_name, center_id, assay, method, classification, 
  physical_detection, lincs_id, date_retrieved,source_link, created_at, updated_at, date_released) 
VALUES ('Data set contains RNA-seq data as raw read counts of mRNA from iMNS', 'RNA-seq gene expression profiling assay',
 '6', 'RNA-Seq', 'RNA-Seq', 'Transcriptomics', 'DNA sequencing', 'LDS-1287', '2015-12-30', 'http://www.neurolincs.org/data', 
	'2016-06-28 18:33:09', '2016-06-28 14:10:37' ,'2015-12-30');

INSERT INTO datasets 
  (description, full_assay_name, center_id, assay, method, classification, 
  physical_detection, lincs_id, date_retrieved,source_link, created_at, updated_at, date_released) 
VALUES ('MACS2 output of significant peaks compared to naked genomic DNA.', 'ATAC-Seq', 
	'6', 'ATAC-Seq', 'ATAC-Seq', 'Epigenomics', 'ATAC-Seq', 'LDS-1288', '2015-12-30', 'http://www.neurolincs.org/data',
	 '2016-06-28 18:33:09', '2016-06-28 14:10:37', '2015-12-30');

INSERT INTO datasets 
  (description, full_assay_name, center_id, assay, method, classification, 
  physical_detection, lincs_id, date_retrieved,source_link, created_at, updated_at, date_released) 
VALUES ('Peptide expression data from top 200 proteins in iPSCs at Passage 27.', 'SWATH-MS', 
	'6', 'SWATH-MS', 'SWATH-MS', 'Proteomics', 'SWATH-MS', 'LDS-1289', '2015-12-30', 'http://www.neurolincs.org/data',
	 '2016-06-28 18:33:09', '2016-06-28 14:10:37', '2015-12-30');

INSERT INTO datasets
  (description, full_assay_name, center_id, assay, method, classification, 
  physical_detection, lincs_id, date_retrieved,source_link, created_at, updated_at, date_released) 
VALUES ('Neurite area measurements at multiple timepoints, given as a fluorescent intensity value (summed across the entire well).', 'Robotic microscopy',
 '6', 'Robotic microscopy', 'Robotic microscopy', 'Imaging', 'Robotic microscopy', 'LDS-1243', '2015-06-30', 'http://www.neurolincs.org/data',
  '2016-06-28 18:33:09', '2016-06-28 14:10:37', '2015-06-30');

INSERT INTO datasets 
  (description, full_assay_name, center_id, assay, method, classification, 
  physical_detection, lincs_id, date_retrieved,source_link, created_at, updated_at, date_released) 
VALUES ('Analysis of combinatorial drug sensitivities in a single cell line, BT-20.', 'Fluorescence imaging apoptosis assay',
 '2', 'Viability', 'Fluorescence imaging', 'Imaging', 'Fluorescence intensity', 'LDS-1294', '2016-04-01', 'http://lincs.hms.harvard.edu/db/datasets/20259/', 
 '2016-06-28 18:33:09', '2016-06-28 14:10:37', '2016-04-01');

INSERT INTO datasets
  (description, full_assay_name, center_id, assay, method, classification, 
  physical_detection, lincs_id, date_retrieved,source_link, created_at, updated_at, date_released)
VALUES ('Analysis of combinatorial drug sensitivities in a single cell line, BT-20.', 'Fluorescence imaging apoptosis assay', '2', 
	'Viability', 'Fluorescence imaging', 'Imaging', 'Fluorescence intensity', 'LDS-1295', '2016-04-01', 'http://lincs.hms.harvard.edu/db/datasets/20260/',
	 '2016-06-28 18:33:09', '2016-06-28 14:10:37', '2016-04-01');


INSERT INTO `cells` ( `name`, `lincs_id`, `source`, `created_at`, `updated_at`)
VALUES
	( 'GM02183', 'LCL-*1', 'NHCDR', '2016-06-28 18:33:04', '2016-06-28 15:30:04');


INSERT INTO `cells` ( `name`, `lincs_id`, `source`, `created_at`, `updated_at`)
VALUES
	( 'GM05400', 'LCL-*2', 'NHCDR', '2016-06-28 18:33:04', '2016-06-28 15:30:04');


INSERT INTO `cells` ( `name`, `lincs_id`, `source`, `created_at`, `updated_at`)
VALUES
	( 'ND30625', 'LCL-*3', 'NHCDR', '2016-06-28 18:33:04', '2016-06-28 15:30:04');


INSERT INTO `cells` ( `name`, `lincs_id`, `source`, `created_at`, `updated_at`)
VALUES
	( 'GM03814', 'LCL-*4', 'NHCDR', '2016-06-28 18:33:04', '2016-06-28 15:30:04');


INSERT INTO `cells` ( `name`, `lincs_id`, `source`, `created_at`, `updated_at`)
VALUES
	( '0025iCTR', 'LCL-*5', 'NHCDR', '2016-06-28 18:33:04', '2016-06-28 15:30:04');


INSERT INTO `cells` ( `name`, `lincs_id`, `source`, `created_at`, `updated_at`)
VALUES
	( '0014iCTR', 'LCL-*6', 'NHCDR', '2016-06-28 18:33:04', '2016-06-28 15:30:04');

INSERT INTO `cells` ( `name`, `lincs_id`, `source`, `created_at`, `updated_at`)
VALUES
	( '0000iCTR', 'LCL-*7', 'NHCDR', '2016-06-28 18:33:04', '2016-06-28 15:30:04');


INSERT INTO `cells` ( `name`, `lincs_id`, `source`, `created_at`, `updated_at`)
VALUES
	( '0083iCTR', 'LCL-*8', 'NHCDR', '2016-06-28 18:33:04', '2016-06-28 15:30:04');


INSERT INTO `cells_datasets` ( `cell_id`, `dataset_id`)
VALUES (
		(SELECT id FROM cells WHERE name = "GM02183"), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1287")
); 


INSERT INTO `cells_datasets` ( `cell_id`, `dataset_id`)
VALUES (
		(SELECT id FROM cells WHERE name = "GM05400"), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1287")
); 


INSERT INTO `cells_datasets` ( `cell_id`, `dataset_id`)
VALUES (
		(SELECT id FROM cells WHERE name = "ND30625"), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1287")
); 


INSERT INTO `cells_datasets` ( `cell_id`, `dataset_id`)
VALUES (
		(SELECT id FROM cells WHERE name = "GM03814"), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1288")
); 


INSERT INTO `cells_datasets` ( `cell_id`, `dataset_id`)
VALUES (
		(SELECT id FROM cells WHERE name = "GM02183"), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1288")
); 


INSERT INTO `cells_datasets` ( `cell_id`, `dataset_id`)
VALUES (
		(SELECT id FROM cells WHERE name = "GM05400"), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1288")
); 


INSERT INTO `cells_datasets` ( `cell_id`, `dataset_id`)
VALUES (
		(SELECT id FROM cells WHERE name = "ND30625"), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1288")
); 


INSERT INTO `cells_datasets` ( `cell_id`, `dataset_id`)
VALUES (
		(SELECT id FROM cells WHERE name = "0025iCTR"),
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1289")
); 


INSERT INTO `cells_datasets` ( `cell_id`, `dataset_id`)
VALUES (
		(SELECT id FROM cells WHERE name = "0014iCTR"), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1289")
); 


INSERT INTO `cells_datasets` ( `cell_id`, `dataset_id`)
VALUES (
		(SELECT id FROM cells WHERE name = "0000iCTR "), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1243")
); 


INSERT INTO `cells_datasets` ( `cell_id`, `dataset_id`)
VALUES (
		(SELECT id FROM cells WHERE name = "0025iCTR"), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1243")
); 


INSERT INTO `cells_datasets` ( `cell_id`, `dataset_id`)
VALUES (
		(SELECT id FROM cells WHERE name = "0083iCTR"), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1243")
); 


INSERT INTO `cells_datasets` ( `cell_id`, `dataset_id`)
VALUES (
		(SELECT id FROM cells WHERE name = "BT-20"), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1294")
); 


INSERT INTO `cells_datasets` ( `cell_id`, `dataset_id`)
VALUES (
		(SELECT id FROM cells WHERE name = "BT-20"), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1295")
);


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES(
		(SELECT id FROM small_molecules WHERE `lincs_id`  = "LSM-1018"), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1294")
); 

INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES(
		(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-1024"), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1294")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES(
		(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-1032"), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1294")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES(
		(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-1051"), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1294")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES(
		(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-1056"), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1294")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES(
		(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-1143"), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1294")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES(
		(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-4255"), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1294")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES(
		(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-4256"), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1294")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES(
		(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-1018"), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1295")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES(
		(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-1024"), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1295")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES(
		(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-1032"), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1295")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES(
		(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-1051"), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1295")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES(
		(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-1056"), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1295")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES(
		(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-1143"), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1295")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES(
		(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-4255"), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1295")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES(
		(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-4256"), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1295")
);