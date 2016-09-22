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
import bannerImg from './background-original.jpg';

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
            <p className={styles.lead}>
              The Library of Network-Based Cellular Signatures (LINCS) Program aims to create a
              network-based understanding of biology by cataloging changes in gene expression
              and other cellular processes that occur when cells are exposed to a variety of
              perturbing agents
            </p>
            <a
              href="http://dev3.ccs.miami.edu:8080/datasets-beta/"
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
                      <h5>BD2K-LINCS MOOC</h5>
                      <div className={styles.group}>
                        <p className={`clearfix ${styles.left}`}>
                          Mark your calendars for the upcoming session of
                          the BD2K-LINCS Big Data Science MOOC on Coursera
                          organized by the BD2K-LINCS DCIC that begins
                          October 3, 2016!
                        </p>
                        <a href="https://www.coursera.org/learn/bd2k-lincs" target="_blank">Enroll Now</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-md-4">
                    <div className={styles.card}>
                      <h5>LINCS Data Science Webinar</h5>
                      <div className={styles.group}>
                        <p className={`clearfix ${styles.left}`}>
                          <strong>Dynamic Logic-Based Models Integrating Cardiac Signaling
                          Networks and Cellular Phenotypes</strong> (Jeff Saucerman PhD,
                          University of Virginia, <a href="http://lincs-dcic.org/#/external-dsrp#nav" target="_blank">
                          DCIC eDSR</a>) <strong>November 29, 2016 at 3:00 PM ET</strong>.
                        </p>
                        <Link to="/community/webinars">Details</Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-md-4">
                    <div className={styles.card}>
                      <h5>LINCS Consortium Meeting</h5>
                      <div className={styles.group}>
                        <p className={`clearfix ${styles.left}`}>
                          On September 19-20, the LINCS F2F Meeting brought
                          together the LINCS DSGCs, the BD2K-LINCS DCIC, NIH
                          extramural staff, and external LINCS collaborators.
                        </p>
                        <a
                          href="http://www.lincsproject.org/LINCS/community/consortium-meetings"
                          target="_blank"
                        >
                          Meeting Highlights
                        </a>
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
                    types, and perturbagens that are currently part of the library, as well as links
                    to participating sites, data releases from the sites, and software
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
                  <a
                    href="http://dev3.ccs.miami.edu:8080/datasets-beta/"
                    className={`btn ${styles['btn-primary-outline']}`}
                    target="_blank"
                  >
                    Explore more data releases
                  </a>
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
                    Scroll through some of the LINCS tools developed by the BD2K-LINCS
                    Data Coordination and Integration Center (DCIC) and the DSGCs
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
