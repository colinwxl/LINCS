import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { loginUser } from 'actions/auth';
import styles from './AnalyzeView.scss';

const mapStateToProps = (state) => ({
  entities: state.entities,
});
// export function AnalyzeView(/* props */) {
export class AnalyzeView extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.banner}>
          <div className="container">
            <p className={styles.lead}>
              LINCS aims to create a network-based understanding of biology by cataloging changes
              in gene expression and other cellular processes that occur when cells are exposed
              to a variety of perturbing agents.
            </p>
            <Link
              to="/discover"
              className={`btn btn-outline-inverse btn-lg ${styles['discover-btn']}`}
            >
              Discover LINCS Data
            </Link>
            <Link
              to="/analyze"
              className={`btn btn-outline-inverse btn-lg ${styles['analyze-btn']}`}
            >
              Analyze Your Data
            </Link>
          </div>
        </div>
        <div className={styles.section}>
          <div className="container">
            <h2 id="getting-started" className={styles.title}>Getting Started</h2>
            <p className={styles['section-lead']}>
              Whether you'd like to use LINCS tools to analyze your own data or discover new data
              generated by the LINCS program, getting started is quick and easy.
            </p>
            <div className="row">
              <div className="col-sm-6 m-b-3">
                <h4>Title about Discovering Data</h4>
                <p>
                  Discover data. Discover data. Discover data. Discover data. Discover data.
                  Discover data.
                </p>
              </div>
              <div className="col-sm-6 m-b-3">
                <h4>Title about LINCS tools</h4>
                <p>
                  LINCS tools. LINCS tools. LINCS tools. LINCS tools. LINCS tools.
                  LINCS tools.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <div className="container">
            <h2 className={styles.title}>Getting Started</h2>
            <p className={styles['section-lead']}>
              Whether you'd like to use LINCS tools to analyze your own data or discover new data
              generated by the LINCS program, getting started is quick and easy.
            </p>
            <div className="row">
              <div className="col-sm-6 m-b-3">
                <h4>Title about Discovering Data</h4>
                <p>
                  Discover data. Discover data. Discover data. Discover data. Discover data.
                  Discover data.
                </p>
              </div>
              <div className="col-sm-6 m-b-3">
                <h4>Title about LINCS tools</h4>
                <p>
                  LINCS tools. LINCS tools. LINCS tools. LINCS tools. LINCS tools.
                  LINCS tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AnalyzeView.propTypes = {
  loginUser: PropTypes.func,
  entities: PropTypes.object,
  push: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {
  loginUser,
  push,
})(AnalyzeView);
