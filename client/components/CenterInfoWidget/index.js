import React, { PropTypes } from 'react';
import styles from './CenterInfoWidget.scss';

export default function CenterInfoWidget(props) {
  const { center } = props;

  return (
    <div className={styles.center}>
      <div className={styles['center-inner']}>
        <div className={styles.cover}>
          <div className={styles['center-img-wrap']}>
            <div className={styles['center-img-inner']}>
              <img src={center.iconUrl} alt={center.name} />
            </div>
          </div>
          <a
            href={center.url}
            className={styles['center-click-target']}
            target="_blank"
          >
            <span className={styles.overlay} />
          </a>
        </div>
        <div className={styles['center-details']}>
          <a
            href={center.url}
            className={styles['center-title']}
            target="_blank"
          >
            {center.name}
          </a>
          <div className={styles['center-description']}>
            {center.description}
          </div>
        </div>
      </div>
    </div>
  );
}

CenterInfoWidget.propTypes = {
  center: PropTypes.object,
};
