import React from 'react';

import Story from './Story';
import styles from '../NewsView.scss';
import hmsLincsLogo from './images/HMS_LINCS_logo.jpg';

export default function Story20170807() {
  return (
    <Story
      title="ICSB 2017 Workshop on Drug Response Measurement and Analysis"
      date="August 7th, 2017"
    >
      <img
        src={hmsLincsLogo}
        alt="hmsLincsLogo"
        style={{ width: '10rem' }}
        className={styles['inline-img-right']}
      />
      <p>
        HMS LINCS researchers delivered a workshop on Drug Response Measurement and Analysis
        at the International Conference on Systems Biology 2017. They presented the experimental and
	computational methods they developed to generate reproducible dose-response
	measurements across cell lines, as well as theoretical approaches to
	quantify the sensitivity of cells to single drugs and drug combinations.
      </p>
      <p>
        <a href="http://lincs.hms.harvard.edu/icsb-2017-workshop-drug-response/" target="_blank">
         Workshop Materials
        </a>
      </p>
      <span className={styles['twitter-label']}>
        <a
          title="Follow @LINCSProgram on Twitter"
          href="https://twitter.com/LINCSProgram"
        >
          Follow <strong>@LINCSProgram</strong>
        </a>
      </span>
    </Story>
  );
}
