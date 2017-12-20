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
        src="http://www.cell.com/cms/attachment/2116967899/2085247437/gr1_lrg.jpg"
        alt="dcic"
        className={styles['inline-img-left']}
        style={{ maxWidth: '25rem', maxHeight: '25rem' }}
      />

      <p>
        <strong>
          A LINCS Program Review
        </strong>
      </p>

      <p>
        The LINCS Consortium (Keenan et al., 2017) has published the first
        comprehensive review that describes the various parts of the LINCS
        program. The article, published in Cell Systems, aims to broadcast the
        availability of LINCS tools and datasets, targeting  experimental and c
        omputational biologists. The review encompasses the LINCS program vision, d
        escribes publicly available datasets, where the datasets are located,
        how they were generated, and the tools available for analysis of these
        datasets.
      </p>
      <p>
        Keenan, A. B. <i>et al.</i> The Library of Integrated Network-Based Cellular
        Signatures NIH Program: System-Level Cataloging of Human Cells Response
        to Perturbations. <i>Cell Syst</i>, doi:10.1016/j.cels.2017.11.001 (2017).
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
