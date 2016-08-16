
ALTER TABLE `tools`
DROP COLUMN `web_based_ui` ;

ALTER TABLE `tools`
DROP COLUMN `processed_l1000_data` ;

ALTER TABLE `tools`
DROP COLUMN `enrichment_analysis` ;

ALTER TABLE `tools`
DROP COLUMN `api` ;

ALTER TABLE `tools`
DROP COLUMN `matlab_python_script` ;

ALTER TABLE `tools`
DROP COLUMN `feature_access` ;

ALTER TABLE `tools`
DROP COLUMN `feature_search` ;

ALTER TABLE `tools`
DROP COLUMN `feature_navigation` ;

ALTER TABLE `tools`
DROP COLUMN `feature_integration` ;

ALTER TABLE `tools`
DROP COLUMN `feature_visualization` ;

ALTER TABLE `tools`
DROP COLUMN `feature_download` ;

ALTER TABLE `tools`
DROP COLUMN `feature_leverage_ontology` ;

ALTER TABLE `tools`
DROP COLUMN `feature_image_analysis` ;


ALTER TABLE `tools`
ADD `transcript` INTEGER DEFAULT 0;

ALTER TABLE `tools`
ADD `protein` INTEGER DEFAULT 0;

ALTER TABLE `tools`
ADD `cell_state` INTEGER DEFAULT 0;

ALTER TABLE `tools`
ADD `morphology` INTEGER DEFAULT 0;

ALTER TABLE `tools`
ADD `drug_binding` INTEGER DEFAULT 0;

ALTER TABLE `tools`
ADD `formatting` INTEGER DEFAULT 0;

ALTER TABLE `tools`
ADD `storage` INTEGER DEFAULT 0;

ALTER TABLE `tools`
ADD `visualization` INTEGER DEFAULT 0;

ALTER TABLE `tools`
ADD `analysis` INTEGER DEFAULT 0;

ALTER TABLE `tools`
ADD `integration` INTEGER DEFAULT 0;

ALTER TABLE `tools`
ADD `signature_generation` INTEGER DEFAULT 0;

ALTER TABLE `tools`
ADD `network_analysis` INTEGER DEFAULT 0;

ALTER TABLE `tools`
ADD `data_documentation` INTEGER DEFAULT 0;

ALTER TABLE `tools`
ADD `api` INTEGER DEFAULT 0;

ALTER TABLE `tools`
ADD `command_line` INTEGER DEFAULT 0;

ALTER TABLE `tools`
ADD `database` INTEGER DEFAULT 0;

ALTER TABLE `tools`
ADD `ontology` INTEGER DEFAULT 0;

ALTER TABLE `tools`
ADD `open_source` INTEGER DEFAULT 0;

ALTER TABLE `tools`
ADD `search_engine` INTEGER DEFAULT 0;

ALTER TABLE `tools`
ADD `web_based` INTEGER DEFAULT 0;

ALTER TABLE `tools`
ADD `scripting` INTEGER DEFAULT 0;

ALTER TABLE `tools`
ADD `provenance` INTEGER DEFAULT 0;

ALTER TABLE `tools`
ADD `documentation` INTEGER DEFAULT 0;

ALTER TABLE `tools`
ADD `versioning` INTEGER DEFAULT 0;


UPDATE `tools`
SET `name` = 'HMS LINCS Database', `transcript` = '1', `protein` = '1', `cell_state` = '1', `morphology` = '1', `drug_binding` = '1', `formatting` = '1', `storage` = '1', `visualization` = '0', `analysis` = '0', `integration` = '0', `signature_generation` = '0', `network_analysis` = '0', `data_documentation` = '1', `api` = '1', `command_line` = '0', `database` = '1', `ontology` = '1', `open_source` = '1', `search_engine` = '1', `web_based` = '1', `scripting` = '0', `provenance` = '1', `documentation` = '1', `versioning` = '1'
WHERE name = 'HMS LINCS Database' ;

UPDATE `tools`
SET `name` = 'ImageRail', `transcript` = '1', `protein` = '1', `cell_state` = '1', `morphology` = '1', `drug_binding` = '0', `formatting` = '1', `storage` = '1', `visualization` = '0', `analysis` = '0', `integration` = '0', `signature_generation` = '0', `network_analysis` = '0', `data_documentation` = '1', `api` = '0', `command_line` = '0', `database` = '0', `ontology` = '0', `open_source` = '1', `search_engine` = '0', `web_based` = '0', `scripting` = '0', `provenance` = '1', `documentation` = '1', `versioning` = '0'
WHERE name = 'ImageRail' ;

