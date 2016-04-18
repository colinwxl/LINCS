import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import { loadDatasets } from 'actions/entities';
import getIconLinks from 'utils/getIconLinks';
import styles from './Releases.scss';
import CitationsModal from 'components/CitationsModal';

const mapStateToProps = ({ entities }) => ({ cells: entities.cells });

export class SearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }

  _openCitationsModal = () => {
    this.setState({ isModalOpen: true });
  }

  _closeCitationsModal = () => {
    this.setState({ isModalOpen: false });
  }

  render() {
    const ds = this.props.dataset;
    const cellNames = ds.cells.map(cellId => this.props.cells[cellId].name);
    const links = getIconLinks(ds);
    return (
      <div className={styles.dataset}>
        <div className={styles['ds-header']}>
          <h5>{ds.method}</h5>
          <p className={styles.creator}>{ds.centerName}</p>
        </div>
        <p className={`text-muted ${styles['info-date']}`}>
          <em>{moment(ds.dateRetrieved).format('MMM Do, YYYY')}</em>
        </p>
        <p className={styles.description}>{ds.description}</p>
        <div className={styles.links}>
          <a className={`btn ${styles['btn-link']}`} href={ds.sourceLink} target="_blank">
            View at source
          </a>
          <CitationsModal
            isOpen={this.state.isModalOpen}
            datasetId={ds.id}
            onModalClose={this._closeCitationsModal}
          />
          <a
            className={`btn ${styles['btn-link']}`}
            href={`/LINCS/api/v1/datasets/${ds.id}/download`}
          >
            Download data package
          </a>
          <a
            className={`btn ${styles['btn-link']}`}
            href={`/LINCS/api/v1/datasets/${ds.id}/download/gct`}
          >
            Download GCT file
          </a>
          <a className={`btn ${styles['btn-link']}`} onClick={this._openCitationsModal}>
            Cite this dataset
          </a>
          {
            links.useSlicr &&
            <a
              className={`btn ${styles['btn-link']}`}
              href={`http://amp.pharm.mssm.edu/Slicr/#/search/${cellNames.join(',')}`}
              target="_blank"
            >
              Analyze with Slicr
            </a>
          }
          {
            links.usePiLINCS &&
            <a
              className={`btn ${styles['btn-link']}`}
              href="http://eh3.uc.edu/pilincs"
              target="_blank"
            >
              Analysis with piLINCS
            </a>
          }
          {
            links.useMosaic &&
            <a
              className={`btn ${styles['btn-link']}`}
              href="http://amp.pharm.mssm.edu/p100mosaic"
              target="_blank"
            >
              P100 Mosaic
            </a>
          }
          {
            links.useILINCS &&
            <a
              className={`btn ${styles['btn-link']}`}
              href={`http://eh3.uc.edu/GenomicsPortals/DatasetLandingPage.do?data_set=${ds.lincsId}`}
              target="_blank"
            >
              Analyze with iLINCS
            </a>
          }
        </div>
      </div>
    );
  }
}

SearchResult.propTypes = {
  cells: PropTypes.object,
  dataset: PropTypes.object,
  loadDatasets: PropTypes.func,
  incrementDatasetClicks: PropTypes.func,
};

export default connect(mapStateToProps, { loadDatasets })(SearchResult);
