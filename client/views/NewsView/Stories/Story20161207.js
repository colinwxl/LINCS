import React from 'react';

import Story from './Story';
import styles from '../NewsView.scss';
// import dToxS from './images/DToxS.png';

export default function Story20161207() {
  return (
    <Story
      title="BD2K-LINCS DCIC at the 2016 BD@K All-Hands Meeting and Open Data Science Symposium"
      date="December 7th, 2016"
    >
      <p>
        Members of the BD2K-LINCS Data Coordination and Integration Center
        participated in the BD2K All-Hands Meeting and Open Data Science
        Symposium in Bethesda, MD which took place on November 29 – December
        1, 2016. The BD2K All-Hands Meeting brought together researchers,
        educators, developers, and trainees funded by the BD2K Initiative.
        The goals of the All-Hands Meeting were to showcase the work being
        done by BD2K-sponsored programs and to build a cohesive BD2K consortium
        that maximizes synergies between participants.
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