UPDATE `tools`
SET `name` = 'OMERO', `transcript` = '1', `protein` = '1', `cell_state` = '1', `morphology` = '1', `drug_binding` = '0', `formatting` = '1', `storage` = '1', `visualization` = '1', `analysis` = '0', `integration` = '0', `signature_generation` = '0', `network_analysis` = '0', `data_documentation` = '1', `api` = '1', `command_line` = '0', `database` = '1', `ontology` = '1', `open_source` = '1', `search_engine` = '1', `web_based` = '1', `scripting` = '0', `provenance` = '1', `documentation` = '1', `versioning` = '0'
WHERE name = 'OMERO' ;

UPDATE `tools`
SET `name` = 'GR Browser', `transcript` = '0', `protein` = '0', `cell_state` = '1', `morphology` = '0', `drug_binding` = '0', `formatting` = '1', `storage` = '0', `visualization` = '1', `analysis` = '1', `integration` = '1', `signature_generation` = '1', `network_analysis` = '0', `data_documentation` = '0', `api` = '0', `command_line` = '0', `database` = '0', `ontology` = '0', `open_source` = '1', `search_engine` = '0', `web_based` = '1', `scripting` = '1', `provenance` = '1', `documentation` = '1', `versioning` = '0'
WHERE name = 'GR Browser' ;

UPDATE `tools`
SET `name` = 'Drug Response Browser', `transcript` = '0', `protein` = '0', `cell_state` = '1', `morphology` = '0', `drug_binding` = '0', `formatting` = '0', `storage` = '0', `visualization` = '1', `analysis` = '0', `integration` = '0', `signature_generation` = '1', `network_analysis` = '0', `data_documentation` = '0', `api` = '0', `command_line` = '0', `database` = '0', `ontology` = '0', `open_source` = '1', `search_engine` = '0', `web_based` = '1', `scripting` = '0', `provenance` = '1', `documentation` = '1', `versioning` = '0'
WHERE name = 'Drug Response Browser' ;

UPDATE `tools`
SET `name` = 'RTK Profile Browser', `transcript` = '0', `protein` = '1', `cell_state` = '0', `morphology` = '0', `drug_binding` = '0', `formatting` = '0', `storage` = '0', `visualization` = '1', `analysis` = '0', `integration` = '0', `signature_generation` = '1', `network_analysis` = '0', `data_documentation` = '0', `api` = '0', `command_line` = '0', `database` = '0', `ontology` = '0', `open_source` = '1', `search_engine` = '0', `web_based` = '1', `scripting` = '0', `provenance` = '1', `documentation` = '1', `versioning` = '0'
WHERE name = 'RTK Profile Browser' ;

UPDATE `tools`
SET `name` = 'TieDIE', `transcript` = '1', `protein` = '0', `cell_state` = '0', `morphology` = '0', `drug_binding` = '0', `formatting` = '0', `storage` = '0', `visualization` = '1', `analysis` = '1', `integration` = '1', `signature_generation` = '1', `network_analysis` = '1', `data_documentation` = '0', `api` = '0', `command_line` = '0', `database` = '0', `ontology` = '0', `open_source` = '1', `search_engine` = '0', `web_based` = '0', `scripting` = '0', `provenance` = '1', `documentation` = '1', `versioning` = '0'
WHERE name = 'TieDIE' ;

UPDATE `tools`
SET `name` = 'Drug-Pathway Browser', `transcript` = '0', `protein` = '1', `cell_state` = '1', `morphology` = '0', `drug_binding` = '1', `formatting` = '0', `storage` = '0', `visualization` = '1', `analysis` = '0', `integration` = '1', `signature_generation` = '0', `network_analysis` = '1', `data_documentation` = '0', `api` = '0', `command_line` = '0', `database` = '0', `ontology` = '0', `open_source` = '1', `search_engine` = '0', `web_based` = '1', `scripting` = '0', `provenance` = '1', `documentation` = '1', `versioning` = '0'
WHERE name = 'Drug-Pathway Browser' ;

