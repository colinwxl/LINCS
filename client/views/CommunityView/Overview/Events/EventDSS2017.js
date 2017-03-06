import React from 'react';
import styles from '../Overview.scss';
import sbdssImg from '../SBDSS.jpg';

export default function Event20170516() {
  return (
    <div className={styles['ann-card']}>
      {/*
        <h6 className={`${styles['ann-group']} ${styles.symposia}`}>SYMPOSIUM</h6>
      */}
      <h6 className={`${styles['ann-group']} ${styles.symposia}`}>May 16, 2017</h6>
      <div className={styles['ann-content']}>
        <h3>BD2K-LINCS Data Science Symposium 2017</h3>
        <h4>Systems Biology of Cellular Perturbations</h4>
        <p>
          <img
            className={styles['inline-img-left']}
            src={sbdssImg}
            alt="SBDSS"
            width="350"
          />
          The <a href="http://www.lincs-dcic.org" target="_blank">
          BD2K-LINCS Data Coordination and Integration Center
          (DCIC)</a> and the University of Cincinnati Medical Center
           will host the second annual&nbsp;
          <a href="https://sites.google.com/view/sbdss2017" target="_blank">
            BD2K-LINCS Data Science Symposium (DSS 2017)
          </a> on <strong>May 16-18, 2017</strong>.
        </p>
        <p>
          The symposium will bring together data scientists
          and translational scientists from academia, industry
          and government to discuss uses of big data in biomedicine.
          The general theme of the symposium is the <strong>systems
          biology of perturbation signatures</strong> and applications
          in <strong>drug development</strong>, <strong>translational
          biomedicine </strong> and <strong>environmental health</strong>.
          Talks will address a range of issues related to
          leveraging Big Data in translational research including
          FAIR data principles and the emerging NIH Big Data ecosystem.
          The program will also provide a survey of data science
          research pertaining to <a href="https://datascience.nih.gov/bd2k" target="_blank">
          BD2K (Big Data to Knowledge)</a> and
          LINCS (Library of Network-Based Cellular Signatures)
          consortia.
        </p>
        <p>
          The symposium will feature invited talks, poster session,
          and selected poster presentation sessions. Special session
          on Big Data in Environmental Health will be held in the
          afternoon of <strong>May 16</strong>.
          For the list of invited speakers please refer to the&nbsp;
          <a
            href="https://sites.google.com/view/sbdss2017/agenda"
            target="_blank"
          >agenda</a>. To participate, please&nbsp;
          <a href="https://sites.google.com/view/sbdss2017/registration" target="_blank">
          register</a> free
          of charge.
        </p>
      </div>
    </div>
  );
}
