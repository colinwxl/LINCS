import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from '../Workflow.scss';
import PageNav from 'components/PageNav';
import PageBanner from 'components/PageBanner';
// Images
import ldpPanelImg from '../images/ldp-panel.png';
import ldpDataBrowserImg from '../images/ldp-data-browser.png';
import dtoxsDataIcon from '../images/dtoxs-data-icon.png';
import dtoxsRequestDataImg from '../images/dtoxs-request-data.png';
import iLincsDropdownImg from '../images/ilincs-dropdown.png';
import iLincsAnalysisImg from '../images/ilincs-analysis.png';
import iLincsFilterImg from '../images/ilincs-filter.png';

export default class Workflow extends Component {

  static subTitle = 'Download RNA-Seq data from LINCS'
  static path = 'download-rna-seq-data-from-lincs'

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
              mainPage="Computational Biologist Workflows"
              subPage={this.constructor.subTitle}
              isWorkflowPage
            />
            <div
              className={
                `col-md-9 col-md-pull-3
                ${styles.workflow}
                ${styles['rna-seq-workflow']}`
              }
            >
              <p>
                The&nbsp;
                <Link to="/centers/data-and-signature-generating-centers/neurolincs">
                  NeuroLINCS
                </Link> and the&nbsp;
                <Link to="/centers/data-and-signature-generating-centers/dtoxs">
                  DToxS
                </Link> centers collect RNA-Seq data. Processed data, scripts,
                pipelines and downstream analyses are also available for these datasets.
              </p>
              <h4>Obtaining RNA-Seq datasets from the LINCS Data Portal</h4>
              <ol>
                <li>
                  Open the "Datasets" section on
                  the <a href="http://lincsportal.ccs.miami.edu/dcic-portal/" target="_blank">
                  LINCS Data Portal</a>.
                </li>
                <li>
                  Select “RNA-Seq” in a left panel under “Method”
                </li>
              </ol>
              <div className="row">
                <div className="col-xs-8 col-xs-offset-2 col-md-4 col-md-offset-4 text-xs-center">
                  <img src={ldpPanelImg} alt="LINCS Data Portal Filters" />
                </div>
              </div>
              <ol start="3">
                <li>Select the RNA-Seq datasets in the data browser</li>
              </ol>
              <div className="row">
                <div className="col-xs-12">
                  <img src={ldpDataBrowserImg} alt="LINCS Data Portal Browser" />
                </div>
              </div>
              <h4>Obtaining RNA-Seq datasets from the DToxS website</h4>
              <ol>
                <li>
                  Open the “Downloads” tab on
                  the <a href="https://martip03.u.hpc.mssm.edu/index.php" target="_blank">
                  DToxS website</a> and login
                </li>
                <li>
                  Open the "Data &amp; Resources" tab and click on the "DATA" icon shown below
                </li>
              </ol>
              <div className="row">
                <div className="col-xs-4 col-xs-offset-4 col-md-2 col-md-offset-5 text-xs-center">
                  <a href="https://martip03.u.hpc.mssm.edu/data.php" target="_blank">
                    <img src={dtoxsDataIcon} alt="DToxS Data Icon" />
                  </a>
                </div>
              </div>
              <ol start="3">
                <li>Open the “Transcriptomics” tab and select “Raw Sequence Data”</li>
              </ol>
              <div className="row">
                <div className="col-xs-10 col-xs-offset-1">
                  <img
                    src={dtoxsRequestDataImg}
                    alt="DToxS Request Data"
                    className={styles['img-bordered']}
                  />
                </div>
              </div>
              <ol start="4">
                <li>Click on the "Request Data" button and write an email to request the data</li>
              </ol>
              <h4>Obtaining RNA-Seq datasets from iLINCS</h4>
              <ol>
                <li>
                  Open the "Datasets" tab on
                  the <a href="http://www.eh3.uc.edu/GenomicsPortals/datasets.jsp" target="_blank">
                  iLINCS website</a>
                </li>
                <li>In the "Assay" dropdown menu, select "RNA-Seq"</li>
              </ol>
              <div className="row">
                <div className="col-xs-8 col-xs-offset-2">
                  <img
                    src={iLincsDropdownImg}
                    alt="iLINCS Dropdown Menu"
                    className={styles['img-bordered']}
                  />
                </div>
              </div>
              <ol start="3">
                <li>Click the “Analyze” button and on the dataset page select “Samples”</li>
              </ol>
              <div className="row">
                <div className="col-xs-10 col-xs-offset-1 col-md-6 col-md-offset-3 text-xs-center">
                  <img
                    src={iLincsAnalysisImg}
                    alt="iLINCS Analysis"
                    className={styles['img-bordered']}
                  />
                </div>
              </div>
              <ol start="4">
                <li>
                  Filter the data if necessary and click the “Download selected
                  samples data” button to download the filtered data
                </li>
              </ol>
              <div className="row">
                <div className="col-xs-12">
                  <img
                    src={iLincsFilterImg}
                    alt="iLINCS Filters"
                    className={styles['img-bordered']}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
