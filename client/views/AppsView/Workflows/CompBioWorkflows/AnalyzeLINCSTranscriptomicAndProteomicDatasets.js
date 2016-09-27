import React, { Component } from 'react';
// import { Link } from 'react-router';

import styles from '../Workflow.scss';
import PageNav from 'components/PageNav';
import PageBanner from 'components/PageBanner';
import iLINCSDatasetsWorkflow from '../images/ilincs-datasets-workflow.png';


export default class Workflow extends Component {

  static subTitle = 'Analyze LINCS transcriptomic and proteomic datasets'
  static path = 'analyze-lincs-transcriptomic-and-proteomic-datasets'

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
                The <a href="http://www.ilincs.org/" target="_blank">iLINCS (Integrative LINCS) portal</a> is
                an web platform for analysis of LINCS data
                and signatures. The portal provides biologists-friendly user interfaces for
                analyzing transcriptomics and proteomics LINCS datasets. iLINCS web tools
                facilitate statistical analysis to identify differentially expressed genes and
                proteins; bioinformatics analysis to identify affected networks, pathway and gene
                lists; and  interactive visualizations of the results to aid in interpreting your
                results. The workflow is as follows:
              </p>
              <ol>
                <li>Select a LINCS dataset (transcriptomic, proteomic, phosphoproteomic)</li>
                <li>Browse pre-computed exploratory analysis results</li>
                <li>
                  Perform statistical analysis to construct a signature of differentially
                  expressed genes or proteins by comparing two groups of samples
                </li>
                <li>
                  Perform bioinformatics analysis of a created signature
                  <ul>
                    <li>
                      Interactive visualization of the signature and data used in constructing
                      the signatures
                    </li>
                    <li>
                      Find concordant drug, diesese and transcription factor binding signatures
                      (> 120,000 signatures available)
                    </li>
                    <li>Perform SPIA pathway analysis</li>
                    <li>Perform gene list enrichment analysis</li>
                  </ul>
                </li>
                <li>
                  Use the created signature to query and analyze other LINCS or non-LINCS datasets
                  (> 3,000 datasets available for analysis)
                </li>
              </ol>
              <img
                className={styles['img-bordered']}
                src={iLINCSDatasetsWorkflow}
                alt="iLINCS screenshot"
              />
              <p className={styles['post-script']}>
                For more, see the <a href="https://www.youtube.com/playlist?list=PL0Bwuj8819U8d0lSxu4hxaPX64yJUOlzQ" target="_blank">iLINCS video tutorial</a> on YouTube
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
