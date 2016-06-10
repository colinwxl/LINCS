import React from 'react';
import styles from './DatasetView.scss';


const SmallMolecule = (props) => {
  const { sm, useLinks } = props;
  const url = `http://lincsportal.ccs.miami.edu/entities/#/view/${sm.lincs_id}`;

  let lincsId;
  if (useLinks) {
    lincsId = <a href={url} target="_blank">{sm.lincs_id}</a>;
  } else {
    lincsId = <span>{sm.lincs_id}</span>;
  }

  return (
    <tr className={styles['small-molecule']}>
      <td>{sm.name}</td>
      <td>{lincsId}</td>
      <td>{sm.source}</td>
    </tr>
  );
};

SmallMolecule.propTypes = {
  sm: React.PropTypes.object.isRequired,
  useLinks: React.PropTypes.bool.isRequired,
};

export default SmallMolecule;
