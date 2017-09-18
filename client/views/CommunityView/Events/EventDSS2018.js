import React from 'react';
import styles from './Events.scss';
import sbdssImg from '../Overview/SBDSS.jpg';

export default function Event20180131() {
  return (
    <div className={styles['ann-card']}>
      {/*
        <h6 className={`${styles['ann-group']} ${styles.symposia}`}>SYMPOSIUM</h6>
      */}
      <h6 className={`${styles['ann-group']} ${styles.symposia}`}>January 31 - February 2, 2018</h6>
      <div className={styles['ann-content']}>
        <h3>BD2K-LINCS Data Science Symposium 2018</h3>
        <h4>Studying Systems Biology by Cellular Perturbations</h4>
        <p>
          <img
            className={styles['inline-img-left']}
            src={sbdssImg}
            alt="SBDSS"
            width="350"
          />
          The <a href="http://www.lincs-dcic.org" target="_blank">
          BD2K-LINCS Data Coordination and Integration Center
          (DCIC)</a> and the University of Miami
           will host the third annual&nbsp;
          <a href="http://lincs-dcic.org/2018-data-science-symposium" target="_blank">
            BD2K-LINCS Data Science Symposium (DSS 2018)
          </a> on <strong>January 31 - February 2, 2018</strong>.
        </p>
        <p>
          This annual symposium brings together experts in systems
          biology, data science, drug discovery and translational
          medicine from academia, industry and government to
          present their latest research and exchange new ideas
          and approaches in data driven biomedical research.
          The general theme of the symposium is the study of complex
          biological systems using large-scale cellular perturbation
          profiling and applications in drug development,
          translational biomedicine and environmental health.
          Talks will address a range of issues related to
          leveraging Big Data in translational research including
          integration, visualization, access, sharing and
          reuse of data, software tools and the emerging
          NIH Big Data ecosystem. The program also provides
          a survey of data science
          research pertaining to <a href="https://commonfund.nih.gov/bd2k" target="_blank">
          BD2K (Big Data to Knowledge)</a> and <a href="https://commonfund.nih.gov/LINCS" target="_blank">LINCS (Library of Network-Based Cellular Signatures)</a> consortia.
        </p>
        <p>
          <a href="http://lincs-dcic.org/2018-data-science-symposium" target="_blank">
          BD2K-LINCS Data Science Symposium (DSS 2018)</a>
        </p>
      </div>
    </div>
  );
}
