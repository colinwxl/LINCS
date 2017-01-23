import React from 'react';
import styles from '../AppsView.scss';
import cannedAnalysisSeed from './canned_analysis_seed.json';

export default function CannedAnalysisModule() {
  const analyses = cannedAnalysisSeed;
  return (
    <div className="row">
      <h3 className={styles['section-title']}>Canned Analysis</h3>
      <h5 className="m-t-3 text-xs-center">
        No analysis found. Please try again later.
      </h5>
    </div>
  );
}
