import React from 'react';

import Story from './Story';
import styles from '../NewsView.scss';
import natMethods from './images/hafner-natmethods.jpg';


export default function Story20160517() {
  return (
    <Story
      title="HMS LINCS Center: Growth Rate Inhibition Metrics Correct for Confounders in Measuring
      Sensitivity to Cancer Drugs"
      date="May 17th, 2016"
    >
      <div className="clearfix">
        <img
          src={natMethods}
          alt="Figure from Hafner et al's Nature Method paper"
          className={styles['inline-img-left']}
        />
        <p>
          The HMS LINCS Center’s most recent study (
          <a href="http://www.nature.com/nmeth/journal/v13/n6/full/nmeth.3853.html" target="_blank">
          Hafner, Niepel et al (2016)</a>) which describes new “GR” metrics that account for
          variation in cell growth when quantifying cellular dose response to perturbagens, was
          published in Nature Methods. <a href="http://lincs.hms.harvard.edu/hafner-natmethods-2016/" target="_blank">
          Explore the publication in more detail</a>, or, through the online <a href="http://grcalculator.org/" target="_blank">
          GR Browser</a> developed in collaboration with the BD2K-LINCS DCIC, calculate GR metrics
          from your own data and browse several available LINCS dose-response datasets.
        </p>
      </div>
      <p>
        Hafner M, Niepel M, Chung M, Sorger PK. <strong>Growth rate inhibition metrics correct
        for confounders in measuring sensitivity to cancer drugs</strong>. <em>Nature
        Methods</em> 2016. <a href="http://www.ncbi.nlm.nih.gov/pubmed/27135972" target="_blank">
        PMID: 27135972</a>
      </p>
      <span className={styles['twitter-label']}>
        <a
          title="Follow @LINCSProgram on Twitter"
          href="https://twitter.com/LINCSProgram"
        >
          Follow <strong>@LINCSProgram</strong>
        </a>
      </span>
    </Story>
  );
}
