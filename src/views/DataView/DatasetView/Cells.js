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
  onMoreLessClick: (isVisible) => {
    dispatch(toggleTable(isVisible));
  },
});

const Cells = (props) => {
  const { cells, onMoreLessClick, isVisible } = props;
  let indicesToShow;
  if (isVisible) {
    indicesToShow = Object.keys(cells);
  } else {
    indicesToShow = Object.keys(cells).slice(0, 2);
  }
  const tableClass = `table ${(isVisible ? '' : styles.hidden)}`;
  const title = (isVisible ? '' : 'Click for more...');
  return (
    <div className={styles.cells}>
      <table
        className={tableClass}
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
                cell={cell}
                useLinks={isVisible}
              />
            );
          })}
        </tbody>
      </table>
      <p
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
      </p>
    </div>
  );
};

Cells.propTypes = {
  cells: React.PropTypes.object.isRequired,
  isVisible: React.PropTypes.bool.isRequired,
  onMoreLessClick: React.PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cells);
