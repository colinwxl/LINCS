import React, { PropTypes } from 'react';

import styles from './CannedAnalysisTool.scss';
import infoIcon from './info_icon.png';

export default function CannedAnalysisTool(props) {
  const { tool } = props;

  return (
    <div className={styles.tool}>
      <div className={styles['tool-details']}>
        <div className={`${styles['tool-desc']}`}>
          <a href={tool.link} target="_blank">
            <div className={styles['tool-logo-wrap']}>
              <img src={tool.iconUrl} alt={tool.iconUrl} />
              <span className={styles['tool-overlay']} />
            </div>
          </a>
          <div className={styles['tool-info']}>
            {tool.datasetName}
          </div>
        </div>
        <h3 className={styles['tool-analysis']}>
          <span className={styles['tool-analyze-with']}>Analyzed with</span>
          <a href={tool.link} target="_blank">{tool.name}</a>
        </h3>
        <span className={styles['tool-tip']} title={tool.description}>
          <img src={infoIcon} className={styles['info-icon']} alt="info-icon" />
        </span>
      </div>
      <a href={tool.link} target="_blank" className={styles['tool-click-target']}>
        <div className={styles['tool-click-button']}>View Analysis</div>
        <span className={styles['analysis-overlay']} />
      </a>
    </div>
  );
}

CannedAnalysisTool.propTypes = {
  tool: PropTypes.object,
};
