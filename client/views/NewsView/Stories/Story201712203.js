import React from 'react';

import Story from './Story';
import styles from '../NewsView.scss';

export default function Story20150208() {
  return (
    <Story
      title="Publication Highlight | LINCS Consortium"
      subtitle="A LINCS Program Review"
      date="December 21th, 2017"
      author="Alexandra B. Keenan"
    >
      <img
        src="http://www.cell.com/cms/attachment/2116967899/2085247437/gr1_lrg.jpg"
        alt="dcic"
        className={styles['inline-img-left']}
        style={{ maxWidth: '25rem', maxHeight: '25rem' }}
      />

      <p>
        The LINCS Consortium (Keenan et al., 2017) has published the first
        comprehensive review that describes the various parts of
        the <a href="http://lincsproject.org/LINCS/about">LINCS program.</a> The
        article, published in Cell Systems, aims to broadcast the
        availability of <a href="http://lincsproject.org/LINCS/tools">LINCS tools
        </a> and datasets, targeting  experimental and
        computational biologists. The review encompasses
        the <a href="http://lincsproject.org/LINCS/about">LINCS program </a> vision,
        describes publicly available datasets, where the datasets are located,
        how they were generated, and the tools available
        for analysis of these datasets.
      </p>
      <p>
        Keenan, A. B. <i>et al.</i> The Library of Integrated Network-Based Cellular
        Signatures NIH Program: System-Level Cataloging of Human Cells Response
        to Perturbations. <i>Cell Syst</i>, doi:10.1016/j.cels.2017.11.001 (2017). <a href="https://www.ncbi.nlm.nih.gov/pubmed/29199020" target="_blank">
          PMID: 29199020
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
