import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import handleResponse from 'utils/handleResponse';
import Carousel from './Carousel';
import Twitter from 'containers/Twitter';
import Publication from 'containers/Publication';
import { loadPublications } from 'actions/pubsNews';
import { loadTools } from 'actions/toolsWorkflows';
import { initialCategories as categories } from '../PublicationsView';
import styles from './HomeView.scss';

// Images
import bannerImg from './background.png';
import cubeImg from './cube.png';

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
    return (
      <div className={styles.wrapper}>
        <div
          className={styles.banner}
          style={{ backgroundImage: `url(${bannerImg})` }}
        >
          <div className={`container ${styles.animated}`}>
            <img src={cubeImg} alt="NIH LINCS Program" />
            <p className={styles.lead}>
              The Library of Network-Based Cellular Signatures (LINCS) Program aims to create a
              network-based understanding of biology by cataloging changes in gene expression
              and other cellular processes that occur when cells are exposed to a variety of
              perturbing agents
            </p>
            <Link
              to="/data"
              className={`btn btn-outline-inverse btn-lg ${styles['btn-discover']}`}
            >
              Discover LINCS Data
            </Link>
            <Link
              to="/applications"
              className={`btn btn-outline-inverse btn-lg ${styles['btn-td']}`}
            >
              Apps &amp; Workflows
            </Link>
          </div>
        </div>

        {/* Publications / Twitter
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
                          key={p.id}
                          pub={p}
                          categories={Object.keys(categories)}
                        />
                      )
                    }
                    <Link to="/publications">More publications...</Link>
                  </div>
                  <div className="col-xs-12 col-md-5">
                    <Twitter />
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
                  <div className="col-xs-12 col-md-4">
                    <div className={styles.card}>
                      <h5>LINCS Consortium Meeting</h5>
                      <div className={styles.group}>
                        <p className={`clearfix ${styles.left}`}>
                          Mark your calendars for the upcoming LINCS Consortium Face-to-Face
                          Meeting which will be held on September 19-20, 2016 at the
                          NIH Campus in Bethesda, MD.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-md-4">
                    <div className={styles.card}>
                      <h5>Connectivity Map Challenge</h5>
                      <div className={styles.group}>
                        <p className={`clearfix ${styles.left}`}>
                          The LINCS Center for Transcriptomics, in partnership with the Crowd
                          Innovation Lab at Harvard Business School, is launching their first
                          challenge, "Infer the Transcriptome".
                        </p>
                        <a href="http://crowdsourcing.topcoder.com/cmap">Register</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-md-4">
                    <div className={styles.card}>
                      <h5>Editorial in Sci Transl Med.</h5>
                      <div className={styles.group}>
                        <p className={`clearfix ${styles.left}`}>
                          Mohammed AlQuraishi and Peter Sorger from the HMS LINCS Center make the
                          case for improving accessibility and usability of published experimental
                          data of all types.
                        </p>
                        <a href="http://www.ncbi.nlm.nih.gov/pubmed/27194726">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Consortium description
          * ================================================================ */}
        <div className={styles.about}>
          <div className="container">
            <div className="row">
              <div className={`col-xs-12 ${styles.section}`}>
                <div className={styles.group}>
                  <h3 className={styles.title}>The LINCS Consortium</h3>
                  <p>
                    By generating and making public data that indicates how cells respond to
                    various genetic and environmental stressors, the LINCS project will
                    help us gain a more detailed understanding of cell pathways and aid
                    efforts to develop therapies that might restore perturbed pathways and
                    networks to their normal states. The LINCS website is a source of
                    information for the research community and general public about the
                    LINCS project. The website contains details about the assays, cell
                    types, and perturbagens currently part of the library, as well as links
                    to participating sites, the data releases from the sites, and software
                    that can be used for analyzing the data.
                  </p>
                  <Link to="/centers">Learn More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent data releases
          * ================================================================ */}
        <div className={`${styles.content}`}>
          <div className={styles['recent-ds-section']}>
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-lg-6">
                  <h3 className={styles.title}>Recent Data Releases from the DSGCs</h3>
                  <p className={styles['section-lead']}>
                    Scroll through the most recent data releases from the six
                    LINCS Data and Signature Generation Centers (DSGCs)
                  </p>
                  <Link
                    to="/data"
                    className={`btn ${styles['btn-primary-outline']}`}
                  >
                    Explore more data releases
                  </Link>
                </div>
                <div className="col-xs-12 col-lg-5 col-lg-push-1">
                  <Carousel datasets={this.state.recentDatasets} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles['tools-section']}>
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-lg-6 col-lg-push-6">
                  <h3 className={styles.title}>Featured LINCS Tools</h3>
                  <p className={styles['section-lead']}>
                    Scroll through some of the LINCS tools developed by the BD2K
                    LINCS Data Coordination and Integration Center (DCIC) and the DSGCs
                  </p>
                  <Link
                    to="/applications#tools"
                    className={`btn ${styles['btn-primary-outline']}`}
                  >
                    Explore more LINCS tools
                  </Link>
                </div>
                <div className="col-xs-12 col-lg-5 col-lg-pull-6">
                  <Carousel tools={tools} />
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