UPDATE `tools`
SET `name` = 'GF Response Browser', `transcript` = '0', `protein` = '1', `cell_state` = '1', `morphology` = '0', `drug_binding` = '0', `formatting` = '0', `storage` = '0', `visualization` = '1', `analysis` = '0', `integration` = '0', `signature_generation` = '1', `network_analysis` = '0', `data_documentation` = '0', `api` = '0', `command_line` = '0', `database` = '0', `ontology` = '0', `open_source` = '1', `search_engine` = '0', `web_based` = '1', `scripting` = '0', `provenance` = '1', `documentation` = '1', `versioning` = '0'
WHERE name = 'GF Response Browser' ;

UPDATE `tools`
SET `name` = 'Adaptation Browser', `transcript` = '0', `protein` = '1', `cell_state` = '0', `morphology` = '0', `drug_binding` = '0', `formatting` = '0', `storage` = '0', `visualization` = '1', `analysis` = '0', `integration` = '1', `signature_generation` = '1', `network_analysis` = '1', `data_documentation` = '0', `api` = '0', `command_line` = '0', `database` = '0', `ontology` = '0', `open_source` = '1', `search_engine` = '0', `web_based` = '1', `scripting` = '0', `provenance` = '1', `documentation` = '1', `versioning` = '0'
WHERE name = 'Adaptation Browser' ;

UPDATE `tools`
SET `name` = 'Cell Dynamics Browser', `transcript` = '0', `protein` = '1', `cell_state` = '0', `morphology` = '0', `drug_binding` = '0', `formatting` = '0', `storage` = '0', `visualization` = '1', `analysis` = '0', `integration` = '0', `signature_generation` = '0', `network_analysis` = '0', `data_documentation` = '0', `api` = '0', `command_line` = '0', `database` = '0', `ontology` = '0', `open_source` = '1', `search_engine` = '0', `web_based` = '1', `scripting` = '0', `provenance` = '1', `documentation` = '1', `versioning` = '0'
WHERE name = 'Cell Dynamics Browser' ;

UPDATE `tools`
SET `name` = 'LINCS Data Portal', `transcript` = '1', `protein` = '1', `cell_state` = '1', `morphology` = '1', `drug_binding` = '1', `formatting` = '1', `storage` = '1', `visualization` = '1', `analysis` = '0', `integration` = '1', `signature_generation` = '0', `network_analysis` = '0', `data_documentation` = '1', `api` = '1', `command_line` = '0', `database` = '1', `ontology` = '1', `open_source` = '0', `search_engine` = '1', `web_based` = '1', `scripting` = '1', `provenance` = '1', `documentation` = '1', `versioning` = '1'
WHERE name = 'LINCS Data Portal' ;

UPDATE `tools`
SET `name` = 'iLINCS ', `transcript` = '1', `protein` = '1', `cell_state` = '0', `morphology` = '0', `drug_binding` = '0', `formatting` = '0', `storage` = '0', `visualization` = '1', `analysis` = '1', `integration` = '1', `signature_generation` = '1', `network_analysis` = '1', `data_documentation` = '0', `api` = '1', `command_line` = '0', `database` = '1', `ontology` = '1', `open_source` = '0', `search_engine` = '1', `web_based` = '1', `scripting` = '0', `provenance` = '0', `documentation` = '0', `versioning` = '0'
WHERE name = 'iLINCS ' ;

UPDATE `tools`
SET `name` = 'L1000CDS2', `transcript` = '1', `protein` = '0', `cell_state` = '0', `morphology` = '0', `drug_binding` = '0', `formatting` = '0', `storage` = '1', `visualization` = '1', `analysis` = '1', `integration` = '1', `signature_generation` = '1', `network_analysis` = '1', `data_documentation` = '0', `api` = '1', `command_line` = '0', `database` = '1', `ontology` = '0', `open_source` = '1', `search_engine` = '1', `web_based` = '1', `scripting` = '0', `provenance` = '0', `documentation` = '0', `versioning` = '0'
WHERE name = 'L1000CDS2' ;

UPDATE `tools`
SET `name` = 'piLINCS ', `transcript` = '0', `protein` = '1', `cell_state` = '0', `morphology` = '0', `drug_binding` = '0', `formatting` = '1', `storage` = '1', `visualization` = '1', `analysis` = '1', `integration` = '0', `signature_generation` = '1', `network_analysis` = '0', `data_documentation` = '0', `api` = '1', `command_line` = '0', `database` = '1', `ontology` = '0', `open_source` = '0', `search_engine` = '1', `web_based` = '1', `scripting` = '0', `provenance` = '0', `documentation` = '0', `versioning` = '1'
WHERE name = 'piLINCS ' ;

