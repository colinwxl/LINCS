-- MySQL dump 10.13  Distrib 5.6.21, for osx10.10 (x86_64)
--
-- Host: amp.pharm.mssm.edu    Database: lincs
-- ------------------------------------------------------
-- Server version	5.5.5-10.0.19-MariaDB-1~wheezy-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `authors`
--

DROP TABLE IF EXISTS `authors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `authors` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=391 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `authors_publications`
--

DROP TABLE IF EXISTS `authors_publications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `authors_publications` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `author_id` int(10) unsigned NOT NULL,
  `publication_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `authors_publications_author_id_foreign` (`author_id`),
  KEY `authors_publications_publication_id_foreign` (`publication_id`),
  CONSTRAINT `authors_publications_author_id_foreign` FOREIGN KEY (`author_id`) REFERENCES `authors` (`id`),
  CONSTRAINT `authors_publications_publication_id_foreign` FOREIGN KEY (`publication_id`) REFERENCES `publications` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=516 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `cells`
--

DROP TABLE IF EXISTS `cells`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cells` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `lincs_id` varchar(20) DEFAULT NULL,
  `source` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=180 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `cells_datasets`
--

DROP TABLE IF EXISTS `cells_datasets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cells_datasets` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `cell_id` int(10) unsigned NOT NULL,
  `dataset_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `cells_datasets_cell_id_foreign` (`cell_id`),
  KEY `cells_datasets_dataset_id_foreign` (`dataset_id`),
  CONSTRAINT `cells_datasets_cell_id_foreign` FOREIGN KEY (`cell_id`) REFERENCES `cells` (`id`),
  CONSTRAINT `cells_datasets_dataset_id_foreign` FOREIGN KEY (`dataset_id`) REFERENCES `datasets` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=518 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `cells_diseases`
--

DROP TABLE IF EXISTS `cells_diseases`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cells_diseases` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `cell_id` int(10) unsigned NOT NULL,
  `disease_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `cells_diseases_cell_id_foreign` (`cell_id`),
  KEY `cells_diseases_disease_id_foreign` (`disease_id`),
  CONSTRAINT `cells_diseases_cell_id_foreign` FOREIGN KEY (`cell_id`) REFERENCES `cells` (`id`),
  CONSTRAINT `cells_diseases_disease_id_foreign` FOREIGN KEY (`disease_id`) REFERENCES `diseases` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=178 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `cells_organs_tissues`
--

DROP TABLE IF EXISTS `cells_organs_tissues`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cells_organs_tissues` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `cell_id` int(10) unsigned NOT NULL,
  `organ_tissue_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `cells_organs_tissues_cell_id_foreign` (`cell_id`),
  KEY `cells_organs_tissues_organ_tissue_id_foreign` (`organ_tissue_id`),
  CONSTRAINT `cells_organs_tissues_cell_id_foreign` FOREIGN KEY (`cell_id`) REFERENCES `cells` (`id`),
  CONSTRAINT `cells_organs_tissues_organ_tissue_id_foreign` FOREIGN KEY (`organ_tissue_id`) REFERENCES `organs_tissues` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `cells_tissues`
--

DROP TABLE IF EXISTS `cells_tissues`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cells_tissues` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `cell_id` int(10) unsigned NOT NULL,
  `tissue_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `cells_tissues_cell_id_foreign` (`cell_id`),
  KEY `cells_tissues_tissue_id_foreign` (`tissue_id`),
  CONSTRAINT `cells_tissues_cell_id_foreign` FOREIGN KEY (`cell_id`) REFERENCES `cells` (`id`),
  CONSTRAINT `cells_tissues_tissue_id_foreign` FOREIGN KEY (`tissue_id`) REFERENCES `tissues` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=180 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `centers`
--

DROP TABLE IF EXISTS `centers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `centers` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` mediumtext NOT NULL,
  `logo_url` varchar(255) NOT NULL,
  `website` text NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `centers_name_unique` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `comp_tools`
--

DROP TABLE IF EXISTS `comp_tools`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comp_tools` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` mediumtext,
  `url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `comp_tools_publications`
--

