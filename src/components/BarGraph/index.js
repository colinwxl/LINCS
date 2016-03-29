import React from 'react';
import styles from './BarGraph.scss';

export default function BarGraph(/* props */) {
  return (
    <div className={styles['bar-graph']}>
      <div className={styles.graph}>
        <div className={styles.bars}>
          <div className={styles['bar-group']}>
            <div className={`${styles.bar} ${styles['bar-1']}`} style={{ height: '51%' }} />
            <div className={`${styles.bar} ${styles['bar-2']}`} style={{ height: '71%' }} />
            <div className={`${styles.bar} ${styles['bar-3']}`} style={{ height: '13%' }} />
          </div>
          <div className={styles['bar-group']}>
            <div className={`${styles.bar} ${styles['bar-4']}`} style={{ height: '76%' }} />
            <div className={`${styles.bar} ${styles['bar-5']}`} style={{ height: '46%' }} />
            <div className={`${styles.bar} ${styles['bar-6']}`} style={{ height: '22%' }} />
          </div>
          <div className={styles['bar-group']}>
            <div className={`${styles.bar} ${styles['bar-7']}`} style={{ height: '78%' }} />
            <div className={`${styles.bar} ${styles['bar-8']}`} style={{ height: '72%' }} />
            <div className={`${styles.bar} ${styles['bar-9']}`} style={{ height: '36%' }} />
          </div>
          <div className={styles['bar-group']}>
            <div className={`${styles.bar} ${styles['bar-10']}`} style={{ height: '44%' }} />
            <div className={`${styles.bar} ${styles['bar-11']}`} style={{ height: '64%' }} />
            <div className={`${styles.bar} ${styles['bar-12']}`} style={{ height: '28%' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
