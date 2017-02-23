import React from 'react';
import styles from '../Overview.scss';
import sbdssImg from '../SBDSS.jpg';

export default function Event20170516() {
  return (
    <div className="row">
      <div className="col-md-9">
        <div className={styles['ann-card']}>
          <h6 className={styles['ann-group']}>SYMPOSIA</h6>
          <div className={styles['ann-content']}>
            <h3>BD2K-LINCS Data Science Symposium 2017</h3>
            <h4>
              <a
                href="https://sites.google.com/view/sbdss2017"
                target="_blank"
                style={{ textDecoration: 'none' }}
              >
                Systems Biology of Cellular Perturbations
              </a>
            </h4>
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
                BD2K-LINCS Data Science
              </a> Symposium (DSS 2017) on May 16-18, 2017.
            </p>
            <p>
              The symposium will bring together data scientists
              and translational scientists from academia, industry
              and government to discuss uses of big data in biomedicine.
              The general theme of the symposium is the systems biology
              of perturbation signatures and applications in drug
              development, translational biomedicine and environmental
              health. Talks will address a range of issues related to
              leveraging Big Data in translational research including
              FAIR data principles and the emerging NIH Big Data ecosystem.
              The program will also provide a survey of data science
              research pertaining to BD2K (Big Data to Knowledge) and
              LINCS (Library of Network-Based Cellular Signatures)
              consortia.
            </p>
            <p>
              The symposium will feature invited talks, poster session,
              and selected poster presentation sessions. Special session
              on Big Data in Environmental Health will be held in the
              afternoon of May 16. For the list of invited speakers please
              refer to the agenda. To participate, please register free
              of charge.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
