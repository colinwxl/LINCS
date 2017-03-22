import React from 'react';

import Story from './Story';
import styles from '../NewsView.scss';
import enrichrImg from './images/enrichr.png';


export default function Story20151119() {
  return (
    <Story
      title="New Release of Enrichr"
      date="November 19th, 2015"
    >
      <p className="clearfix">
        <img
          className={styles['inline-img-left']}
          src={enrichrImg}
          alt="Enrichr"
        />
        In this new release
        of <a href="http://amp.pharm.mssm.edu/Enrichr" target="_blank">Enrichr</a>, the
        BD2K-LINCS DCIC updated
        their <a href="http://amp.pharm.mssm.edu/lib/chea.jsp" target="_blank">
        ChIP-X Enrichment Analysis (ChEA)</a> database with gene sets extracted
        from forty new studies. The previous version is now in the ‘Legacy’
        category for provenance.
      </p>
      <p>
        They also added a new gene set library created from the database of Genotypes and
        Phenotypes (<a href="http://www.ncbi.nlm.nih.gov/gap" target="_blank">dbGaP</a>),
        as well as two new libraries with the up- and down-regulated genes from the L1000
        Connectivity Map chemical perturbation profiles from
        the <a href="https://clue.io/lincs" target="_blank">
        LINCS Center for Transcriptomics</a>. The previous version of the Connectivity
        Map Affymetrix data was renamed to Old CMAP.
      </p>
      <p>
        Please visit the <a href="http://amp.pharm.mssm.edu/Enrichr/#new" target="_blank">
        What’s New?</a> section of the Enrichr website for more details about
        the new release.
      </p>
    </Story>
  );
}
