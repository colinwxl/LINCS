import React from 'react';
import styles from './Events.scss';
import cmapImg from '../Overview/cmap.png';

export default function Event20160726() {
  return (
    <div className={styles['ann-card']}>
      {/*
        <h6 className={`${styles['ann-group']} ${styles.challenge}`}>CROWDSOURCING CHALLENGE</h6>
      */}
      <h6 className={`${styles['ann-group']} ${styles.challenge}`}>CROWDSOURCING CHALLENGE</h6>
      <div className={styles['ann-content']}>
        <h3>Connectivity Map Challenge: Infer the Transcriptome</h3>
        <div className="clearfix">
          <p>
            <img
              className={styles['inline-img-left']}
              src={cmapImg}
              alt="cmap"
            />
            The <strong>LINCS Center for Transcriptomics</strong>, in partnership with the
            Crowd Innovation Lab at Harvard Business School, launched their first
            challenge, “Infer the Transcriptome”. Contestants were provided with a
            large dataset of ~100,000 gene expression profiles on which to train an
            inference model. Models were scored based on their accuracy in predicting
            gene expression values for non-landmark genes in a separate test dataset.
            The contest format was a 2-week marathon featuring a continuously updated
            leaderboard. To determine winners, each contestant’s best model was scored
            on its performance on a holdout dataset. <a href="https://community.topcoder.com/longcontest/stats/?module=ViewOverview&rd=16753" target="_blank">Leaderboard</a>
          </p>
        </div>
      </div>
    </div>
  );
}
