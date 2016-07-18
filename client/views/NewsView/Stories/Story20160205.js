import React from 'react';

import Story from './Story';
import styles from '../NewsView.scss';
import triconImg from './images/tricon2016.png';


export default function Story20160205() {
  return (
    <Story
      title="Molecular Medicine Tri-Conference 2016"
      date="February 5th, 2016"
    >
      <p>
        On <strong>March 8, 2016</strong>, as part of the BD2K-LINCS DCIC’s community
        outreach efforts, Avi Ma’ayan PhD and Stephan Schurer PhD will present in the
        Informatics channel at the
        <strong> Molecular Medicine Tri-Conference 2016</strong> in San Francisco, CA.
      </p>
      <div className={styles['img-wrap']}>
        <img
          className={`${styles['img-border']}`}
          src={triconImg}
          alt="Tri-Con 2016"
        />
      </div>
      <div className={styles['info-block']}>
        <h5>Bioinformatics for Big Data</h5>
        <p>
          <strong>
            L1000CDS2: LINCS L1000 Characteristic Direction Signature Search Engine Predicts
            Kenpaullone as a Potential Therapeutic for Ebola
          </strong>
        </p>
        <p><em>Avi Ma’ayan, PhD, Icahn School of Medicine at Mount Sinai</em></p>
        <a href="http://www.triconference.com/Bioinformatics-Big-Data/" target="_blank">
          Learn more
        </a>
      </div>
      <div className={styles['info-block']}>
        <h5>
          Integrated Informatics Driving Translational Research and Precision Medicine
        </h5>
        <p>
          <strong>
            Rational Data-Driven Development of Novel Poly-Pharmacology Small Molecules
          </strong>
        </p>
        <p>
          <em>Stephan Schurer, PhD, Miller School of Medicine, University of Miami</em>
        </p>
        <a href="http://www.triconference.com/Integrated-Pharma-Informatics/" target="_blank">
          Learn more
        </a>
      </div>
    </Story>
  );
}
