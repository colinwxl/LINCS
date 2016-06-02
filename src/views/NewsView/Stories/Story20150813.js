import React from 'react';
import { Link } from 'react-router';

import Story from './Story';


export default function Story20150813() {
  return (
    <Story
      title="Data Releases: DToxS, HMS LINCS, LINCS Center For Transcriptomics,
                LINCS PCCSE, And NeuroLINCS"
      date="August 13th, 2015"
    >
      <p>
        LINCS centers recently released the first wave of data which includes RNA-seq,
        L1000, P100, SWATH, Cell Viability and Growth, KinomeScan, and RPPA profiling
        human cell lines treated with many drugs and small molecules.
      </p>
      <p>
        The <Link to="/data/releases">Data Releases</Link> page describes the
        collections of data released and planned to be released to the public by
        the LINCS Consortium.
      </p>
    </Story>
  );
}
