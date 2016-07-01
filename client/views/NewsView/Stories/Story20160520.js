import React from 'react';

import Story from './Story';
import styles from '../NewsView.scss';
import grCalculator from './images/gr-calculator.jpg';


export default function Story20160520() {
  return (
    <Story
      title="GR Metrics Calculator and Browser"
      date="May 20th, 2016"
    >
      <div className="clearfix">
        <p>
          Drug-response studies play an important role in both preclinical and clinical research,
          but such studies are complicated by differences in cell growth rates across samples and
          conditions. To improve the value and reliability of such studies, new metrics for
          parameterizing drug response were developed and <a href="http://www.ncbi.nlm.nih.gov/pubmed/27135972" target="_blank">
          published in Nature Methods</a> by the <a href="http://lincs.hms.harvard.edu/" target="_blank">
          HMS LINCS Center</a>. The online GR tools were developed by the <a href="http://lincs-dcic.org/#/" target="_blank">
          BD2K-LINCS Data Coordination and Integration Center</a>.
        </p>
        <p>
          Hafner M, Niepel M, Chung M, Sorger PK. <strong>Growth rate inhibition metrics correct
          for confounders in measuring sensitivity to cancer drugs</strong>. <em>Nature
          Methods</em> 2016. <a href="http://www.ncbi.nlm.nih.gov/pubmed/27135972" target="_blank">
          PMID: 27135972</a>
        </p>
        <div className={styles['img-wrap']}>
          <a href="http://eh3.uc.edu/apps/grtutorial/Home.html" target="_blank">GR Metrics
          Calculator and Browser</a>
          <img
            className={`${styles['img-border']}`}
            src={grCalculator}
            alt="GR Calculator screenshot"
          />
        </div>
        <span className={styles['twitter-label']}>
          <a
            title="Follow @LINCSProgram on Twitter"
            href="https://twitter.com/LINCSProgram"
          >
            Follow <strong>@LINCSProgram</strong>
          </a>
        </span>
      </div>
    </Story>
  );
}
