import React from 'react';

import Story from './Story';
import styles from '../NewsView.scss';
import cmap from './images/cmap.png';


export default function Story20160616() {
  return (
    <Story
      title="Connectivity Map Challenge"
      date="June 16th, 2016"
    >
      <div className="clearfix">
        <h5>By the Crowd Innovation Lab at Harvard, the Broad Institute, and NIH LINCS Program</h5>
        <img
          src={cmap}
          alt="cmap logo"
          className={styles['inline-img-right']}
        />
        <p>
          The <strong>LINCS Center for Transcriptomics</strong>, in partnership with the Crowd
          Innovation Lab at Harvard Business School, is launching their first challenge, “Infer
          the Transcriptome”. Contestants will be provided with a large dataset of ~100,000 gene
          expression profiles on which to train an inference model. Models will be scored based
          on their accuracy in predicting gene expression values for non-landmark genes in a
          separate test dataset. The contest format will be a 2-week marathon featuring a
          continuously updated leaderboard. To determine winners, each contestant’s best model
          will be scored on its performance on a holdout dataset.
        </p>
        <p>
          <a href="http://crowdsourcing.topcoder.com/cmap" target="_blank">Registration</a>
        </p>
        <span className={styles['twitter-label']}>
          <a
            title="Follow @LINCSProgram on Twitter"
            href="https://twitter.com/LINCSProgram"
          >
            Follow <strong>@LINCSProgram</strong>
          </a>
        </span>
      </div>
    </Story>
  );
}
