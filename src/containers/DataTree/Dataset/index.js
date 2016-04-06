import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
// import each from 'lodash/each';
//
import styles from './Dataset.scss';
import CitationsModal from './CitationsModal';

const mapStateToProps = ({ entities }) => ({
  cells: entities.cells,
  datasets: entities.datasets,
});

function getIconLinks(ds) {
  const { assay, method } = ds;
  // Assay RegExps
  const l1000RegEx = /L1000/i;
  const p100RegEx = /P100/i;
  const gcpAbbrRegEx = /GCP/i;
  const rnaSeqRegEx = /RNA[-]?Seq/i;
  const gcpRegEx = /Global Chromatin Profiling/i;

  const isL1000 = l1000RegEx.test(method) || l1000RegEx.test(assay);
  const isP100 = p100RegEx.test(method) || p100RegEx.test(assay);
  const isRNASeq = rnaSeqRegEx.test(method) || rnaSeqRegEx.test(assay);
  const isGCP = gcpAbbrRegEx.test(method) || gcpAbbrRegEx.test(assay) ||
    gcpRegEx.test(method) || gcpRegEx.test(assay);

  return {
    useSlicr: isL1000,
    usePiLINCS: isP100 || isGCP,
    useMosaic: isP100 || isGCP,
    useILINCS: isRNASeq,
  };
}

export class Dataset extends Component {
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
    const { cells, cellId, datasets, datasetId } = this.props;
    const ds = datasets[datasetId];
    const cell = cells[cellId];
    const links = getIconLinks(ds);
    return (
      <div className={styles.dataset}>
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
          <p className={styles.description}>{ds.description}</p>
        </div>
        <div className={styles.links}>
          <a onClick={this._openCitationsModal}>
            Cite this dataset
          </a>
          <CitationsModal
            isOpen={this.state.isModalOpen}
            datasetId={ds.id}
            onModalClose={this._closeCitationsModal}
          />
          <span>&nbsp;-&nbsp;</span>
          <a href={ds.sourceLink} target="_blank">
            View at source
          </a>
          {links.useSlicr && <span>&nbsp;-&nbsp;</span>}
          {
            links.useSlicr &&
            <a
              href={`http://amp.pharm.mssm.edu/Slicr/#/search/${cell ? cell.name : ''}`}
              target="_blank"
            >
              Analyze with Slicr
            </a>
          }
          {links.usePiLINCS && <span>&nbsp;-&nbsp;</span>}
          {
            links.usePiLINCS &&
            <a href="http://eh3.uc.edu/pilincs" target="_blank">
              Analysis with piLINCS
            </a>
          }
          {links.useMosaic && <span>&nbsp;-&nbsp;</span>}
          {
            links.useMosaic &&
            <a href="http://amp.pharm.mssm.edu/p100mosaic" target="_blank">
              P100 Mosaic
            </a>
          }
          {links.useILINCS && <span>&nbsp;-&nbsp;</span>}
          {
            links.useILINCS &&
            <a
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
  datasets: PropTypes.object,
  datasetId: PropTypes.number,
  incrementDatasetClicks: PropTypes.func,
};

export default connect(mapStateToProps, {})(Dataset);
