import React from 'react';

import Story from './Story';
import styles from '../NewsView.scss';
import exploreHmsImg from './images/explore-hms-lincs.jpg';


export default function Story20160406() {
  return (
    <Story
      title="HMS LINCS Center Updates"
      date="April 6th, 2016"
    >
      <p>
        <a href="http://lincs.hms.harvard.edu/db/datasets/20260/" target="_blank">Dose response metrics</a> were released for the drug combinations tested in the LINCS Pilot Phase Joint Project and analyzed by <a href="http://lincs.hms.harvard.edu/db/datasets/20260/" target="_blank">imaging by the HMS LINCS Center</a> and by <a href="http://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE70138" target="_blank"> L1000 from the Broad LINCS Center</a>.
      </p>
      <div className={styles['img-wrap']}>
        <img
          className={`${styles['img-border']}`}
          src={exploreHmsImg}
          alt="Explore HMS LINCS"
        />
      </div>
      <p>Three datasets were released that assess the effects of cell plating density on the calculation of dose-response metrics for 6 breast cancer cell lines treated with 12 different kinase inhibitors. See <a href="http://lincs.hms.harvard.edu/db/datasets/20258/" target="_blank">HMS LINCS Dataset #20258</a> for a comparison of metrics based on standard, cell count-based calculations and metrics based on using newly-derived, growth rate-independent calculations.
      </p>
    </Story>
  );
}
