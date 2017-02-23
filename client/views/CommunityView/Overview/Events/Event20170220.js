import React from 'react';
import styles from '../Overview.scss';
import dcicImg from '../dcic.png';

export default function Event20170220() {
  return (
    <div className="row">
      <div className="col-md-9">
        <div className={styles['ann-card']}>
          <h6 className={styles['ann-group']}>MOOC ON COURSERA</h6>
          <div className={styles['ann-content']}>
            <h3>
              Big Data Science with the BD2K-LINCS Data Coordination and Integration Center
            </h3>
            <div>
              <a href="http://lincs-dcic.org/#/summer-research-app#nav">
                <img
                  className={styles['inline-img-left']}
                  src={dcicImg}
                  alt="dcic"
                  width="231"
                  height="173"
                />
              </a>
              <h6><strong>
                Next session of this course begins on Coursera February 20, 2017!
              </strong></h6>
            </div>
            <p>
              This course covers various methods of analysis including:
              unsupervised clustering, gene-set enrichment analyses,
              data visualization, and supervised machine learning
              applications to LINCS data. This course also covers
              basic data processing and data normalization methods to
              clean and harmonize LINCS data and other relevant data.&nbsp;
              <a href="https://www.coursera.org/course/bd2klincs">Enroll Now</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
