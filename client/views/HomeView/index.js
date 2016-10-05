import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import handleResponse from 'utils/handleResponse';
import Tool from 'components/Tool';
import Carousel from './Carousel';
import Twitter from 'containers/Twitter';
import Publication from 'containers/Publication';
import { loadPublications } from 'actions/pubsNews';
import { loadTools } from 'actions/toolsWorkflows';
import { initialCategories as categories } from '../PublicationsView';
import styles from './HomeView.scss';

const mapStateToProps = (state) => ({
  publications: state.pubsNews.publications,
  tools: state.toolsWorkflows.tools,
});

export class HomeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recentDatasets: [],
    };
  }

  componentWillMount = () => {
    this.props.loadPublications();
    this.props.loadTools();
  }

  componentDidMount() {
    fetch('/LINCS/api/v1/datasets/recent')
      .then(handleResponse)
      .then(response => response.json())
      .then(recentDatasets => {
        this.setState({ recentDatasets });
      });
  }

  render() {
    const pubs = this.props.publications
      .filter(pub => !!pub.showAtHomeOrder)
      .sort((a, b) => {
        const result = a.showAtHomeOrder > b.showAtHomeOrder;
        return result ? 1 : -1;
      });
    const tools = this.props.tools
      .filter(tool => !!tool.homeOrder)
      .sort((a, b) => {
        const result = a.homeOrder > b.homeOrder;
        return result ? 1 : -1;
      });
    const carouselImgs = [2037, 2038, 2044, 2045, 2067, 2078, 2086, 2098].map((imgId) =>
    (
      <div key={imgId}>
        <img
          src={`/LINCS/files/f2f_2016/${imgId}.jpg`}
          className={`${styles['carousel-img']}`}
          alt="presentation"
        />
      </div>
      )
    );
    return (
      <div className={styles.wrapper}>
      {/* Banner
        * ================================================================ */}
        <div className={styles.homeBannerWrap}>
          <div className={`container ${styles.homeBanner}`}>
            <div className={styles.intro_Home}>
              The Library of Network-Based Cellular Signatures (LINCS) Program aims to create a
              network-based understanding of biology by cataloging changes in gene expression
              and other cellular processes that occur when cells are exposed to a variety of
              perturbing agents.
            </div>
            <a
              href="http://lincsportal.ccs.miami.edu/dcic-portal/"
              target="_blank"
              className={`btn btn-outline-inverse btn-lg ${styles['btn-discover']}`}
            >
              Discover LINCS Data
            </a>
            <Link
              to="/applications"
              className={`btn btn-outline-inverse btn-lg ${styles['btn-td']}`}
            >
              Apps &amp; Workflows
            </Link>
          </div>
        </div>

        {/* Consortium / Annual Meeting
          * ================================================================ */}
        <div className={styles['consortium-wrap']}>
          <div className="container">
            <div className="row">
              <div className={`col-xs-12 ${styles.section}`}>
                <div className="row">
                  <div className={`col-xs-12 col-md-6 ${styles.consortium}`}>
                    <h3>The LINCS Consortium</h3>
                    <p>
                      By generating and making public data that indicates how cells
                      respond to various genetic and environmental stressors, the
                      LINCS project will help us gain a more detailed understanding
                      of cell pathways and aid efforts to develop therapies that
                      might restore perturbed pathways and networks to their normal
                      states. The LINCS website is a source of information for the
                      research community and general public about the LINCS project.
                      This website along with the LINCS Data Portal contains details
                      about the assays, cell types, and perturbagens that are
                      currently part of the library, as well as links to participating
                      sites, data releases from the sites, and software that can be
                      used for analyzing the data.
                    </p>

                    <div className={`${styles['datatype-links-container']}`}>
                      <div className={`${styles['datatype-link']}`}>
                        <a href="http://lincsportal.ccs.miami.edu/dcic-portal/" target="_blank">
                          <img
                            src="/LINCS/files/datatype_logos/dataset-logo.png"
                            className={`${styles['datatype-logo']}`}
                            alt="presentation"
                          />
                          <h5 className={`${styles['datatype-title']}`}>Datasets</h5>
                        </a>
                      </div>
                      <div className={`${styles['datatype-link']}`}>
                        <a href="http://lincsportal.ccs.miami.edu/SmallMolecules/" target="_blank">
                          <img
                            src="/LINCS/files/datatype_logos/small-molecule-logo.png"
                            className={`${styles['datatype-logo']}`}
                            alt="presentation"
                          />
                          <h5 className={`${styles['datatype-title']}`}>Small Molecules</h5>
                        </a>
                      </div>
                      <div className={`${styles['datatype-link']}`}>
                        <a href="http://lincsportal.ccs.miami.edu/cells/" target="_blank">
                          <img
                            src="/LINCS/files/datatype_logos/cellline-logo.png"
                            className={`${styles['datatype-logo']}`}
                            alt="presentation"
                          />
                          <h5 className={`${styles['datatype-title']}`}>Cells</h5>
                        </a>
                      </div>
                    </div>

                  </div>
                  <div className={`col-xs-12 col-md-6 ${styles.am}`}>
                    <h3 className={styles.title}>2016 LINCS Consortium Meeting</h3>
                    <div className={styles.carousel}>
                      <Carousel aps={5000}>
                        {carouselImgs}
                      </Carousel>
                    </div>
                    <p className={styles.meeting}>
                      The 2016 LINCS Consortium Meeting was held September 19-20,
                      at the NIH campus in Bethesda, MD. This two-day meeting brought
                      together the six&nbsp;
                      <Link to="centers/data-and-signature-generating-centers">
                        LINCS Data and Signature Generation Centers
                      </Link>
                      , the&nbsp;
                      <Link to="centers/dcic">
                        BD2K-LINCS Data Coordination and Integration Center
                      </Link>, NIH
                      extramural staff, and external LINCS collaborators.&nbsp;
                      <Link to="community/consortium-meetings">
                        Meeting Agenda
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Publications / Tools
          * ================================================================ */}
        <div className={styles['pubs-wrap']}>
          <div className="container">
            <div className="row">
              <div className={`col-xs-12 ${styles.section} ${styles['pub-section']}`}>
                <div className="row">
                  <div className={`col-xs-12 col-md-7 ${styles.publications}`}>
                    <h3>Featured Recent Publications</h3>
                    {
                      pubs && pubs.map(p =>
                        <Publication
                          redirect
                          key={p.id}
                          pub={p}
                          categories={Object.keys(categories)}
                        />
                      )
                    }
                    <Link to="/publications">More publications...</Link>
                  </div>
                  <div className="col-xs-12 col-md-5">
                    <h3 className={styles.title}>Featured LINCS Tools</h3>
                    {
                      tools && tools.map((tool, idx) =>
                        <Tool
                          homeview
                          key={idx}
                          tool={tool}
                        />
                      )
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Announcements
          * ================================================================ */}
        <div className={styles.ann}>
          <div className="container">
            <div className="row">
              <div className={`col-xs-12 ${styles.section} ${styles['ann-section']}`}>
                <h3 className={styles.title}>Announcements</h3>
                <div className="row">
                {/* Announcement 1
                  * ================================================================ */}
                  <Carousel aps={10000}>
                    <div>
                      <div className="col-xs-12 col-md-3">
                        <div className={styles.card}>
                          <h5>BD2K-LINCS MOOC</h5>
                          <div className={styles.group}>
                            <p className={`clearfix ${styles.left}`}>
                              Mark your calendars for the upcoming session of
                              the BD2K-LINCS Big Data Science MOOC on Coursera
                              organized by the BD2K-LINCS DCIC that begins&nbsp;
                              <br />
                              <strong>October 3, 2016!</strong>
                            </p>
                            <a href="https://www.coursera.org/learn/bd2k-lincs" target="_blank">Enroll Now</a>
                          </div>
                        </div>
                      </div>
                      {/* Announcement 2
                        * ================================================================ */}
                      <div className="col-xs-12 col-md-3">
                        <div className={styles.card}>
                          <h5>LINCS Webinar</h5>
                          <div className={styles.group}>
                            <p className={`clearfix ${styles.left}`}>
                              <strong>
                                Unravelling Hairballs: Biological Pathways From Protein Modification
                                Cluster Networks
                              </strong>
                              <br />
                              (Mark Grimes PhD, University of Montana,&nbsp;
                              <a href="http://lincs-dcic.org/#/external-dsrp#nav" target="_blank">
                                DCIC eDSR
                              </a>
                              )
                              <br />
                              <strong>October 4, 2016 at 3:00 PM ET</strong>.
                            </p>
                            <a
                              href="http://www.lincsproject.org/LINCS/community/webinars"
                              target="_blank"
                            >
                              Details
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* Announcement 3
                        * ================================================================ */}
                      <div className="col-xs-12 col-md-3">
                        <div className={styles.card}>
                          <h5>LINCS Webinar</h5>
                          <div className={styles.group}>
                            <p className={`clearfix ${styles.left}`}>
                              <strong>
                                Integration of Phosphorylation Knowledge Networks with LINCS
                                Omics Data for Cancer Drug Analysis
                              </strong>
                              <br />
                              (Karen Ross PhD & Cathy Wu PhD,
                              University of Delware,&nbsp;
                              <a href="http://lincs-dcic.org/#/external-dsrp#nav" target="_blank">
                                DCIC eDSR
                              </a>)
                              <br />
                              <strong>November 8, 2016 at 3:00 PM ET</strong>.
                            </p>
                            <Link to="/community/webinars">Details</Link>
                          </div>
                        </div>
                      </div>
                    {/* Announcement 4
                      * ================================================================ */}
                      <div className="col-xs-12 col-md-3">
                        <div className={styles.card}>
                          <h5>LINCS Webinar</h5>
                          <div className={styles.group}>
                            <p className={`clearfix ${styles.left}`}>
                              <strong>
                                Cell Line Ontology-based Standardization, Integration
                                and Analysis of LINCS Cell Lines
                              </strong>
                              <br />
                              (Yongqun "Oliver" He DVM, PhD, University of Michigan Medical School,
                              &nbsp;
                              <a href="http://lincs-dcic.org/#/external-dsrp#nav" target="_blank">
                                DCIC eDSR
                              </a>)
                              <br />
                              <strong>November 15, 2016 at 3:00 PM ET</strong>.
                            </p>
                            <a
                              href="http://www.lincsproject.org/LINCS/community/webinars"
                              target="_blank"
                            >
                              Details
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      {/* Announcement 5
                        * ================================================================ */}
                      <div className="col-xs-12 col-md-3">
                        <div className={styles.card}>
                          <h5>LINCS Webinar</h5>
                          <div className={styles.group}>
                            <p className={`clearfix ${styles.left}`}>
                              <strong>Docker Pipelines for RNASeq Alignment and Analyses</strong>
                              &nbsp;
                              (Ling-Hong Hung PhD, University of Washington,&nbsp;
                              <a href="http://lincs-dcic.org/#/external-dsrp#nav" target="_blank">
                                DCIC eDSR
                              </a>)
                              <br />
                              <strong>November 22, 2016 at 3:00 PM ET</strong>.
                            </p>
                            <Link to="/community/webinars">Details</Link>
                          </div>
                        </div>
                      </div>
                      {/* Announcement 6
                        * ================================================================ */}
                      <div className="col-xs-12 col-md-3">
                        <div className={styles.card}>
                          <h5>LINCS Webinar</h5>
                          <div className={styles.group}>
                            <p className={`clearfix ${styles.left}`}>
                              <strong>Dynamic Logic-Based Models Integrating Cardiac Signaling
                              Networks and Cellular Phenotypes</strong> (Jeff Saucerman PhD,
                              University of Virginia, <a href="http://lincs-dcic.org/#/external-dsrp#nav" target="_blank">
                              DCIC eDSR</a>)
                              <br />
                              <strong>November 29, 2016 at 3:00 PM ET</strong>.
                            </p>
                            <Link to="/community/webinars">Details</Link>
                          </div>
                        </div>
                      </div>
                      {/* end of Announcement 6
                        * ================================================================ */}
                    </div>
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Twitter
          *================================================================= */}
        <div className={styles.tw}>
          <div className="container">
            <div className="row">
              <div className={`col-xs-12 ${styles.section} ${styles['ann-section']}`}>
                <div className="row">
                  <Twitter />
                </div>
              </div>
            </div>
          </div>
          {/*
            <div className={`${styles.section} ${styles['social-section']}`}>
            <div className="container">
            <h3 className={styles.title}>Get in Touch</h3>
            <div className="row">
            <div className={`col-xs-12 col-md-6 ${styles['social-left']}`}>
            <div className={styles.youtube}>
            <p>
            Access everything from application tutorials and workflows to
            recaps of meetings and seminars on the NIH LINCS Program
            YouTube channel
            </p>
            <a
            href="https://www.youtube.com/channel/UCNcDd4x8PsUZpt4U2Xa8sfg"
            className={`btn ${styles['btn-secondary-outline']}`}
            >
            NIH LINCS Program YouTube channel
            </a>
            </div>
            <div className={styles.contact}>
            <p><strong>More questions about the NIH LINCS Program?</strong></p>
            <p>
            Be sure to check out the <Link to="/about#q-a">Q & A section</Link> first
            and don't be afraid to <a href={mailLink}>contact us</a> with additional
            questions!
            </p>
            </div>
            </div>
            </div>
            </div>
            </div>
          */}
        </div>
      </div>
    );
  }
}

HomeView.propTypes = {
  loadPublications: PropTypes.func,
  publications: PropTypes.array,
  loadTools: PropTypes.func,
  tools: PropTypes.array,
};

export default connect(mapStateToProps, {
  loadPublications,
  loadTools,
})(HomeView);
