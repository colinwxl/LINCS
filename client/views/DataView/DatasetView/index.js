import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import getIconLinks from 'utils/getIconLinks';
import {
  loadDataset,
  updateSmallMoleculeRange,
  filterSmallMolecules,
  updateCellRange,
  filterCells,
} from 'actions/datasetPage';
import PageBanner from 'components/PageBanner';
import Clustergram from 'containers/Clustergram';
import styles from './DatasetView.scss';
import CellsOrSMs from './CellsOrSMs';
import Paginator from './Paginator';


const mapStateToProps = ({ datasetPage }) => {
  const cache = datasetPage.cache;
  const ranges = datasetPage.ranges;
  const hasCache = Object.keys(cache).length > 0;
  return {
    dataset: datasetPage.dataset,
    smallMolecules: datasetPage.filtered.smallMolecules,
    numSmallMolecules: hasCache ? Object.keys(cache.smallMolecules).length : 0,
    smRange: ranges.smRange,
    cells: datasetPage.filtered.cells,
    numCells: hasCache ? Object.keys(cache.cells).length : 0,
    cellRange: ranges.cellRange,
  };
};

const mapDispatchToProps = (dispatch) => ({
  loadDataset: (datasetId) => {
    dispatch(loadDataset(datasetId));
  },
  onNextSMClick: () => {
    dispatch(updateSmallMoleculeRange(true));
  },
  onPrevSMClick: () => {
    dispatch(updateSmallMoleculeRange(false));
  },
  onSMSearch: (e) => {
    dispatch(filterSmallMolecules(e.target.value));
  },
  onNextCellClick: () => {
    dispatch(updateCellRange(true));
  },
  onPrevCellClick: () => {
    dispatch(updateCellRange(false));
  },
  onCellSearch: (e) => {
    dispatch(filterCells(e.target.value));
  },
});

export class DatasetView extends Component {

  componentWillMount() {
    const datasetId = this.props.params.datasetId;
    this.props.loadDataset(datasetId);
  }

