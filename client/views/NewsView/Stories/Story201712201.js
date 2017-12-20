import React from 'react';

import Story from './Story';
import styles from '../NewsView.scss';

export default function Story20150208() {
  return (
    <Story
      title="Publication Highlight | HMS LINCS Center"
      date="December 20th, 2017"
      author="Alexandra B. Keenan"
    >
      <img
        src="https://assets.clue.io/clue/public/img/home_datapage/homepage-graphic_V3_lighter.svg"
        alt="dcic"
        className={styles['inline-img-left']}
        style={{ maxWidth: '25rem', maxHeight: '25rem' }}
      />

      <p>
        <strong>
          A Next Generation Connectivity Map
        </strong>
      </p>

      <p>
        Subramanian et al. (2017) in a recent publication in Cell describe a massive
        scaling up of the Connectivity Map (CMap) to 1.3 million gene expression profiles
        using the L1000 technology, a low-cost high-throughput hybridization assay that
        is comparable microarrays and RNA-seq. The authors demonstrate that expression
        signatures obtained from 19,811 small molecules and 5,075 genetic perturbations
        can be used to functionally annotate unknown small molecules and genetic variants
        of disease causing genes. Tools and signatures are available at <a href="https://clue.io">
        CLUE</a>, the <a href="http://lincsportal.ccs.miami.edu/datasets-beta/#?query=assayname:L1000%20mRNA%20profiling%20assay">
        LINCS Data Portal</a>,
        and some of the same signatures are available for search from <a href="http://amp.pharm.mssm.edu/L1000CDS2">L1000CDS2</a>.
      </p>
      <p>
        Subramanian, A. <i>et al.</i> A Next Generation Connectivity Map: L1000 Platform
        and the First 1,000,000 Profiles. <i>Cell</i> 171, 1437-1452 e1417,
        doi:10.1016/j.cell.2017.10.049 (2017).
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
