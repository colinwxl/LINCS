import React from 'react';

import Story from './Story';
import styles from '../NewsView.scss';
import dToxS from './images/DToxS.png';

export default function Story20170911() {
  return (
    <Story
      title="Systems Pharmacology Symposium 2017"
      subtitle="Systems Pharmacology Approaches Toward Innovative Treatments for Heart Failure"
      date="September 11th, 2017"
    >
      <p>
        <strong>
          Date: <i>September 29, 2017</i>
        </strong>
      </p>
      <img
        src={dToxS}
        alt="dToxS"
        style={{ width: '10rem' }}
        className={styles['inline-img-right']}
      />

      <p>
        Members of the DToxS Center will host the <a href="https://www.systems-pharmacology-symposium.com/" target="_blank">Systems Pharmacology Symposium 2017</a> at the Icahn School of Medicine at Mount Sinai. This one-day symposium, will bring together leading scientists from academia, industry, and regulatory agencies to discuss how modeling and simulation can be used in drug development, including for the early prediction of toxicity.
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
