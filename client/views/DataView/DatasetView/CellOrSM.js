import React from 'react';
import styles from './DatasetView.scss';


const CellOrSM = (props) => {
  const { obj } = props;
  const url = `http://lincsportal.ccs.miami.edu/entities/#/view/${obj.lincs_id}`;
  return (
    <tr className={styles['small-molecule']}>
      <td>{obj.name}</td>
      <td><a href={url} target="_blank">{obj.lincs_id}</a></td>
      <td>{obj.source}</td>
    </tr>
  );
};

CellOrSM.propTypes = {
  obj: React.PropTypes.object.isRequired,
};

export default CellOrSM;
