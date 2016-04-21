import React from 'react';

import styles from './Workflow.scss';
import PageBanner from 'components/PageBanner';

export default function Workflow() {
  return (
    <div className={styles.wrapper}>
      <PageBanner
        title="LINCS Workflow"
        subTitle=""
      />
      <div className="container">
        <div className="row">
          <div className={`col-xl-9 ${styles.workflow}`}>
          </div>
        </div>
      </div>
    </div>
  );
}
