import React from 'react';

import Story from './Story';
import styles from '../NewsView.scss';
import dcic from 'static/files/centers_logos/DCIC.svg';

export default function Story20170912() {
  return (
    <Story
      title="BD2K-LINCS Data Science Symposium 2018"
      subtitle="Studying Systems Biology by Cellular Perturbations"
      date="September 12th, 2017"
    >
      <p>
        <strong>
          Date: <i>January 31 - February 2, 2018</i>
        </strong>
      </p>
      <img
        src={dcic}
        alt="dcic"
        style={{ width: '10rem' }}
        className={styles['inline-img-right']}
      />
      <p>
        The <a href="http://www.lincs-dcic.org" target="_blank">
        BD2K-LINCS Data Coordination and Integration Center
        (DCIC)</a> and the University of Miami will host the third annual&nbsp;
        <a href="http://lincs-dcic.org/2018-data-science-symposium" target="_blank">
          BD2K-LINCS Data Science
        Symposium (DSS 2018)</a> on January 31 - February 2, 2018.
      </p>
      <p>
        This annual symposium brings together experts in systems biology, data science, drug discovery and translational medicine from academia, industry and government to present their latest research and exchange new ideas and approaches in data driven biomedical research. The general theme of the symposium is the study of complex biological systems using large-scale cellular perturbation profiling and applications in drug development, translational biomedicine and environmental health. Talks will address a range of issues related to leveraging Big Data in translational research including integration, visualization, access, sharing, and reuse of data, software tools and the emerging NIH Big Data ecosystem. The program also provides a survey of data science research pertaining to the <a href="https://commonfund.nih.gov/bd2k" target="_blank">BD2K (Big Data to Knowledge)</a> and <a href="https://commonfund.nih.gov/LINCS" target="_blank">LINCS (Library of Network-Based Cellular Signatures)</a> consortia. </p>
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
