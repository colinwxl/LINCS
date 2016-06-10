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
  onTableClick: (isVisible) => {
    dispatch(toggleTable(isVisible));
  },
});

const SmallMolecules = (props) => {
  const { smallMolecules, onTableClick, isVisible } = props;
  let indicesToShow;
  if (isVisible) {
    indicesToShow = Object.keys(smallMolecules);
  } else {
    indicesToShow = Object.keys(smallMolecules).slice(0, 2);
  }
  const hiddenClass = (isVisible ? ' ' : ` ${styles.hidden} `);
  const className = `table ${hiddenClass} ${styles['small-molecules']}`;
  const title = isVisible ? '' : 'Click for more...';
  return (
    <table
      className={className}
      onClick={() => onTableClick(isVisible)}
      title={title}
    >
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
  );
};

SmallMolecules.propTypes = {
  smallMolecules: React.PropTypes.object.isRequired,
  isVisible: React.PropTypes.bool.isRequired,
  onTableClick: React.PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SmallMolecules);
