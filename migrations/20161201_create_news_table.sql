CREATE TABLE `news` (
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
