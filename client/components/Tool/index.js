import React, { PropTypes } from 'react';

import styles from './Tool.scss';

export default function Tool(props) {
  const { tool } = props;
  return (
    <div className={styles.tool}>
      <div className={styles['tool-inner']}>
        <div className={styles.cover}>
          <div className={styles['tool-img-wrap']}>
            <div className={styles['tool-img-inner']}>
              <img src={tool.iconUrl} alt={tool.name} />
            </div>
          </div>
          <a className={styles['tool-click-target']} href={tool.url} target="_blank">
            <span className={styles.overlay} />
          </a>
        </div>
        <div className={styles['tool-details']}>
          <a href={tool.url} className={styles['tool-title']}>
            {tool.name}
          </a>
          <p className={styles['tool-creator']}>
            <a href={tool.center.website}>{tool.center.name}</a>
          </p>
          <div className={styles['tool-description']}>
            {tool.description}
          </div>
        </div>
        <div className={styles['tool-ranking']}></div>
      </div>
    </div>
  );
}

Tool.propTypes = {
  tool: PropTypes.object,
};
