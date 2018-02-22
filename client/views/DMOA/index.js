import React, { Component } from 'react';
import PageBanner from 'components/PageBanner';
import styles from './dmoa.scss';

export default class DMOA extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <PageBanner
          title="Featured Interactive Data Visualization"
          subTitle={
            'L1000FWD: Large-scale Visualization of Drug-induced Transcriptomic Signatures'
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
