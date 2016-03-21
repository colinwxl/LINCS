import React, { Component } from 'react';
import { Link } from 'react-router';

import PageBanner from 'components/PageBanner';
import PageNav from 'components/PageNav';
import styles from './ConsortiumMeetings.scss';

const dsgcRoute = '/centers/data-and-signature-generating-centers';

// TODO: Make a stateless function once completed. Leave for now to enable hot-reloading.
// TODO: Make LINCS 2013 Consortium Meeting page
/* eslint react/prefer-stateless-function:0 max-len:0 */
export default class ConsortiumMeetings extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <PageBanner
          title="LINCS Consortium Meetings"
          subTitle=""
        />
        <div className="container">
          <div className="row">
            <PageNav isCommunityPage mainPage="LINCS Consortium Meetings" />
            <div className="col-md-9 col-md-pull-3">
              <p>
                Each year a meeting is held by, and for,
                the <a href="https://commonfund.nih.gov/LINCS/index">Library of Integrated Network-based Cellular Signatures (LINCS) Consortium</a>.
                The purpose of these meetings is to gather members of the LINCS consortium to
                present research efforts and plans, and to work along with NIH program staff to
                continue to develop a successful LINCS program.
              </p>
              <h2>2015 Consortium Meeting</h2>
              <div className="text-xs-center">
                <img
                  src={require('./2015-consortium-meeting.png')}
                  alt="2015 Consortium Meeting"
                />
              </div>
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
              <h2>Previous Years</h2>
              <div className={styles['info-flex']}>
                <div>
                  <Link to="/files/LINCS-2014-Consortium-Meeting-Agenda.pdf">
                    <img
                      className={styles['img-bordered']}
                      src={require('./2014-cover.png')}
                      alt="2014 Consortium Meeting Agenda"
                    />
                  </Link>
                </div>
                <div className={styles.right}>
                  <div className={styles['info-block']}>
                    <Link to="/files/LINCS-2014-Consortium-Meeting-Agenda.pdf">
                      2014 Consortium Meeting
                    </Link>
                    <p>October 27, NCI, Rockville, MD</p>
                  </div>
                  <div className={styles['info-block']}>
                    <Link to="/">
                      2013 Consortium Meeting
                    </Link>
                    <p>November 18-19, Broad Institute, Cambridge, MA</p>
                  </div>
                  <div className={styles['info-block']}>
                    <Link to="/files/LINCSDataForum2013.pdf">
                      LINCS Data Forum 2013
                    </Link>
                    <p>March 20-21, Harvard Medical School, Boston, MA</p>
                  </div>
                  <div className={styles['info-block']}>
                    <Link to="/files/LINCS-2012-Consortium-Meeting-Agenda.pdf">
                      2012 Consortium Meeting
                    </Link>
                    <p>November 15-16, NIH, Bethesda, MD</p>
                  </div>
                  <div className={styles['info-block']}>
                    <Link to="/files/LINCS 2011 Consortia Meeting Agenda final.pdf">
                      2011 Consortium Meeting
                    </Link>
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
}
