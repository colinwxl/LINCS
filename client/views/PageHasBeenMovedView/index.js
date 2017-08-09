import React from 'react';
import styles from './PageHasBeenMoved.scss';

export default function PageHasBeenMoved() {
  return (
    <div className="container text-xs-center">
      <h1 className={styles.header}>Sorry, this page has been moved.</h1>
      <p>You can find the new LINCS Data Portal site&nbsp;
        <a
          href="http://lincsportal.ccs.miami.edu/dcic-portal/"
          target="_blank"
        >
          here
        </a>.
      </p>
    </div>
  );
}
