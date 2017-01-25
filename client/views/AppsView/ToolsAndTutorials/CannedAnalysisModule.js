/* eslint-disable */
import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import styles from '../AppsView.scss';
import cannedAnalysisSeed from './canned_analysis_seed.json';

const analyses = cannedAnalysisSeed;

const options = {
  hideSizePerPage: true,
  // sizePerPage: 5,
  searchDelayTime: 250,
};

const toolNameLogoMap = {
  'Drug-Pathway Browser': 'http://lincsproject.org/LINCS/files/tools_logos/explore2.jpg',
  'Drug Response Browser': 'http://lincsproject.org/LINCS/files/tools_logos/explore4.jpg',
  iLINCS: 'http://lincsproject.org/LINCS/files/tools_logos/i-lincs.png',
  GEN3VA: 'http://lincsproject.org/LINCS/files/tools_logos/gen3va-logo.png',
  'LINCS Data Explorer': 'http://lincsproject.org/LINCS/files/tools_logos/mep-lincs-data-explorer.png',
  'RTK Profile Browser': 'http://lincsproject.org/LINCS/files/tools_logos/scatterplot_widget.jpg',
};

const formatToolBox = (cell, row) => {
  const toolName = row.tool_name;
  const toolLogo = toolNameLogoMap[toolName];
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

const formatAccession = (cell, row) => (
  <a href={row.dataset_url} target="_blank" className={styles.link}>
    {row.dataset_accession}
  </a>
);

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
          dataField="dataset_accession"
          width="110"
          dataAlign="center"
          isKey
          dataFormat={formatAccession}
        >
          Dataset Accession
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
