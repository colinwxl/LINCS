import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

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
      clustergram: {},
      clustergramError: false,
      clustergramLoaded: false,
      windowWidth: !!window ? window.innerWidth : null,
    };
  }

  componentDidMount() {
    if (window) {
      window.addEventListener('resize', this.handleResize);
    }
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
        let clustergram;
        try {
          clustergram = renderClustgram(args);
        } catch (e) {
          // An error occurred in Clustergrammer. Treat like a network error.
          this.setState({
            clustergram: null,
            clustergramError: true,
            clustergramLoaded: false,
          });
          return;
        }
        // Clustergram successfully loaded. Add it to the state so it may
        // be resized as needed.
        this.setState({
          clustergram,
          clustergramError: false,
          clustergramLoaded: true,
        });
      })
      .catch(() => {
        // Network error.
        this.setState({
          clustergram: null,
          clustergramError: true,
          clustergramLoaded: false,
        });
      });
  }

  componentWillUnMount() {
    if (window) {
      window.removeEventListener('resize');
    }
  }

  handleResize = () => {
    this.setState({ windowWidth: window.innerWidth });
  }

  render() {
    const { datasets, datasetId } = this.props;
    const { clustergram, clustergramLoaded, clustergramError, windowWidth } = this.state;
    const ds = datasets[datasetId];
    if (!ds) {
      return null;
    }
    const clustLoading = !clustergramLoaded && !clustergramError;
    // Require a window width of 800px for clustergram.
    const windowWideEnough = windowWidth > 800;
    // Resize clustergram if it exists and the window is wide enough.
    // Clustergrammer handles not calling resize_viz() too frequently.
    if (!!clustergram && !!clustergram.resize_viz && !!windowWideEnough) {
      clustergram.resize_viz();
    }
    let wrapClass = styles['clustergram-wrap'];
    let clustergramClass = styles.clustergram;
    // Reset the outer div's height and hide the clustergram DOM node if there was
    // an error or if the window isn't wide enough.
    if (clustergramError || !windowWideEnough) {
      wrapClass += ` ${styles['clust-hidden']}`;
      clustergramClass += ` ${styles['clust-hidden']}`;
    }
    return (
      <div className={wrapClass}>
        <h2>Dataset Visualization</h2>
        {
          clustergramLoaded && windowWideEnough &&
            <p>Zoom, scroll, and click buttons to interact with the clustergram.</p>
        }
        {
          clustergramLoaded && !windowWideEnough &&
            <p>
              Visualizations are not supported on mobile devices and requires a certain
              browser width to be displayed. If on a desktop, please resize your browser.
            </p>
        }
        {
          clustergramError &&
            <p>
              A heatmap visualization is currently not available for this dataset.
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
  datasets: PropTypes.object.isRequired,
  datasetId: PropTypes.number.isRequired,
};

export default connect(
  mapStateToProps
)(Clustergram);
