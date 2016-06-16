import React from 'react';
import styles from './DatasetView.scss';
import { MAX as MAX_ITEMS } from '../../../reducers/entities.js';


const Paginator = (props) => {
  const { total, range, onPrevClick, onNextClick, onSearch } = props;
  if (total <= MAX_ITEMS) {
    return false;
  }
  const showNext = range[1] <= total;
  const showPrev = range[0] !== 0;
  return (
    <div id={styles.paginator}>
      <span className={styles.range}>
        {range[0]}–{range[1]}
      </span>
      {
        showPrev &&
          <span
            onClick={onPrevClick}
            className={styles.btn}
          >
            Prev
          </span>
      }
      {
        showNext &&
          <span
            onClick={onNextClick}
            className={styles.btn}
          >
            Next
          </span>
      }
      <input
        onChange={onSearch}
        type="text"
        placeholder="Search..."
      />
    </div>
  );
};

Paginator.propTypes = {
  total: React.PropTypes.number.isRequired,
  range: React.PropTypes.array.isRequired,
  onPrevClick: React.PropTypes.func.isRequired,
  onNextClick: React.PropTypes.func.isRequired,
  onSearch: React.PropTypes.func.isRequired,
};

export default Paginator;
