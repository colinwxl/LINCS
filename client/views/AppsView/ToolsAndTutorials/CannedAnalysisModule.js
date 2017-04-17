/* eslint-disable */
import React from 'react';
import { Link } from 'react-router';
import ReactTooltip from 'react-tooltip';
import Collapsible from 'react-collapsible';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import styles from '../AppsView.scss';
import cannedAnalysisSeed from './canned_analysis_seed.json';

const analyses = cannedAnalysisSeed;

const options = {
  hideSizePerPage: true,
  // sizePerPage: 5,
  searchDelayTime: 250,
};

const generateUrlForDataset = (dataset) => {
  const ldpBaseDatasetUrl = 'http://lincsportal.ccs.miami.edu/datasets/#/view/';
  const hmsBaseDatasetUrl = 'http://lincs.hms.harvard.edu/db/datasets/';
  let datasetUrl;
  if (dataset.indexOf('HMS') === 0) {
    datasetUrl = hmsBaseDatasetUrl + dataset.slice(4);
  } else {
    datasetUrl = ldpBaseDatasetUrl + dataset;
  }
  return datasetUrl;
}

const formatAnalysis = (cell, row) => {
  const toolName = row.tool_name;
  const screenPath = row.screen_path;
  const cannedAnalysisUrl = row.canned_analysis_url;
  const lcaAccession = row.lca_accession;
  return (
    <div className={styles['ca-box']}>
      <a href={cannedAnalysisUrl} target="_blank" className={styles.link}>
        <div className={styles['ca-img-wrap']}>
            <img src={require(screenPath)} className={styles['lca-img']} alt={toolName} />
        </div>
        <span className={styles.toolTitle}>{lcaAccession}</span>
        <span className={styles.overlay} />
      </a>
    </div>
  );
};

const formatDescription = (cell, row) => {
  const centerDescription = row.canned_analysis_description;
  return (
    <p>
      {centerDescription}
    </p>
  );
}

const formatCenter = (cell, row) => {
  const centerName = row.analysis_center;
  const centerLogo = row.analysis_center_logo;
  const centerUrl = row.analysis_center_url;

  return (
    <div className={styles['center-box']}>
      <Link to={centerUrl} className={styles.link}>
        <div className={styles['center-img-wrap']}>
            <img src={centerLogo} alt={centerName} className={styles['center-img']}/>
        </div>
        <span className={styles.toolTitle}>{centerName}</span>
      </Link>
    </div>
  );
};

const formatMultiAccessions = (cell, row) => {
  const datasetInfo = row.dataset_info;

  if (datasetInfo.datasets && datasetInfo.datasets.length > 0) {
    const accessions = datasetInfo.datasets;
    const datasetAccessionsList = [];
    for (let i = 0; i < accessions.length; i++) {
      const currAccession = accessions[i];
      const datasetUrl = generateUrlForDataset(currAccession);

      datasetAccessionsList.push(
        <a href={datasetUrl} key={i} target="_blank" style={{display: 'block'}} className={styles.link}>
          {currAccession}
        </a>
      );
    }
    // make item below into tooltip
    return (
      <div className={styles['accession-list']}>
        <Collapsible
          className={styles.collapsible}
          trigger={`▸ ${datasetInfo.dataset_accession}`}
          triggerWhenOpen={`▾ ${datasetInfo.dataset_accession}`}
        >
          {datasetAccessionsList}
        </Collapsible>
      </div>
    );
  } else {
    const datasetUrl = generateUrlForDataset(datasetInfo.dataset_accession);
    return (
      <a href={datasetUrl} target="_blank" style={{display: 'block'}} className={styles.link}>
        {datasetInfo.dataset_accession}
      </a>
    );
  }
};

const formatToolBox = (cell, row) => {
  const toolName = row.tool_name;
  const toolLogo = row.tool_logo_url;
  const toolUrl = row.tool_url;

  return (
    <div className={styles['tool-box']}>
      <a href={toolUrl} target="_blank" className={styles.link}>
        <div className={styles['tool-img-wrap']}>
          <img src={toolLogo} alt={toolName} className={styles['tool-img']}/>
        </div>
        <span className={styles.toolTitle}>{toolName}</span>
      </a>
    </div>
  );
};

export default function CannedAnalysisModule() {
  if (analyses && analyses.length > 0) {
    return (
      <div className="row">
        <div className="col-xl-12">
          <BootstrapTable
            data={analyses}
            options={options}
            striped
            hover
            condensed
            search
          >
            <TableHeaderColumn
              dataField="screen_path"
              dataAlign="center"
              dataFormat={formatAnalysis}
              width='15%'
            >
              Canned Analysis
            </TableHeaderColumn>
            <TableHeaderColumn
              dataField="canned_analysis_description"
              dataFormat={formatDescription}
            >
              Analysis Description
            </TableHeaderColumn>
            <TableHeaderColumn
              dataField="analysis_center"
              dataAlign="center"
              dataFormat={formatCenter}
              width='15%'
            >
              Center
            </TableHeaderColumn>
            <TableHeaderColumn
              dataField="dataset_accession"
              dataAlign="center"
              isKey
              dataFormat={formatMultiAccessions}
              width='20%'
            >
              Dataset Accession(s)
            </TableHeaderColumn>
            <TableHeaderColumn
              dataField="tool_name"
              dataAlign="center"
              dataFormat={formatToolBox}
              width='15%'
            >
              Tool
            </TableHeaderColumn>
          </BootstrapTable>
        </div>
      </div>
    );
  }
  return (
    <div className="row">
      <h3 className={styles['section-title']}>Canned Analysis</h3>
      <h5 className="m-t-3 text-xs-center">
        No analysis found. Please try again later.
      </h5>
    </div>
  );
}
