import React from 'react';
import { connect } from 'react-redux';

import SmallMolecule from './SmallMolecule';
import { toggleTable } from '../../../actions/smallMolecules';
import styles from './DatasetView.scss';


const mapStateToProps = (state) => ({
  smallMolecules: state.entities.smallMolecules,
  isVisible: state.smallMoleculesTable.isVisible,
});

const mapDispatchToProps = (dispatch) => ({
  onMoreLessClick: (isVisible) => {
    dispatch(toggleTable(isVisible));
  },
});

const SmallMolecules = (props) => {
  const { smallMolecules, onMoreLessClick, isVisible } = props;
  let indicesToShow;
  if (isVisible) {
    indicesToShow = Object.keys(smallMolecules);
  } else {
    indicesToShow = Object.keys(smallMolecules).slice(0, 2);
  }
  const tableClass = `table ${(isVisible ? '' : styles.hidden)}`;

  return (
    <div className={styles.cells}>
      <table className={tableClass}>
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
              useLinks={isVisible}
            />
          );
        })}
        </tbody>
      </table>
      <div
        onClick={() => onMoreLessClick(isVisible)}
        className={styles['btn-show-more']}
      >
        {
          !isVisible &&
            <span>Show more...</span>
        }
        {
          isVisible &&
            <span>Show less</span>
        }
      </div>
    </div>
  );
};

SmallMolecules.propTypes = {
  smallMolecules: React.PropTypes.object.isRequired,
  isVisible: React.PropTypes.bool.isRequired,
  onMoreLessClick: React.PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SmallMolecules);
