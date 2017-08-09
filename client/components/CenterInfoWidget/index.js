import React from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
import { Link } from 'react-router';

import styles from './CenterInfoWidget.scss';

export default function CenterInfoWidget(props) {
  const { center, highlighted } = props;

  const toolTipItem = (
    <div className={styles.centerInfoTooltip}>
      <label className={styles.label}>{center.status}</label>
      <div className={styles.awardee}>
        <label className={styles.label}>
          Awardee Institution:
        </label> {center.awardeeInstitution}
      </div>
    </div>
  );

  if (!center.newsTitle) {
    // Is a center
    let selected = '';
    if (highlighted) {
      selected = styles.selected;
    }
    return (
      <div className={styles.widget}>
        <div className={`${styles['widget-inner']} ${selected}`}>
          <Link to={center.internalLink} className={styles['widget-logo']}>
            <img src={center.iconUrl} className={styles.thumbnail} alt={center.name} />
          </Link>

          <div className={styles['widget-details']}>
            <Link to={center.internalLink} className={styles['widget-title']}>{center.name}</Link>
            <div className={styles['widget-description']}>
              {center.description}
            </div>
          </div>

          <div className={styles.glyphicons}>
            {/* Top right corner tooltip */}
            <i
              className={`fa fa-info-circle ${styles['info-icon']}`}
              aria-hidden="true"
              data-tip="Information is not available at this time."
              data-for={center.name}
            />
            <ReactTooltip
              id={center.name}
              place="right"
              type="dark"
              effect="float"
            >
              {toolTipItem}
            </ReactTooltip>

            {/* Bottom right corner glyphicons */}
            <a href={center.url} target="_blank">
              <i className={`fa fa-external-link ${styles.glyphicon1}`} />
            </a>
            <a href={center.grantsLink} target="_blank">
              <i className={`fa fa-star ${styles.glyphicon2}`} />
            </a>
            <Link to={{ pathname: '/tools', state: center.name }}>
              <i className={`fa fa-wrench ${styles.glyphicon3}`} />
            </Link>
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
  highlighted: PropTypes.bool,
};
