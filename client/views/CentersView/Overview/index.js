import React, { Component } from 'react';
import { Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import PageBanner from 'components/PageBanner';
import PageNav from 'components/PageNav';
import CenterWidgetsContainer from 'components/CenterWidgetsContainer';
import styles from './Overview.scss';
import centersMapImg from './centers-map.png';

const dsgcRoute = '/centers/data-and-signature-generating-centers';

export default class Overview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapTab: 'staticMap',
    };
  }

  handleSMClicked = () => { this.setState({ mapTab: 'staticMap' }); }
  handleMWClicked = () => { this.setState({ mapTab: 'mapWidget' }); }

  render() {
    const { mapTab } = this.state;
    const isStaticMap = mapTab === 'staticMap';
    const isMapWidget = mapTab === 'mapWidget';

    return (
      <div className={styles.wrapper}>
        <PageBanner
          title="The LINCS Consortium"
          subTitle="The Consortium consists of six DSGCs and one DCIC"
        />
        <div className="container">
          <div className="row">
            <PageNav mainPage="Overview" />
            <div className="col-md-9 col-md-pull-3">
              <h1 className={styles.title}>Overview</h1>
              <p>
                The LINCS Consortium is an NIH Common Fund program that supports six Data
                and Signature Generation Centers (DSGCs) and the BD2K-LINCS Data Integration
                and Coordination Center. The LINCS program is currently in phase II after
                the completion of pilot phase I in fiscal year 2013.
              </p>

              <div>
                <div className={`btn-group ${styles.categories}`} data-toggle="buttons">
                  <label
                    onClick={this.handleSMClicked}
                    className={
                      `btn ${styles['category-check']} ${isStaticMap ? styles.active : ''}`
                    }
                  >
                    <input
                      type="radio"
                      name="map"
                      defaultChecked={isStaticMap}
                    />
                  Map View
                  </label>
                  <label
                    onClick={this.handleMWClicked}
                    className={
                      `btn ${styles['category-check']} ${isMapWidget ? styles.active : ''}`
                    }
                  >
                    <input
                      type="radio"
                      name="centerInfo"
                      defaultChecked={isMapWidget}
                    />
                  Cards View
                  </label>
                </div>
                <div className={styles['map-and-center-info']}>
                  <ReactCSSTransitionGroup
                    transitionName={{ enter: styles.enter, enterActive: styles['enter-active'] }}
                    transitionEnterTimeout={750}
                    transitionLeave={false}
                  >
                    {
                      isStaticMap ?
                        <img src={centersMapImg} alt="Map of LINCS Centers" /> :
                        <CenterWidgetsContainer />
                    }
                  </ReactCSSTransitionGroup>
                </div>
              </div>

              <h2>LINCS Production Phase II</h2>
              <h5>LINCS Data and Signature Generation Centers</h5>
              <p>
                The <Link title="Data and Signature Generation Centers" to={dsgcRoute}>
                LINCS Data and Signature Generation Centers</Link> are
                six research centers focused on high-throughput experiments that examine
                the changes that occur when a variety of different cell lines are exposed to
                perturbations.
              </p>
              <h5>BD2K-LINCS Data Coordination and Integration Center</h5>
              <p>
                The <a title="BD2K-LINCS Data Coordination and Integration Center" href="http://lincs-dcic.org/#/" target="_blank">
                BD2K-LINCS Data Coordination and Integration Center (DCIC)</a> is
                the data coordination center for the NIH Common Fund’s Library of Integrated
                Network-based Cellular Signatures (LINCS) program, which aims to characterize how a
                variety of types of cells, tissues and networks respond to disruption by drugs and
                other factors. The center supports data science research focusing on interpreting
                and integrating LINCS-generated data from different data types and databases in the
                LINCS-funded projects. This center is co-funded
                by <a title="Big Data to Knowledge" href="http://bd2k.nih.gov/#sthash.UHtPu2rQ.dpbs" target="_blank">
                BD2K</a> and the <a title="NIH Common Fund" href="https://commonfund.nih.gov/" target="_blank">
                NIH Common Fund</a>.
              </p>
              <p>
                The organizational structure of the Center includes a strong Consortium Coordination
                and Administration (CCA) that supports and manages the Center’s goals and
                deliverables, and coordinates activities across the LINCS and BD2K programs.
              </p>
              <h2>LINCS Pilot Phase I (fiscal year completion 2013)</h2>
              <p>
                The <Link title="LINCS Pilot Phase I" to="/centers/phase-one">
                LINCS Pilot Phase I</Link> was
                composed of 10 centers: two data production/analysis centers, that generated data
                for the LINCS matrix, four centers dedicated to developing technology to complement
                and facilitate the collection of cellular signatures, and four centers that
                developed computational tools for analyzing the data produced by the data
                production centers. In addition, two external supplements, as well as a number
                of internal collaborations, supported and augmented the work done by the LINCS
                centers.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
