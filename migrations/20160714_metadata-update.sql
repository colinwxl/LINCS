/* Update LINCS dataset IDs*/

UPDATE `datasets` SET `lincs_id` = 'LDS-1299' 
WHERE `lincs_id`='MCF7-SS1' ;


UPDATE `datasets` SET `lincs_id` = 'LDS-1303' 
WHERE `lincs_id`='MCF7-SS2' ;


UPDATE `datasets` SET `lincs_id` = 'LDS-1307' 
WHERE `lincs_id`='MCF7-SS3' ;


UPDATE `datasets` SET `lincs_id` = 'LDS-1311' 
WHERE `lincs_id`='PC3-SS1' ;


UPDATE `datasets` SET `lincs_id` = 'LDS-1323' 
WHERE `lincs_id`='PC3-SS3' ;


UPDATE `datasets` SET `lincs_id` = 'LDS-1327' 
WHERE `lincs_id`='YAPC-SS1' ;


UPDATE `datasets` SET `lincs_id` = 'LDS-1331' 
WHERE `lincs_id`='YAPC-SS2' ;


UPDATE `datasets` SET `lincs_id` = 'LDS-1335' 
WHERE `lincs_id`='YAPC-SS3' ;


/* 
Aligning database Cell line names with 
LINCS official names.
*/


UPDATE `cells` SET `name` = 'HUTU-80' 
WHERE `lincs_id`='LCL-1150' ;


UPDATE `cells` SET `name` = 'SW620' 
WHERE `lincs_id`='LCL-1157' ;


UPDATE `cells` SET `name` = 'A-375' 
WHERE `lincs_id`='LCL-1235' ;


UPDATE `cells` SET `name` = 'HCC1395' 
WHERE `lincs_id`='LCL-1330' ;


UPDATE `cells` SET `name` = 'HCC1937' 
WHERE `lincs_id`='LCL-1331' ;


UPDATE `cells` SET `name` = 'HCC1954' 
WHERE `lincs_id`='LCL-1332' ;


UPDATE `cells` SET `name` = 'HCC202' 
WHERE `lincs_id`='LCL-1333' ;


UPDATE `cells` SET `name` = 'HCC38' 
WHERE `lincs_id`='LCL-1334' ;


UPDATE `cells` SET `name` = 'HCC70' 
WHERE `lincs_id`='LCL-1335' ;


UPDATE `cells` SET `name` = 'LNZTA3WT4' 
WHERE `lincs_id`='LCL-1345' ;


UPDATE `cells` SET `name` = 'HCC1428' 
WHERE `lincs_id`='LCL-1467' ;


UPDATE `cells` SET `name` = 'HCC1569' 
WHERE `lincs_id`='LCL-1480' ;


UPDATE `cells` SET `name` = 'Ca Ski' 
WHERE `lincs_id`='LCL-1541' ;


UPDATE `cells` SET `name` = 'NCI-H1703' 
WHERE `lincs_id`='LCL-1582' ;


UPDATE `cells` SET `name` = 'SK-MES' 
WHERE `lincs_id`='LCL-1583' ;


UPDATE `cells` SET `name` = 'NCI-H1915' 
WHERE `lincs_id`='LCL-1598' ;


UPDATE `cells` SET `name` = 'NCI-H2023' 
WHERE `lincs_id`='LCL-1599' ;


UPDATE `cells` SET `name` = 'NCI-H1648' 
WHERE `lincs_id`='LCL-1632' ;


UPDATE `cells` SET `name` = 'NCI-H1651' 
WHERE `lincs_id`='LCL-1633' ;


UPDATE `cells` SET `name` = 'NCI-H810' 
WHERE `lincs_id`='LCL-1670' ;


UPDATE `cells` SET `name` = 'MX-1' 
WHERE `lincs_id`='LCL-2072' ;


UPDATE `cells` SET `name` = 'HME1' 
WHERE `lincs_id`='LCL-2083' ;


UPDATE `cells` SET `name` = 'HCC1806' 
WHERE `lincs_id`='LCL-1960' ;


UPDATE `cells` SET `name` = 'NCI-H810' 
WHERE `lincs_id`='LCL-1670' ;


UPDATE `cells` SET `name` = '5637' 
WHERE `lincs_id`='LCL-1702' ;


UPDATE `cells` SET `name` = 'SW527' 
WHERE `lincs_id`='LCL-1474' ;


UPDATE `cells` SET `name` = 'SK-BR-3' 
WHERE `lincs_id`='LCL-1475' ;


