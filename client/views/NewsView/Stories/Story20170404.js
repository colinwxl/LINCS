import React from 'react';

import Story from './Story';
import styles from '../NewsView.scss';
import dss2017 from 'static/files/swg-img.png';

export default function Story20170404() {
  return (
    <Story
      title="BD2K-LINCS Data Science Symposium 2017"
      subtitle="Systems Biology of Cellular Perturbations"
      date="February 23rd, 2017"
    >
      <p>
        <strong>
          Date: <i>May 16-18, 2017</i>
        </strong>
      </p>
      <img
        src={dss2017}
        alt="DSS 2017"
        style={{ width: '20rem' }}
        className={styles['inline-img-right']}
      />
      <p>
        The <a href="http://www.lincs-dcic.org" target="_blank">
        BD2K-LINCS Data Coordination and Integration Center
        (DCIC)</a> and the University of Cincinnati Medical Center
         will host the second annual&nbsp;
        <a href="https://sites.google.com/view/sbdss2017" target="_blank">
          BD2K-LINCS Data Science
        Symposium (DSS 2017)</a> on May 16-18, 2017.
      </p>
      <p>
        The general theme of the symposium is the systems biology of
        perturbation signatures and applications in drug development,
        translational biomedicine and environmental health. Talks will
        address a range of issues related to leveraging Big Data in
        translational research including FAIR data principles and the
        emerging NIH Big Data ecosystem. The program will also provide
        a survey of data science research pertaining to BD2K (Big Data
        to Knowledge) and LINCS (Library of Network-Based Cellular
        Signatures) consortia.&nbsp;
        <a href="https://sites.google.com/view/sbdss2017">Details</a>
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
