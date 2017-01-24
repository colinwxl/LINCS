import React from 'react';

import Story from './Story';
import styles from '../NewsView.scss';
import hms124107 from './images/hms_124107.png';

export default function Story20170124() {
  return (
    <Story
      title="Publication Highlight | HMS LINCS Center"
      date="January 24th, 2017"
    >
      <img
        src={hms124107}
        alt="Publication Screenshot"
        className={styles['inline-img-left']}
        style={{ maxWidth: '25rem', maxHeight: '25rem' }}
      />
      <p>
        <strong>
          Adaptive resistance of melanoma cells to RAF inhibition via reversible
          induction of a slowly dividing de‐differentiated state
        </strong>
      </p>
      <p>
        {/*
          <p>
            Jones et al (2016) in Nature Chemical Biology describes a new drug
            profiling study of relevance to rheumatoid arthritis.&nbsp;
            <a href="http://lincs.hms.harvard.edu/jones-natchembiol-2017/" target="_blank">
              Explore
            </a>&nbsp;the publication as well as the associated datasets available in the
            HMS LINCS Database (
            <a href="https://lincs.hms.harvard.edu/db/datasets/20233/" target="_blank">
              #20233
            </a>,&nbsp;
            <a href="https://lincs.hms.harvard.edu/db/datasets/20234/" target="_blank">
              #20234
            </a>,&nbsp;
            <a href="https://lincs.hms.harvard.edu/db/datasets/20235/" target="_blank">
              #20235
            </a>).
          </p>
          */}
      </p>

      <p>
        Fallahi-Sichani M, Becker V, Izar B, Baker GJ, Lin JR, Boswell SA,
        Shah P, Rotem A, Garraway LA, Sorger PK.&nbsp;
        <strong>
          Adaptive resistance of melanoma cells to RAF inhibition via reversible
          induction of a slowly dividing de‐differentiated state
        </strong>
        &nbsp;
        Mol Syst Biol. 2017 Jan 9;13(1):905. doi: 10.15252/msb.20166796
        &nbsp;
        <a href="https://www.ncbi.nlm.nih.gov/pubmed/28069687" target="_blank">
          PMID: 28069687
        </a>
      </p>
      <span className={styles['twitter-label']} style={{ marginBottom: '2rem' }}>
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
