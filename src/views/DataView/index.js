import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import DataTree from 'containers/DataTree';
import styles from './DataView.scss';

const mapStateToProps = (state) => ({
  entities: state.entities,
});
// export function DataView(/* props */) {
export class DataView extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <DataTree />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

DataView.propTypes = {
  loginUser: PropTypes.func,
  entities: PropTypes.object,
};

export default connect(mapStateToProps, {})(DataView);
