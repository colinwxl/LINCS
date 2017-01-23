import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import styles from '../AppsView.scss';
import cannedAnalysisSeed from './canned_analysis_seed.json';

const analyses = cannedAnalysisSeed;

// "dataset_accession": "LDS-1106",
// "dataset_url": "http://lincsportal.ccs.miami.edu/datasets/#/view/LDS-1106",
// "tool_name": "Drug-Pathway Browser",
// "canned_analysis_url": "http://lincs.hms.harvard.edu/explore/pathway/",
// "canned_analysis_description":

// function priceFormatter(cell, row) {
//   return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
// }

const options = {
  sizePerPageList: [
    { text: '5', value: 5 },
    { text: '10', value: 10 },
    { text: 'All', value: analyses.length },
  ],
  sizePerPage: 5,
};

const format = (cell, row) => {
  // can return a react component here
  return `<img src="https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_1280.jpg" /> ${cell}`
};

export default function CannedAnalysisModule() {
  if (analyses && analyses.length > 0) {
    return (
      <BootstrapTable
        data={analyses}
        options={options}
        striped
        hover
        pagination
        condensed
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
          width="120"
          dataSort
          dataFormat={format}
        >
          Tool Name
        </TableHeaderColumn>
        <TableHeaderColumn
          dataField="canned_analysis_description"
        >
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
