import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { loadDatasets } from 'actions/entities';
import AssayTree from './AssayTree';
// import CellTree from './CellTree';
import CenterTree from './CenterTree';
import DiseaseTree from './DiseaseTree';
import DateTree from './DateTree';

export default class DataTree extends Component {
  componentWillMount = () => {
    this.props.loadDatasets();
  }

  render() {
    return (
      <div className="col-lg-8 col-lg-offset-2">
        {/* <CellTree /> */}
        <AssayTree />
        <CenterTree />
        <DiseaseTree />
        <DateTree />
      </div>
    );
  }
}

DataTree.propTypes = {
  loadDatasets: PropTypes.func.isRequired,
};

export default connect(null, { loadDatasets })(DataTree);
