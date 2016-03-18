import React from 'react';
import styles from './Footer.scss';

export default function Footer(/* props */) {
  return (
    <footer className={styles.footer}>
      <div className={styles.divider}>
        <span className={`col-xs-2 ${styles.green}`} />
        <span className={`col-xs-1 ${styles.teal}`} />
        <span className={`col-xs-6 ${styles.orange}`} />
        <span className={`col-xs-1 ${styles.teal}`} />
        <span className={`col-xs-2 ${styles.green}`} />
      </div>
      <p className="text-center">Footer</p>
    </footer>
  );
}
