import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import moment from 'moment';
// import each from 'lodash/each';

import styles from './DatasetSlide.scss';

export default function DatasetSlide(props) {
  const { dataset } = props;
  if (!dataset) {
    return null;
  }
  return (
    <div className={styles.card}>
      <div className={`row ${styles['card-top']}`}>
        <div className={`col-xs-5 ${styles['table-wrap']}`}>
          <div className={styles['card-img']}>
            <img src={dataset.center.logoUrl} alt={dataset.name} />
          </div>
        </div>
        <div className={`col-xs-7 ${styles['table-wrap']} ${styles['card-title-wrap']}`}>
          <div className={styles['card-title']}>
            <h4>{dataset.method}</h4>
            <p><Link to={`/data/releases/${dataset.id}`}>{dataset.lincsId}</Link></p>
            <p>{moment(dataset.dateRetrieved).format('MMM Do, YYYY')}</p>
            <p className={styles['card-creator']}>{dataset.center.name}</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          <p><strong>Summary</strong></p>
          <p>{dataset.description}</p>
        </div>
      </div>
    </div>
  );
}

DatasetSlide.propTypes = {
  dataset: PropTypes.object.isRequired,
};
