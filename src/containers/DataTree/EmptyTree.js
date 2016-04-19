import React, { PropTypes } from 'react';

import styles from './DataTree.scss';

export default function EmptyTree(props) {
  const arrow = (
    <div className={`${styles['tree-view-arrow']} ${styles['tree-view-arrow-collapsed']}`} />
  );

  return (
    <div className={styles['tree-view']}>
      <div className={styles['tree-view-item']}>
        <div>
          {arrow}
          {props.nodeLabel}
        </div>
        <i className="fa fa-circle-o-notch fa-spin" />
      </div>
    </div>
  );
}

EmptyTree.propTypes = {
  nodeLabel: PropTypes.node.isRequired,
};
