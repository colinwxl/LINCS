CREATE TABLE `announcements` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` text,
  `presenter` varchar(255) DEFAULT NULL,
  `webinar` boolean DEFAULT NULL,
  `course` boolean DEFAULT NULL,
  `training_program` boolean DEFAULT NULL,
  `date` datetime NOT NULL,
  `link` varchar(255) DEFAULT NULL,

  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
