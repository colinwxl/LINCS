import React from 'react';
import styles from '../AppsView.scss';

export default function CannedAnalysisModule() {
  // Plan is to parse denis's file into json and load it in via a table here
  return (
    <div className="row">
      <h3 className={styles['section-title']}>Canned Analysis</h3>
      <h5 className="m-t-3 text-xs-center">
        No tutorials found. Please try again later.
      </h5>
    </div>
  );
}
