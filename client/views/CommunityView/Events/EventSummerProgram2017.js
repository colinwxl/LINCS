import React from 'react';
import styles from './Events.scss';
import summerInterns2016Img from 'static/files/summer_interns/dcic_ismms_summer-1.jpg';

export default function EventSummerProgram2017() {
  return (
    <div className={styles['ann-card']}>
      {/*
        <h6 className={`${styles['ann-group']} ${styles.training}`}>TRAINING PROGRAM</h6>
      */}
      <h6 className={`${styles['ann-group']} ${styles.training}`}>June 5, 2017</h6>
      <div className={styles['ann-content']}>
        <h3>Research Training Program</h3>
        <h4>
          BD2K-LINCS DCIC Summer Research Training Program
          in Biomedical Big Data Science
        </h4>
        <div className={styles['info-block']}>
          <img
            className={styles['inline-img-left']}
            src={summerInterns2016Img}
            alt="summer-interns"
            width="331"
            height="173"
          />
          <strong>Program Dates: June 5, 2017 - August 11, 2017</strong>
        </div>
        <div className="clearfix">
          <p>
            The BD2K-LINCS DCIC Summer Research Training Program in Biomedical Big
            Data Science is a research intensive ten-week training program for
            undergraduate and graduate students. The DCIC supports data science
            research focused on developing methods that would further extract knowledge
            from LINCS data by integrating LINCS data with other relevant resources.
            Summer fellows conduct faculty-mentored independent research projects
            within laboratories affiliated with the Center in the following areas:
            data integration, dynamic data visualization, machine learning, data
            harmonization, computational drug discovery, metadata and APIs,
            knowledge modeling, Bayesian networks and statistical mining.&nbsp;
            <a href="http://lincs-dcic.org/#/summer-research-app" target="_blank">
              How to Apply
            </a>
            <br />
            <br />
            Application Deadline: March 1, 2017 at 12 Midnight Eastern Time
            <br />
            <br />
            <a href="http://lincs-dcic.org/#/summer-fellows-2016" target="_blank">
              2016 BD2K-LINCS DCIC Summer Fellows and Research Projects
            </a>
            <br />
            <a href="http://lincs-dcic.org/#/summer-fellows-2015#nav">
              2015 BD2K-LINCS DCIC Summer Fellows and Research Projects
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
