import React from 'react';

import styles from './Workflow.scss';
import PageBanner from 'components/PageBanner';
// Images
import ldpPanelImg from './images/ldp-panel.png';
import ldpDataBrowserImg from './images/ldp-data-browser.png';
import dtoxsDataIcon from './images/dtoxs-data-icon.png';
import dtoxsRequestDataImg from './images/dtoxs-request-data.png';
import neurolincsDsPageImg from './images/neurolincs-ds-page.png';
import neurolincsDsDownloadImg from './images/neurolincs-ds-download.png';
import iLincsDropdownImg from './images/ilincs-dropdown.png';
import iLincsAnalysisImg from './images/ilincs-analysis.png';
import iLincsFilterImg from './images/ilincs-filter.png';
import lincsTreeViewImg from './images/lincs-tree-view.png';

export default function Workflow() {
  return (
    <div className={styles.wrapper}>
      <PageBanner
        title="LINCS Workflow"
        subTitle="Downloading RNA-Seq data from LINCS"
      />
      <div className="container">
        <div className="row">
          <div className={`col-xl-9 ${styles.workflow} ${styles['rna-seq-workflow']}`}>
            <p>
              Within the LINCS Consortium there are two centers that collect RNA-Seq data.
              These are <a href="http://www.neurolincs.org" target="_blank">NeuroLINCS</a>
              and <a href="https://martip03.u.hpc.mssm.edu/index.php" target="_blank">DToXS</a>.
              The raw fastq files for this data are available on these two centers’ respective
              web portals. In addition, processed data, scripts, pipelines and downstream
              analyses are also available for these datasets.
            </p>
            <h4>Obtaining RNA-Seq datasets from the LINCS Data Portal</h4>
            <ol>
              <li>
                Open the "Datasets" section on
                the <a href="http://lincsportal.ccs.miami.edu/dcic-portal/" target="_blank">
                LINCS Data Portal website</a>.
              </li>
              <li>
                Select “RNA-Seq” in a left panel under “Methods”
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
              <div className="col-xs-10 col-xs-offset-1">
                <img src={ldpDataBrowserImg} alt="LINCS Data Portal Browser" />
              </div>
            </div>
            <h4>Obtaining RNA-Seq datasets from the DToxS website</h4>
            <ol>
              <li>
                Open the “Downloads” tab on
                the <a href="https://martip03.u.hpc.mssm.edu/index.php" target="_blank">
                DToXS website</a> and login
              </li>
              <li>Open the "Data & Resources" tab and click on the "DATA" icon shown below</li>
            </ol>
            <div className="row">
              <div className="col-xs-4 col-xs-offset-4 col-md-2 col-md-offset-5 text-xs-center">
                <img src={dtoxsDataIcon} alt="DToxS Data Icon" />
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
            <h4>Obtaining RNA-Seq datasets from NeuroLINCS</h4>
            <ol>
              <li>
                Open the "Downloads" tab on
                the <a href="http://www.neurolincs.org/data" target="_blank">
                NeuroLINCS data website</a>
              </li>
              <li>
                To open the dataset page, select a date and click on the “Click here”
                button in the “Transcriptomic - RNA-Seq” column
              </li>
            </ol>
            <div className="row">
              <div className="col-xs-10 col-xs-offset-1">
                <img
                  src={neurolincsDsPageImg}
                  alt="NeuroLINCS Dataset Page"
                  className={styles['img-bordered']}
                />
              </div>
            </div>
            <ol start="3">
              <li>
                To download the raw data (RNA-seq data as raw read counts) click on
                the “Download File” button for Level 2 data
              </li>
            </ol>
            <div className="row">
              <div className="col-xs-10 col-xs-offset-1">
                <img src={neurolincsDsDownloadImg} alt="NeuroLINCS Download" />
              </div>
            </div>
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
                Filter the data if necessary and click the “Download” button to
                download the filtered data
              </li>
            </ol>
            <div className="row">
              <div className="col-xs-8 col-xs-offset-2">
                <img
                  src={iLincsFilterImg}
                  alt="iLINCS Filters"
                  className={styles['img-bordered']}
                />
              </div>
            </div>
            <h4>Obtaining RNA-Seq data from lincsproject.org</h4>
            <ol>
              <li>
                On the home page click “Discover LINCS Data” or click the "Data"
                option in the menu at the top of the screen
              </li>
              <li>From the tree view, select "By Assay" –> "Transcriptomics" –> "RNA-Seq"</li>
            </ol>
            <div className="row">
              <div className="col-xs-10 col-xs-offset-1 text-xs-center">
                <img src={lincsTreeViewImg} alt="LINCS Tree View" />
              </div>
            </div>
            <ol start="3">
              <li>
                Click the “Download data package” option to download the metadata and
                the processed data, or click “Download GCT file” option to download the
                actual data matrix
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
