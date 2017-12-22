import React from 'react';

import Story from './Story';
import styles from '../NewsView.scss';

import photo from './images/dsgcPubPhoto2017.png';

export default function Story20150208() {
  return (
    <Story
      title="Publication Highlight | BD2K-LINCS Data Coordination and Integration Center"
      subtitle="LINCS Data Portal and LINCS Data Registry"
      date="December 21th, 2017"
      author="Alexandra B. Keenan"
    >
      <img
        src={photo}
        alt="dcic"
        className={styles['inline-img-left']}
        style={{ maxWidth: '25rem', maxHeight: '25rem' }}
      />

      <p>
        Koleti et al. (2017) highlight the features of the <a href="http://lincsportal.ccs.miami.edu/">
        LINCS Data Portal</a> in a recent publication in Nucleic Acids Research
        database issue. The <a href="http://lincsportal.ccs.miami.edu/">LINCS Data
        Portal</a> provides
        integrated access to LINCS data and analysis tools. The authors also describe
        the LINCS Data Registry which is designed to meet the challenges of integrating
        data and metadata from diverse assay technologies employed by the six <a href="http://lincsproject.org/LINCS/centers/data-and-signature-generating-centers">LINCS
        Data and Signature Generation Centers (DSGCs)</a>.
      </p>
      <p>
        Koleti, A. <i>et al</i>. Data Portal for the Library of Integrated Network-based
        Cellular Signatures (LINCS) program: integrated access to diverse large-scale
        cellular perturbation response data. Nucleic <i>Acids Res</i>, doi:10.1093/nar/gkx1063
        (2017). <a href="https://www.ncbi.nlm.nih.gov/pubmed/?term=LINCS+Data+Portal+and+LINCS+Data+Registry" target="_blank">
          PMID: 29140462
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
