import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import styles from './CenterInfoWidget.scss';

export default function CenterInfoWidget(props) {
  const { center } = props;

  if (!center.newsTitle) {
    // Is a center
    return (
      <div className={styles.widget}>
        <div className={styles['widget-inner']}>
          <Link to={center.internalLink} className={styles['widget-logo']}>
            <img src={center.iconUrl} className={styles.thumbnail} alt={center.name} />
          </Link>

          <div className={styles['widget-details']}>
            <Link to={center.internalLink} className={styles['widget-title']}>{center.name}</Link>
            <a href={center.url}>
              <i className={`fa fa-external-link ${styles.glyphicon}`} />
            </a>
            <Link to={{ pathname: '/tools', state: center.filterName }}>
              <i className={`fa fa-wrench ${styles.glyphicon2}`} />
            </Link>
            <div className={styles['widget-description']}>
              {center.description}
            </div>
          </div>
        </div>
      </div>
    );
  }
  // Not a center
  return (
    <div className={styles.widget}>
      <div className={styles['widget-inner']}>
        <div className={styles['widget-logo']}>
          <img src={center.iconUrl} className={styles.thumbnail} alt={center.name} />
          <a href={center.url} className={styles['news-title']}>{center.newsTitle}</a>
        </div>
        <div className={styles['widget-details']}>
          <a href={center.url} className={styles['widget-title']}>{center.name}</a>
          <div className={styles['widget-description']}>
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