UPDATE `cells` SET `name` = 'AU565' 
WHERE `lincs_id`='LCL-1462' ;


UPDATE `cells` SET `name` = 'MDA-MB-231' 
WHERE `lincs_id`='LCL-1461' ;


UPDATE `cells` SET `name` = 'SJCRH30' 
WHERE `lincs_id`='LCL-1408' ;


UPDATE `cells` SET `name` = 'HCC1419' 
WHERE `lincs_id`='LCL-1314' ;


UPDATE `cells` SET `name` = 'PC-3' 
WHERE `lincs_id`='LCL-1299' ;

/* Add LINCS IDs to MEMA Datasets */

UPDATE datasets SET `lincs_id` = 'LDS-1299' 
WHERE `lincs_id` = 'MCF7-SS1';


UPDATE datasets SET `lincs_id` = 'LDS-1303' 
WHERE `lincs_id` = 'MCF7-SS2';


UPDATE datasets SET `lincs_id` = 'LDS-1307' 
WHERE `lincs_id` = 'MCF7-ss3';


UPDATE datasets SET `lincs_id` = 'LDS-1311' 
WHERE `lincs_id` = 'PC3-SS1';


UPDATE datasets SET `lincs_id` = 'LDS-1319' 
WHERE `lincs_id` = 'PC3-SS2noH3';


UPDATE datasets SET `lincs_id` = 'LDS-1323' 
WHERE `lincs_id` = 'PC3-SS3';


UPDATE datasets SET `lincs_id` = 'LDS-1327' 
WHERE `lincs_id` = 'YAPC-SS1';


UPDATE datasets SET `lincs_id` = 'LDS-1331' 
WHERE `lincs_id` = 'YAPC-SS2';


UPDATE datasets SET `lincs_id` = 'LDS-1335' 
WHERE `lincs_id` = 'YAPC-SS3';
​

/* Corrections to metadata text */


UPDATE datasets SET `full_assay_name` = 'Fluorescence imaging Protein state assay' 
WHERE `full_assay_name` = 'Fluorescence imaging Protein_Metadata.txt state assay';


UPDATE datasets SET `full_assay_name` = 'P100 phosphoProtein quantification assay' 
WHERE `full_assay_name` = 'P100 phosphoProtein_Metadata.txt quantification assay';


UPDATE datasets SET `full_assay_name` = 'Bead-based immunoassay for Protein state' 
WHERE `full_assay_name` = 'Bead-based immunoassay for Protein_Metadata.txt state';


UPDATE datasets SET `full_assay_name` = 'ELISA Protein state assay' 
WHERE `full_assay_name` = 'ELISA Protein_Metadata.txt state assay';
​

/* Corrections to datasets already on the database 
--- Missing Cell lines from datasets
*/


INSERT INTO `cells_datasets` ( `cell_id`, `dataset_id`)
VALUES (
		(SELECT id FROM cells WHERE name = "N2586"), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1224")
); 


INSERT INTO `cells_datasets` ( `cell_id`, `dataset_id`)
VALUES (
		(SELECT id FROM cells WHERE name = "N2645"), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1224")
); 


INSERT INTO `cells_datasets` ( `cell_id`, `dataset_id`)
VALUES (
		(SELECT id FROM cells WHERE name = "N2759"), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1224")
); 


INSERT INTO `cells_datasets` ( `cell_id`, `dataset_id`)
VALUES (
		(SELECT id FROM cells WHERE name = "RA1869"), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1224")
); 


INSERT INTO `cells_datasets` ( `cell_id`, `dataset_id`)
VALUES (
		(SELECT id FROM cells WHERE name = "RA1931"), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1224")
); 


INSERT INTO `cells_datasets` ( `cell_id`, `dataset_id`)
VALUES (
		(SELECT id FROM cells WHERE name = "RA2159"), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1224")
); 


INSERT INTO `cells_datasets` ( `cell_id`, `dataset_id`)
VALUES (
		(SELECT id FROM cells WHERE name = "RA2708"), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1224")
); 


INSERT INTO `cells_datasets` ( `cell_id`, `dataset_id`)
VALUES (
		(SELECT id FROM cells WHERE name = "N2586"), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1225")
); 


INSERT INTO `cells_datasets` ( `cell_id`, `dataset_id`)
VALUES (
		(SELECT id FROM cells WHERE name = "N2645"), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1225")
); 


INSERT INTO `cells_datasets` ( `cell_id`, `dataset_id`)
VALUES (
		(SELECT id FROM cells WHERE name = "N2759"), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1225")
); 


