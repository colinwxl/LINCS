import React from 'react';
import PageBanner from 'components/PageBanner';
// import { Link } from 'react-router';
import styles from './mema.scss';

export default () => (
  <div className={styles.wrapper}>
    <PageBanner
      title="Featured Interactive Data Visualization"
      subTitle={'MEMA'}
    />
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <div className={styles.wrap}>
            <iframe
              className={styles.iframe}
              frameBorder="0"
              scrolling='no'
              src="https://maayanlab.github.io/MEMAboard/"
            />
          </div>
          <div className={styles['viz-description']}>
            <h4>Overview:</h4>
            MEMA
          </div>
        </div>
      </div>
    </div>
  </div>
);
