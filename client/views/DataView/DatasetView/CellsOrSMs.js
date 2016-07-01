import React from 'react';
import { connect } from 'react-redux';

import CellOrSM from './CellOrSM';
import styles from './DatasetView.scss';


const CellsOrSMs = (props) => {
  const { objects } = props;
  return (
    <div className={styles.cells}>
      <table className="table">
        <thead>
          <tr>
            <td>Name</td>
            <td>LINCS ID</td>
            <td>Source</td>
          </tr>
        </thead>
        <tbody>
        {Object.keys(objects).map(index => {
          const obj = objects[index];
          return (
            <CellOrSM
              key={obj.id}
              obj={obj}
            />
          );
        })}
        </tbody>
      </table>
    </div>
  );
};

CellsOrSMs.propTypes = {
  objects: React.PropTypes.object.isRequired,
};

export default connect()(CellsOrSMs);
