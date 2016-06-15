import React from 'react';
import styles from './DatasetView.scss';


const Paginator = (props) => {
  const { items, range, onPrevClick, onNextClick, onSearch } = props;
  const showNext = range[1] <= Object.keys(items).length;
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
        placeholder="Search by name..."
      />
    </div>
  );
};

Paginator.propTypes = {
  items: React.PropTypes.object.isRequired,
  range: React.PropTypes.array.isRequired,
  onPrevClick: React.PropTypes.func.isRequired,
  onNextClick: React.PropTypes.func.isRequired,
  onSearch: React.PropTypes.func.isRequired,
};

export default Paginator;
