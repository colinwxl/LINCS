import React from 'react';

import Story from './Story';
import styles from '../NewsView.scss';
import sep1000 from './images/sep-l1000.png';


export default function Story201605202() {
  return (
    <Story
      title="SEP-L1000"
      date="May 20th, 2016"
    >
      <div className="clearfix">
        <h5>Side effect prediction based on L1000 data</h5>
        <p>
          <em>A web portal for browsing and searching predictive small-molecule/ADR connections</em>
        </p>
        <img
          src={sep1000}
          alt="SEP-L1000 logo"
          className={styles['inline-img-right']}
        />
        <p>
          <a href="http://maayanlab.net/SEP-L1000/index.html" target="_blank">SEP-L1000</a> serves
          the results of the predicted ADRs for the drugs and small-molecule compounds
          profiled in the LINCS L1000 project. A network of predictive ADRs was constructed
          based on their drug similarity and visualized using a stacked bubble chart. Each drug
          and ADR has a dedicated page with a list of the relevant predictions and external links.
        </p>
        <p>
          Wang Z, Clark NR, Ma’ayan A. <strong>Drug-induced adverse events prediction
          with the LINCS L1000 data</strong>. <em>Bioinformatics</em> 2016. <a href="http://www.ncbi.nlm.nih.gov/pubmed/27153606" target="_blank">PMID: 27153606</a>
        </p>
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
