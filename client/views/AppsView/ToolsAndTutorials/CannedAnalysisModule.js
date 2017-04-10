/* eslint-disable */
import React from 'react';
import { Link } from 'react-router';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import styles from '../AppsView.scss';
import cannedAnalysisSeed from './canned_analysis_seed.json';

const analyses = cannedAnalysisSeed;

const options = {
  hideSizePerPage: true,
  // sizePerPage: 5,
  searchDelayTime: 250,
};

const formatToolBox = (cell, row) => {
  const toolName = row.tool_name;
  const toolLogo = row.tool_logo_url;
  const toolUrl = row.tool_url;

  return (
    <div className={styles['tool-box']}>
      <a href={toolUrl} target="_blank" className={styles.link}>
        <div className={styles['tool-img-wrap']}>
          <div className={styles['tool-img-inner']}>
            <img src={toolLogo} alt={toolName} />
          </div>
        </div>
        <span className={styles.toolTitle}>{toolName}</span>
      </a>
    </div>
  );
};

const formatAccession = (cell, row) => {
  const accessions = row.dataset_accession;
  const ldpBaseDatasetUrl = 'http://lincsportal.ccs.miami.edu/datasets/#/view/';
  const hmsBaseDatasetUrl = 'http://lincs.hms.harvard.edu/db/datasets/';
  const datasetAccessionsList = [];
  for (let i = 0; i < accessions.length; i++) {
    const currAccession = accessions[i];
    let datasetUrl;
    if (currAccession.indexOf('HMS') === 0) {
      datasetUrl = hmsBaseDatasetUrl + currAccession.slice(4);
    } else {
      datasetUrl = ldpBaseDatasetUrl + currAccession;
    }

    datasetAccessionsList.push(
      <a href={datasetUrl} key={i} target="_blank" style={{display: 'block'}} className={styles.link}>
        {currAccession}
      </a>
    );
  }
  return (
    <div className={styles['accession-list']}>{datasetAccessionsList}</div>
  )
};


const formatCenter = (cell, row) => {
  const centerName = row.analysis_center;
  const centerLogo = row.analysis_center_logo;
  const centerUrl = row.analysis_center_url;

  return (
    <div className={styles['center-box']}>
      <Link to={centerUrl} className={styles.link}>
        <div className={styles['center-img-wrap']}>
          <div className={styles['center-img-inner']}>
            <img src={centerLogo} alt={centerName} />
          </div>
        </div>
        <span className={styles.toolTitle}>{centerName}</span>
      </Link>
    </div>
  );
};

const formatScreen = (cell, row) => {
  const toolName = row.tool_name;
  const screenPath = row.screen_path;
  const cannedAnalysisUrl = row.canned_analysis_url;
  const lcaAccession = row.lca_accession;
  return (
    <div className={styles['ca-box']}>
      <a href={cannedAnalysisUrl} target="_blank" className={styles.link}>
        <div className={styles['ca-img-wrap']}>
          <div className={styles['ca-img-inner']}>
            <img src={require(screenPath)} alt={toolName} />
          </div>
        </div>
        <span className={styles.toolTitle}>{lcaAccession}</span>
        <span className={styles.overlay} />
      </a>
    </div>
  );
};

export default function CannedAnalysisModule() {
  if (analyses && analyses.length > 0) {
    return (
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
          dataFormat={formatScreen}
        >
          Canned Analysis
        </TableHeaderColumn>
        <TableHeaderColumn
          dataField="canned_analysis_description"
        >
          Canned Analysis Description
        </TableHeaderColumn>
        <TableHeaderColumn
          dataField="analysis_center"
          dataAlign="center"
          dataFormat={formatCenter}
        >
          Center
        </TableHeaderColumn>
        <TableHeaderColumn
          dataField="dataset_accession"
          width="110"
          dataAlign="center"
          isKey
          dataFormat={formatAccession}
        >
          Dataset Accession(s)
        </TableHeaderColumn>
        <TableHeaderColumn
          dataField="tool_name"
          dataAlign="center"
          width="120"
          dataFormat={formatToolBox}
        >
          Tool
        </TableHeaderColumn>
      </BootstrapTable>
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
