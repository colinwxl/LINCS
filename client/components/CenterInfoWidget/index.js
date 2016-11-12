import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import styles from './CenterInfoWidget.scss';

export default function CenterInfoWidget(props) {
  const { center } = props;

  if (center.newsTitle) {
  // Not a center
    return (
      <div className={styles.tool}>
        <div className={styles['tool-inner']}>
          <div className={styles['tool-logo']}>
            <img src={center.iconUrl} className={styles.thumbnail} alt={center.name} />

            <a href={center.url} className={styles['news-title']}>{center.newsTitle}</a>
          </div>

          <div className={styles['tool-details']}>
            <a href={center.url} className={styles['tool-title']}>{center.name}</a>
            <div className={styles['tool-description']}>
              {center.description}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    // Is a center
    return (
      <div className={styles.tool}>
        <div className={styles['tool-inner']}>
          <Link to={center.internalLink} className={styles['tool-logo']}>
            <img src={center.iconUrl} className={styles.thumbnail} alt={center.name} />
          </Link>

          <div className={styles['tool-details']}>
            <Link to={center.internalLink} className={styles['tool-title']}>{center.name}</Link>
            <a href={center.url}>
              <i className={`fa fa-external-link ${styles.tooltip}`} />
            </a>

            <a href="">
              <i className={`fa fa-wrench ${styles.tooltip2}`} />
            </a>
            <div className={styles['tool-description']}>
              {center.description}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
//
// name: 'Test',
// url: 'http://google.com',
// iconUrl: 'http://google.com',
// description: 'This is a test description',

CenterInfoWidget.propTypes = {
  center: PropTypes.object,
};
