import React from 'react';

import Story from './Story';
import styles from '../NewsView.scss';
import dcic from 'static/files/centers_logos/DCIC.svg';

export default function Story20171005() {
  return (
    <Story
      title="BD2K-LINCS DCIC 2018 Summer Research Training Program in Biomedical Big Data Science"
      date="October 5th, 2017"
    >
      <img
        src={dcic}
        alt="dcic"
        style={{ width: '10rem' }}
        className={styles['inline-img-right']}
      />
      <p>
        We are currently accepting applications for the&nbsp;
        <a href="http://lincs-dcic.org/#/summer-research-app#nav" target="_blank">
          BD2K-LINCS DCIC 2018 Summer Research Training
          Program in Biomedical Big Data Science
        </a>
        ,  a research intensive ten-week training program for undergraduate and
        graduate students. The DCIC supports data science research focused on
        developing methods that would further extract knowledge from LINCS data
        by integrating LINCS data with other relevant resources. Summer fellows
        conduct faculty-mentored independent research projects
        within laboratories affiliated with the Center in the following areas:
	dynamic data visualization, machine learning, data harmonization,
        computational drug discovery, metadata and APIs, knowledge modeling, Bayesian
        networks and statistical mining.&nbsp;
        <br />
        <a href="http://lincs-dcic.org/#/summer-research-app" target="_blank">
          How to Apply
        </a>
        <br />
      </p>

      <div className={styles['info-block']}>
        <strong>
          Application Deadline: February 1, 2018 at 12 Midnight Eastern Time
        </strong>
        <br />
        Program Dates: June 4, 2018 - August 10, 2018
        <ul>
          <li>
            <a href="http://lincs-dcic.org/#/summer-fellows-2017" target="_blank">
              2017 BD2K-LINCS DCIC Summer Fellows and Research Projects
            </a>
          </li>
          <li>
            <a href="http://lincs-dcic.org/#/summer-fellows-2016" target="_blank">
              2016 BD2K-LINCS DCIC Summer Fellows and Research Projects
            </a>
          </li>
          <li>
            <a href="http://lincs-dcic.org/#/summer-fellows-2015#nav" target="_blank">
              2015 BD2K-LINCS DCIC Summer Fellows and Research Projects
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.youtube}>
        <iframe
          src="https://www.youtube.com/embed/gJ_365yjTds?list=PLfq4yYrYksViQ4DuwuNeI4dmlVTnIzyDy"
          frameBorder="0"
          allowFullScreen
        />
        <p>
          <strong>
            Presentation by our 2017 BD2K-LINCS DCIC Summer Fellow Christopher Tseng
          </strong>
        </p>
      </div>
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