UPDATE `tools`
SET `name` = 'MEPmosaic', `transcript` = '0', `protein` = '0', `cell_state` = '1', `morphology` = '1', `drug_binding` = '0', `formatting` = '0', `storage` = '0', `visualization` = '1', `analysis` = '1', `integration` = '1', `signature_generation` = '1', `network_analysis` = '0', `data_documentation` = '0', `api` = '0', `command_line` = '0', `database` = '0', `ontology` = '0', `open_source` = '0', `search_engine` = '1', `web_based` = '1', `scripting` = '0', `provenance` = '0', `documentation` = '0', `versioning` = '0'
WHERE name = 'MEPmosaic' ;

UPDATE `tools`
SET `name` = 'Lincscloud Apps', `transcript` = '1', `protein` = '1', `cell_state` = '0', `morphology` = '0', `drug_binding` = '0', `formatting` = '1', `storage` = '1', `visualization` = '1', `analysis` = '1', `integration` = '1', `signature_generation` = '1', `network_analysis` = '1', `data_documentation` = '1', `api` = '1', `command_line` = '0', `database` = '1', `ontology` = '0', `open_source` = '0', `search_engine` = '1', `web_based` = '1', `scripting` = '0', `provenance` = '0', `documentation` = '1', `versioning` = '1'
WHERE name = 'Lincscloud Apps' ;

UPDATE `tools`
SET `name` = 'Harmonizome', `transcript` = '1', `protein` = '1', `cell_state` = '1', `morphology` = '1', `drug_binding` = '1', `formatting` = '1', `storage` = '1', `visualization` = '1', `analysis` = '1', `integration` = '1', `signature_generation` = '1', `network_analysis` = '1', `data_documentation` = '1', `api` = '1', `command_line` = '0', `database` = '1', `ontology` = '1', `open_source` = '1', `search_engine` = '1', `web_based` = '1', `scripting` = '1', `provenance` = '1', `documentation` = '1', `versioning` = '1'
WHERE name = 'Harmonizome' ;

UPDATE `tools`
SET `name` = 'Enrichr', `transcript` = '1', `protein` = '1', `cell_state` = '1', `morphology` = '0', `drug_binding` = '0', `formatting` = '1', `storage` = '1', `visualization` = '1', `analysis` = '1', `integration` = '1', `signature_generation` = '1', `network_analysis` = '1', `data_documentation` = '0', `api` = '1', `command_line` = '0', `database` = '1', `ontology` = '1', `open_source` = '1', `search_engine` = '1', `web_based` = '1', `scripting` = '0', `provenance` = '0', `documentation` = '1', `versioning` = '0'
WHERE name = 'Enrichr' ;

UPDATE `tools`
SET `name` = 'GEN3VA', `transcript` = '1', `protein` = '0', `cell_state` = '0', `morphology` = '0', `drug_binding` = '0', `formatting` = '0', `storage` = '0', `visualization` = '1', `analysis` = '1', `integration` = '1', `signature_generation` = '1', `network_analysis` = '1', `data_documentation` = '0', `api` = '1', `command_line` = '0', `database` = '1', `ontology` = '1', `open_source` = '0', `search_engine` = '1', `web_based` = '1', `scripting` = '0', `provenance` = '0', `documentation` = '1', `versioning` = '0'
WHERE name = 'GEN3VA' ;

UPDATE `tools`
SET `name` = 'CREEDS', `transcript` = '1', `protein` = '0', `cell_state` = '0', `morphology` = '0', `drug_binding` = '0', `formatting` = '1', `storage` = '1', `visualization` = '1', `analysis` = '1', `integration` = '1', `signature_generation` = '1', `network_analysis` = '1', `data_documentation` = '1', `api` = '1', `command_line` = '0', `database` = '1', `ontology` = '1', `open_source` = '0', `search_engine` = '1', `web_based` = '1', `scripting` = '0', `provenance` = '0', `documentation` = '1', `versioning` = '0'
WHERE name = 'CREEDS' ;

