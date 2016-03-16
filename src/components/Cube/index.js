import React, { PropTypes } from 'react';
import range from 'lodash/range';
import styles from './Cube.scss';

export default function Cube(props) {
  const cubeClasses = !!props.animated ? `${styles.cube} ${styles.animated}` : styles.cube;
  return (
    <div className={styles.wrap}>
      <div className={cubeClasses}>
        <div className={styles.front}>
          {
            range(81).map(i => {
              const isWhite = [0, 1, 2, 9, 10, 11, 18, 19, 20].indexOf(i) !== -1;
              const isOpaque =
                [3, 4, 5, 12, 13, 14, 21, 22, 23, 27, 28, 29, 36, 37, 38, 45, 46, 47]
                .indexOf(i) !== -1;
              const isLightBlue = [30, 31, 32, 39, 40, 41, 48, 49, 50].indexOf(i) !== -1;
              let className = styles['cube-white-opaque'];
              if (isWhite) {
                className = styles['cube-white'];
              } else if (isOpaque) {
                className = styles['cube-opaque'];
              } else if (isLightBlue) {
                className = styles['cube-light-blue'];
              }
              return <div key={i} className={className} />;
            })
          }
        </div>
        <div className={styles.back}>
          {
            range(81).map(i => {
              const isWhite = [6, 7, 8, 15, 16, 17, 24, 25, 26].indexOf(i) !== -1;
              const className = isWhite ? styles['cube-white'] : '';
              return <div key={i} className={className} />;
            })
          }
        </div>
        <div className={styles.top}>
          {
            range(27).map(i => {
              const isWhite = [0, 1, 2, 9, 10, 11, 18, 19, 20].indexOf(i) !== -1;
              const isOpaque =
                [3, 4, 5, 12, 13, 14, 21, 22, 23, 27, 28, 29, 36, 37, 38, 45, 46, 47]
                .indexOf(i) !== -1;
              const isLightBlue = [30, 31, 32, 39, 40, 41, 48, 49, 50].indexOf(i) !== -1;
              let className = styles['cube-white-opaque'];
              if (isWhite) {
                className = styles['cube-white'];
              } else if (isOpaque) {
                className = styles['cube-opaque'];
              } else if (isLightBlue) {
                className = styles['cube-light-blue'];
              }
              return <div key={i} className={className} />;
            })
          }
        </div>
        <div className={styles.bottom}>
          {
            range(27).map(i => {
              const className = styles['cube-white-opaque'];
              return <div key={i} className={className} />;
            })
          }
        </div>
        <div className={styles.left}>
          {
            range(27).map(i => {
              let className = styles['cube-white-opaque'];
              if (i < 9) {
                className = styles['cube-white'];
              } else if (i < 18) {
                className = styles['cube-opaque'];
              }
              return <div key={i} className={className} />;
            })
          }
        </div>
        <div className={styles.right}>
          {
            range(27).map(i => {
              const className = styles['cube-white-opaque'];
              return <div key={i} className={className} />;
            })
          }
        </div>
      </div>
    </div>
  );
}

Cube.propTypes = {
  animated: PropTypes.bool,
};
