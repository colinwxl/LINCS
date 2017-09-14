import React from 'react';
import styles from './Citations.scss';
import moment from 'moment';
import PropTypes from 'prop-types';

export default function Citations(props) {
  const name = props.cite.name;
  if (name) {
    return (
      <div className={styles.cite}>
        <p>
          {props.cite.name}: {props.cite.title},
          {props.cite.year}, LINCS (collection),
          <a href={props.cite.url}>{props.cite.url}</a>,
          retrived: {moment().format('MMM D, YYYY')}
        </p>
      </div>
    );
  }
  return (
    <div className={styles.cite}>
      <p>
        {props.cite.title},
        {props.cite.year}, LINCS (collection),
        <a href={props.cite.url}>{props.cite.url}</a>,
        retrived: {moment().format('MMM D, YYYY')}
      </p>
    </div>
  );
}

Citations.propTypes = {
  cite: PropTypes.array,
  name: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
  year: PropTypes.integer,
};
