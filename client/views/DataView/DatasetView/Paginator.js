import React from 'react';
import styles from './DatasetView.scss';
import { MAX_ITEMS_PER_PAGE } from '../../../reducers/datasetPage';


const Paginator = (props) => {
  const { total, range, onPrevClick, onNextClick, onSearch } = props;
  if (total <= MAX_ITEMS_PER_PAGE) {
    return false;
  }
  const showNext = range[1] <= total;
  const showPrev = range[0] !== 0;
  const max = total < range[1] ? total : range[1];
  return (
    <div id={styles.paginator}>
      <span className={styles.range}>
        {range[0]}&#8211;{max}
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
