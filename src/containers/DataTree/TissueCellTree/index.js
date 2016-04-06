import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import styles from '../DataTree.scss';
import Tree from '../Tree';
import IndividualTissueTree from './IndividualTissueTree';

const mapStateToProps = ({ entities }) => ({
  tissues: entities.tissues,
});

export function TissueCellTree(props) {
  const { tissues } = props;

  let label = <span className={styles['loading-node']}>Loading...</span>;
  if (Object.keys(tissues).length === 0) {
    return <Tree nodeLabel={label} defaultCollapsed />;
  }

  label = <span className={`${styles.node} ${styles.node}`}>By Tissue/Cell Line</span>;
  return (
    <Tree nodeLabel={label} defaultCollapsed>
      {
        Object.keys(tissues).map((tissueId, index) =>
          <IndividualTissueTree key={index} tissueId={parseInt(tissueId, 10)} />
        )
      }
    </Tree>
  );
}

TissueCellTree.propTypes = {
  tissues: PropTypes.object,
};

export default connect(mapStateToProps, {})(TissueCellTree);
