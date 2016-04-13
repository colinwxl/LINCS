import React, { Component } from 'react';
import { Link } from 'react-router';

import PageBanner from 'components/PageBanner';
import PageNav from 'components/PageNav';
import styles from './Overview.scss';

// TODO: Make a stateless function once completed. Leave for now to enable hot-reloading.
/* eslint react/prefer-stateless-function:0 max-len:0 */
export default class Overview extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <PageBanner title="The LINCS Consortium" />
        <div className="container">
          <div className="row">
            <PageNav mainPage="Overview" />
            <div className="col-md-9 col-md-pull-3">
              <h1 className={styles.title}>Overview</h1>
              <p>
                The LINCS consortium is an NIH Common Fund program that supports six Data
                and Signature Generation Centers (DSGCs) and the BD2K-LINCS Data Integration
                and Coordination Center. The LINCS program is currently in phase II after
                the completion of pilot phase I in fiscal year 2013.
              </p>
              <img src={require('./centers-map.png')} alt="Map of LINCS Centers" />
              {/* <div className="visme_d" data-url="g7mx1v40-3-2" data-w="855" data-h="585" /> */}
              <h2>LINCS Production Phase II</h2>
              <h5>LINCS Data and Signature Generation Centers</h5>
              <p>
                The <Link title="Data and Signature Generation Centers" to="/centers/data-and-signature-generating-centers">LINCS Data and Signature Generation Centers</Link> are
                six research centers focused on high-throughput experiments that examine
                the changes that occur when a variety of different cell lines are exposed to
                perturbations.
              </p>
              <h5>BD2K-LINCS Data Coordination and Integration Center</h5>
              <p>
                The <a title="BD2K-LINCS Data Coordination and Integration Center" href="http://lincs-dcic.org/#/" target="_blank">BD2K-LINCS Data Coordination and Integration Center (DCIC)</a> is
                the data coordination center for the NIH Common Fund’s Library of Integrated
                Network-based Cellular Signatures (LINCS) program, which aims to characterize how a
                variety of types of cells, tissues and networks respond to disruption by drugs and
                other factors. The center supports data science research focusing on interpreting and
                integrating LINCS-generated data from different data types and databases in the
                LINCS-funded projects. This center is co-funded by <a title="Big Data to Knowledge" href="http://bd2k.nih.gov/#sthash.UHtPu2rQ.dpbs" target="_blank">BD2K</a> and
                the <a title="NIH Common Fund" href="https://commonfund.nih.gov/" target="_blank">NIH Common Fund</a>.
              </p>
              <p>
                The organizational structure of the Center includes a strong Consortium Coordination
                and Administration (CCA) that supports and manages the Center’s goals and
                deliverables, and coordinates activities across the LINCS and BD2K programs.
              </p>
              <h2>LINCS Pilot Phase I (fiscal year completion 2013)</h2>
              <p>
                The <Link title="LINCS Pilot Phase 1" to="/centers/phase-one">LINCS Pilot Phase 1</Link> was
                composed of 10 centers: two data production/analysis centers, that generated data for
                the LINCS matrix, four centers dedicated to developing technology to complement and
                facilitate the collection of cellular signatures, and four centers that developed
                computational tools for analyzing the data produced by the data production centers.
                In addition, two external supplements, as well as a number of internal collaborations,
                supported and augmented the work done by the LINCS centers.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
