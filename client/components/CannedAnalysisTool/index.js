import React, { PropTypes } from 'react';

import styles from './CannedAnalysisTool.scss';
import infoIcon from './info_icon.png';

export default function CannedAnalysisTool(props) {
  const { link, iconUrl, datasetName, dataset, name, description } = props.tool;

  return (
    <div className={styles.tool}>
      <div className={styles['tool-details']}>
        <div className={`${styles['tool-desc']}`}>
          <a href={link} target="_blank" className={styles['tool-info']}>
            <div className={styles['tool-logo-wrap']}>
              <img src={iconUrl} alt={iconUrl} />
            </div>
            {datasetName}
          </a>
        </div>

        <h3 className={styles['tool-analysis']}>
          {dataset}
          <span className={styles['tool-analyze-with']}>Analyzed with</span>
          <a href={link} target="_blank">{name}</a>
        </h3>
        <span className={styles['tool-tip']} title={description}>
          <img src={infoIcon} className={styles['info-icon']} alt="info-icon" />
        </span>
      </div>
      <a href={link} target="_blank" className={styles['tool-click-target']}>
        <div className={styles['tool-click-button']}>View Analysis</div>
        <span className={styles['analysis-overlay']} />
      </a>
    </div>
  );
}

CannedAnalysisTool.propTypes = {
  tool: PropTypes.object,
};
