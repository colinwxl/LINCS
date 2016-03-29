import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import DataTree from 'containers/DataTree';
// import styles from './DataView.scss';

const mapStateToProps = (state) => ({
  entities: state.entities,
});
// export function DataView(/* props */) {
export class DataView extends Component {
  render() {
    return (
      <DataTree />
    );
  }
}

DataView.propTypes = {
  loginUser: PropTypes.func,
  entities: PropTypes.object,
};

export default connect(mapStateToProps, {})(DataView);
