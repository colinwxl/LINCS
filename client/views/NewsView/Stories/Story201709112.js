import React from 'react';

import Story from './Story';
import styles from '../NewsView.scss';
import summerInterns2017 from './images/dcic_ismms_summer17.jpg';


export default function Story201609112() {
  return (
    <Story
      title="BD2K-LINCS DCIC Summer Research Training Program in Biomedical Big Data Science"
      date="September 11th, 2017"
    >
      <div className="clearfix">
        <img
          src={summerInterns2017}
          alt="summer interns"
          className={styles['inline-img-right']}
        />
        <p>
          On the final day of the ten-week training program, the BD2K-LINCS DCIC hosted a special presentation session featuring the research projects of the summer fellows in the <a href="http://lincs-dcic.org/summer-fellows-2017#nav" target="_blank">2017 BD2K-LINCS DCIC Summer Research Training Program in Biomedical Big Data Science</a>. Summer fellows conducted faculty-mentored independent research projects within laboratories affiliated with the Center in the following areas: dynamic data visualization, machine learning, and data harmonization.
        </p>
        <p>
          <a href="http://lincs-dcic.org/#/summer-research-app" target="_blank">Program Description</a>
          <br />
          <a href="https://www.youtube.com/playlist?list=PLfq4yYrYksViQ4DuwuNeI4dmlVTnIzyDy" target="_blank">
          Video Summaries of Research Projects</a>

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
