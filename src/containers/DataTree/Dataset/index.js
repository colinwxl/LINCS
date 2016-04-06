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
              <p className={styles.creator}><em>{ds.centerName}</em></p>
            </div>
            <div className="col-xs-4">
              <p className={styles['info-date']}>
                <em>{moment(ds.dateRetrieved).format('MMM Do, YYYY')}</em>
              </p>
            </div>
          </div>
          <p className={styles.description}>{ds.description}</p>
        </div>
        <div className={styles.links}>
          <a onClick={this._openCitationsModal}>
            <i className="fa fa-files-o fa-2x" />
            <br />
            <span>Export Citations</span>
          </a>
          <CitationsModal
            isOpen={this.state.isModalOpen}
            datasetId={ds.id}
            onModalClose={this._closeCitationsModal}
          />
          <a href={ds.sourceLink} target="_blank">
            <i className="fa fa-home fa-2x" />
            <br />
            <span>View at Source</span>
          </a>
          {
            links.useSlicr &&
            <a
              href={`http://amp.pharm.mssm.edu/Slicr/#/search/${cell ? cell.name : ''}`}
              target="_blank"
            >
              <i className="fa fa-pie-chart fa-2x" />
              <br />
              <span>Analyze with Slicr</span>
            </a>
          }
          {
            links.usePiLINCS &&
            <a href="http://eh3.uc.edu/pilincs" target="_blank">
              <i className="fa fa-cube fa-2x" />
              <br />
              <span>Analysis with piLINCS</span>
            </a>
          }
          {
            links.useMosaic &&
            <a href="http://amp.pharm.mssm.edu/p100mosaic" target="_blank">
              <i className="fa fa-th-large fa-2x" />
              <br />
              <span>Analyze with P100 Mosaic</span>
            </a>
          }
          {
            links.useILINCS &&
            <a
              href={`http://eh3.uc.edu/GenomicsPortals/DatasetLandingPage.do?data_set=${ds.lincsId}`}
              target="_blank"
            >
              <i className="fa fa-info-circle fa-2x" />
              <br />
              <span>Analyze with iLINCS</span>
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
