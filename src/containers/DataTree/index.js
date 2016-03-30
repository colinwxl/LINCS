import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { loadDatasets } from 'actions/entities';
import styles from './DataTree.scss';
import AssayTree from './AssayTree';
import CellTree from './CellTree';
import CenterTree from './CenterTree';
import DiseaseTree from './DiseaseTree';

export default class DataTree extends Component {
  componentWillMount = () => {
    this.props.loadDatasets();
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <CellTree />
        <AssayTree />
        <CenterTree />
        <DiseaseTree />
      </div>
    );
  }
}

DataTree.propTypes = {
  loadDatasets: PropTypes.func.isRequired,
};

export default connect(null, { loadDatasets })(DataTree);
