import React from 'react';
import styles from './DatasetView.scss';


const SmallMolecule = (props) => {
  const { sm } = props;
  const url = `http://lincsportal.ccs.miami.edu/entities/#/view/${sm.lincs_id}`;
  return (
    <tr className={styles['small-molecule']}>
      <td>{sm.name}</td>
      <td><a href={url} target="_blank">{sm.lincs_id}</a></td>
      <td>{sm.source}</td>
    </tr>
  );
};

SmallMolecule.propTypes = {
  sm: React.PropTypes.object.isRequired,
};

export default SmallMolecule;
