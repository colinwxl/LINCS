import React, { PropTypes } from 'react';

import styles from './AppsView.scss';

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
          <a className={styles['tool-click-target']} href="">
            <span className={styles.overlay} />
          </a>
        </div>
        <div className={styles['tool-details']}>
          <p className={styles['tool-title']}>
            {tool.name}
            <span className={styles.end} />
          </p>
          <p className={styles['tool-creator']}>{tool.center}</p>
          <div className={styles['tool-description']}>
            {tool.description}
            <span className={styles.end} />
          </div>
        </div>
        <div className={styles['tool-ranking']}>

        </div>
      </div>
    </div>
  );
}

Tool.propTypes = {
  tool: PropTypes.object,
};
