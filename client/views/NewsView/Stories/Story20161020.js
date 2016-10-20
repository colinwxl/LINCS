import React from 'react';

import Story from './Story';
import styles from '../NewsView.scss';
import dToxS from './images/DToxS.png';

export default function Story20161020() {
  return (
    <Story
      title="DToxS Center"
      date="October 20th, 2016"
    >
      <img
        src={dToxS}
        alt="dToxS"
        style={{ width: '10rem' }}
        className={styles['inline-img-right']}
      />
      <p>
        Members of the DToxS Center recently published in bioRxiv
        “Clinically-weighted transcriptomic signatures for protein
        kinase inhibitor associated cardiotoxicity”.
        <br />
        <a
          href="http://biorxiv.org/content/early/2016/09/19/075754"
          target="_blank"
        >
          http://biorxiv.org/content/early/2016/09/19/075754
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