INSERT INTO `cells_datasets` ( `cell_id`, `dataset_id`)
VALUES (
		(SELECT id FROM cells WHERE name = "RA1869"), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1225")
); 


INSERT INTO `cells_datasets` ( `cell_id`, `dataset_id`)
VALUES (
		(SELECT id FROM cells WHERE name = "RA1931"), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1225")
); 


INSERT INTO `cells_datasets` ( `cell_id`, `dataset_id`)
VALUES (
		(SELECT id FROM cells WHERE name = "RA2159"), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1225")
); 


INSERT INTO `cells_datasets` ( `cell_id`, `dataset_id`)
VALUES (
		(SELECT id FROM cells WHERE name = "RA2708"), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1225")
); 


INSERT INTO `cells_datasets` ( `cell_id`, `dataset_id`)
VALUES (
		(SELECT id FROM cells WHERE name = "MCF10F"), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1124")
); 


INSERT INTO `cells_datasets` ( `cell_id`, `dataset_id`)
VALUES (
		(SELECT id FROM cells WHERE name = "MDA-MB-436"), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1124")
); 


INSERT INTO `cells_datasets` ( `cell_id`, `dataset_id`)
VALUES (
		(SELECT id FROM cells WHERE name = "COLO 858"), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1220")
); 


INSERT INTO `cells_datasets` ( `cell_id`, `dataset_id`)
VALUES (
		(SELECT id FROM cells WHERE name = "COLO 858"), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1219")
); 


INSERT INTO `cells_datasets` ( `cell_id`, `dataset_id`)
VALUES (
		(SELECT id FROM cells WHERE name = "COLO 858"), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1221")
); 


INSERT INTO `cells_datasets` ( `cell_id`, `dataset_id`)
VALUES (
		(SELECT id FROM cells WHERE name = "5637"), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1003")
); 


INSERT INTO `cells_datasets` ( `cell_id`, `dataset_id`)
VALUES (
		(SELECT id FROM cells WHERE name = "KYSE-140"), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1005")
); 


INSERT INTO `cells_datasets` ( `cell_id`, `dataset_id`)
VALUES (
		(SELECT id FROM cells WHERE name = "KYSE-180"), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1005")
); 


INSERT INTO `cells_datasets` ( `cell_id`, `dataset_id`)
VALUES (
		(SELECT id FROM cells WHERE name = "COLO 858"), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1208")
); 


INSERT INTO `cells_datasets` ( `cell_id`, `dataset_id`)
VALUES (
		(SELECT id FROM cells WHERE name = "COLO 858"), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1210")
); 


INSERT INTO `cells_datasets` ( `cell_id`, `dataset_id`)
VALUES (
		(SELECT id FROM cells WHERE name = "Hs 578T"), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1227")
); 


INSERT INTO `cells_datasets` ( `cell_id`, `dataset_id`)
VALUES (
		(SELECT id FROM cells WHERE name = "Hs 578T"), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1228")
); 


INSERT INTO `cells_datasets` ( `cell_id`, `dataset_id`)
VALUES (
		(SELECT id FROM cells WHERE name = "Hs 578T"), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1226")
); 


INSERT INTO `cells_datasets` ( `cell_id`, `dataset_id`)
VALUES (
		(SELECT id FROM cells WHERE name = "Hs 578T"), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1229")
); 


INSERT INTO `cells_datasets` ( `cell_id`, `dataset_id`)
VALUES (
		(SELECT id FROM cells WHERE name = "Hs 578T"), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1230")
); 


INSERT INTO `cells_datasets` ( `cell_id`, `dataset_id`)
VALUES (
		(SELECT id FROM cells WHERE name = "Hs 578T"), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1231")
); 


INSERT INTO `cells_datasets` ( `cell_id`, `dataset_id`)
VALUES (
		(SELECT id FROM cells WHERE name = "Hs 578T"), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1232")
); 


INSERT INTO `cells_datasets` ( `cell_id`, `dataset_id`)
VALUES (
		(SELECT id FROM cells WHERE name = "COLO 858"), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1242")
); 


INSERT INTO `cells_datasets` ( `cell_id`, `dataset_id`)
VALUES (
		(SELECT id FROM cells WHERE name = "Hs 578T"), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1250")
); 


INSERT INTO `cells_datasets` ( `cell_id`, `dataset_id`)
VALUES (
		(SELECT id FROM cells WHERE name = "Hs 578T"), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1252")
); 


INSERT INTO `cells_datasets` ( `cell_id`, `dataset_id`)
VALUES (
		(SELECT id FROM cells WHERE name = "Hs 578T"), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1251")
); 


