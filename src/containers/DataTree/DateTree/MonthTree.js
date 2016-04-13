import React, { PropTypes, Component } from 'react';

import styles from '../DataTree.scss';
import Tree from '../Tree';
import Dataset from 'containers/Dataset';

export default class MonthTree extends Component {
  _handleClick = () => {
    this.props.onClick(this.props.datasetIds);
  }

  render() {
    const { datasetIds, monthName, collapsed } = this.props;
    const label = <span className={styles.node}>{monthName}</span>;
    return (
      <Tree nodeLabel={label} onClick={this._handleClick} collapsed={collapsed} >
        {datasetIds.map((dsId, index) => <Dataset key={`dataset ${index}`} datasetId={dsId} />)}
      </Tree>
    );
  }
}

MonthTree.propTypes = {
  datasetIds: PropTypes.array,
  monthName: PropTypes.string,
  onClick: PropTypes.func,
  collapsed: PropTypes.bool,
};
