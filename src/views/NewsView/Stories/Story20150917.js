import React from 'react';

import Story from './Story';
import styles from '../NewsView.scss';
import dcicMooc from './images/dcic-mooc.png';


export default function Story20150917() {
  return (
    <Story
      title="New Course: Big Data Science With the BD2K-LINCS Data Coordination
      and Integration Center"
      date="September 17th, 2015"
    >
      <p>
        The <a href="http://lincs-dcic.org" target="_blank">BD2K-LINCS Data
        Coordination and Integration Center (DCIC)</a> launched this MOOC on
        Coursera on <strong>September 15, 2015</strong> which covers various
        methods of analysis including: unsupervised clustering, gene-set enrichment
        analyses, data visualization, and supervised machine learning applications
        to LINCS data.
      </p>
      <p>
        <strong>Go to Course: </strong>
        <a href="https://www.coursera.org/course/bd2klincs">
          https://www.coursera.org/course/bd2klincs
        </a>
      </p>
      <div className={styles['img-wrap']}>
        <img
          className={`${styles['img-border']}`}
          src={dcicMooc}
          alt="BD2K-LINCS DCIC MOOC"
        />
      </div>
      <h5>Course Summary</h5>
      <p>
        The <a href="http://lincs-dcic.org" target="_blank">BD2K-LINCS Data
        Coordination and Integration Center (DCIC)</a> is commissioned to organize,
        analyze, visualize and integrate this data with other publicly available relevant
        resources. In this course we will introduce the various Centers that collect
        data for LINCS, describing the experimental data procedures and the various
        data types. We will then cover the design and collection of metadata and how
        metadata is linked to ontologies. We will then cover basic data processing
        and data normalization methods to clean and harmonize LINCS data. This will
        follow with a discussion about how the data is served as RESTful APIs and JSON,
        and for this we will cover concepts from client-server computing. Most
        importantly, the course will focus on various methods of analysis including:
        unsupervised clustering, gene-set enrichment analyses, data visualization,
        and supervised machine learning applications to LINCS data and other
        relevant Big Data from molecular biomedicine.
      </p>
    </Story>
  );
}
