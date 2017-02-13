CREATE TABLE `announcements` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` text,
  `presenter` varchar(255) DEFAULT NULL,
  `eDSR` boolean DEFAULT NULL,
  `webinar` boolean DEFAULT NULL,
  `course` boolean DEFAULT NULL,
  `training_program` boolean DEFAULT NULL,
  `new_update` boolean DEFAULT NULL,
  `custom` varchar(255) DEFAULT NULL,
  `event_date` datetime DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `link_text` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `announcements` (title, description, presenter, eDSR, webinar, course, training_program, new_update, custom, event_date, link, link_text)
VALUES ('Construction, Characterization and Validation of Multiscale Gene Networks in Cancer', NULL, 'Bin Zhang PhD, Icahn School of Medicine at Mount Sinai', NULL, '1', NULL, NULL, NULL, NULL, '2016-06-28 00:00:00', NULL, NULL);

INSERT INTO `announcements` (title, description, presenter, eDSR, webinar, course, training_program, new_update, custom, event_date, link, link_text)
VALUES ('Editorial in Science Translational Medicine', 'Mohammed AlQuraishi and Peter Sorger from the HMS LINCS Center make the case for improving accessibility and usability of published experimental data of all types.', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-05-18 00:00:00', 'http://www.ncbi.nlm.nih.gov/pubmed/27194726', 'Read More');

INSERT INTO `announcements` (title, description, presenter, eDSR, webinar, course, training_program, new_update, custom, event_date, link, link_text)
VALUES ('Connectivity Map Challenge', 'The LINCS Center for Transcriptomics, in partnership with the Crowd Innovation Lab at Harvard Business School, is launching their first challenge, "Infer the Transcriptome".', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-07-27 00:00:00', 'http://crowdsourcing.topcoder.com/cmap', 'Register');

INSERT INTO `announcements` (title, description, presenter, eDSR, webinar, course, training_program, new_update, custom, event_date, link, link_text)
VALUES ('New Release for Data Standards', 'The Data Standards section of this website has been new_updated to reflect the most recent standards releases (version dated 5-13-2016) in LINCS Production Phase 2.', NULL, NULL, NULL, NULL, NULL, '1', NULL, '2016-05-13 00:00:00', 'http://lincsproject.org/LINCS/data/standards', 'Read More');

INSERT INTO `announcements` (title, description, presenter, eDSR, webinar, course, training_program, new_update, custom, event_date, link, link_text)
VALUES ('Connectivity Map Challenge 1', 'The LINCS Center for Transcriptomics completed their first crowdsourcing challenge, "Infer the Transcriptome". Stay tuned for details about the upcoming Connectivity Map Challenge 2.', NULL, NULL, NULL, NULL, NULL, '1', NULL, '2016-07-26 00:00:00', 'http://lincsproject.org/LINCS/community/overview', 'Read More');

INSERT INTO `announcements` (title, description, presenter, eDSR, webinar, course, training_program, new_update, custom, event_date, link, link_text)
VALUES ('Mark your calendars for the upcoming LINCS Consortium Face-to-Face Meeting at the NIH Campus in Bethesda, MD.', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'LINCS Consortium Meeting', '2016-9-19 00:00:00', 'https://twitter.com/hashtag/LINCSDATA?src=hash', '#LINCSDATA');

INSERT INTO `announcements` (title, description, presenter, eDSR, webinar, course, training_program, new_update, custom, event_date, link, link_text)
VALUES ('The LINCS F2F Meeting brought together the LINCS DSGCs, the BD2K-LINCS DCIC, NIH extramural staff, and external LINCS collaborators.', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'LINCS Consortium Meeting', '2016-9-19 00:00:00', 'http://www.lincsproject.org/LINCS/community/consortium-meetings', 'Meeting Highlights');

INSERT INTO `announcements` (title, description, presenter, eDSR, webinar, course, training_program, new_update, custom, event_date, link, link_text)
VALUES ('Mark your calendars for the upcoming session of the BD2K-LINCS Big Data Science MOOC on Coursera organized by the BD2K-LINCS DCIC', NULL, NULL, NULL, NULL, '1', NULL, NULL, NULL, '2016-10-03 00:00:00', 'https://www.coursera.org/learn/bd2k-lincs', 'Enroll Now');

INSERT INTO `announcements` (title, description, presenter, eDSR, webinar, course, training_program, new_update, custom, event_date, link, link_text)
VALUES ('Unravelling Hairballs: Biological Pathways From Protein Modification Cluster Networks', NULL, 'Mark Grimes PhD, University of Montana', '1', NULL, NULL, NULL, NULL, NULL, '2016-10-04 00:00:00', 'http://lincsproject.org/LINCS/community/webinars', 'Details');

INSERT INTO `announcements` (title, description, presenter, eDSR, webinar, course, training_program, new_update, custom, event_date, link, link_text)
VALUES ('Cell Line Ontology-based Standardization, Integration and Analysis of LINCS Cell Lines', NULL, 'Yongqun "Oliver" He DVM, PhD, University of Michigan Medical School', '1', '1', NULL, NULL, NULL, NULL, '2016-11-15 00:00:00', 'http://lincsproject.org/LINCS/community/webinars', 'Details');

INSERT INTO `announcements` (title, description, presenter, eDSR, webinar, course, training_program, new_update, custom, event_date, link, link_text)
VALUES ('Docker Pipelines for RNASeq Alignment and Analyses', NULL, 'Ling-Hong Hung PhD, University of Washington', '1', '1', NULL, NULL, NULL, NULL, '2016-11-22 00:00:00', 'http://lincsproject.org/LINCS/community/webinars', 'Details');

INSERT INTO `announcements` (title, description, presenter, eDSR, webinar, course, training_program, new_update, custom, event_date, link, link_text)
VALUES ('Dynamic Logic-Based Models Integrating Cardiac Signaling Networks and Cellular Phenotypes', NULL, 'Jeff Saucerman PhD, University of Virginia', '1', '1', NULL, NULL, NULL, NULL, '2016-12-06 00:00:00', 'http://lincsproject.org/LINCS/community/webinars', 'Details');

INSERT INTO `announcements` (title, description, presenter, eDSR, webinar, course, training_program, new_update, custom, event_date, link, link_text)
VALUES ('Integration of Phosphorylation Knowledge Networks with LINCS Omics Data for Cancer Drug Analysis', NULL, 'Karen Ross PhD & Cathy Wu PhD, University of Delaware', '1', '1', NULL, NULL, NULL, NULL, NULL, 'http://lincsproject.org/LINCS/community/webinars', 'Details');

INSERT INTO `announcements` (title, description, presenter, eDSR, webinar, course, training_program, new_update, custom, event_date, link, link_text)
VALUES ('Combining Forward and Reverse Engineering to Understand Complex Fractional Killing', NULL, 'Tongli Zhang PhD, University of Cincinnati', NULL, '1', NULL, NULL, NULL, NULL, '2017-04-25 00:00:00', 'http://lincsproject.org/LINCS/community/webinars', 'Details');

INSERT INTO `announcements` (title, description, presenter, eDSR, webinar, course, training_program, new_update, custom, event_date, link, link_text)
VALUES ('Big Data Science with the BD2K-LINCS Data Coordination and Integration Center', 'MOOC on Coursera', NULL, NULL, NULL, '1', NULL, NULL, NULL, '2017-01-23 00:00:00', 'http://www.coursera.org/learn/bd2k-lincs', 'Details');

INSERT INTO `announcements` (title, description, presenter, eDSR, webinar, course, training_program, new_update, custom, event_date, link, link_text)
VALUES ('Big Data Science with the BD2K-LINCS Data Coordination and Integration Center MOOC on Coursera', NULL, NULL, NULL, NULL, '1', NULL, NULL, NULL, '2017-02-20 00:00:00', 'http://www.coursera.org/learn/bd2k-lincs', 'Enroll Now');

INSERT INTO `announcements` (title, description, presenter, eDSR, webinar, course, training_program, new_update, custom, event_date, link, link_text)
VALUES ('Identifying New Antiepileptic Drugs Through Genomics-Based Drug Repurposing', NULL, 'Nasir Mirza PhD, University of Liverpool', NULL, '1', NULL, NULL, NULL, NULL, '2017-2-28 00:00:00', 'http://lincsproject.org/LINCS/community/webinars', 'Details');

INSERT INTO `announcements` (title, description, presenter, eDSR, webinar, course, training_program, new_update, custom, event_date, link, link_text)
VALUES ('Applications due for BD2K-LINCS DCIC Summer Research Training Program in Biomedical Big Data Science', NULL, NULL, NULL, NULL, NULL, '1', NULL, NULL, '2017-03-01 00:00:00', 'http://www.lincsproject.org/LINCS/community/overview', 'Details');
