import React from 'react';
import { Link } from 'react-router';
import styles from './PageHasBeenMoved.scss';

export default function PageHasBeenMoved() {
  return (
    <div className="container text-xs-center">
      <h1 className={styles.header}>Sorry, this page has been moved.</h1>
      <p>You can find the new LINCS Data Portal site&nbsp;
        <a
          href="http://dev3.ccs.miami.edu:8080/datasets-beta/"
          target="_blank">
          here
        </a>.
      </p>
    </div>
  );
}
