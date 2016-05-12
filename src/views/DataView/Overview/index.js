import React from 'react';
import { Link } from 'react-router';

import PageBanner from 'components/PageBanner';
import PageNav from 'components/PageNav';
import styles from './Overview.scss';
import dataLevelsImg from './data-levels.png';

export default function Overview(/* props */) {
  return (
    <div className={styles.wrapper}>
      <PageBanner title="LINCS Datasets" includeSearchBar />
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
            <p>
              The <Link to="/data/releases">data releases</Link> page describes the
              collections of data released and planned to be released to the public
              by the LINCS consortia with instruction on how to access, download
              and cite it.
            </p>
            <h3>Data Levels</h3>
            <p className="clearfix">
              <img
                className={styles['data-levels']}
                src={dataLevelsImg}
                alt="LINCS Data Levels"
              />
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
              The L1000 data-levels definitions can be found
              at: <a href="http://www.lincscloud.org/l1000/">http://www.lincscloud.org/l1000/</a>.
            </p>
            <p>
              The TCGA data-level definitions can be found
              at: <a href="https://tcga-data.nci.nih.gov/tcga/tcgaDataType.jsp">https://tcga-data.nci.nih.gov/tcga/tcgaDataType.jsp</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
