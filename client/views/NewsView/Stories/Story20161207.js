import React from 'react';

import Story from './Story';
import styles from '../NewsView.scss';
import hmsLINCS from './images/hms_lincs.png';

export default function Story20161207() {
  return (
    <Story
      title="Publication Highlight | HMS LINCS Center"
      date="December 7th, 2016"
    >
      <img
        src={hmsLINCS}
        alt="HMS-LINCS Screenshot"
        className={styles['inline-img-left']}
        style={{ maxWidth: '25rem', maxHeight: '25rem' }}
      />
      <p>
        <strong>
          Profiling drugs for rheumatoid arthritis that inhibit synovial fibroblast activation
        </strong>
      </p>
      <p>
        Jones et al (2016) in Nature Chemical Biology describes a new drug
        profiling study of relevance to rheumatoid arthritis.&nbsp;
        <a href="http://lincs.hms.harvard.edu/jones-natchembiol-2016/" target="_blank">
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

      <p>
        Citation: Jones DS, Jenney AP, Swantek JL, Burke JM, Lauffenburger DA, Sorger PK.
        &nbsp;
        <strong>
          Profiling drugs for rheumatoid arthritis that inhibit synovial fibroblast activation.
        </strong>
        &nbsp;
        Nat Chem Biol. 2016 Oct 31. doi: 10.1038/nchembio.2211
        &nbsp;
        <a href="https://www.ncbi.nlm.nih.gov/pubmed/27820799" target="_blank">
          PMID: 27820799
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
