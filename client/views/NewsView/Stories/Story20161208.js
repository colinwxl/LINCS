import React from 'react';

import Story from './Story';
import styles from '../NewsView.scss';
import gen3va from './images/gen3va.png';

export default function Story20161208() {
  return (
    <Story
      title="Publication Highlight | BD2K-LINCS Data Coordination and Integration Center"
      date="December 8th, 2016"
    >
      <img
        src={gen3va}
        alt="GEN3VA Screenshot"
        className={styles['inline-img-right']}
      />
      <p>
        <strong>
          GEN3VA: aggregation and analysis of gene expression signatures from related studies
        </strong>
      </p>
      <p>
        Gundersen et al (2016) in BMC Bioinformatics describes&nbsp;
        <strong>
          <a href="http://amp.pharm.mssm.edu/gen3va/" target="_blank">
            GENE Expression and Enrichment Vector Analyzer (GEN3VA)
          </a>
          , a web‐based system that enables the integrative analysis of
          aggregated collections of tagged gene expression signatures
          identified and extracted from GEO.
        </strong>&nbsp;

        Each tagged collection of signatures is presented in a report that consists
        of heatmaps of the differentially expressed genes; principal component
        analysis of all signatures; enrichment analysis with several gene set
        libraries across all signatures, which we term enrichment vector
        analysis; and global mapping of small molecules that are predicted
        to reverse or mimic each signature in the aggregate. They demonstrate
        how GEN3VA can be used to identify common molecular mechanisms of
        aging by analyzing tagged signatures from 244 studies that compared
        young vs. old tissues in mammalian systems.&nbsp;
        <strong>
          GEN3VA can be used to identify, aggregate, and analyze themed
          collections of gene expression signatures from diverse but
          related studies.
        </strong>
      </p>

      <p>
        Citation: Gundersen GW, Jagodnik KM, Woodland H, Fernandez NF,
        Sani K, Dohlman AB, Ung PM, Monteiro CD, Schlessinger A,
        Ma'ayan A.&nbsp;
        <strong>
          GEN3VA: aggregation and analysis of gene expression signatures
          from related studies.
        </strong>&nbsp;
        BMC Bioinformatics. 2016 Nov 15;17(1):461.&nbsp;
        <a href="https://www.ncbi.nlm.nih.gov/pubmed/27846806" target="_blank">
          PMID: 27846806
        </a>
      </p>
      <span className={styles['twitter-label']}>
        <a
          title="Follow @BD2KLINCSDCIC on Twitter"
          href="https://twitter.com/BD2KLINCSDCIC"
        >
          Follow <strong>@BD2KLINCSDCIC</strong>
        </a>
      </span>
    </Story>
  );
}
