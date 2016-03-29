import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

// import Cube from 'components/Cube';
import Calendar from 'containers/Calendar';
import Twitter from 'containers/Twitter';
import BarGraph from 'components/BarGraph';
import { loginUser } from 'actions/auth';
import styles from './HomeView.scss';

const mapStateToProps = ({ twitter }) => ({ twitter });

export class HomeView extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.banner}>
          <div className={`container ${styles.animated}`}>
            <img src={require('./cube.png')} alt="NIH LINCS Program" />
            <p className={styles.lead}>
              LINCS aims to create a network-based understanding of biology by cataloging changes
              in gene expression and other cellular processes that occur when cells are exposed
              to a variety of perturbing agents.
            </p>
            <Link
              to="/data/discover"
              className={`btn btn-outline-inverse btn-lg ${styles['btn-discover']}`}
            >
              Discover LINCS Data
            </Link>
            <Link
              to="/data/tools-databases"
              className={`btn btn-outline-inverse btn-lg ${styles['btn-td']}`}
            >
              Apps & Workflows
            </Link>
          </div>
        </div>
        <div className={styles.section}>
          <div className="container">
            <div className="row">
              <div className="col-sm-8">
                <h2 className={styles.title}>Categorized and Curated Data</h2>
                <p className={styles['section-lead']}>
                  Browse through the over 60 LINCS datasets, including both the metadata and
                  the raw data generated.
                </p>
                <Link
                  to="/discover#categories"
                  className={`btn btn-outline ${styles['btn-lincs']}`}
                >
                  View categories
                </Link>
              </div>
              <div className="col-sm-4">
                <BarGraph />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <div className="container">
            <div className="row">
              <div className={`col-sm-4 ${styles.tools} ${styles.animated}`}>
                <img src={require('./responsive.png')} alt="responsive" />
              </div>
              <div className="col-sm-8">
                <h2 className={styles.title}>Tools for All Platforms</h2>
                <p className={styles['section-lead']}>
                  Analyze gene lists or query LINCS databases with a vast array of tools on all
                  platforms.
                </p>
                <Link
                  to="/tools#analysis"
                  className={`btn btn-outline ${styles['btn-lincs']}`}
                >
                  View analysis tools
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <div className="container">
            <div className="row">
              <div className="col-sm-8">
                <h2 className={styles.title}>LINCS Centers</h2>
                <p className={styles['section-lead']}>
                  Learn more about the centers that make up the LINCS consortium.
                </p>
                <Link
                  to="/centers"
                  className={`btn btn-outline ${styles['btn-lincs']}`}
                >
                  Learn more about centers
                </Link>
              </div>
              <div className="col-sm-4">
                <h2>Image with all LINCS centers</h2>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <div className="container">
            <div className="row">
              <div className="col-xs-12 m-b-2">
                <h2 className={styles.title}>Events & Updates</h2>
                <p className={styles['section-lead']}>
                  View upcoming LINCS webinars, workshops, and symposia,
                  or <a href="https://twitter.com/BD2KLINCSDCIC/lists/lincs" target="_blank">follow LINCS centers and labs on Twitter</a> for
                  the latest information.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-lg-8">
                <Calendar />
              </div>
              <div className="col-xs-12 col-lg-4">
                <Twitter />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

HomeView.propTypes = {
  loginUser: PropTypes.func,
  twitter: PropTypes.object,
  push: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {
  loginUser,
  push,
})(HomeView);
