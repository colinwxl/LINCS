import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import handleResponse from 'utils/handleResponse';
import Carousel from './Carousel';
import Twitter from 'containers/Twitter';
import { loadPublications } from 'actions/pubsNews';
import { loadTools } from 'actions/toolsWorkflows';
import styles from './HomeView.scss';
// Images
import bannerImg from './background.png';
import cubeImg from './cube.png';

const mgm = 'michael.mcdermott@mssm.edu';
const sherry = 'sherry.jenkins@mssm.edu';
const subject = 'Questions/Comments regarding lincsproject.org';

const mailLink = `mailto:${mgm},${sherry}?Subject=[${subject}]`;

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
              perturbing agents.
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
              Apps & Workflows
            </Link>
          </div>
        </div>
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
              <hr className={styles['hr-small']} />
              <p>
                <strong>Curious what LINCS defines as a dataset?</strong> View the
                LINCS data standards to find out.
              </p>
              <Link
                to="/data/standards"
                className={`btn ${styles['btn-primary-outline']}`}
              >
                View LINCS data standards
              </Link>
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
          <div className={styles.ann}>
            <div className="container">
              <div className="row">
                <div className={`col-xs-12 ${styles.section} ${styles['ann-section']}`}>
                  <h3 className={styles.title}>Announcements</h3>
                  <div className="row">
                    <div className="col-xs-12 col-md-4">
                      <div className={styles.card}>
                        <h5>LINCS Outreach Meeting 2016</h5>
                        <div className={styles.group}>
                          <p className={`clearfix ${styles.justify}`}>
                            On March 10-11, 2016, the LINCS Outreach Meeting was held at the
                            University of California, Irvine. We invited the research community to
                            come see examples of LINCS in action and learn how to effectively work
                            with these unprecedented datasets. The first day of the meeting brought
                            together the centers of the LINCS Consortium to review progress to date
                            and discuss the next steps for data integration and analysis across the
                            centers. The meeting included an outreach program with experts in stem
                            cell biology, and big data management.
                          </p>
                          <a href="https://www.youtube.com/playlist?list=PLQw7KTnzkpXdpO1WMpW8fJeriqZEuFR1i">
                            Watch Videos
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-12 col-md-4">
                      <div className={styles.card}>
                        <h5>Data Science Research Webinar</h5>
                        <div className={styles.group}>
                          <h6>Detection and Removal of Spatial Bias in Multi-Well Assays</h6>
                          <p><em>May 24, 2016</em> - Alexander Lachmann PhD, Columbia University</p>
                          <Link to="/community/webinars">Learn More</Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-12 col-md-4">
                      <div className={styles.card}>
                        <h5>Data Science Research Webinar</h5>
                        <div className={styles.group}>
                          <h6>
                            Construction, Characterization and Validation of Multiscale
                            Gene Networks in Cancer
                          </h6>
                          <p>
                            <em>June 28, 2016</em> - Bin Zhang PhD, Icahn School of Medicine at
                            Mount Sinai
                          </p>
                          <Link to="/community/webinars">Learn More</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles['pubs-wrap']}>
            <div className="container">
              <div className="row">
                <div className={`col-xs-12 ${styles.section} ${styles['pub-section']}`}>
                  <h3>Featured Recent Publications</h3>
                  <div className={styles.publications}>
                    {
                      pubs && pubs.map(p => {
                        let articleTitle = p.articleName;
                        if (p.pmId) {
                          articleTitle = (
                            <a
                              href={`http://www.ncbi.nlm.nih.gov/pubmed/${p.pmId}`}
                              target="_blank"
                            >
                              {p.articleName}
                            </a>
                          );
                        } else if (p.pmcId) {
                          articleTitle = (
                            <a
                              href={`http://www.ncbi.nlm.nih.gov/pmc/articles/${p.pmcId}`}
                              target="_blank"
                            >
                              {p.articleName}
                            </a>
                          );
                        } else if (p.doi) {
                          articleTitle = (
                            <a href={`http://dx.doi.org/${p.doi}`} target="_blank">
                              {p.articleName}
                            </a>
                          );
                        } else if (p.otherLink) {
                          articleTitle = <a href={p.otherLink} target="_blank">{p.articleName}</a>;
                        }
                        const authorNames = p.authors.map(author => author.name);
                        return (
                          <div key={p.id} className={styles.group}>
                            <p>
                              {authorNames.join(', ')}. {p.yearPublished}.
                              <strong> {articleTitle} </strong>
                              {p.journalName}. {p.volume}
                              {!!p.issue ? `(${p.issue})` : ''}
                              {!!p.ppPages ? `:${p.ppPages}` : ''}.
                            </p>
                          </div>
                        );
                      })
                    }
                  </div>
                  <Link to="/publications">More publications...</Link>
                </div>
              </div>
            </div>
          </div>
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
                <div className="col-xs-12 col-md-6">
                  <Twitter />
                </div>
              </div>
            </div>
          </div>
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