UPDATE `tools`
SET `name` = 'SEP L1000', `transcript` = '1', `protein` = '0', `cell_state` = '0', `morphology` = '1', `drug_binding` = '1', `formatting` = '1', `storage` = '0', `visualization` = '1', `analysis` = '1', `integration` = '1', `signature_generation` = '1', `network_analysis` = '1', `data_documentation` = '1', `api` = '1', `command_line` = '0', `database` = '1', `ontology` = '0', `open_source` = '0', `search_engine` = '1', `web_based` = '1', `scripting` = '0', `provenance` = '0', `documentation` = '1', `versioning` = '0'
WHERE name = 'SEP L1000' ;

UPDATE `tools`
SET `name` = 'Slicr', `transcript` = '1', `protein` = '0', `cell_state` = '0', `morphology` = '0', `drug_binding` = '0', `formatting` = '1', `storage` = '1', `visualization` = '1', `analysis` = '1', `integration` = '1', `signature_generation` = '1', `network_analysis` = '0', `data_documentation` = '0', `api` = '1', `command_line` = '0', `database` = '1', `ontology` = '0', `open_source` = '0', `search_engine` = '1', `web_based` = '1', `scripting` = '0', `provenance` = '0', `documentation` = '0', `versioning` = '1'
WHERE name = 'Slicr' ;

UPDATE `tools`
SET `name` = 'AChroMap', `transcript` = '1', `protein` = '1', `cell_state` = '1', `morphology` = '0', `drug_binding` = '0', `formatting` = '0', `storage` = '0', `visualization` = '1', `analysis` = '1', `integration` = '1', `signature_generation` = '0', `network_analysis` = '1', `data_documentation` = '0', `api` = '1', `command_line` = '0', `database` = '1', `ontology` = '0', `open_source` = '0', `search_engine` = '1', `web_based` = '1', `scripting` = '0', `provenance` = '0', `documentation` = '1', `versioning` = '0'
WHERE name = 'AChroMap' ;

UPDATE `tools`
SET `name` = 'DToxS Portal', `transcript` = '1', `protein` = '1', `cell_state` = '1', `morphology` = '1', `drug_binding` = '1', `formatting` = '1', `storage` = '1', `visualization` = '1', `analysis` = '1', `integration` = '1', `signature_generation` = '1', `network_analysis` = '1', `data_documentation` = '1', `api` = '0', `command_line` = '0', `database` = '1', `ontology` = '0', `open_source` = '0', `search_engine` = '1', `web_based` = '1', `scripting` = '0', `provenance` = '1', `documentation` = '1', `versioning` = '1'
WHERE name = 'DToxS Portal' ;

UPDATE `tools`
SET `name` = 'Panorama', `transcript` = '0', `protein` = '1', `cell_state` = '0', `morphology` = '0', `drug_binding` = '0', `formatting` = '1', `storage` = '1', `visualization` = '1', `analysis` = '1', `integration` = '1', `signature_generation` = '1', `network_analysis` = '0', `data_documentation` = '1', `api` = '1', `command_line` = '0', `database` = '1', `ontology` = '0', `open_source` = '1', `search_engine` = '1', `web_based` = '1', `scripting` = '0', `provenance` = '0', `documentation` = '1', `versioning` = '0'
WHERE name = 'Panorama' ;

UPDATE `tools`
SET `name` = 'Phosphosite Plus', `transcript` = '0', `protein` = '1', `cell_state` = '0', `morphology` = '0', `drug_binding` = '0', `formatting` = '1', `storage` = '1', `visualization` = '1', `analysis` = '1', `integration` = '1', `signature_generation` = '0', `network_analysis` = '1', `data_documentation` = '1', `api` = '0', `command_line` = '0', `database` = '1', `ontology` = '0', `open_source` = '0', `search_engine` = '1', `web_based` = '1', `scripting` = '0', `provenance` = '0', `documentation` = '1', `versioning` = '1'
WHERE name = 'Phosphosite Plus' ;

UPDATE `tools`
SET `name` = 'GEO2Enrichr', `transcript` = '1', `protein` = '0', `cell_state` = '0', `morphology` = '0', `drug_binding` = '0', `formatting` = '1', `storage` = '1', `visualization` = '1', `analysis` = '1', `integration` = '1', `signature_generation` = '1', `network_analysis` = '1', `data_documentation` = '1', `api` = '1', `command_line` = '0', `database` = '1', `ontology` = '0', `open_source` = '1', `search_engine` = '0', `web_based` = '1', `scripting` = '0', `provenance` = '0', `documentation` = '1', `versioning` = '0'
WHERE name = 'GEO2Enrichr' ;

