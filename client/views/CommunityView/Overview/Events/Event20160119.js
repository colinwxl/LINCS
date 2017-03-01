import React from 'react';
import styles from '../Overview.scss';
import sbdssImg from '../SBDSS.jpg';

export default function Event20160119() {
  return (
    <div className={styles['ann-card']}>
      <h6 className={`${styles['ann-group']} ${styles.symposia}`}>January 19, 2016</h6>
      <div className={styles['ann-content']}>
        <h3>LINCS Consortium Meeting 2016</h3>
        <div className="clearfix">
          <a href="http://lincs-dcic.org/#/2016-data-science-symposium">
            <img
              className={styles['inline-img-left']}
              src={sbdssImg}
              alt="SBDSS"
              width="350"
            />
          </a>
          <p>
            The <a href="http://lincs-dcic.org/#/">BD2K-LINCS DCIC</a> and the University
            of Miami hosted the
            two-day <a href="http://lincs-dcic.org/#/2016-data-science-symposium">
            Systems Biology Data Science Symposium (SBDSS)</a> on January 19-20, 2016.
            This symposium brought together the BD2K-LINCS DCIC, local researchers, and
            outside experts who apply or develop computational systems biology resources.
            In presentations, a poster reception and several working sessions, the DCIC
            showcased <a href="http://lincs-dcic.org/#/resources">
            tools/resources</a> and <a href="http://lincs-dcic.org/#/about#nav">
            scientific projects</a>, connected developers with users, initiated
            new collaborations, and obtained feedback from expert and casual users of
            computational systems biology resources. <a href="https://www.youtube.com/playlist?list=PL0Bwuj8819U-FM6lY39xWJmHXe87TT-GZ">Watch on YouTube</a>
          </p>
        </div>
      </div>
    </div>
  );
}
