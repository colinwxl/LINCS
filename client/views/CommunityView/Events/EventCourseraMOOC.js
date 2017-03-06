import React, { PropTypes } from 'react';

import styles from './Events.scss';
import dcicImg from '../Overview/dcic.png';

import formatDate from 'utils/formatDate';

export default function EventCourseraMOOC(props) {
  const mooc = props.mooc;
  return (
    <div className={styles['ann-card']}>
      {/*
        <h6 className={`${styles['ann-group']} ${styles.course}`}>MOOC ON COURSERA</h6>
      */}
      <h6 className={`${styles['ann-group']} ${styles.course}`}>
        {mooc && formatDate(mooc.eventDate)}
      </h6>
      <div className={styles['ann-content']}>
        <h3>MOOC on Coursera</h3>
        <h4>
          Big Data Science with the BD2K-LINCS Data Coordination and Integration Center
        </h4>
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
  );
}


EventCourseraMOOC.propTypes = {
  mooc: PropTypes.object,
};
