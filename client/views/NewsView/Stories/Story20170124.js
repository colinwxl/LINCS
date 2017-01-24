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
        Fallahi-Sichani et al (2017) in Molecular Systems Biology uncovers a slowly
        dividing, de-differentiated subpopulation of Vemurafenib-treated BRAF(V600E)
        melanoma cells that is associated with drug resistance but inhibitable by
        novel drug combinations.&nbsp;
        <a href="https://lincs.hms.harvard.edu/fallahi-sichani-molsystbiol-2017/" target="_blank">
          Explore
        </a>&nbsp;the publication as well as the associated datasets available in the
        HMS LINCS Database (
        <a href="https://lincs.hms.harvard.edu/db/datasets/20272/" target="_blank">
          #20272
        </a>,&nbsp;
        <a href="https://lincs.hms.harvard.edu/db/datasets/20273/" target="_blank">
          #20273
        </a>,&nbsp;
        <a href="https://lincs.hms.harvard.edu/db/datasets/20274/" target="_blank">
          #20274
        </a>,&nbsp;
        <a href="https://lincs.hms.harvard.edu/db/datasets/20275/" target="_blank">
          #20275
        </a>,&nbsp;
        <a href="https://lincs.hms.harvard.edu/db/datasets/20276/" target="_blank">
          #20276
        </a>,&nbsp;
        <a href="https://lincs.hms.harvard.edu/db/datasets/20277/" target="_blank">
          #20277
        </a>).
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
