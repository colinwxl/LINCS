import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { loadTree } from 'actions/tree';
import AssayTree from './AssayTree';
import CenterTree from './CenterTree';
import TissueCellTree from './TissueCellTree';
// import DiseaseTree from './DiseaseTree';
import DateTree from './DateTree';
import AlphabeticalTree from './AlphabeticalTree';
import EmptyTree from './EmptyTree';
import styles from './DataTree.scss';

const mapStateToProps = ({ entities, tree }) => ({ entities, tree });

export class DataTree extends Component {
  componentWillMount() {
    // If the user navigates to a dataset page, `state.entities` will change to
    // reflect only the necessary information. We need to reload the data tree
    // from stratch every time to make sure it's up-to-date.
    this.forceUpdate();
    this.props.loadTree();
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
        <DateTree dates={tree.dates} dateDatasetMap={tree.dateDatasetMap} />
        <AlphabeticalTree datasetIds={tree.alphabetical} />
      </div>
    );
  }
}

DataTree.propTypes = {
  loadTree: PropTypes.func.isRequired,
  entities: PropTypes.object,
  tree: PropTypes.object,
};

export default connect(mapStateToProps, {
  loadTree,
})(DataTree);
