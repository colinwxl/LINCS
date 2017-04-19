/* eslint-disable */
import React from 'react';
import { Link } from 'react-router';
import Collapsible from 'react-collapsible';
import CannedAnalysisCard from 'components/CannedAnalysisCard';
import styles from '../AppsView.scss';
import cannedAnalysisSeed from './canned_analysis_seed.json';

const generateUrlForDataset = (dataset) => {
  const ldpBaseDatasetUrl = 'http://lincsportal.ccs.miami.edu/datasets/#/view/';
  const hmsBaseDatasetUrl = 'http://lincs.hms.harvard.edu/db/datasets/';
  let datasetUrl;
  if (dataset.indexOf('HMS') === 0) {
    datasetUrl = hmsBaseDatasetUrl + dataset.slice(4);
  } else {
    datasetUrl = ldpBaseDatasetUrl + dataset;
  }
  return datasetUrl;
};

export default function CannedAnalysisModule() {
  if (cannedAnalysisSeed && cannedAnalysisSeed.length > 0) {
    return (
      <div className="row">
        <div className="col-xl-12">
          {
            cannedAnalysisSeed.map((ca, idx) => {
              return (
                <div key={idx} className="col-xs-12 col-md-6 col-xl-3">
                  <CannedAnalysisCard ca={ca} />
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
  return (
    <div className="row">
      <h3 className={styles['section-title']}>Canned Analysis</h3>
      <h5 className="m-t-3 text-xs-center">
        No analysis found. Please try again later.
      </h5>
    </div>
  );
}
