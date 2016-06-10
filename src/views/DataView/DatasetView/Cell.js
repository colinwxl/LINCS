import React from 'react';
import styles from './DatasetView.scss';


const Cell = (props) => {
  const { cell, useLinks } = props;
  const url = `http://lincsportal.ccs.miami.edu/entities/#/view/${cell.lincs_id}`;

  let lincsId;
  if (useLinks) {
    lincsId = <a href={url} target="_blank">{cell.lincs_id}</a>;
  } else {
    lincsId = <span>{cell.lincs_id}</span>;
  }

  return (
    <tr className={styles.cell}>
      <td>{cell.name}</td>
      <td>{lincsId}</td>
      <td>{cell.source}</td>
    </tr>
  );
};

Cell.propTypes = {
  cell: React.PropTypes.object.isRequired,
  useLinks: React.PropTypes.bool.isRequired,
};

export default Cell;
