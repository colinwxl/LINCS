import React from 'react';
import { Link } from 'react-router';

import styles from './NewsView.scss';
import PageBanner from 'components/PageBanner';
// Images
import exploreHmsImg from './explore-hms-lincs.jpg';
import quickStartImg from './quick-start-lincs.png';
import neurolincsImg from './neurolincs.png';
import triconImg from './tricon2016.png';
import neuroOutreachImg from './neuro-outreach.jpg';
import sbdssImg from './sbdss.jpg';
import slicrImg from './slicr-news.png';
import ldpImg from './ldp-news.png';
import enrichrImg from './enrichr.png';
import natureCoverImg from './nature-cover.png';
import dcicScreenshot from './lincs-dcic-screenshot.jpg';
import dcicLogo from './lincs-dcic-logo.jpg';
import dcicMooc from './dcic-mooc.png';
import chemblImg from './chembl.png';

export default function NewsView() {
  return (
    <div className={styles.wrapper}>
      <PageBanner
        title="LINCS News"
        subTitle="Stay up to date with the latest news regarding the LINCS Consortium"
      />
      <div className="container">
        <div className="row">
          <div className={`col-xs-12 col-xl-9 ${styles.news}`}>
            <div className={styles['news-group']}>
              <h2>HMS LINCS Center Updates</h2>
              <p className="text-muted"><em>Posted on April 6th, 2016 by Sherry Jenkins</em></p>
              <p>
                <a href="http://lincs.hms.harvard.edu/db/datasets/20260/" target="_blank">
                Dose response metrics</a> were released for the drug combinations tested in the
                LINCS Pilot Phase Joint Project and analyzed
                by <a href="http://lincs.hms.harvard.edu/db/datasets/20260/" target="_blank">
                imaging by the HMS LINCS Center</a> and
                by <a href="http://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE70138" target="_blank">
                L1000 from the Broad LINCS Center</a>.
              </p>
              <div className={styles['img-wrap']}>
                <img
                  className={`${styles['img-border']}`}
                  src={exploreHmsImg}
                  alt="Explore HMS LINCS"
                />
              </div>
              <p>
                Three datasets were released that assess the effects of cell plating density
                on the calculation of dose-response metrics for 6 breast cancer cell lines
                treated with 12 different kinase inhibitors.
                See <a href="http://lincs.hms.harvard.edu/db/datasets/20258/" target="_blank">
                HMS LINCS Dataset #20258</a> for a comparison of metrics based on standard,
                cell count-based calculations and metrics based on using newly-derived,
                growth rate-independent calculations.
              </p>
            </div>
            <div className={styles['news-group']}>
              <h2>New Feature For LINCS Tools: ‘Quick Start With LINCS’</h2>
              <p className="text-muted"><em>Posted on March 28th, 2016 by Sherry Jenkins</em></p>
              <img
                src={quickStartImg}
                alt="Quick Start With LINCS"
              />
              <p>
                The <a href="http://lincs-dcic.org/#/">‘Quick Start with LINCS‘</a> analysis tool
                feature enables users to search signatures (L1000CDS2), access data
                (LINCS Data Portal), analyze data (iLINCS), search transcriptomics (Slicr) and
                visualize proteomics (piLINCS).
              </p>
            </div>
            <div className={styles['news-group']}>
              <h2>NeuroLINCS Center Releases New Tool: AChroMap</h2>
              <p className="text-muted"><em>Posted on March 28th, 2016 by Sherry Jenkins</em></p>
              <p className="clearfix">
                <img
                  className={styles['inline-img-left']}
                  src={neurolincsImg}
                  alt="NeuroLINCS"
                />
                <a href="http://www.neurolincs.org/resources/AChroMap" target="_blank">
                AChroMap</a> (accessible chromatin mapper of transcriptional regulators) is
                a data integration tool for transcriptomic and epigenomic data. This tool
                generates a list of enriched motifs in open chromatin regions (as assayed
                by ATAC-seq or DNAseH) for a given set genes. The foreground list of genes
                are differentially expressed or highly expressed genes and the background
                list of genes are the rest of the genes in the transcriptomic experiment.
              </p>
            </div>
            <div className={styles['news-group']}>
              <h2>LINCS Outreach Meeting 2016 - Video Archive</h2>
              <p className="text-muted"><em>Posted on March 23rd, 2016 by Sherry Jenkins</em></p>
              <div className={styles.youtube}>
                <iframe
                  src="https://www.youtube.com/embed/MwJoLfc_LuM?list=PLQw7KTnzkpXdpO1WMpW8fJeriqZEuFR1i"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
            </div>
            <div className={styles['news-group']}>
              <h2>Molecular Medicine Tri-Conference 2016</h2>
              <p className="text-muted"><em>Posted on February 5th, 2016 by Sherry Jenkins</em></p>
              <p>
                On <strong>March 8, 2016</strong>, as part of the BD2K-LINCS DCIC’s community
                outreach efforts, Avi Ma’ayan PhD and Stephan Schurer PhD will present in the
                Informatics channel at the
                <strong> Molecular Medicine Tri-Conference 2016</strong> in San Francisco, CA.
              </p>
              <div className={styles['img-wrap']}>
                <img
                  className={`${styles['img-border']}`}
                  src={triconImg}
                  alt="Tri-Con 2016"
                />
              </div>
              <div className={styles['info-block']}>
                <h5>Bioinformatics for Big Data</h5>
                <p>
                  <strong>
                    L1000CDS2: LINCS L1000 Characteristic Direction Signature Search Engine Predicts
                    Kenpaullone as a Potential Therapeutic for Ebola
                  </strong>
                </p>
                <p><em>Avi Ma’ayan, PhD, Icahn School of Medicine at Mount Sinai</em></p>
                <a href="http://www.triconference.com/Bioinformatics-Big-Data/" target="_blank">
                  Learn more
                </a>
              </div>
              <div className={styles['info-block']}>
                <h5>
                  Integrated Informatics Driving Translational Research and Precision Medicine
                </h5>
                <p>
                  <strong>
                    Rational Data-Driven Development of Novel Poly-Pharmacology Small Molecules
                  </strong>
                </p>
                <p>
                  <em>Stephan Schurer, PhD, Miller School of Medicine, University of Miami</em>
                </p>
                <a href="http://www.triconference.com/Integrated-Pharma-Informatics/" target="_blank">
                  Learn more
                </a>
              </div>
            </div>
            <div className={styles['news-group']}>
              <h2>LINCS Outreach Meeting 2016</h2>
              <p className="text-muted"><em>Posted on February 4th, 2016 by Sherry Jenkins</em></p>
              <div className="clearfix">
                <img
                  className={styles['inline-img-right']}
                  src={neuroOutreachImg}
                  alt="LINCS Outreach"
                />
                <p className={styles.center}>
                  <a href="https://meetings.ninds.nih.gov/Home/General/13365" target="_blank">
                    General Info
                  </a>
                  {' | '}
                  <a href="https://meetings.ninds.nih.gov/Home/Agenda/13365" target="_blank">
                    Agenda
                  </a>
                  {' | '}
                  <a href="https://meetings.ninds.nih.gov/Home/Registration/13365" target="_blank">
                    Registration
                  </a>
                  {' | '}
                  <a href="https://meetings.ninds.nih.gov/Home/General/13365" target="_blank">
                    General Info
                  </a>
                </p>
                <p className={styles.justify}>
                  The Library of Integrated Network-based Cellular Signatures (LINCS) program
                  aims to create a network-based understanding of biology by cataloging changes
                  induced by exogenous perturbations on cellular processes through the lens of
                  molecular and morphological profiling signatures. By generating, integrating,
                  and publicly releasing data and tools that indicate how cells respond to
                  various genetic and environmental stressors, the LINCS project will help us
                  gain a more detailed understanding of cell pathways and aid efforts to develop
                  therapies that might restore perturbed pathways and networks to their normal
                  states. Come join us at our first ever Outreach Meeting to see examples of
                  LINCS in action and learn how to effectively work with these unprecedented
                  datasets.
                </p>
              </div>
              <h5>Confirmed Speakers:</h5>
              <ul>
                <li>Walter Koroshetz, NINDS</li>
                <li>Zak Kohane, Harvard Medical School</li>
                <li>Henry Rodriguez, NCI</li>
                <li>Jane Roskams, Allen Institute for Brain Science</li>
                <li>Fred Gage, The Salk Institute</li>
                <li>Gustavo Stolovitzky, IBM</li>
                <li>Phil Nelson, Google</li>
                <li>Trey Ideker, UCSD</li>
              </ul>
              <p>
                Meet investigators from
                the <Link to="/centers/data-and-signature-generating-centers">
                LINCS Data and Signature Generation Centers</Link> and
                the <Link to="/centers/dcic">
                BD2K-LINCS Data Coordination and Integration Center</Link> to
                establish collaborations!
              </p>
              <p>
                Present your work at our poster session! A limited number
                of <a href="https://meetings.ninds.nih.gov/Home/Tab1/13365" target="_blank">
                travel fellowships</a> are available.
              </p>
            </div>
            <div className={styles['news-group']}>
              <h2>Systems Biology Data Science Symposium 2016</h2>
              <p className="text-muted"><em>Posted on January 25th, 2016 by Sherry Jenkins</em></p>
              <p>
                On January 19-20, 2016, the first
                annual <a href="http://lincs-dcic.org/#/2016-data-science-symposium" target="_blank">
                Systems Biology Data Science Symposium (SBDSS 2016)</a> at the University
                of Miami brought together the <a href="http://lincs-dcic.org/#/" target="_blank">
                BD2K-LINCS Data Coordination and Integration Center</a>, local researchers, and
                outside experts who apply or develop computational systems biology resources.
                In presentations, a poster reception and several working sessions, the DCIC
                showcased <a href="http://lincs-dcic.org/#/resources" target="_blank">
                tools/resources</a> and <a href="http://lincs-dcic.org/#/about#nav" target="_blank">
                scientific projects</a>, connected developers with users, and initiated
                new collaborations.
              </p>
              <div className={styles['img-wrap']}>
                <img
                  src={sbdssImg}
                  alt="SBDSS 2016"
                />
              </div>
              <h5>Day 1 Presentations:</h5>
              <div className={styles.pres}>
                <p className={styles.italic}>
                  Keynote Address: Overcoming Cancer Cell Heterogeneity through
                  Epigenetic Therapies
                </p>
                <p>Speaker: Stephen D. Nimer MD, University of Miami</p>
              </div>
              <div className={styles.pres}>
                <p className={styles.italic}>
                  The NIH BD2K Initiative: How it Hopes to Impact Biomedical Research
                </p>
                <p>
                  Ajay Pillai, PhD, Program Director – National Human Genome Research
                  Institute (NHGRI), NIH Program
                </p>
              </div>
              <div className={styles.pres}>
                <p className={styles.italic}>
                  From Big Data to Knowledge – Experiences in Rare Disease Genomics
                </p>
                <p>Stephan Zuchner, MD, PhD, University of Miami</p>
              </div>
              <div className={styles.pres}>
                <p className={styles.italic}>LINCS Computational Pipelines for Drug Discovery</p>
                <p>
                  Avi Ma’ayan, PhD, Icahn School of Medicine at Mount Sinai | BD2K-LINCS DCIC
                </p>
              </div>
              <div className={styles.pres}>
                <p className={styles.italic}>
                  Uncovering Perturbation Mode of Action with LINCS Data and Tools
                </p>
                <p>Mario Medvedovic, PhD, University of Cincinnati | BD2K-LINCS DCIC</p>
              </div>
              <div className={styles.pres}>
                <p className={styles.italic}>
                  L1K++: Fast and Accurate Pipeline for Processing L1000 Gene Expression Data
                </p>
                <p>Ka Yee Yeung, PhD, University of Washington</p>
              </div>
              <div className={styles.pres}>
                <p className={styles.italic}>Target Predictions using LINCS Perturbation Data</p>
                <p>Ziv Bar-Joseph, PhD, Carnegie Mellon University</p>
              </div>
              <div className={styles.pres}>
                <p className={styles.italic}>
                  Disease and Perturbagen Posttranslational Signatures across Multiple
                  Signaling Pathways in Lung Cancer Cell Lines: Analysis of TMT Data
                  Published in PhosphoSitePlus (PSP)
                </p>
                <p>Peter Hornbeck, PhD, Cell Signaling Technology</p>
              </div>
              <div className={styles.pres}>
                <p className={styles.italic}>
                  Building a Culture of Model-driven Drug Discovery at Merck
                </p>
                <p>Chris Waller, PhD, Merck & Co.</p>
              </div>
              <div className={styles.pres}>
                <p className={styles.italic}>
                  Modeling Spinal Cord Injury using Knowledge-Based and Data Driven Approaches
                </p>
                <p>Vance Lemmon, PhD, University of Miami</p>
              </div>
              <div className={styles.pres}>
                <p className={styles.italic}>
                  A Next Generation Connectivity Map: L1000 Platform and the First
                  1,000,000 Profiles
                </p>
                <p>Aravind Subramanian, PhD, Broad Institute of MIT & Harvard</p>
              </div>
              <div className={styles.pres}>
                <p className={styles.italic}>
                  Systematic Discovery of Drug Targets and Disease Indications using
                  Genetics and Connectivity Map
                </p>
                <p>Pankaj Agarwal, PhD, GlaxoSmithKline</p>
              </div>
              <p>
                <strong>
                  For information about the SBDSS 2016, including the full
                  agenda, <a href="http://lincs-dcic.org/#/2016-data-science-symposium" target="_blank">
                  click here</a>.
                </strong>
              </p>
            </div>
            <div className={styles['news-group']}>
              <h2>New LINCS L1000 Tool and Updated Release of LINCS Data Portal</h2>
              <p className="text-muted"><em>Posted on December 22nd, 2015 by Sherry Jenkins</em></p>
              <div className={styles['img-wrap']}>
                <img src={slicrImg} alt="Slicr" />
              </div>
              <p>
                The BD2K-LINCS DCIC recently released a new tool
                called <a href="http://amp.pharm.mssm.edu/Slicr" target="_blank">Slicr</a> which
                is a metadata search engine that searches for LINCS L1000 gene expression
                profiles and signatures matching user’s input parameters. It features download
                of selected search results as csv files in a zipped folder and visualization of
                selected results in a 3D scatter plot using PCA or MDS.
              </p>
              <div className={styles['img-wrap']}>
                <img src={ldpImg} alt="LINCS Data Portal" />
              </div>
              <p>
                The BD2K-LINCS DCIC recently released an updated version of
                the <a href="http://lincsportal.ccs.miami.edu/dcic-portal/">
                LINCS Data Portal</a> which provides a unified interface for searching
                LINCS dataset packages and reagents
              </p>
            </div>
            <div className={styles['news-group']}>
              <h2>New Release of Enrichr</h2>
              <p className="text-muted"><em>Posted on November 19th, 2015 by Sherry Jenkins</em></p>
              <p className="clearfix">
                <img
                  className={styles['inline-img-left']}
                  src={enrichrImg}
                  alt="Enrichr"
                />
                In this new release
                of <a href="http://amp.pharm.mssm.edu/Enrichr" target="_blank">Enrichr</a>, the
                BD2K-LINCS DCIC updated
                their <a href="http://amp.pharm.mssm.edu/lib/chea.jsp" target="_blank">
                ChIP-X Enrichment Analysis (ChEA)</a> database with gene sets extracted
                from forty new studies. The previous version is now in the ‘Legacy’
                category for provenance.
              </p>
              <p>
                They also added a new gene set library created from the database of Genotypes and
                Phenotypes (<a href="http://www.ncbi.nlm.nih.gov/gap" target="_blank">dbGaP</a>),
                as well as two new libraries with the up- and down-regulated genes from the L1000
                Connectivity Map chemical perturbation profiles from
                the <a href="http://www.lincscloud.org/" target="_blank">
                LINCS Center for Transcriptomics</a>. The previous version of the Connectivity
                Map Affymetrix data was renamed to Old CMAP.
              </p>
              <p>
                Please visit the <a href="http://amp.pharm.mssm.edu/Enrichr/#new" target="_blank">
                What’s New?</a> section of the Enrichr website for more details about
                the new release.
              </p>
            </div>
            <div className={styles['news-group']}>
              <h2>LINCS In The News</h2>
              <p className="text-muted"><em>Posted on November 19th, 2015 by Sherry Jenkins</em></p>
              <div className="clearfix">
                <img
                  className={`${styles['img-border']} ${styles['inline-img-left']}`}
                  src={natureCoverImg}
                  alt="Nature Outlook Cover"
                />
                <h5>Genetics: Big Hopes for Big Data</h5>
                <p>Jill U. Adam</p>
                <p>
                  Nature 527, S108–S109 (19 November 2015) doi:10.1038/527S108a.
                  Published online 18 November 2015
                </p>
                <p>
                  <a
                    href="http://www.nature.com/nature/journal/v527/n7578_supp/full/527S108a.html"
                    target="_blank"
                  >
                    Learn More
                  </a>
                </p>
              </div>
            </div>
            <div className={styles['news-group']}>
              <h2>
                BD2K-LINCS DCIC | Accepting Applications For 2016 Summer Research
                Training Program
              </h2>
              <p className="text-muted"><em>Posted on November 5th, 2015 by Sherry Jenkins</em></p>
              <p className="clearfix">
                <img
                  className={styles['inline-img-left']}
                  src={dcicScreenshot}
                  alt="BD2K-LINCS DCIC Summer Research Training Program"
                />
                The <a href="http://lincs-dcic.org/#/summer-research-app#nav" target="_blank">
                  BD2K-LINCS DCIC Summer Research Training Program in Biomedical Big
                Data Science</a> is a research intensive ten-week training program for
                undergraduate and graduate students interested in participating in cutting
                edge research projects aimed at solving data-intensive biomedical problems.
                <a href="http://lincs-dcic.org/#/summer-fellows-2015#nav" target="_blank">
                Summer fellows</a> conduct faculty-mentored independent research projects
                within laboratories affiliated with the Center in the following areas: data
                integration, dynamic data visualization, machine learning, data harmonization,
                computational drug discovery, metadata and APIs, knowledge modeling,
                Bayesian networks and statistical mining.
              </p>
              <p>
                In summer session 2016, our research training program will be offered at
                the three sites affiliated with our NIH-funded Center:
              </p>
              <p>
                <a href="http://icahn.mssm.edu/research/labs/maayan-laboratory" target="_blank">
                Ma’ayan Laboratory of Computational Systems Biology</a> | Icahn School of
                Medicine at Mount Sinai
                <br />
                <a href="http://eh3.uc.edu/" target="_blank">Medvedovic Laboratory for
                Statistical Genomics and Systems Biology</a> | University of Cincinnati
                <br />
                <a href="http://ccs.miami.edu/focus-area/drug-discovery/" target="_blank">
                Schurer Laboratory in the Center for Computational Science</a> |
                University of Miami
              </p>
              <p><strong>Application Deadline: March 4, 2016 at 11:00 PM ET</strong></p>
              <p>
                For the program description and information on how to
                apply, <a href="" target="_blank">click here</a>.
              </p>
            </div>
            <div className={styles['news-group']}>
              <h2>
                BD2K-LINCS DCIC | Systems Biology Data Science Symposium | January 19-20, 2016
              </h2>
              <p className="text-muted">
                <em>Posted on September 23rd, 2015 by Sherry Jenkins</em>
              </p>
              <p className="clearfix">
                <img
                  className={styles['inline-img-left']}
                  src={dcicLogo}
                  alt="BD2K-LINCS DCIC"
                />
                The <a href="http://lincs-dcic.org" target="_blank">BD2K-LINCS Data
                Coordination and Integration Center</a> and the University of Miami will
                host a
                two-day <a href="http://lincs-dcic.org/#/2016-data-science-symposium" target="_blank">
                Systems Biology Data Science Symposium</a> on <strong>January 19-20,
                2016</strong> at the University of Miami.
              </p>
              <p>
                On January 19-20, 2016, the first
                annual <a href="http://lincs-dcic.org/#/2016-data-science-symposium" target="_blank">
                Systems Biology Data Science Symposium (SBDSS 2016)</a> at the University
                of Miami will bring together the <a href="http://lincs-dcic.org/#/" target="_blank">
                BD2K-LINCS Data Coordination and Integration Center</a>, local researchers, and
                outside experts who apply or develop computational systems biology resources.
                In presentations, a poster reception and several working sessions, the DCIC
                showcased <a href="http://lincs-dcic.org/#/resources" target="_blank">
                tools/resources</a> and <a href="http://lincs-dcic.org/#/about#nav" target="_blank">
                scientific projects</a>, connected developers with users, and initiated
                new collaborations.
              </p>
              <p>
                <strong>Details: </strong>
                <a href="http://lincs-dcic.org/#/2016-data-science-symposium" target="_blank">
                  http://lincs-dcic.org/#/2016-data-science-symposium
                </a>
              </p>
            </div>
            <div className={styles['news-group']}>
              <h2>
                New Course: Big Data Science With the BD2K-LINCS Data Coordination and
                Integration Center
              </h2>
              <p className="text-muted">
                <em>Posted on September 17th, 2015 by Sherry Jenkins</em>
              </p>
              <p>
                The <a href="http://lincs-dcic.org" target="_blank">BD2K-LINCS Data
                Coordination and Integration Center (DCIC)</a> launched this MOOC on
                Coursera on <strong>September 15, 2015</strong> which covers various
                methods of analysis including: unsupervised clustering, gene-set enrichment
                analyses, data visualization, and supervised machine learning applications
                to LINCS data.
              </p>
              <p>
                <strong>Go to Course: </strong>
                <a href="https://www.coursera.org/course/bd2klincs">
                  https://www.coursera.org/course/bd2klincs
                </a>
              </p>
              <div className={styles['img-wrap']}>
                <img
                  className={`${styles['img-border']}`}
                  src={dcicMooc}
                  alt="BD2K-LINCS DCIC MOOC"
                />
              </div>
              <h5>Course Summary</h5>
              <p>
                The <a href="http://lincs-dcic.org" target="_blank">BD2K-LINCS Data
                Coordination and Integration Center (DCIC)</a> is commissioned to organize,
                analyze, visualize and integrate this data with other publicly available relevant
                resources. In this course we will introduce the various Centers that collect
                data for LINCS, describing the experimental data procedures and the various
                data types. We will then cover the design and collection of metadata and how
                metadata is linked to ontologies. We will then cover basic data processing
                and data normalization methods to clean and harmonize LINCS data. This will
                follow with a discussion about how the data is served as RESTful APIs and JSON,
                and for this we will cover concepts from client-server computing. Most
                importantly, the course will focus on various methods of analysis including:
                unsupervised clustering, gene-set enrichment analyses, data visualization,
                and supervised machine learning applications to LINCS data and other
                relevant Big Data from molecular biomedicine.
              </p>
            </div>
            <div className={styles['news-group']}>
              <h2>
                New Resource: L1000 Characteristic Direction Signature Search Engine (L1000CDS2)
              </h2>
              <p className="text-muted"><em>Posted on August 17th, 2015 by Sherry Jenkins</em></p>
              <p>
                <a href="http://amp.pharm.mssm.edu/L1000CDS2/#/index" target="_blank">
                L1000CDS2</a>, developed
                by <a href="http://icahn.mssm.edu/research/labs/maayan-laboratory" target="_blank">
                Ma’ayan Laboratory</a> for the <a href="http://lincs-dcic.org/#/" target="_blank">
                BD2K-LINCS DCIC</a>, queries gene expression signatures against the LINCS L1000
                to identify and prioritize small molecules that can reverse or mimic the
                observed input expression pattern.
              </p>
              <p>
                <a href="http://lincs-dcic.org/#/resources">
                  Learn more about BD2K-LINCS DCIC Resources
                </a>
              </p>
            </div>
            <div className={styles['news-group']}>
              <h2>Data Standards Update</h2>
              <p className="text-muted"><em>Posted on August 17th, 2015 by Sherry Jenkins</em></p>
              <p>
                The <Link to="/data/standards">Data Standards</Link> page has been updated
                to reflect the most recent standards releases in LINCS Production Phase 2.
              </p>
            </div>
            <div className={styles['news-group']}>
              <h2>
                Data Releases: DToxS, HMS LINCS, LINCS Center For Transcriptomics,
                LINCS PCCSE, And NeuroLINCS
              </h2>
              <p className="text-muted"><em>Posted on August 13th, 2015 by Sherry Jenkins</em></p>
              <p>
                LINCS centers recently released the first wave of data which includes RNA-seq,
                L1000, P100, SWATH, Cell Viability and Growth, KinomeScan, and RPPA profiling
                human cell lines treated with many drugs and small molecules.
              </p>
              <p>
                The <Link to="/data/releases">Data Releases</Link> page describes the
                collections of data released and planned to be released to the public by
                the LINCS Consortium.
              </p>
            </div>
            <div className={styles['news-group']}>
              <h2>
                Workshop: Interdisciplinary Approaches To Biomedical Data Science
                Challenges: SAMSI Innovations Lab | July 20-24, 2015
              </h2>
              <p className="text-muted"><em>Posted on August 6th, 2015 by Sherry Jenkins</em></p>
              <p>
                Stephan Schurer PhD, <a href="http://lincs-dcic.org" target="_blank">
                BD2K-LINCS Data Coordination and Integration Center</a>, served as a
                mentor in this workshop to guide scientists in the formation of
                interdisciplinary projects aimed at developing models, methods, and
                approaches to overcome biomedical data science challenges. During the
                course of the workshop, participants were exposed to LINCS resources.
                The workshop took place from July 20 to 24, 2015 at the Hamner Conference
                Center at the NC Biotechnology Center, 15 TW Alexander Drive in Research
                Triangle Park, North Carolina.
              </p>
              <p>
                <a href="http://www.samsi.info/workshop/interdisciplinary-approaches-biomedical-data-science-challenges-samsi-innovations-lab-july-" target="_blank">
                Workshop Summary</a> | <a href="http://www.samsi.info/sites/default/files/InnovationsLab_ScienceDescriptionApril21.pdf" target="_blank">
                Detailed Description</a>
              </p>
            </div>
            <div className={styles['news-group']}>
              <h2>
                Workshop: Genomic And Computational Approaches For Biomarker And
                Drug Discovery | June 19, 2015
              </h2>
              <p className="text-muted"><em>Posted on April 13th, 2015 by Sherry Jenkins</em></p>
              <p>
                Purpose of this workshop is to bring together (Library of Integrated
                Network-based Cellular Signatures) LINCS scientists and scientists from
                the alcohol research community to explore how LINCS resources can facilitate
                identification of druggable targets and novel and/or repurposed compounds
                for the treatment of alcohol dependence.
              </p>
              <h5>Date | Time | Location</h5>
              <ul>
                <li><strong>Friday, June 19th, 2015 </strong> from <strong>2-5 PM</strong></li>
                <li>Grand Hyatt (Room: Travis C/D), San Antonio, TX</li>
              </ul>
              <h5>Register</h5>
              <ul>
                <li>
                  Please RSVP by <strong>May 1st, 2015</strong> to Matthew Reilly
                  at reillymt@mail.nih.gov
                </li>
                <li>Space is limited to 50 participants</li>
              </ul>
              <h5>Agenda</h5>
              <p>
                <strong>Welcome and Opening Remarks</strong>
                <br />
                Matthew Reilly PhD and Ajay Pillai PhD, NIH
              </p>
              <p>
                <strong>Hands-on Session: Web Apps and Tools</strong>
                <br />
                Session Leaders: Avi Ma’ayan
                PhD, <a href="http://lincs-dcic.org/#/" target="_blank">BD2K-LINCS Data
                Coordination and Integration Center</a> and Aravind Subramanian
                PhD, <a href="http://www.lincscloud.org/" target="_blank">LINCS Center
                for Transcriptomics</a>
              </p>
              <p>
                This session will consist of a hands on demonstration of currently
                available web apps and tools from the LINCS Common Fund program.
                Participants will learn how to apply these tools to their own research
                programs. Please bring your laptop computer and gene expression or other
                genomic data to analyze.
              </p>
              <h5>Additional Information</h5>
              <ul>
                <li>
                  Please register and create
                  a <a href="lincscloud.org" target="_blank">lincscloud.org</a> account
                  before the workshop.
                </li>
                <li>
                  Your genomics datasets you bring to analyze should be formatted either as
                  (1) official gene symbols or (2) Affymetrix U133A probe IDs. Some of the web
                  tools require a list of both up-regulated and down-regulated gene lists and
                  some of the tools only accept gene symbols.
                </li>
                <li>
                  Because the majority of the LINCS datasets use human cell lines, gene sets
                  should be annotated for mammalian species.
                </li>
                <li>
                  When you RSVP for the workshop, please indicate your area of expertise:
                  genomics, computational or other.
                </li>
                <li>
                  Also, if you already have experience with working with any of the LINCS
                  tools, you are welcome to submit questions/concerns, suggestions or other
                  feedback in advance of the workshop. You can submit your questions etc.,
                  to the workshop organizer: Matthew Reilly at reillymt@mail.nih.gov.
                </li>
              </ul>
            </div>
            <div className={styles['news-group']}>
              <h2>
                Administrative Supplements To Extend The Scope And Reach Of LINCS Datasets
              </h2>
              <p className="text-muted"><em>Posted on February 28th, 2015 by Sherry Jenkins</em></p>
              <p>
                This notice (<a href="http://grants.nih.gov/grants/guide/notice-files/NOT-RM-15-012.html" target="_blank">NOT-RM-15-102</a>)
                announces an opportunity to request administrative supplements to existing NIH
                research grants, to support generation of new data that will also advance the
                goals of the LINCS program. Please visit
                the <Link to="/community/funding-opportunities">funding opportunities</Link> page
                for more details.
              </p>
            </div>
            <div className={styles['news-group']}>
              <h2>
                Call For External Collaborations With The BD2K-LINCS Data Coordination
                And Integration Center
              </h2>
              <p className="text-muted"><em>Posted on February 24th, 2015 by Sherry Jenkins</em></p>
              <p>
                The <a href="http://www.lincs-dcic.org/" target="_blank">BD2K-LINCS
                DCIC</a> announces
                a <a href="http://www.lincs-dcic.org/#/edsr" target="_blank">call for
                applications</a> for the next round of external data science research
                projects. The call is for two year projects that would leverage LINCS
                generated data through application of novel computational methods.
                For more information, please
                visit: <a href="http://www.lincs-dcic.org/#/edsr" target="_blank">
                http://www.lincs-dcic.org/#/edsr</a>. Please visit
                the <Link to="/community/funding-opportunities">funding opportunities</Link> page
                for more details.
              </p>
            </div>
            <div className={styles['news-group']}>
              <h2>
                Call For External Collaborations With The BD2K-LINCS Data Coordination
                And Integration Center
              </h2>
              <p className="text-muted"><em>Posted on February 20th, 2015 by Sherry Jenkins</em></p>
              <p>
                CHEMBL now provides CHEMBL IDs for all cell lines stored in their database
                and also cross references to the LINCS project.
              </p>
              <div className={styles['img-wrap']}>
                <img
                  className={`${styles['img-border']}`}
                  src={chemblImg}
                  alt="CHEMBL Screenshot"
                />
              </div>
            </div>
            <div className={styles['news-group']}>
              <h2>
                LINCS Investigators Present At The AACR Special Conference On
                Computational And Systems Biology Of Cancer
              </h2>
              <p className="text-muted"><em>Posted on February 8th, 2015 by Sherry Jenkins</em></p>
              <p>
                February 8-11, 2015 <br />
                The Fairmont San Francisco <br />
                San Francisco, California <br />
              </p>
              <p>
                Conference Co-Chairpersons <br />
                Andrea Califano, Columbia University, New York, New York <br />
                Brenda J. Andrews, University of Toronto, Toronto, Ontario, Canada <br />
                Peter K. Jackson, Stanford University, Stanford, California <br />
              </p>
              <p>
                <a
                  href="http://www.aacr.org/Meetings/Pages/Program-Detail.aspx?EventItemID=29&ItemID=64&DetailItemID=180#.VTFq7tLBzRY"
                  target="_blank"
                >
                  View Program
                </a>
              </p>
              <p>
                <strong>Spatial Systems Biology and Cancer</strong>
                <br />
                <em>Joe W. Gray, MEP LINCS Center</em>
              </p>

              <p>
                <strong>Using Single-cell Pharmacology to Improve Drug Design</strong>
                <br />
                <em>Peter K. Sorger, HMS LINCS Center</em>
              </p>

              <p>
                <strong>
                  Lean Data Integration Strategy in Cancer Systems Biology and
                  Systems Pharmacology
                </strong>
                <br />
                <em>Avi Ma’ayan, BD2K-LINCS Data Coordination and Integration Center</em>
              </p>

              <p>
                <strong>
                  Transcriptional Landscape of Drug Response Guides the Design of Specific
                  and Potent Drug Combinations
                </strong>
                <br />
                <em>Marc Hafner, HMS LINCS Center</em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
