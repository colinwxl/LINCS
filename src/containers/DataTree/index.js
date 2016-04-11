import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { loadDatasets } from 'actions/entities';
import AssayTree from './AssayTree';
import CenterTree from './CenterTree';
import TissueCellTree from './TissueCellTree';
// import DiseaseTree from './DiseaseTree';
import DateTree from './DateTree';

const mapStateToProps = (state) => ({
  entities: state.entities,
});

export class DataTree extends Component {
  componentDidMount = () => {
    this.props.loadDatasets();
  }

  render() {
    return (
      <div className="col-lg-8 col-lg-offset-2">
        <AssayTree entities={this.props.entities} />
        <CenterTree entities={this.props.entities} />
        <TissueCellTree entities={this.props.entities} />
        {/* <DiseaseTree entities={this.props.entities} /> */}
        <DateTree entities={this.props.entities} />
      </div>
    );
  }
}

DataTree.propTypes = {
  loadDatasets: PropTypes.func.isRequired,
  entities: PropTypes.object,
};

export default connect(mapStateToProps, { loadDatasets })(DataTree);
