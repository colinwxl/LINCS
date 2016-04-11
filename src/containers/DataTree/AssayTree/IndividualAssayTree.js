import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import each from 'lodash/each';

import { incrementDatasetClicks } from 'actions/entities';
import styles from '../DataTree.scss';
import Tree from '../Tree';
import Dataset from 'containers/Dataset';

export class IndividualAssayTree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
    };
  }

  _handleClick = () => {
    const collapsed = !this.state.collapsed;
    if (!collapsed) {
      const dsIds = this.childDatasets.map(ds => ds.id);
      this.props.incrementDatasetClicks(dsIds);
    }
    this.setState({ collapsed });
  }

  render() {
    const { entities, assayName, methodName, cellId, centerName } = this.props;
    const childDatasets = [];
    each(entities.datasets, (ds) => {
      const { cells, assay, method } = ds;
      if ((assayName && assay === assayName) || (methodName && method === methodName)) {
        if (cellId && cells.indexOf(parseInt(cellId, 10)) !== -1) {
          childDatasets.push(ds);
        } else if (centerName && ds.centerName === centerName) {
          childDatasets.push(ds);
        } else if (!centerName && !cellId) {
          childDatasets.push(ds);
        }
      }
    });

    // Set this.childDatasets so we can increment their counts when clicked.
    this.childDatasets = childDatasets;

    let label = <span className={styles['loading-node']}>Loading...</span>;
    if (childDatasets.length === 0) {
      return <Tree nodeLabel={label} defaultCollapsed />;
    }

    let name = '';
    if (assayName) {
      name = assayName;
    } else if (methodName) {
      name = methodName;
    }

    label = <span className={styles.node}>{name}</span>;
    return (
      <Tree nodeLabel={label} onClick={this._handleClick} collapsed={this.state.collapsed}>
        {
          childDatasets.map((ds, index) =>
            <Dataset key={`dataset ${index}`} datasetId={ds.id} cellId={cellId} />
          )
        }
      </Tree>
    );
  }
}

IndividualAssayTree.propTypes = {
  entities: PropTypes.object,
  assayName: PropTypes.string,
  methodName: PropTypes.string,
  cellId: PropTypes.number,
  centerName: PropTypes.string,
  incrementDatasetClicks: PropTypes.func,
};

export default connect(null, {
  incrementDatasetClicks,
})(IndividualAssayTree);
