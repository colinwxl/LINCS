import React, { PropTypes } from 'react';

import styles from './CannedAnalysisTool.scss';

export default function CannedAnalysisTool(props) {
  const { tool } = props;
  const link = "http://www.google.com";
  return (
    <div className={styles.tool}>
      <div className={styles['tool-details']}>
        <div className={`clearfix ${styles['tool-desc']}`}>
          <a href={link} target="_blank">
            <div className={styles['tool-logo-wrap']}>
              <img src={tool.iconUrl} alt={tool.name} />
              <span className={styles['tool-overlay']} />
            </div>
          </a>
          <div className={styles['tool-info']}>
            {tool.description}
          </div>
        </div>
        <h3 className={styles['tool-analysis']}>
          <span className={styles['tool-analyze-with']}>Analyzed with</span>
          <a href={link} target="_blank">{tool.name}</a>
        </h3>
      </div>
      <a href={link} className={styles['tool-click-target']}>
        <div className={styles['tool-click-button']}>View Analysis</div>
        <span className={styles['analysis-overlay']} />
      </a>
    </div>
  );
}

CannedAnalysisTool.propTypes = {
  tool: PropTypes.object,
};
