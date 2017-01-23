import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import styles from '../AppsView.scss';
import cannedAnalysisSeed from './canned_analysis_seed.json';

const analyses = cannedAnalysisSeed;

const options = {
  hideSizePerPage: true,
  sizePerPage: 5,
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
  const cannedAnalysisUrl = row.canned_analysis_url;

  return (
    <div className={styles['tool-box']}>
      <a href={cannedAnalysisUrl} target="_blank">
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

export default function CannedAnalysisModule() {
  if (analyses && analyses.length > 0) {
    return (
      <BootstrapTable
        data={analyses}
        options={options}
        striped
        hover
        condensed
        pagination
        search
      >
        <TableHeaderColumn
          dataField="dataset_accession"
          width="110"
          dataAlign="center"
          isKey
          dataSort
        >
          Dataset Accession
        </TableHeaderColumn>
        <TableHeaderColumn
          dataField="tool_name"
          dataAlign="center"
          width="120"
          dataSort
          dataFormat={formatToolBox}
        >
          Tool
        </TableHeaderColumn>
        <TableHeaderColumn dataField="canned_analysis_description" >
          Canned Analysis Description
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
