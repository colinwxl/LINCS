



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
      <a
        href={cannedAnalysisUrl}
        target="_blank"
        className={styles.link}
        onClick={(e) => { window.open(cannedAnalysisUrl, '_blank') }}
      >
        <div className={styles['ca-img-wrap']}>
            <img src={require(screenPath)} className={styles['lca-img']} alt={toolName} />
        </div>
        <span className={styles['analysis-title']}>{lcaAccession}</span>
        <span className={styles.overlay} />
      </a>
    </div>
  );
};

const formatDescription = (cell, row) => {
  const centerDescription = row.canned_analysis_description;
  return (
    <p className={styles['center-desc']}>
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
      <Link
        to={centerUrl}
        className={styles.link}
        onClick={(e) => { window.location = centerUrl }}
      >
        <div className={styles['center-img-wrap']}>
            <img src={centerLogo} alt={centerName} className={styles['center-img']}/>
        </div>
        <span className={styles['center-title']}>{centerName}</span>
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
        <a
          href={datasetUrl}
          key={i}
          target="_blank"
          style={{display: 'block'}}
          className={`${styles.link} ${styles.accession}`}
          onClick={(e) => { window.open(datasetUrl, '_blank') }}
        >
          {currAccession}
        </a>
      );
    }
    // make item below into tooltip
    return (
      <div className={styles['accession-list']}>
        <div className={styles['collapsible-wrapper']}>
          <Collapsible
            className={styles.collapsible}
            trigger={`▸ ${datasetInfo.dataset_accession}`}
            triggerWhenOpen={`▾ ${datasetInfo.dataset_accession}`}
          >
            {datasetAccessionsList}
          </Collapsible>
        </div>
      </div>
    );
  } else {
    const datasetUrl = generateUrlForDataset(datasetInfo.dataset_accession);
    return (
      <div className={styles['accession-list']}>
        <a
          href={datasetUrl}
          target="_blank"
          className={`${styles.link} ${styles.accession}`}
          onClick={(e) => { window.open(datasetUrl, '_blank') }}
        >
          {datasetInfo.dataset_accession}
        </a>
      </div>
    );
  }
};

const formatToolBox = (cell, row) => {
  const toolName = row.tool_name;
  const toolLogo = row.tool_logo_url;
  const toolUrl = row.tool_url;

  return (
    <div className={styles['tool-box']}>
      <a
        href={toolUrl}
        target="_blank"
        className={styles.link}
        onClick={(e) => { window.open(toolUrl, '_blank') }}
      >
        <div className={styles['tool-img-wrap']}>
          <img src={toolLogo} alt={toolName} className={styles['tool-img']}/>
        </div>
        <span className={styles['tool-title']}>{toolName}</span>
      </a>
    </div>
  );
};

const generateTableRows = (list) => {
  var res = [];
  list.forEach(row => {
    res.push(
      <tr
        key={`${row.lca_accession}_row`}
        data-toggle="collapse"
        data-target={`#${row.lca_accession}_id`}
      >
        <td>
          {formatAnalysis(null, row)}
        </td>
        <td className={styles.disappear}>
          {formatDescription(null, row)}
        </td>
        <td>
          {formatCenter(null, row)}
        </td>
        <td style={{ paddingLeft: '0.75', paddingRight: '0.75'}}>
          {formatMultiAccessions(null, row)}
        </td>
        <td>
          {formatToolBox(null, row)}
        </td>
      </tr>
    );
    res.push(
      <tr key={`${row.lca_accession}_hiddenDesc`} className={styles['hidden-desc']}>
        <td className={styles['hidden-row']} colSpan={'42'}>
          <div id={`${row.lca_accession}_id`} className="collapse">
            {formatDescription(null, row)}
          </div>
        </td>
      </tr>
    );
  });
  return res;
}

export default function CannedAnalysisModule() {
  if (analyses && analyses.length > 0) {
    return (
      <div className="row">
        <div className="col-xl-12">
          <table className="table table-condensed" style={{borderCollapse : 'collapse'}}>
            <thead>
              <tr>
                <th className={styles['table-col-text']}>Canned Analysis</th>
                <th className={`${styles['table-col-text']} ${styles.disappear}`}>Analysis Description</th>
                <th className={styles['table-col-text']}>Center</th>
                <th className={styles['table-col-text']}>Dataset Accession(s)</th>
                <th className={styles['table-col-text']}>Tool</th>
              </tr>
            </thead>
            <tbody>
              {generateTableRows(cannedAnalysisSeed)}
            </tbody>
        </table>
        {
          // <BootstrapTable
          //   data={analyses}
          //   options={options}
          //   striped
          //   hover
          //   condensed
          //   search
          // >
          //   <TableHeaderColumn
          //     className={styles['column-title']}
          //     dataField="screen_path"
          //     dataAlign="center"
          //     dataFormat={formatAnalysis}
          //     width='15%'
          //   >
          //     Canned Analysis
          //   </TableHeaderColumn>
          //   <TableHeaderColumn
          //     className={styles['column-title']}
          //     dataField="canned_analysis_description"
          //     dataFormat={formatDescription}
          //   >
          //     Analysis Description
          //   </TableHeaderColumn>
          //   <TableHeaderColumn
          //     className={styles['column-title']}
          //     dataField="analysis_center"
          //     dataAlign="center"
          //     dataFormat={formatCenter}
          //     width='15%'
          //   >
          //     Center
          //   </TableHeaderColumn>
          //   <TableHeaderColumn
          //     className={styles['column-title']}
          //     dataField="dataset_accession"
          //     dataAlign="center"
          //     isKey
          //     dataFormat={formatMultiAccessions}
          //     width='20%'
          //   >
          //     Dataset Accession(s)
          //   </TableHeaderColumn>
          //   <TableHeaderColumn
          //     className={styles['column-title']}
          //     dataField="tool_name"
          //     dataAlign="center"
          //     dataFormat={formatToolBox}
          //     width='15%'
          //   >
          //     Tool
          //   </TableHeaderColumn>
          // </BootstrapTable>
        }
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
