import React from 'react';

import Story from './Story';
import styles from '../NewsView.scss';
import neurolincsImg from './images/neurolincs.png';


export default function Story201603282() {
  return (
    <Story
      title="NeuroLINCS Center Releases New Tool: AChroMap"
      date="March 28th, 2016"
    >
      <p className="clearfix">
        <img
          className={styles['inline-img-left']}
          src={neurolincsImg}
          alt="NeuroLINCS"
        />
        <a href="http://www.neurolincs.org/resources/AChroMap" target="_blank">AChroMap</a> (accessible chromatin mapper of transcriptional regulators) is a data integration tool for transcriptomic and epigenomic data. This tool generates a list of enriched motifs in open chromatin regions (as assayed by ATAC-seq or DNAseH) for a given set genes. The foreground list of genes are differentially expressed or highly expressed genes and the background list of genes are the rest of the genes in the transcriptomic experiment.
      </p>
    </Story>
  );
}
