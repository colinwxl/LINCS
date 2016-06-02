import React from 'react';

import Story from './Story';
import styles from '../NewsView.scss';
import proteomicsCover from './images/proteomics-cover.png';
import proteomicsFigure from './images/proteomics-figure.png';


export default function Story20160502() {
  return (
    <Story
      title="Cover Of Molecular And Cellular Proteomics: Phosphosignatures From The P100
      Sentinel Assay"
      date="May 2nd, 2016"
    >
      <p>
        A publication from the LINCS Proteomic Characterization Center for Signaling and
        Epigenetics was highlighted on the cover of the May 2016, 15 (5) issue of Molecular
        and Cellular Proteomics.
      </p>
      <div className={styles['img-wrap']}>
        <img
          className={`${styles['img-border']}`}
          src={proteomicsCover}
          alt="Molecular & Cellular Proteomics cover"
        />
        <img
          className={`${styles['img-border']}`}
          src={proteomicsFigure}
          alt="Molecular & Cellular Proteomics figure"
          />
      </div>
      <p>
        A set of kinase inhibitors directed at known pathways (top) were introduced to cells.
        Phosphosignatures from the novel P100 sentinel assay are shown after 3, 6, or 24 hours
        of treatment (middle). Correlation of all samples demonstrates strong signals in the
        assay, and off-diagonal correlation reinforces the hypothesized modularity of the pathway
        into MAPK, PI3K/mTOR, and Cell Cycling modules (bottom).
      </p>
      <p>
        For more details, see the article: Abelin JG, Patel J, Lu X, Feeney CM, Fagbami L, Creech
        AL, Hu R, Lam D, Davison D, Pino L, Qiao JW, Kuhn E, Officer A, Li J, Abbatiello S,
        Subramanian A, Sidman R, Snyder EY, Carr SA, Jaffe JD. <strong>Reduced-representation
        phosphosignatures measured by quantitative targeted MS capture cellular states and enable
        large-scale comparison of drug-induced phenotypes</strong>. <a href="http://www.ncbi.nlm.nih.gov/pubmed/26912667" target="_blank">
        PMID: 26912667</a>
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
