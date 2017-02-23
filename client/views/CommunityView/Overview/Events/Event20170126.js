import React from 'react';
import styles from '../Overview.scss';
import cmapImg from '../cmap.png';

export default function Event20170126() {
  return (
    <div className="row">
      <div className="col-md-9">
        <div className={styles['ann-card']}>
          <h6 className={styles['ann-group']}>CROWDSOURCING CHALLENGE</h6>
          <div className={styles['ann-content']}>
            <h3>
              <a
                href="http://crowdsourcing.topcoder.com/cmap2"
                target="_blank"
                style={{ textDecoration: 'none' }}
              >
                Connectivity Map 2 Data Science Challenge
              </a>
            </h3>
            <p>
              <img
                className={styles['inline-img-left']}
                src={cmapImg}
                alt="cmap"
              />
              The LINCS Center for Transcriptomics at the Broad
              Institute launched a second data science challenge
              through the Topcoder crowd-sourcing platform.
              The challenge is currently underway!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
