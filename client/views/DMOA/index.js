import React, { Component } from 'react';
import PageBanner from 'components/PageBanner';
import { Link } from 'react-router';
import styles from './dmoa.scss';

export default class DMOA extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <PageBanner
          title="Featured Interactive Data Visualization"
          subTitle={
            'L1000FWD: Large-scale Visualization of Drug-induced Transcriptomics Signatures'
          }
        />
        <div className="container">
          <div className="row">
            <div className={`col-xs-12 ${styles['iframe-wrap']}`}>
              <iframe
                ref={instance => { this.iframe = instance; }}
                className={styles.iframe}
                scrolling="no"
                frameBorder="0"
                style={{
                  width: '100%',
                }}
                src="http://amp.pharm.mssm.edu/L1000FWD/"
              />
            </div>
            <div className="col-xs-12">
              <div className={styles['viz-description']}>
                <h4>Overview:</h4>
                <p>
                  This is an interactive visualization of over 16,000 drug and
                  small-molecule induced gene expression signatures.

                  This data is available
                  at the Gene-Expression Omnibus (GEO) accession number <a
                    href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE92742"
                    target="_blank"
                  >GSE92742</a>,
                  as well as on the&nbsp;
                  <a href="http://lincsportal.ccs.miami.edu/dcic-portal/" target="_blank">
                    LINCS Data Portal
                  </a> (LDP). To read more about
                  the collection and processing of the data, the <Link
                    to={'centers/data-and-signature-generating'
                      + '-centers/lincs-transcriptomics'}
                  >
                    LINCS Center for Transcriptomics
                  </Link> recently published a paper describing the project
                  (<a href="http://biorxiv.org/content/early/2017/05/10/136168" target="_blank">
                    bioRxiv
                  </a>). More interactive visualizations of the L1000 data can
                  be found at&nbsp;
                  <a href="https://clue.io" target="_blank">clue.io</a>,&nbsp;
                  <a
                    href="http://amp.pharm.mssm.edu/L1000CDS2/#/index"
                    target="_blank"
                  >
                    L1000CDS<sup>2</sup>
                  </a>, and&nbsp;
                  <a href="http://www.ilincs.org/ilincs/signaturesL1000/LDG-1188" target="_blank">
                    iLINCS
                  </a>.
                </p>
                <h4>Instructions:</h4>
                <p>
                  L1000FWD enables coloring of signatures by different attributes
                  such as cell type, time point, concentration, as well as drug
                  attributes such as MOA and clinical phase. Signature similarity
                  search is implemented to enable the search for mimicking or
                  opposing signatures given as input of up and down gene sets.
                  Each point on the L1000FWD interactive map is linked to a
                  signature landing page, which provides multifaceted knowledge f
                  rom various sources about the signature and the drug. Notably
                  such information includes most frequent diagnoses, co-prescribed
                  drugs and age distribution of prescriptions as extracted from
                  the Mount Sinai Health System electronic medical records (EMR).
                  Overall, L1000FWD serves as a platform for identifying functions
                  for novel small molecules using unsupervised clustering, as well
                  as for exploring drug MOA.
                </p>

                <p className={styles.credits}>
                  This interactive visualization was implemented by
                  the&nbsp;
                  <a href="http://lincs-dcic.org" target="_blank">
                    BD2K-LINCS DCIC
                  </a> (Dr. Zichen Wang, Dr. Avi Ma’ayan,
                  and Edward He, Ma’ayan Lab, Icahn School of Medicine
                  at Mount Sinai).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
