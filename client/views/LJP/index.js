import React, { Component } from 'react';
import PageBanner from 'components/PageBanner';
import styles from './ljp.scss';

export default class DMOA extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <PageBanner
          title="Featured Interactive Data Visualization"
          subTitle={'LINCS Joint Project (LJP) - Breast Cancer Network Browser (BCNB)'}
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
                  LJP-BCNB visualizes 2344 signatures from 6 breast
                  cancer cell lines treated with 105 single molecule
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
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
