import React from 'react';
import { Link } from 'react-router';

import PageBanner from 'components/PageBanner';
import PageNav from 'components/PageNav';
import styles from './Overview.scss';

export default function Overview(/* props */) {
  return (
    <div className={styles.wrapper}>
      <PageBanner title="LINCS Datasets" />
      <div className="container">
        <div className="row">
          <PageNav mainPage="Overview" isDataPage />
          <div className="col-md-9 col-md-pull-3">
            <h2>Overview</h2>
            <p>
              The <Link to="/centers/data-and-signature-generating-centers">
                LINCS Data and Signature Generation Centers
              </Link> produce
              a variety of data for the library. For such data to be standardized,
              integrated, and coordinated in a manner that promotes consistency
              and allows comparison across different cell types, assays and conditions,
              the <Link to="/centers/dcic">BD2K-LINCS DCIC</Link> together with the DSGCs
              develop and employ data standards.
            </p>
            <p>
              Once collected, LINCS data is made available to the research community in
              various formats so that it can be used in different types of analyses.
            </p>
            <p>
              The <Link to="/data/standards">data standards</Link> page describes the data
              structures that are being developed by the LINCS Data Working Group.
            </p>
            <h3>Data Levels</h3>
            <p className="clearfix">
              The LINCS project embraces and aims to further develop the concept of data
              levels for results from the various assays employed within the LINCS consortia.
              During the first phase of the LINCS project the Broad and HMS teams defined
              data-levels for the results produced by the several assays they employed.
              The concept of data levels is also borrowed from the success of this approach
              by The Cancer Genome Atlas (TCGA) project. Definitions for data levels for all
              the LINCS assays are currently being developed by the BD2K-LINCS DCIC and the
              LINCS DSGCs and will be posted here soon.
            </p>
            <p>
              The TCGA data-level definitions can be found&nbsp;
              <a
                target="_blank"
                href="https://gdc.cancer.gov/"
              >
                here
              </a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
