CREATE TABLE `canned_analyses` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `subtitle` varchar(255) NOT NULL,
  `grouping` varchar(255) NOT NULL,
  `subgrouping` varchar(255) DEFAULT NULL,
  `dataset_accessions_list` varchar(255) NOT NULL,
  `ca_image_url` varchar(255) DEFAULT NULL,
  `tool_name` varchar(255) NOT NULL,
  `tool_url` varchar(255) DEFAULT NULL,
  `canned_analysis_url` varchar(255) NOT NULL,
  `canned_analysis_description` text NOT NULL,
  `metadata` varchar(255) DEFAULT NULL,
  `count_click` int(10) DEFAULT 0,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
)
