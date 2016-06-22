import React from 'react';
import { Link } from 'react-router';

import styles from './Workflow.scss';
import PageBanner from 'components/PageBanner';
import ldpScreenshot from './images/ldp-sm-screenshot.png';

export default function Workflow() {
  return (
    <div className={styles.wrapper}>
      <PageBanner
        title="LINCS Workflow"
        subTitle="Determining whether or not a small molecule has been profiled by LINCS"
      />
      <div className="container">
        <div className="row">
          <div className={`col-xl-9 ${styles.workflow} ${styles['sm-profiled']}`}>
            <p>
              The <Link to="/centers/data-and-signature-generating-centers">
              LINCS Data and Signature Generation Centers (DSGCs)</Link> generate data
              concerning the response of human cells to small molecule and drug perturbations
              to better understand their mechanisms of action. The first step to determine
              whether the small molecule of your interest was profiled by one of the LINCS
              centers is to query the LINCS Data Portal entities interface by typing your
              small molecule of interest in the search bar available
              from <a href="http://lincsportal.ccs.miami.edu/entities/" target="_blank">
              here</a>. If you found a match, you can explore the data generated by each
              of the DSGCs.
            </p>
            <img
              className={styles['img-bordered']}
              src={ldpScreenshot}
              alt="LINCS Data Portal Screenshot"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
