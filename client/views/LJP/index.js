import React, { Component } from 'react';
import PageBanner from 'components/PageBanner';
import { Link } from 'react-router';
import styles from './ljp.scss';

export default class DMOA extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <PageBanner
          title="Featured Interactive Data Visualization"
          subTitle={'Global Visualization of Drug-Induced L1000 Transcriptomic Signatures'}
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

                  gene expression signatures, collected from 63 cell lines
                  treated with 3,713 drugs/compounds. This data is available
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
                  Zooming and panning is provided to explore different parts of
                  the map using the mouse wheel. Clicking on a data point will
                  invoke a query to <a
                    href="http://amp.pharm.mssm.edu/L1000CDS2/#/index"
                    target="_blank"
                  >
                    L1000CDS<sup>2</sup>
                  </a>, and direct the user to the search
                  results of <a
                    href="http://amp.pharm.mssm.edu/L1000CDS2/#/index"
                    target="_blank"
                  >
                    L1000CDS<sup>2</sup>
                  </a> for more details about the signature.
                  Coloring and shape of data points (signatures) can be adjusted
                  by cell type, dose, drug class, time point, and signature
                  significance. Users can submit their own up and down gene sets
                  to project their signature onto the map. The results from such
                  search are also provided in a table format with the ability to
                  download a spreadsheet with detailed results. Users can also
                  submit a search by drug name, to highlight where the
                  signatures for the drug fall on the map.
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
