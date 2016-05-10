import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import moment from 'moment';

import styles from './Releases.scss';

export default function SearchResult(props) {
  const ds = props.dataset;
  if (!ds) {
    return null;
  }
  return (
    <div className={styles.dataset}>
      <div className={styles['ds-header']}>
        <h5>
          <Link to={`/data/releases/${ds.id}`}>{ds.method}</Link>
        </h5>
        <p className={styles.creator}>{ds.center.name}</p>
      </div>
      <p className={`text-muted ${styles['info-date']}`}>
        {ds.lincsId} - <em>{moment(ds.dateRetrieved).format('MMM Do, YYYY')}</em>
      </p>
      <p className={styles.description}>{ds.description}</p>
    </div>
  );
}

SearchResult.propTypes = {
  dataset: PropTypes.object,
};