  render() {
    const { dataset } = this.props;
    if (Object.keys(dataset).length === 0) {
      return null;
    }
    const {
      smallMolecules,
      numSmallMolecules,
      smRange,
      onNextSMClick,
      onPrevSMClick,
      onSMSearch,
      cells,
      numCells,
      cellRange,
      onNextCellClick,
      onPrevCellClick,
      onCellSearch,
    } = this.props;
    const links = getIconLinks(dataset);
    const hasAnalysis = links.useSlicr || links.usePiLINCS || links.useMosaic || links.useILINCS;
    const validLincsId = !!dataset.lincsId && dataset.lincsId !== 'LDS-*';
    let pageTitle = dataset.method;
    if (validLincsId) {
      pageTitle += ` (${dataset.lincsId})`;
    }
    return (
      <div className={styles.wrapper}>
        <PageBanner title={pageTitle} subTitle={dataset.description} />
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="table-responsive">
                <h2>Access &amp; Analyze Data</h2>
                <table className={`table ${styles['data-table']}`}>
                  <tbody>
                    {
                      validLincsId &&
                        <tr>
                          <td>LINCS&nbsp;ID</td>
                          <td>{dataset.lincsId}</td>
                        </tr>
                    }
                    <tr>
                      <td>Description</td>
                      <td>{dataset.description}</td>
                    </tr>
                    <tr>
                      <td>Center</td>
                      <td>
                        <a href={dataset.center.website} target="_blank">
                          {dataset.center.name}
                        </a>
                      </td>
                    </tr>
                    {
                      dataset.assay &&
                        <tr>
                          <td>Assay&nbsp;Type</td>
                          <td>{dataset.assay}</td>
                        </tr>
                    }
                    {
                      dataset.physicalDetection &&
                        <tr>
                          <td>Physical&nbsp;Detection</td>
                          <td>{dataset.physicalDetection}</td>
                        </tr>
                    }
                    {
                      dataset.dateReleased &&
                        <tr>
                          <td>Release&nbsp;Date</td>
                          <td>{moment(dataset.dateReleased).format('MMMM Do, YYYY')}</td>
                        </tr>
                    }
                    <tr>
                      <td>Links</td>
                      <td>
                        <a
                          className={`btn btn-secondary ${styles['btn-link']}`}
                          href={dataset.sourceLink}
                          target="_blank"
                        >
                          View at DSGC Website
                        </a>
                        {
                          validLincsId &&
                            <a
                              className={`btn btn-secondary ${styles['btn-link']}`}
                              href={`http://lincsportal.ccs.miami.edu/datasets/#/view/${dataset.lincsId}`}
                              target="_blank"
                            >
                              View on the LINCS Data Portal
                            </a>
                        }
                      </td>
                    </tr>
                    <tr>
                      <td>Cite this Dataset</td>
                      <td>
                        <a
                          className={`btn btn-secondary ${styles['btn-link']}`}
                          href={`/LINCS/api/v1/datasets/${dataset.id}/reference/ris`}
                        >
                          RIS Format (.ris)
                        </a>
                        <a
                          className={`btn btn-secondary ${styles['btn-link']}`}
                          href={`/LINCS/api/v1/datasets/${dataset.id}/reference/bib`}
                        >
                          BibTeX Format (.bib)
                        </a>
                        <a
                          className={`btn btn-secondary ${styles['btn-link']}`}
                          href={`/LINCS/api/v1/datasets/${dataset.id}/reference/enw`}
                        >
                          EndNote Format (.enw)
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Download</td>
                      <td>
                        <a
                          className={`btn btn-secondary ${styles['btn-link']}`}
                          href={`/LINCS/api/v1/datasets/${dataset.id}/download`}
                        >
                          Data Package
                        </a>
                        <a
                          className={`btn btn-secondary ${styles['btn-link']}`}
                          href={`/LINCS/api/v1/datasets/${dataset.id}/download/gct`}
                        >
                          GCT File*
                        </a>
                      </td>
                    </tr>
                    {
                      hasAnalysis &&
                        <tr>
                          <td>Analyze</td>
                          <td>
                            {
                              links.useSlicr &&
                                <a
                                  className={`btn btn-secondary ${styles['btn-link']}`}
                                  href="http://amp.pharm.mssm.edu/Slicr/"
                                  target="_blank"
                                >
                                  Analysis with Slicr
                                </a>
                            }
                            {
                              links.usePiLINCS &&
                                <a
                                  className={`btn btn-secondary ${styles['btn-link']}`}
                                  href="http://eh3.uc.edu/pilincs"
                                  target="_blank"
                                >
                                  Analysis with piLINCS
                                </a>
                            }
                            {
                              links.useMosaic &&
                                <a
                                  className={`btn btn-secondary ${styles['btn-link']}`}
                                  href="http://amp.pharm.mssm.edu/p100mosaic"
                                  target="_blank"
                                >
                                  Analysis with P100 Mosaic
                                </a>
                            }
                            {
                              links.useILINCS &&
                                <a
                                  className={`btn btn-secondary ${styles['btn-link']}`}
                                  href={`http://eh3.uc.edu/GenomicsPortals/DatasetLandingPage.do?data_set=${dataset.lincsId}`}
                                  target="_blank"
                                >
                                  Analysis with iLINCS
                                </a>
                            }
                          </td>
                        </tr>
                    }
                    {
                      numSmallMolecules !== 0 &&
                        <tr>
                          <td className={styles['small-molecules-cells-title']}>
                            Small Molecules ({numSmallMolecules})
                          </td>
                          <td>
                            <Paginator
                              total={numSmallMolecules}
                              range={smRange}
                              onPrevClick={onPrevSMClick}
                              onNextClick={onNextSMClick}
                              onSearch={onSMSearch}
                            />
                            <CellsOrSMs
                              objects={smallMolecules}
                            />
                          </td>
                        </tr>
                    }
                    {
                      numCells !== 0 &&
                        <tr>
                          <td className={styles['small-molecules-cells-title']}>
                            Cells ({numCells})
                          </td>
                          <td>
                            <Paginator
                              total={numCells}
                              range={cellRange}
                              onPrevClick={onPrevCellClick}
                              onNextClick={onNextCellClick}
                              onSearch={onCellSearch}
                            />
                            <CellsOrSMs
                              objects={cells}
                            />
                          </td>
                        </tr>
                    }
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-xs-12">
              <Clustergram dataset={dataset} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

DatasetView.propTypes = {
  dataset: PropTypes.object.isRequired,
  loadDataset: PropTypes.func.isRequired,
  params: PropTypes.object.isRequired,

  // Small molecules
  smallMolecules: PropTypes.object.isRequired,
  numSmallMolecules: PropTypes.number.isRequired,
  smRange: PropTypes.array.isRequired,
  onNextSMClick: PropTypes.func.isRequired,
  onPrevSMClick: PropTypes.func.isRequired,
  onSMSearch: PropTypes.func.isRequired,

  // Cells
  cells: PropTypes.object.isRequired,
  numCells: PropTypes.number.isRequired,
  cellRange: PropTypes.array.isRequired,
  onNextCellClick: PropTypes.func.isRequired,
  onPrevCellClick: PropTypes.func.isRequired,
  onCellSearch: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DatasetView);