UPDATE `tools`
SET `name` = 'LINCS Canvas Browser', `transcript` = '1', `protein` = '0', `cell_state` = '0', `morphology` = '0', `drug_binding` = '0', `formatting` = '1', `storage` = '0', `visualization` = '1', `analysis` = '1', `integration` = '1', `signature_generation` = '1', `network_analysis` = '1', `data_documentation` = '0', `api` = '0', `command_line` = '0', `database` = '0', `ontology` = '0', `open_source` = '1', `search_engine` = '1', `web_based` = '1', `scripting` = '0', `provenance` = '0', `documentation` = '1', `versioning` = '1'
WHERE name = 'LINCS Canvas Browser' ;

UPDATE `tools`
SET `name` = 'Drug/Cell-line Browser', `transcript` = '0', `protein` = '0', `cell_state` = '1', `morphology` = '0', `drug_binding` = '1', `formatting` = '1', `storage` = '0', `visualization` = '1', `analysis` = '1', `integration` = '1', `signature_generation` = '0', `network_analysis` = '0', `data_documentation` = '0', `api` = '0', `command_line` = '0', `database` = '1', `ontology` = '0', `open_source` = '0', `search_engine` = '1', `web_based` = '1', `scripting` = '0', `provenance` = '0', `documentation` = '1', `versioning` = '0'
WHERE name = 'Drug/Cell-line Browser' ;

UPDATE `tools`
SET `name` = 'LINCS Data Explorer', `transcript` = '1', `protein` = '1', `cell_state` = '1', `morphology` = '1', `drug_binding` = '0', `formatting` = '1', `storage` = '0', `visualization` = '1', `analysis` = '0', `integration` = '0', `signature_generation` = '0', `network_analysis` = '0', `data_documentation` = '0', `api` = '0', `command_line` = '0', `database` = '0', `ontology` = '0', `open_source` = '0', `search_engine` = '0', `web_based` = '1', `scripting` = '0', `provenance` = '0', `documentation` = '1', `versioning` = '0'
WHERE name = 'LINCS Data Explorer' ;

UPDATE `tools`
SET `name` = 'PAEA', `transcript` = '1', `protein` = '1', `cell_state` = '0', `morphology` = '0', `drug_binding` = '0', `formatting` = '0', `storage` = '0', `visualization` = '1', `analysis` = '1', `integration` = '1', `signature_generation` = '0', `network_analysis` = '1', `data_documentation` = '0', `api` = '0', `command_line` = '0', `database` = '0', `ontology` = '0', `open_source` = '0', `search_engine` = '0', `web_based` = '1', `scripting` = '0', `provenance` = '0', `documentation` = '1', `versioning` = '0'
WHERE name = 'PAEA' ;

UPDATE `tools`
SET `name` = 'GUIdock', `transcript` = '0', `protein` = '0', `cell_state` = '0', `morphology` = '0', `drug_binding` = '0', `formatting` = '0', `storage` = '0', `visualization` = '0', `analysis` = '0', `integration` = '0', `signature_generation` = '0', `network_analysis` = '0', `data_documentation` = '0', `api` = '0', `command_line` = '0', `database` = '0', `ontology` = '0', `open_source` = '0', `search_engine` = '0', `web_based` = '1', `scripting` = '0', `provenance` = '0', `documentation` = '1', `versioning` = '0'
WHERE name = 'GUIdock' ;

UPDATE `tools`
SET `name` = 'Network2Canvas', `transcript` = '1', `protein` = '1', `cell_state` = '0', `morphology` = '0', `drug_binding` = '1', `formatting` = '0', `storage` = '0', `visualization` = '1', `analysis` = '1', `integration` = '1', `signature_generation` = '0', `network_analysis` = '1', `data_documentation` = '0', `api` = '0', `command_line` = '0', `database` = '1', `ontology` = '1', `open_source` = '0', `search_engine` = '0', `web_based` = '1', `scripting` = '0', `provenance` = '0', `documentation` = '1', `versioning` = '0'
WHERE name = 'Network2Canvas' ;
