import React from 'react';
import styles from './Events.scss';

export default function Event20171023() {
  return (
    <div className={styles['ann-card']}>
      <h6 className={`${styles['ann-group']} ${styles.challenge}`}>October 23-24, 2017</h6>
      <div className={styles['ann-content']}>
        <h3>Annual Meeting</h3>
        <h4>LINCS Consortium Meeting 2017</h4>
        {
        // <img
        //   className={styles['inline-img-left']}
        //   src={dcicImg}
        //   alt="dcic"
        //   width="231"
        //   height="173"
        // />
        }
        <p>
          Details will be posted soon!
        </p>
      </div>
    </div>
  );
}
