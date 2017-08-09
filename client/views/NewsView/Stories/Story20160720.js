import React from 'react';

import Story from './Story';
import styles from '../NewsView.scss';
import neurolincs from './images/neurolincs-logo.png';

export default function Story20160720() {
  return (
    <Story
      title="ALS Research Suggests Stem Cells Be 'Aged' to Speed Progress
      Toward Finding Treatments"
      date="July 7th, 2016"
    >
      <h5>Press Release</h5>
      <div className={styles['img-wrap']}>
        <a
          href="http://www.neurolincs.org/"
          target="_blank"
        >
          <img
            className={`${styles['img-border']}`}
            src={neurolincs}
            alt="Article header"
          />
        </a>
      </div>
      <p>
        Click&nbsp;
        <a
          href="https://www.sciencedaily.com/releases/2016/07/160719144751.htm"
          target="_blank"
        >
          here
        </a> for the full press release about a recent study
        led by Clive Svendsen PhD (
        <a
          href="http://www.neurolincs.org/"
          target="_blank"
        >
          NeuroLINCS
        </a>), and Ritchie Ho PhD that was published
        online July 18 in the journal Nature Neuroscience.
      </p>
      <p>
        Publication: Ho R, Sances S, Gowing G, Amoroso MW, O'Rourke JG, Sahabian A, Wichterle H
        , Baloh RH, Sareen D, Svendsen CN.
        <strong> ALS disrupts spinal motor neuron maturation and aging
        pathways within gene co-expression networks. </strong> <em>Nat Neurosci. </em>
        2016 Sep 19(9):1256-67.
        <br />
        <a href="http://www.ncbi.nlm.nih.gov/pubmed/27428653">
        PMID: 27428653</a>
      </p>

      <span className={styles['twitter-label']}>
        <a
          title="Follow @NeuroLINCS on Twitter"
          href="https://twitter.com/NeuroLINCS"
        >
          Follow <strong>@NeuroLINCS</strong>
        </a>
      </span>
    </Story>
  );
}