DROP TABLE IF EXISTS `comp_tools_publications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comp_tools_publications` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `comp_tool_id` int(10) unsigned NOT NULL,
  `publication_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `comp_tools_publications_comp_tool_id_foreign` (`comp_tool_id`),
  KEY `comp_tools_publications_publication_id_foreign` (`publication_id`),
  CONSTRAINT `comp_tools_publications_comp_tool_id_foreign` FOREIGN KEY (`comp_tool_id`) REFERENCES `comp_tools` (`id`),
  CONSTRAINT `comp_tools_publications_publication_id_foreign` FOREIGN KEY (`publication_id`) REFERENCES `publications` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `datasets`
--

DROP TABLE IF EXISTS `datasets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `datasets` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `description` mediumtext,
  `full_assay_name` text,
  `center_id` int(10) unsigned NOT NULL,
  `assay` varchar(255) NOT NULL,
  `method` varchar(255) NOT NULL,
  `classification` varchar(255) NOT NULL,
  `physical_detection` varchar(255) NOT NULL,
  `lincs_id` varchar(20) DEFAULT NULL,
  `date_retrieved` datetime DEFAULT NULL,
  `clicks` int(11) NOT NULL DEFAULT '0',
  `source_link` text,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `datasets_center_id_foreign` (`center_id`),
  CONSTRAINT `datasets_center_id_foreign` FOREIGN KEY (`center_id`) REFERENCES `centers` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=71 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `diseases`
--

DROP TABLE IF EXISTS `diseases`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `diseases` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=56 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `diseases_datasets`
--

DROP TABLE IF EXISTS `diseases_datasets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `diseases_datasets` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `disease_id` int(10) unsigned NOT NULL,
  `dataset_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `diseases_datasets_disease_id_foreign` (`disease_id`),
  KEY `diseases_datasets_dataset_id_foreign` (`dataset_id`),
  CONSTRAINT `diseases_datasets_dataset_id_foreign` FOREIGN KEY (`dataset_id`) REFERENCES `datasets` (`id`),
  CONSTRAINT `diseases_datasets_disease_id_foreign` FOREIGN KEY (`disease_id`) REFERENCES `diseases` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=159 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `funding_opportunities`
--

DROP TABLE IF EXISTS `funding_opportunities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `funding_opportunities` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` mediumtext NOT NULL,
  `date` datetime NOT NULL,
  `release_date` datetime DEFAULT NULL,
  `open_date` datetime DEFAULT NULL,
  `due_date` datetime DEFAULT NULL,
  `review_date` datetime DEFAULT NULL,
  `announced_date` datetime DEFAULT NULL,
  `start_date` datetime DEFAULT NULL,
  `key_links` text,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `organs_tissues`
--

DROP TABLE IF EXISTS `organs_tissues`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `organs_tissues` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=691 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `publications`
--

DROP TABLE IF EXISTS `publications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `publications` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `journal_name` varchar(255) DEFAULT NULL,
  `show_at_home_order` int(11) DEFAULT NULL,
  `abstract` mediumtext NOT NULL,
  `resource_links` text,
  `pp_pages` varchar(255) DEFAULT NULL,
  `issue` varchar(255) DEFAULT NULL,
  `volume` varchar(255) DEFAULT NULL,
  `pmc_id` varchar(30) DEFAULT NULL,
  `pm_id` varchar(30) DEFAULT NULL,
  `doi` varchar(50) DEFAULT NULL,
  `other_link` text,
  `year_published` int(11) NOT NULL,
  `article_name` text,
  `assay_development` tinyint(1) NOT NULL DEFAULT '0',
  `data_analysis` tinyint(1) NOT NULL DEFAULT '0',
  `data_generation` tinyint(1) NOT NULL DEFAULT '0',
  `data_integration` tinyint(1) NOT NULL DEFAULT '0',
  `data_standards` tinyint(1) NOT NULL DEFAULT '0',
  `signature_generation` tinyint(1) NOT NULL DEFAULT '0',
  `software_development` tinyint(1) NOT NULL DEFAULT '0',
  `review` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `publications_pmc_id_unique` (`pmc_id`),
  UNIQUE KEY `publications_pm_id_unique` (`pm_id`),
  UNIQUE KEY `publications_doi_unique` (`doi`)
) ENGINE=InnoDB AUTO_INCREMENT=58 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `small_molecules`
--

DROP TABLE IF EXISTS `small_molecules`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `small_molecules` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `source` varchar(255) DEFAULT NULL,
  `lincs_id` varchar(20) NOT NULL,
  `smiles_parent` text,
  `molecular_mass` varchar(20) DEFAULT NULL,
  `bioactivity_information` text,
  `inchi_parent` text,
  `pubchem_cid` varchar(20) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `small_molecules_lincs_id_unique` (`lincs_id`)
) ENGINE=InnoDB AUTO_INCREMENT=43240 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `small_molecules_datasets`
--

DROP TABLE IF EXISTS `small_molecules_datasets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `small_molecules_datasets` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `small_molecule_id` int(10) unsigned NOT NULL,
  `dataset_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `small_molecules_datasets_small_molecule_id_foreign` (`small_molecule_id`),
  KEY `small_molecules_datasets_dataset_id_foreign` (`dataset_id`),
  CONSTRAINT `small_molecules_datasets_dataset_id_foreign` FOREIGN KEY (`dataset_id`) REFERENCES `datasets` (`id`),
  CONSTRAINT `small_molecules_datasets_small_molecule_id_foreign` FOREIGN KEY (`small_molecule_id`) REFERENCES `small_molecules` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=67825 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `symposia`
--

DROP TABLE IF EXISTS `symposia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `symposia` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `sub_title` varchar(255) DEFAULT NULL,
  `description` mediumtext,
  `location` text,
  `start_date` datetime NOT NULL,
  `end_date` datetime DEFAULT NULL,
  `key_links` text,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `synonyms`
