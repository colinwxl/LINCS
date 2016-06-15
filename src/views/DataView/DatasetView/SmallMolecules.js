import React from 'react';
import { connect } from 'react-redux';

import SmallMolecule from './SmallMolecule';
import styles from './DatasetView.scss';


const mapStateToProps = (state) => ({
  smallMolecules: state.entities.smallMolecules,
  range: state.smallMoleculesTable.range,
  searchTerm: state.smallMoleculesTable.searchTerm,
});

const getIndicesToShow = (props, smallMolecules) => {
  const indicesToShow = [];
  const { searchTerm, range } = props;
  if (searchTerm) {
    const searchTermLower = searchTerm.toLowerCase();
    Object.keys(smallMolecules).forEach((i) => {
      const sm = smallMolecules[i];
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
    const allIndices = Object.keys(smallMolecules);
    for (let i = range[0]; i < range[1]; i++) {
      const idx = allIndices[i];
      if (!!idx) {
        indicesToShow.push(allIndices[i]);
      }
    }
  }
  return indicesToShow;
};

const SmallMolecules = (props) => {
  const { smallMolecules } = props;
  const indicesToShow = getIndicesToShow(props, smallMolecules);
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
          const sm = smallMolecules[index];
          return (
            <SmallMolecule
              key={sm.id}
              sm={sm}
            />
          );
        })}
        </tbody>
      </table>
    </div>
  );
};

SmallMolecules.propTypes = {
  smallMolecules: React.PropTypes.object.isRequired,
  range: React.PropTypes.array.isRequired,
};

export default connect(
  mapStateToProps
)(SmallMolecules);
