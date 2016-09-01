import React from 'react';

import Story from './Story';
import styles from '../NewsView.scss';
import summerInterns2016 from './images/dcic_ismms_summer-1.jpg';


export default function Story20160616() {
  return (
    <Story
      title="BD2K-LINCS DCIC Summer Research Training Program in Biomedical Big Data Science"
      date="August 12th, 2016"
    >
      <div className="clearfix">
        <img
          src={summerInterns2016}
          alt="summer interns"
          className={styles['inline-img-right']}
        />
        <p>
          On the final day of the ten-week training program, the summer fellows
          in the BD2K-LINCS DCIC Summer Research Training Program in Biomedical
          Big Data Science presented their projects at the ISMMS SURP poster
          session as well as during a special LINCS webinar. Summer fellows
          conducted faculty-mentored independent research projects within
          laboratories affiliated with the Center in the following areas: data
          integration, dynamic data visualization, machine learning, data
          harmonization, computational drug discovery, metadata and APIs,
          knowledge modeling, Bayesian networks and statistical mining.
        </p>
        <p>
          <a href="http://lincs-dcic.org/#/summer-research-app" target="_blank">Program Description</a>
          <br />
          <a href="http://lincs-dcic.org/#/summer-fellows-2016" target="_blank">
            2016 Summer Fellows and Research Projects
          </a>
        </p>
        <span className={styles['twitter-label']}>
          <a
            title="Follow @BD2KLINCSDCIC on Twitter"
            href="https://twitter.com/BD2KLINCSDCIC"
          >
            Follow <strong>@BD2KLINCSDCIC</strong>
          </a>
        </span>
      </div>
    </Story>
  );
}
