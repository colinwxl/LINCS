import React from 'react';

import Story from './Story';
import styles from '../NewsView.scss';
import breastCancerBrowser from './images/breast_cancer_browser.png';

export default function Story20160916() {
  return (
    <Story
      title="Breast Cancer Browser"
      date="September 16th, 2016"
    >
      <p>
        The <a href="http://lincs.hms.harvard.edu" target="_blank">HMS LINCS</a>
      &nbsp;Center launched its&nbsp;
        <a
          href="http://www.cancerbrowser.org"
          target="_blank"
        >
          Breast Cancer Browser
        </a>, a data portal that aggregates and visualizes both published and
        unpublished datasets of significant interest to researchers studying
        breast cancer biology, drug response, and drug polypharmacology.
      </p>
      <img
        src={breastCancerBrowser}
        alt="Breast Cancer Browser Screenshot"
      />
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
