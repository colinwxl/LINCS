import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { loadDatasets } from 'actions/entities';
import { loadTree } from 'actions/tree';
import AssayTree from './AssayTree';
import CenterTree from './CenterTree';
import TissueCellTree from './TissueCellTree';
// import DiseaseTree from './DiseaseTree';
import DateTree from './DateTree';
import PopularityTree from './PopularityTree';
import EmptyTree from './EmptyTree';
import styles from './DataTree.scss';

const mapStateToProps = ({ entities, tree }) => ({ entities, tree });

export class DataTree extends Component {
  componentWillMount() {
    this.props.loadDatasets();
    this.props.loadTree();
  }

  shouldComponentUpdate(nextProps) {
    const { entities, tree } = nextProps;
    return !!entities && !!tree && tree.isLoaded;
  }

  render() {
    const { entities, tree } = this.props;

    if (!entities || !tree || !tree.isLoaded) {
      const label = <span className={styles.node}>Loading</span>;
      return (
        <div className={styles['loading-tree']}>
          <EmptyTree nodeLabel={label} />
          <EmptyTree nodeLabel={label} />
          <EmptyTree nodeLabel={label} />
          <EmptyTree nodeLabel={label} />
          <EmptyTree nodeLabel={label} />
        </div>
      );
    }
    const datasets = Object.keys(entities.datasets).map(key => entities.datasets[key]);
    return (
      <div>
        <AssayTree datasets={datasets} assayClasses={tree.classes} />
        <CenterTree centerNames={tree.centers} datasets={datasets} />
        <TissueCellTree entities={entities} />
        {/* <DiseaseTree entities={this.props.entities} /> */}
        <DateTree dates={tree.dates} dateDatasetMap={tree.dateDatasetMap} />
        <PopularityTree datasetIds={tree.popularity} />
      </div>
    );
  }
}

DataTree.propTypes = {
  loadDatasets: PropTypes.func.isRequired,
  loadTree: PropTypes.func.isRequired,
  entities: PropTypes.object,
  tree: PropTypes.object,
};

export default connect(mapStateToProps, {
  loadDatasets,
  loadTree,
})(DataTree);
