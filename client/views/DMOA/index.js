import React from 'react';
import PageBanner from 'components/PageBanner';
import { Link } from 'react-router';
import styles from './dmoa.scss';

export default () => (
  <div className={styles.wrapper}>
    <PageBanner
      title="Featured Data Visualization"
      subTitle={'Global Visualization of Drug-Induced L1000 Transcriptomic Signatures'}
    />
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <iframe
            frameBorder="0"
            style={{
              width: '100%',
              padding: '1rem',
              minHeight: '50rem',
              marginTop: '1rem',
            }}
            src="https://amp.pharm.mssm.edu/dmoa-embed1/"
          />
          <p className={styles['viz-description']}>
            This is an interactive visualization
            of 17,041 L1000 drug-induced gene expression signatures,
            collected from 63 cell lines treated with 3,713
            drugs/compounds. This data is available on the
            Gene-Expression Omnibus (GEO) accession number&nbsp;
            <a
              href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE92742"
              target="_blank"
            >GSE92742</a>

          , as well as on the&nbsp;
            <a href="http://lincsportal.ccs.miami.edu/dcic-portal/" target="_blank">
              LINCS Data Portal
            </a> (LDP). The&nbsp;
            <Link to="centers/data-and-signature-generating-centers/lincs-transcriptomics">
              Broad Center for Transcriptomics
            </Link> recently published a paper describing the L1000
            data collected for phase I (
            <a href="http://biorxiv.org/content/early/2017/05/10/136168" target="_blank">
              bioRxiv
            </a>).

            More interactive visualizations can be found at&nbsp;
            <a href="https://clue.io" target="_blank">clue.io</a>.
          </p>
        </div>
      </div>
    </div>
  </div>
);
