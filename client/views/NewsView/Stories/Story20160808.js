import React from 'react';

import Story from './Story';
import styles from '../NewsView.scss';
import courseheader from './images/course_header.png';

export default function Story20160808() {
  return (
    <Story
      title="Big Data Science with the BD2K-LINCS Data Coordination and
      Integration Center"
      date="August 8th, 2016"
    >
      <h5>MOOC on Coursera</h5>
      <div className={styles['img-wrap']}>
        <a
          href="http://lincs-dcic.org/#/"
          target="_blank"
        >
          <img
            className={`${styles['img-border']}`}
            src={courseheader}
            alt="Article header"
          />
        </a>
      </div>
      <p>
       The&nbsp;
        <a
          href="http://lincs-dcic.org/#/"
          target="_blank"
        >
        BD2K-LINCS Data Coordination and Integration Center (DCIC)
        </a> launched the second session of their MOOC on Coursera on August 8, 2016.
       This course covers various methods of analysis including:
       unsupervised clustering, gene-set enrichment analyses,
       interactive data visualization, and supervised machine learning
       with application to data from the Library of Integrated Network-
       based Cellular Signature (LINCS) program, and other relevant Big Data
       from high content molecular omics data and phenotype profiling of mammalian cells.
      </p>
      <p>
        Go to <a href="https://www.coursera.org/learn/bd2k-lincs">
        Coursera Course</a>
      </p>

      <span className={styles['twitter-label']}>
        <a
          title="Follow @BD2KLINCSDCIC on Twitter"
          href="https://twitter.com/BD2KLINCSDCIC"
        >
          Follow <strong>@BD2KLINCSDCIC</strong>
        </a>
      </span>
    </Story>
  );
}
