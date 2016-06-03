import React from 'react';

import Story from './Story';
import styles from '../NewsView.scss';
import reproducibility from './images/reproducibility-header.png';


export default function Story20160523() {
  return (
    <Story
      title="Editorial In Science Translational Medicine"
      date="May 23rd, 2016"
    >
      <h5>Reproducibility will only come with data liberation</h5>
      <p>
        In a recent editorial in Science Translational Medicine, Mohammed AlQuraishi and Peter
        Sorger from the <a href="http://lincs.hms.harvard.edu/" target="_blank">HMS LINCS Center</a>
        make the case for improving accessibility and usability of published experimental data of
        all data types.
      </p>
      <p>
        AlQuraishi M, Sorger PK. <strong>Reproducibility will only come with data liberation
        </strong>. <em>Sci Transl Med</em>. 2016 May 18;8(339):339ed7. <a href="http://www.ncbi.nlm.nih.gov/pubmed/27194726" target="_blank">
        PMID: 27194726</a>
      </p>
      <div className={styles['img-wrap']}>
        <img
          className={`${styles['img-border']}`}
          src={reproducibility}
          alt="Article header"
        />
      </div>
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