INSERT INTO `cells_datasets` ( `cell_id`, `dataset_id`)
VALUES (
		(SELECT id FROM cells WHERE name = "Hs 578T"), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1253")
); 


INSERT INTO `cells_datasets` ( `cell_id`, `dataset_id`)
VALUES (
		(SELECT id FROM cells WHERE name = "Hs 578T"), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1254")
); 


INSERT INTO `cells_datasets` ( `cell_id`, `dataset_id`)
VALUES (
		(SELECT id FROM cells WHERE name = "Hs 578T"), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1257")
); 


INSERT INTO `cells_datasets` ( `cell_id`, `dataset_id`)
VALUES (
		(SELECT id FROM cells WHERE name = "Hs 578T"), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1255")
); 


INSERT INTO `cells_datasets` ( `cell_id`, `dataset_id`)
VALUES (
		(SELECT id FROM cells WHERE name = "Hs 578T"), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1261")
); 


INSERT INTO `cells_datasets` ( `cell_id`, `dataset_id`)
VALUES (
		(SELECT id FROM cells WHERE name = "Hs 578T"), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1256")
); 


INSERT INTO `cells_datasets` ( `cell_id`, `dataset_id`)
VALUES (
		(SELECT id FROM cells WHERE name = "Hs 578T"), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1203")
); 


