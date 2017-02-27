import React from 'react';
import styles from '../Overview.scss';
import dcicImg from '../dcic.png';

export default function EventBD2KCrowdSourcing() {
  return (
    <div className={styles['ann-card']}>
      <h6 className={styles['ann-group']}>CROWDSOURCING CHALLENGE</h6>
      <div className={styles['ann-content']}>
        <h3>BD2K-LINCS DCIC Crowdsourcing Portal</h3>
        <img
          className={styles['inline-img-left']}
          src={dcicImg}
          alt="dcic"
          width="231"
          height="173"
        />
        <p> As part of our educational efforts to enhance awareness of LINCS data and
          explain the efforts of LINCS to the general public, the DCIC developed
          a crowdsourcing portal that engages the research community in various
          micro- and megatasks. <a href="http://www.maayanlab.net/crowdsourcing/">Learn More</a>
        </p>
      </div>
    </div>
  );
}
