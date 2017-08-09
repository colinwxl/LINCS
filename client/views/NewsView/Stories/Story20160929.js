import React from 'react';

import Story from './Story';
import styles from '../NewsView.scss';
import hmsLincsLogo from './images/HMS_LINCS_logo.jpg';

export default function Story20160929() {
  return (
    <Story
      title="HMS LINCS Data Release"
      date="September 29th, 2016"
    >
      <img
        src={hmsLincsLogo}
        alt="hmsLincsLogo"
        style={{ width: '10rem' }}
        className={styles['inline-img-right']}
      />
      <p>
        The&nbsp;
        <a href="http://lincs.hms.harvard.edu/" target="_blank">
          HMS LINCS Center
        </a> recently released three high-content
        immunofluorescence imaging datasets that characterize cell
        state and signaling pathway status in the MCF 10A breast
        cell line treated with EGF or selected kinase inhibitors
        (HMS LINCS Datasets&nbsp;
        <a href="http://lincs.hms.harvard.edu/db/datasets/20265/" target="_blank">
          #20265
        </a>
          ,&nbsp;
        <a href="http://lincs.hms.harvard.edu/db/datasets/20266/" target="_blank">
          #20266
        </a>
          , and&nbsp;
        <a href="http://lincs.hms.harvard.edu/db/datasets/20267/" target="_blank">
          #20267
        </a>
        ).
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
