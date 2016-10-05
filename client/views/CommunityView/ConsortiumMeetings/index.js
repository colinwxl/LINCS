import React from 'react';
import { Link } from 'react-router';

import PageBanner from 'components/PageBanner';
import PageNav from 'components/PageNav';
import styles from './ConsortiumMeetings.scss';

import meeting2016Img from './2016-consortium-meeting.jpg';
import meeting2015Img from './2015-consortium-meeting.png';
import cover2014Img from './2014-cover.png';

const dsgcRoute = '/centers/data-and-signature-generating-centers';

// TODO: Make LINCS 2013 Consortium Meeting page
export default function ConsortiumMeetings() {
  return (
    <div className={styles.wrapper}>
      <PageBanner
        title="LINCS Consortium Meetings"
        subTitle="The Consortium meets regularly to report progress and exchange ideas"
      />
      <div className="container">
        <div className="row">
          <PageNav isCommunityPage mainPage="LINCS Consortium Meetings" />
          <div className="col-md-9 col-md-pull-3">

            {/* Introductory text
             * ------------------------------------------------------------------------------- */}

            <p>
              Each year a meeting is held by, and for,
              the <a href="https://commonfund.nih.gov/LINCS/index">
              Library of Integrated Network-based Cellular Signatures (LINCS) Consortium</a>.
              The purpose of these meetings is to gather members of the LINCS consortium to
              present research efforts and plans, and to work along with NIH program staff to
              continue to develop a successful LINCS program.
            </p>

            {/* 2016 meeting
             * ------------------------------------------------------------------------------- */}

            <h2>2016 Consortium Meetings</h2>
            <div className={styles.header}>
              <a href="http://lincsproject.org/LINCS/files/2016-consortium-meeting.jpg">
                <img
                  className={styles['pull-left']}
                  style={{ width: '315px' }}
                  src={meeting2016Img}
                  alt="2016 Consortium Meeting"
                />
              </a>
              <h5>NIH Campus in Bethesda</h5>
              <em>September 19-20</em>
              <br />
              <br />
              <div>
                The annual LINCS Consortium Face-to-Face Meeting brought together the six
                LINCS Data and Signature Generation Centers, the BD2K-LINCS DCIC, NIH
                extramural staff, and external LINCS collaborators.
                <br />
                <a
                  href="/LINCS/files/f2f_2016/LINCS%20Annual%20Meeting%20-%20Flyer.pdf"
                  target="_blank"
                >
                  Agenda
                </a>
                &nbsp;|&nbsp;
                <a
                  href="/LINCS/files/f2f_2016/LINCS_Sept%202016_F2F%20Agenda%20-%20Final.pdf"
                  target="_blank"
                >
                  Meeting Flyer
                </a>
                <br />
                <br />
                <br />

                This two-day meeting was organized into the following sessions:
                <br />
                1) Data Challenges Facing Large Projects,
                <br />
                2) Introduction to LINCS,
                <br />
                3) Community Outreach - Accessing LINCS Data,
                <br />
                4) MCF10A Biology
                <br />
                5) Working Group Meetings (Proteomics, Transcriptomics and Imaging).
              </div>
            </div>
            <div className={styles.header}>
              <h5>University of California, Irvine</h5>
              <em>March 10-11</em>
            </div>
            <p>
              The first day of the meeting brought together the&nbsp;
              <Link to="/centers/data-and-signature-generating-centers">LINCS Data and Signature
              Generation Centers</Link> and the <Link to="/centers/dcic">
              BD2K-LINCS Data Coordination and Integration Center</Link> to review progress to date
              and discuss the next steps for data integration and analysis across the centers.
              This meeting included an <a href="/LINCS/files/March-2016-LINCS-Meeting.pdf">
              outreach program</a> with experts in stem cell biology, and big data management
              focused on the use of current datasets.
            </p>

            {/* 2015 meeting
              * ------------------------------------------------------------------------------- */}

            <h2>2015 Consortium Meeting</h2>
            <img
              className={styles['pull-left']}
              src={meeting2015Img}
              alt="2015 Consortium Meeting"
            />
            <p>
              The 2015 LINCS Consortium Meeting was held September 24-25, at the National
              Cancer Institute, Rockville, MD.
            </p>
            <div className={styles.header}>
              <h5>Center Presentations and E-Poster Session</h5>
              <p><em>Day 1, Thursday, September 24</em></p>
            </div>
            <p>
              Two of the primary goals of Day 1 were to (i) to enhance collaboration among
              LINCS Centers and ensure timely completion of the first “dense cube” projects
              and (ii) to identify data analysis challenges and data/metadata/database
              bottlenecks.
            </p>
            <ul>
              <li>
                <Link to="/centers/dcic">BD2K-LINCS DCIC</Link>: Advancing the LINCS program
                through data integration, tool development, research projects and outreach
              </li>
              <li>
                <Link to={`${dsgcRoute}/dtoxs`}>DToxS</Link>: Integrated analysis of
                transcriptional signatures of cardiotoxicity resulting from kinase inhibition
              </li>
              <li>
                <Link to={`${dsgcRoute}/hms-lincs`}>HMS LINCS</Link>: Fundamental principles of
                cellular response to perturbation
              </li>
              <li>
                <Link to={`${dsgcRoute}/lincs-transcriptomics`}>
                  LINCS Center for Transcriptomics
                </Link>
              </li>
              <li>
                <Link to={`${dsgcRoute}/lincs-pccse`}>LINCS PCCSE</Link>: Proteomic
                connectivity maps of signaling and epigenetics
              </li>
              <li>
                <Link to={`${dsgcRoute}/mep-lincs`}>MEP LINCS</Link>: High-throughput
                image-based assessment of cellular phenotypes modulated by microenvironment
                perturbagens
              </li>
              <li>
                <Link to={`${dsgcRoute}/neurolincs`}>NeuroLINCS</Link>
              </li>
            </ul>
            <div className={styles.header}>
              <h5>Joint Activities and Technologies</h5>
              <p><em>Day 2, Friday, September 25</em></p>
            </div>
            <p>The goals of Day 2 were to:</p>
            <ol>
              <li>
                Highlight joint activities of LINCS Data and Signature Generation
                Centers (DSGCs) and DCIC
              </li>
              <li>Articulate suggestions for future improvement.</li>
            </ol>

            {/* Previous years
             * ------------------------------------------------------------------------------- */}

            <h2>Previous Years</h2>
            <div className={styles['info-flex']}>
              <div>
                <a href="/LINCS/files/LINCS-2014-Consortium-Meeting-Agenda.pdf">
                  <img
                    className={styles['img-bordered']}
                    src={cover2014Img}
                    alt="2014 Consortium Meeting Agenda"
                  />
                </a>
              </div>
              <div className={styles.right}>
                <div className={styles['info-block']}>
                  <a href="/LINCS/files/LINCS-2014-Consortium-Meeting-Agenda.pdf">
                    2014 Consortium Meeting
                  </a>
                  <p>October 27, NCI, Rockville, MD</p>
                </div>
                <div className={styles['info-block']}>
                  <p>
                    2013 Consortium Meeting
                  </p>
                  <p>November 18-19, Broad Institute, Cambridge, MA</p>
                </div>
                <div className={styles['info-block']}>
                  <a href="/LINCS/files/LINCSDataForum2013.pdf">
                    LINCS Data Forum 2013
                  </a>
                  <p>March 20-21, Harvard Medical School, Boston, MA</p>
                </div>
                <div className={styles['info-block']}>
                  <a href="/LINCS/files/LINCS-2012-Consortium-Meeting-Agenda.pdf">
                    2012 Consortium Meeting
                  </a>
                  <p>November 15-16, NIH, Bethesda, MD</p>
                </div>
                <div className={styles['info-block']}>
                  <a href="/LINCS/files/LINCS 2011 Consortia Meeting Agenda final.pdf">
                    2011 Consortium Meeting
                  </a>
                  <p>October 27-28, Rockville, MD</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
