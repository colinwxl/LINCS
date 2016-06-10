import React from 'react';
import { connect } from 'react-redux';

import Cell from './Cell';
import { toggleTable } from '../../../actions/cells';
import styles from './DatasetView.scss';


const mapStateToProps = (state) => ({
  cells: state.entities.cells,
  isVisible: state.cellsTable.isVisible,
});

const mapDispatchToProps = (dispatch) => ({
  onTableClick: (isVisible) => {
    dispatch(toggleTable(isVisible));
  },
});

const Cells = (props) => {
  const { cells, onTableClick, isVisible } = props;
  let indicesToShow;
  if (isVisible) {
    indicesToShow = Object.keys(cells);
  } else {
    indicesToShow = Object.keys(cells).slice(0, 2);
  }
  const hiddenClass = (isVisible ? ' ' : ` ${styles.hidden} `);
  const className = `table ${hiddenClass} ${styles.cells}`;
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
          const cell = cells[index];
          return (
            <Cell
              key={cell.id}
              sm={cell}
              useLinks={isVisible}
            />
          );
        })}
      </tbody>
    </table>
  );
};

Cells.propTypes = {
  cells: React.PropTypes.object.isRequired,
  isVisible: React.PropTypes.bool.isRequired,
  onTableClick: React.PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cells);
