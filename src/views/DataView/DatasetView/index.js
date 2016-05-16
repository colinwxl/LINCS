import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import getIconLinks from 'utils/getIconLinks';
import { loadDataset } from 'actions/entities';
import PageBanner from 'components/PageBanner';
import Clustergram from 'containers/Clustergram';
import styles from './DatasetView.scss';

const mapStateToProps = (state) => ({
  datasets: state.entities.datasets,
});

export class DatasetView extends Component {
  componentWillMount() {
    this.props.loadDataset(this.props.params.datasetId);
  }

  render() {
    const dataset = this.props.datasets[this.props.params.datasetId];
    if (!dataset) {
      return null;
    }
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
              <h2>Access & Analyze Data</h2>
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
                    dataset.dateRetrieved &&
                      <tr>
                        <td>Release&nbsp;Date</td>
                        <td>{moment(dataset.dateRetrieved).format('MMMM Do, YYYY')}</td>
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
                </tbody>
              </table>
            </div>
            <div className="col-xs-12">
              <Clustergram datasetId={dataset.id} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

DatasetView.propTypes = {
  loadDataset: PropTypes.func.isRequired,
  datasets: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, {
  loadDataset,
})(DatasetView);
