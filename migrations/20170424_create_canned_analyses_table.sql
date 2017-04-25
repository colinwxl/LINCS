CREATE TABLE `canned_analyses` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `subtitle` varchar(255) NOT NULL,
  `grouping` varchar(255) NOT NULL,
  `subgrouping` varchar(255) DEFAULT NULL,
  `dataset_accessions_list` varchar(255) NOT NULL,
  `tool_name` int(10) NOT NULL,
  `tool_url` int(10) NOT NULL,
  `canned_analysis_url` varchar(255) NOT NULL,
  `canned_analysis_description` varchar(255) NOT NULL,
  `metadata` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
)