INSERT INTO `cells_datasets` ( `cell_id`, `dataset_id`)
VALUES (
		(SELECT id FROM cells WHERE name = "COLO 858"), 
		(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1209")
); 


/* ---- INSERT missing small molecules to database */



INSERT INTO `small_molecules` (`name`, `broad_id`, `source`, `lincs_id`, 
`smiles_parent`, `molecular_mass`, `bioactivity_information`, `inchi_parent`,
`pubchem_cid`, `created_at`, `updated_at`)
	VALUES
	('5z-7-oxozeaenol', '', 'EMD', 'LSM-6712', 'C[C@H]1C/C=C\C(=O)[C@H]([C@H](C/C=C/C2=CC(=CC(=C2C(=O)O1)O)OC)O)O', '362.14', '',
	 'InChI=1S/C19H22O7/c1-11-5-3-7-14(20)18(23)15(21)8-4-6-12-9-13(25-2)10-16(22)17(12)19(24)26-11/h3-4,6-7,9-11,15,18,21-23H,5,8H2,1-2H3/b6-4+,7-3-/t11-,15-,18+/m0/s1',
	  '68810458', '2016/07/02 18:33:05', '2016/07/02 18:33:05'); 
	

INSERT INTO `small_molecules` (`name`, `broad_id`, `source`, `lincs_id`, 
`smiles_parent`, `molecular_mass`, `bioactivity_information`, `inchi_parent`,
`pubchem_cid`, `created_at`, `updated_at`)
	VALUES
	('JNK-IN-8', '', 'EMD ', 'LSM-36360', 'CC1=C(C=CC(=C1)NC(=O)C2=CC(=CC=C2)NC(=O)C=CCN(C)C)NC3=NC=CC(=N3)C4=CN=CC=C4', '507.24', '',
	 'InChI=1S/C29H29N7O2/c1-20-17-24(11-12-25(20)34-29-31-15-13-26(35-29)22-8-5-14-30-19-22)33-28(38)21-7-4-9-23(18-21)32-27(37)10-6-16-36(2)3/h4-15,17-19H,16H2,1-3H3,(H,32,37)(H,33,38)(H,31,34,35)',
	  '76516568', '2016/07/02 18:33:05', '2016/07/02 18:33:05'); 
	

INSERT INTO `small_molecules` (`name`, `broad_id`, `source`, `lincs_id`, 
`smiles_parent`, `molecular_mass`, `bioactivity_information`, `inchi_parent`,
`pubchem_cid`, `created_at`, `updated_at`)
	VALUES
	('(Z)-4-Hydroxytamoxifen', '', 'Sigma-Aldrich', 'LSM-6361', 'CCC(=C(C1=CC=CC=C1)C2=CC=C(C=C2)OCCN(C)C)C3=CC=C(C=C3)O', '387.22', '',
	 'InChI=1S/C26H29NO2/c1-4-25(20-10-14-23(28)15-11-20)26(21-8-6-5-7-9-21)22-12-16-24(17-13-22)29-19-18-27(2)3/h5-17,28H,4,18-19H2,1-3H3',
	  '53770298', '2016/07/02 18:33:05', '2016/07/02 18:33:05'); 
	

INSERT INTO `small_molecules` (`name`, `broad_id`, `source`, `lincs_id`, 
`smiles_parent`, `molecular_mass`, `bioactivity_information`, `inchi_parent`,
`pubchem_cid`, `created_at`, `updated_at`)
	VALUES
	('Ixabepilone', '', 'BroadT LINCS', 'LSM-6350', 'C[C@H]1CCC[C@@]2([C@@H](O2)C[C@H](NC(=O)C[C@@H](C(C(=O)[C@@H]([C@H]1O)C)(C)C)O)C(=CC3=CSC(=N3)C)C)C', '506.28', '',
	 'InChI=1S/C27H42N2O5S/c1-15-9-8-10-27(7)22(34-27)12-20(16(2)11-19-14-35-18(4)28-19)29-23(31)13-21(30)26(5,6)25(33)17(3)24(15)32/h11,14-15,17,20-22,24,30,32H,8-10,12-13H2,1-7H3,(H,29,31)/t15-,17+,20-,21
-,22-,24-,27+/m0/s1', '216344', '2016/07/02 18:33:05', '2016/07/02 18:33:05'); 
	

INSERT INTO `small_molecules` (`name`, `broad_id`, `source`, `lincs_id`, 
`smiles_parent`, `molecular_mass`, `bioactivity_information`, `inchi_parent`,
`pubchem_cid`, `created_at`, `updated_at`)
	VALUES
	('HG-6-64-01', '', 'Nathanael Gray (DFCI)', 'LSM-6015', 'CC1=CC=C(C(NC2=CC=C(CN3CCN(CC)CC3)C(C(F)(F)F)=C2)=O)C=C1/C=C/C4=C(OC)C5=C(NC=C5)N=C4', '577.27', '',
	 'InChI=1S/C32H34F3N5O2/c1-4-39-13-15-40(16-14-39)20-25-9-10-26(18-28(25)32(33,34)35)38-31(41)23-6-5-21(2)22(17-23)7-8-24-19-37-30-27(11-12-36-30)29(24)42-3/h5-12,17-19H,4,13-16,20H2,1-3H3,(H,36,37)(H,3 8,41)/b8-7+',
	  '', '2016/07/02 18:33:05', '2016/07/02 18:33:05'); 
	

INSERT INTO `small_molecules` (`name`, `broad_id`, `source`, `lincs_id`, 
`smiles_parent`, `molecular_mass`, `bioactivity_information`, `inchi_parent`,
`pubchem_cid`, `created_at`, `updated_at`)
	VALUES
	('XMD16-144', '', 'Nathanael Gray (DFCI)', 'LSM-6299', 'O=C1C2=C(C=CC=C2)N(C)C3=NC(NC4=CC(NC(/C=C/CN(C)C)=O)=CC=C4)=NC=C3N1C', '457.22', '',
	 'InChI=1S/C25H27N7O2/c1-30(2)14-8-13-22(33)27-17-9-7-10-18(15-17)28-25-26-16-21-23(29-25)31(3)20-12-6-5-11-19(20)24(34)32(21)4/h5-13,15-16H,14H2,1-4H3,(H,27,33)(H,26,28,29)/b13-8+',
	  '', '2016/07/02 18:33:05', '2016/07/02 18:33:05'); 
	

INSERT INTO `small_molecules` (`name`, `broad_id`, `source`, `lincs_id`, 
`smiles_parent`, `molecular_mass`, `bioactivity_information`, `inchi_parent`,
`pubchem_cid`, `created_at`, `updated_at`)
	VALUES
	('JNK-IN-11', 'BRD-K74596421', 'BroadT LINCS', 'LSM-36372', 'C1=CC(=CC=C1C2=NN=C(O2)SCC#CCOC(=O)C3=CC=C(C=C3)F)F', '386.374', '',
	 'InChI=1S/C19H12F2N2O3S/c20-15-7-3-13(4-8-15)17-22-23-19(26-17)27-12-2-1-11-25-18(24)14-5-9-16(21)10-6-14/h3-10H,11-12H2',
	  '', '2016/07/02 18:33:05', '2016/07/02 18:33:05'); 
	



/* Small_molecules to datasets */


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES (
	(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-6712"), 
	(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1224")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES (
	(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-36360"), 
	(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1224")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES (
	(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-36373"), 
	(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1224")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES (
	(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-36360"), 
	(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1223")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES (
	(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-36372"), 
	(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1223")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES (
	(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-6712"), 
	(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1225")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES (
	(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-36360"), 
	(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1225")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES (
	(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-36373"), 
	(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1225")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES (
	(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-6361"), 
	(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1106")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES (
	(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-6350"), 
	(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1106")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES (
	(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-36360"), 
	(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1210")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES (
	(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-42776"), 
	(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1222")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES (
	(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-5982"), 
	(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1227")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES (
	(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-5245"), 
	(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1227")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES (
	(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-6015"), 
	(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1227")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES (
	(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-5674"), 
	(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1227")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES (
	(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-1031"), 
	(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1227")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES (
	(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-5982"), 
	(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1228")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES (
	(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-5245"), 
	(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1228")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES (
	(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-6015"), 
	(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1228")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES (
	(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-5674"), 
	(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1228")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES (
	(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-1031"), 
	(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1228")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES (
	(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-5982"), 
	(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1226")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES (
	(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-5245"), 
	(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1226")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES (
	(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-6015"), 
	(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1226")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES (
	(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-5674"), 
	(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1226")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES (
	(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-1031"), 
	(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1226")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES (
	(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-5982"), 
	(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1229")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES (
	(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-5245"), 
	(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1229")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES (
	(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-6015"), 
	(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1229")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES (
	(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-5674"), 
	(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1229")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES (
	(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-1031"), 
	(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1229")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES (
	(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-5982"), 
	(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1230")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES (
	(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-5245"), 
	(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1230")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES (
	(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-6015"), 
	(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1230")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES (
	(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-5674"), 
	(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1230")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES (
	(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-1031"), 
	(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1230")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES (
	(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-5982"), 
	(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1231")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES (
	(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-5245"), 
	(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1231")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES (
	(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-6015"), 
	(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1231")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES (
	(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-5674"), 
	(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1231")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES (
	(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-1031"), 
	(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1231")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES (
	(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-5982"), 
	(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1232")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES (
	(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-5245"), 
	(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1232")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES (
	(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-6015"), 
	(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1232")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES (
	(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-5674"), 
	(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1232")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES (
	(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-1031"), 
	(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1232")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES (
	(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-5742"), 
	(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1250")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES (
	(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-6015"), 
	(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1250")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES (
	(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-6299"), 
	(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1250")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES (
	(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-6685"), 
	(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1250")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES (
	(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-5742"), 
	(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1252")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES (
	(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-6015"), 
	(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1252")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES (
	(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-6299"), 
	(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1252")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES (
	(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-6685"), 
	(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1252")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES (
	(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-5742"), 
	(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1251")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES (
	(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-6015"), 
	(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1251")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES (
	(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-6299"), 
	(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1251")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES (
	(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-6685"), 
	(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1251")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES (
	(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-5742"), 
	(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1253")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES (
	(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-6015"), 
	(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1253")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES (
	(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-6299"), 
	(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1253")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES (
	(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-6685"), 
	(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1253")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES (
	(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-5742"), 
	(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1254")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES (
	(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-6015"), 
	(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1254")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES (
	(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-6299"), 
	(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1254")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES (
	(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-6685"), 
	(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1254")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES (
	(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-6015"), 
	(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1257")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES (
	(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-6299"), 
	(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1257")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES (
	(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-5742"), 
	(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1257")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES (
	(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-5742"), 
	(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1255")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES (
	(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-6015"), 
	(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1255")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES (
	(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-6299"), 
	(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1255")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES (
	(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-6685"), 
	(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1255")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES (
	(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-1102"), 
	(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1256")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES (
	(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-5870"), 
	(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1256")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES (
	(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-6348"), 
	(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1256")
); 


INSERT INTO `small_molecules_datasets` ( `small_molecule_id`, `dataset_id`)
VALUES (
	(SELECT id FROM small_molecules WHERE `lincs_id` = "LSM-5690"), 
	(SELECT id FROM datasets WHERE `lincs_id` = "LDS-1256")
); 


/* ---- Link fix
wrong source links for LDS-1251 and LDS-1250 
*/

UPDATE `datasets` SET `source_link` = 'http://lincs.hms.harvard.edu/db/datasets/20245/' 
	WHERE `lincs_id`='LDS-1250' ;


UPDATE `datasets` SET `source_link` = 'http://lincs.hms.harvard.edu/db/datasets/20246/' 
	WHERE `lincs_id`='LDS-1251' ;