import React from 'react';
import styles from './DatasetView.scss';


const Cell = (props) => {
  const { cell, useLinks } = props;
  console.log(cell);
  return (
    <tr className={styles.cell}>
      <td>{cell.name}</td>
    </tr>
  );
};

Cell.propTypes = {
  cell: React.PropTypes.object.isRequired,
  useLinks: React.PropTypes.bool.isRequired,
};

export default Cell;
