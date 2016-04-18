import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import handleResponse from 'utils/handleResponse';
import { loadDatasets } from 'actions/entities';
import AssayTree from './AssayTree';
import CenterTree from './CenterTree';
import TissueCellTree from './TissueCellTree';
// import DiseaseTree from './DiseaseTree';
import DateTree from './DateTree';
import PopularityTree from './PopularityTree';
import Tree from './Tree';
import styles from './DataTree.scss';

const mapStateToProps = (state) => ({ entities: state.entities });
export class DataTree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      treeLoaded: false,
      // assays: [],
      classes: [],
      methods: [],
      centers: [],
      popularity: [],
      dates: [],
      dateDatasetMap: {},
    };
  }

  componentDidMount = () => {
    this.setState({ treeLoaded: false });
    this.props.loadDatasets();
    if (this.state.classes.length) {
      this.setState({ treeLoaded: true });
    } else {
      fetch('/LINCS/api/v1/datasets/tree')
        .then(response => handleResponse(response))
        .then(response => response.json())
        .then((tree) => {
          this.setState({
            treeLoaded: true,
            // assays: tree.assays,
            classes: tree.classes,
            methods: tree.methods,
            centers: tree.centers,
            popularity: tree.popularity,
            dates: tree.dates,
            dateDatasetMap: tree.dateDatasetMap,
          });
        });
    }
  }

  render() {
    const { entities } = this.props;
    const {
      treeLoaded,
      // assays,
      classes,
      methods,
      centers,
      popularity,
      dates,
      dateDatasetMap,
    } = this.state;

    if (!treeLoaded) {
      const label = <span className={styles.node}>Loading</span>;
      return (
        <div className={styles['loading-tree']}>
          <Tree nodeLabel={label} defaultCollapsed />
          <Tree nodeLabel={label} defaultCollapsed />
          <Tree nodeLabel={label} defaultCollapsed />
          <Tree nodeLabel={label} defaultCollapsed />
          <Tree nodeLabel={label} defaultCollapsed />
        </div>
      );
    }
    const datasets = Object.keys(entities.datasets).map(key => entities.datasets[key]);
    return (
      <div>
        <AssayTree datasets={datasets} assayClasses={classes} assayMethods={methods} />
        <CenterTree centerNames={centers} datasets={datasets} />
        <TissueCellTree entities={entities} />
        {/* <DiseaseTree entities={this.props.entities} /> */}
        <DateTree dates={dates} dateDatasetMap={dateDatasetMap} />
        <PopularityTree datasetIds={popularity} />
      </div>
    );
  }
}

DataTree.propTypes = {
  loadDatasets: PropTypes.func.isRequired,
  entities: PropTypes.object,
};

export default connect(mapStateToProps, { loadDatasets })(DataTree);
