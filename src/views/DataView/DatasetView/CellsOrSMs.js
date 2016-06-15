import React from 'react';
import { connect } from 'react-redux';

import CellOrSM from './CellOrSM';
import styles from './DatasetView.scss';

/*
const getIndicesToShow = (props, objects) => {
  const indicesToShow = [];
  const { searchTerm, range } = props;
  if (searchTerm) {
    const searchTermLower = searchTerm.toLowerCase();
    Object.keys(objects).forEach((i) => {
      const sm = objects[i];
      if (sm.name.toLowerCase().indexOf(searchTermLower) >= 0) {
        indicesToShow.push(i);
      }
      if (sm.source.toLowerCase().indexOf(searchTermLower) >= 0) {
        indicesToShow.push(i);
      }
      if (sm.lincs_id.toLowerCase().indexOf(searchTermLower) >= 0) {
        indicesToShow.push(i);
      }
    });
  } else {
    const allIndices = Object.keys(objects);
    for (let i = range[0]; i < range[1]; i++) {
      const idx = allIndices[i];
      if (!!idx) {
        indicesToShow.push(allIndices[i]);
      }
    }
  }
  return indicesToShow;
};
*/

const getIndicesToShow = (range, objects) => {
  const indicesToShow = [];
  const allIndices = Object.keys(objects);
  for (let i = range[0]; i < range[1]; i++) {
    const idx = allIndices[i];
    if (!!idx) {
      indicesToShow.push(allIndices[i]);
    }
  }
  return indicesToShow;
};

const CellsOrSMs = (props) => {
  const { objects, range } = props;
  const indicesToShow = getIndicesToShow(range, objects);
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
        {indicesToShow.map(index => {
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
  range: React.PropTypes.array.isRequired,
};

export default connect()(CellsOrSMs);
