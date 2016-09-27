import React, { Component } from 'react';

import styles from '../Workflow.scss';
import PageNav from 'components/PageNav';
import PageBanner from 'components/PageBanner';


export default class Workflow extends Component {

  static subTitle = 'Find data about cell viability and other cellular-level phenotypes ' +
    'besides gene and protein expression in response to small molecule perturbations'
  static path = 'find-data-about-cell-viability-and-other-cellular-level-phenotypes-' +
    'besides-gene-and-protein-expression-in-response-to-small-molecule-perturbations'

  render() {
    return (
      <div className={styles.wrapper}>
        <PageBanner
          title="LINCS Workflow"
          subTitle={this.constructor.subTitle}
        />
        <div className="container">
          <div className="row">
            <PageNav
              mainPage="Computational Biologist Workflow"
              subPage={this.constructor.subTitle}
              isWorkflowPage
            />
            <div className={`col-md-9 col-md-pull-3 ${styles.workflow}`}>
              <p>
                The Harvard Medical School (HMS) LINCS DSGC focuses on biochemical and
                cell-based assays that measure the response of human cells to (i) small
                molecule kinase inhibitors, a leading class of therapeutic agents for the
                treatment of cancer, autoimmune diseases, and other diseases; (ii) epigenome
                modifiers such as bromodomain and HDAC inhibitors; and (iii) naturally occurring
                ligands such as growth factors and inflammatory cytokines. Overall the Center
                is profiling the responses of ~100 cell lines and primary cell types to ~400
                perturbagens across dose and time
                using <a href="http://lincs.hms.harvard.edu/approach/assays/" target="_blank">
                multiple biochemical and cell biological assays</a>. More information on the
                data, assays and protocols can be found at
                the <a href="http://lincs.hms.harvard.edu/" target="_blank">HMS web portal</a>.
                Access to the datasets is available through web portals and programmatically
                through APIs. The API access is
                documented <a href="https://docs.google.com/document/d/1R_d_1UWO0C9y1TceXpKIUkhjk08DfvP1D19txi4Tbas/edit" target="_blank">
                here</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
