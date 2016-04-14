import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
// import each from 'lodash/each';
//
import { loadDatasets } from 'actions/entities';
import getIconLinks from 'utils/getIconLinks';
import styles from './Dataset.scss';
import CitationsModal from 'components/CitationsModal';

const mapStateToProps = ({ entities }) => ({
  cells: entities.cells,
  datasets: entities.datasets,
});

export class Dataset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }

  componentWillMount() {
    this.props.loadDatasets();
  }

  _openCitationsModal = () => {
    this.setState({ isModalOpen: true });
  }

  _closeCitationsModal = () => {
    this.setState({ isModalOpen: false });
  }

  render() {
    const { cells, cellId, className, datasets, datasetId } = this.props;
    const ds = datasets[datasetId];
    const cell = cells[cellId];
    const links = getIconLinks(ds);
    return (
      <div className={`${styles.dataset} ${className}`}>
      <div className={styles['ds-header']}>
        <div className="row">
          <div className="col-xs-8">
            <h5>{ds.method}</h5>
            <p className={styles.creator}>{ds.centerName}</p>
          </div>
          <div className="col-xs-4">
            <p className={`text-muted ${styles['info-date']}`}>
              <em>{moment(ds.dateRetrieved).format('MMM Do, YYYY')}</em>
            </p>
          </div>
        </div>
      </div>
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
        <a className={`btn ${styles['btn-link']}`} onClick={this._openCitationsModal}>
          Export data citation
        </a>
        {
          links.useSlicr &&
          <a
            className={`btn ${styles['btn-link']}`}
            href={`http://amp.pharm.mssm.edu/Slicr/#/search/${cell ? cell.name : ''}`}
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

Dataset.propTypes = {
  cells: PropTypes.object,
  cellId: PropTypes.number,
  className: PropTypes.string,
  datasets: PropTypes.object,
  datasetId: PropTypes.number,
  loadDatasets: PropTypes.func,
  incrementDatasetClicks: PropTypes.func,
};

export default connect(mapStateToProps, {
  loadDatasets,
})(Dataset);
