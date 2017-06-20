import React, { Component } from 'react';
import PageBanner from 'components/PageBanner';
import styles from './ljp.scss';

export default class DMOA extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <PageBanner
          title=""
          subTitle={''}
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
                src="http://amp.pharm.mssm.edu/LJP/"
              />
            </div>
            <div className="col-xs-12">
              <div className={styles['viz-description']}>
                <h4>Overview:</h4>
                <p>
                  LJP-BCNB visualizes thousands of signatures from six breast
                  cancer cell lines treated with ~100 single molecule
                  perturbations, mostly kinase inhibitors. These perturbations
                  were applied in different concentrations while gene expression
                  was measured at different time points using the L1000
                  technology. Under the same conditions, the cells were imaged
                  for cell viability. The distance between nodes represents
                  response similarity computed using the cosine distance between
                   the Characteristic Direction vectors of perturbations
                   compared with their appropriate controls.
                </p>
                <h4>Instructions:</h4>
                <p>
                  Use the controls on the top-right to zoom and pan the network
                  and adjust the color, size and shape of the nodes based on
                  various classifications.
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
