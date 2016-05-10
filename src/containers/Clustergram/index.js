import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
// import extend from 'extend';

import { loadDataset } from 'actions/entities';
import renderClustgram from './clustergrammer/main';
import handleResponse from 'utils/handleResponse';
import styles from './Clustergram.scss';

const mapStateToProps = (state) => ({
  datasets: state.entities.datasets,
});

export class Clustergram extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clustergramError: false,
      clustergramLoaded: false,
    };
  }

  componentWillMount() {
    // Load dataset if not already
    this.props.loadDataset(this.props.datasetId);
  }

  componentDidMount() {
    fetch(`/LINCS/api/v1/datasets/${this.props.datasetId}/network`)
      .then(handleResponse)
      .then(response => response.json())
      .then((network) => {
        const args = {
          root: '#clustergram',
          network_data: network,
          row_label: 'Perturbagens',
          col_label: 'Measurements',
          use_sidebar: true,
          show_tile_tooltips: true,
          ini_view: { N_row_sum: '500' },
          row_search_placeholder: 'Perturbagen',
        };
        try {
          renderClustgram(args);
        } catch (e) {
          this.setState({
            clustergramError: true,
            clustergramLoaded: false,
          });
          return;
        }
        this.setState({
          clustergramError: false,
          clustergramLoaded: true,
        });
      })
      .catch(() => {
        this.setState({
          clustergramError: true,
          clustergramLoaded: false,
        });
      });
  }

  render() {
    const { datasets, datasetId } = this.props;
    const { clustergramLoaded, clustergramError } = this.state;
    const ds = datasets[datasetId];
    if (!ds) {
      return null;
    }
    const clustLoading = !clustergramLoaded && !clustergramError;
    let wrapClass = styles['clustergram-wrap'];
    let clustergramClass = styles.clustergram;
    if (clustergramError) {
      wrapClass += ` ${styles['clust-error']}`;
      clustergramClass += ` ${styles['clust-hidden']}`;
    }
    return (
      <div className={wrapClass}>
        {
          clustergramLoaded &&
            <p>Zoom, scroll, and click buttons to interact with the clustergram.</p>
        }
        {
          clustergramError &&
            <p>
              A clustergram is currently not available for this dataset.
              Please check again at a later time.
            </p>
        }
        <div id="clustergram" className={clustergramClass} />
        {
          clustLoading &&
            <h1 className={styles.loading}>
              <i className="fa fa-circle-o-notch fa-spin" />
            </h1>
        }
      </div>
    );
  }
}

Clustergram.propTypes = {
  loadDataset: PropTypes.func.isRequired,
  datasets: PropTypes.object.isRequired,
  datasetId: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, {
  loadDataset,
})(Clustergram);