--

DROP TABLE IF EXISTS `synonyms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `synonyms` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `cell_id` int(10) unsigned NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `synonyms_cell_id_foreign` (`cell_id`),
  CONSTRAINT `synonyms_cell_id_foreign` FOREIGN KEY (`cell_id`) REFERENCES `cells` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tissues`
--

DROP TABLE IF EXISTS `tissues`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tissues` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tissues_datasets`
--

DROP TABLE IF EXISTS `tissues_datasets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tissues_datasets` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `tissue_id` int(10) unsigned NOT NULL,
  `dataset_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `tissues_datasets_tissue_id_foreign` (`tissue_id`),
  KEY `tissues_datasets_dataset_id_foreign` (`dataset_id`),
  CONSTRAINT `tissues_datasets_dataset_id_foreign` FOREIGN KEY (`dataset_id`) REFERENCES `datasets` (`id`),
  CONSTRAINT `tissues_datasets_tissue_id_foreign` FOREIGN KEY (`tissue_id`) REFERENCES `tissues` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=93 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tools`
--

DROP TABLE IF EXISTS `tools`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tools` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `center_id` int(10) unsigned NOT NULL,
  `description` mediumtext,
  `url` varchar(255) DEFAULT NULL,
  `icon_url` varchar(255) DEFAULT NULL,
  `home_order` int(11) DEFAULT NULL,
  `order` int(11) NOT NULL,
  `web_based_ui` tinyint(1) NOT NULL DEFAULT '0',
  `processed_l1000_data` tinyint(1) NOT NULL DEFAULT '0',
  `enrichment_analysis` tinyint(1) NOT NULL DEFAULT '0',
  `api` tinyint(1) NOT NULL DEFAULT '0',
  `matlab_python_script` tinyint(1) NOT NULL DEFAULT '0',
  `feature_access` tinyint(1) NOT NULL DEFAULT '0',
  `feature_search` tinyint(1) NOT NULL DEFAULT '0',
  `feature_navigation` tinyint(1) NOT NULL DEFAULT '0',
  `feature_integration` tinyint(1) NOT NULL DEFAULT '0',
  `feature_visualization` tinyint(1) NOT NULL DEFAULT '0',
  `feature_download` tinyint(1) NOT NULL DEFAULT '0',
  `feature_leverage_ontology` tinyint(1) NOT NULL DEFAULT '0',
  `feature_image_analysis` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `tools_url_unique` (`url`),
  KEY `tools_center_id_foreign` (`center_id`),
  CONSTRAINT `tools_center_id_foreign` FOREIGN KEY (`center_id`) REFERENCES `centers` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tools_publications`
--

DROP TABLE IF EXISTS `tools_publications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tools_publications` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `tool_id` int(10) unsigned NOT NULL,
  `publication_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `tools_publications_tool_id_foreign` (`tool_id`),
  KEY `tools_publications_publication_id_foreign` (`publication_id`),
  CONSTRAINT `tools_publications_publication_id_foreign` FOREIGN KEY (`publication_id`) REFERENCES `publications` (`id`),
  CONSTRAINT `tools_publications_tool_id_foreign` FOREIGN KEY (`tool_id`) REFERENCES `tools` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `webinars`
--

DROP TABLE IF EXISTS `webinars`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `webinars` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `presenter_name` varchar(255) DEFAULT NULL,
  `presenter_affiliation` text,
  `presenter_url` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `date` datetime NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `workflows`
--

DROP TABLE IF EXISTS `workflows`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `workflows` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `question` text NOT NULL,
  `type` varchar(255) NOT NULL,
  `exists` tinyint(1) NOT NULL DEFAULT '0',
  `email` varchar(255) DEFAULT NULL,
  `url` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `workshops`
--

DROP TABLE IF EXISTS `workshops`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `workshops` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` mediumtext NOT NULL,
  `location` text,
  `start_date` datetime NOT NULL,
  `end_date` datetime DEFAULT NULL,
  `key_links` text,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

--
-- Table structure for table `authors`
--

DROP TABLE IF EXISTS `citations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `citations` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `title` varchar(255)  DEFAULT NULL,
  `year` int(11)  DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=391 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-05-31 15:29:14
