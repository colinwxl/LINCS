import React from 'react';
import { Link } from 'react-router';

import styles from './Workflow.scss';
import PageBanner from 'components/PageBanner';
import lincsDataPortalScreenshot from './lincs-data-portal-screenshot.png';
import lincsDatasetPageScreenshot from './lincs-dataset-page-screenshot.png';


export default function Workflow() {
  return (
    <div className={styles.wrapper}>
      <PageBanner
        title="LINCS Workflow"
        subTitle="Find out if LINCS has collected data from a specific cell line"
      />
      <div className="container">
        <div className="row">
          <div className={`col-xl-9 ${styles.workflow} ${styles['cell-line']}`}>
            <p>
              The <Link to="/centers/data-and-signature-generating-centers">LINCS Data and
              Signature Generation Centers (DSGCs)</Link> generate data concerning the response
              of human cells to small molecule, genetic and drug perturbations to better
              understand their mechanisms of action. The first step to determine whether a cell
              line of your interest was profiled by one of the LINCS centers is to query the
              LINCS Data Portal entities interface by typing the cell line name in the search
              bar available from <a href="http://lincsportal.ccs.miami.edu/entities/" target="_blank">here</a>.
              If you found a match, you can explore the data generated
              by each of the DSGCs.
              <img src={lincsDataPortalScreenshot} alt="LINCS Data Portal screenshot" />
            </p>
            <p>
              If you are not sure about the cell line name but curious about cell lines from a
              specific tissue of origin, please try the tree view available from
              <Link to="/data/releases">here</Link>.
              <img src={lincsDatasetPageScreenshot} alt="LINCS dataset page screenshot" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
