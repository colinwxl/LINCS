import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import styles from '../DataTree.scss';
import Tree from '../Tree';
import IndividualCellTree from './IndividualCellTree';

const mapStateToProps = ({ entities }) => ({
  cells: entities.cells,
});

export function CellTree(props) {
  const { cells } = props;

  let label = <span className={styles['loading-node']}>Loading...</span>;
  if (Object.keys(cells).length === 0) {
    return <Tree nodeLabel={label} defaultCollapsed />;
  }

  label = <span className={`${styles.node} ${styles['outer-node']}`}>By Cell Line</span>;
  return (
    <Tree nodeLabel={label} defaultCollapsed>
      {
        Object.keys(cells).map((cellId, index) =>
          <IndividualCellTree key={index} cellId={parseInt(cellId, 10)} />
        )
      }
    </Tree>
  );
}

CellTree.propTypes = {
  cells: PropTypes.object,
};

export default connect(mapStateToProps, {})(CellTree);
