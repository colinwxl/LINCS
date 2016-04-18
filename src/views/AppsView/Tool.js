import React, { PropTypes } from 'react';

import styles from './AppsView.scss';

export default function Tool(props) {
  const { tool } = props;
  return (
    <div className={styles.tool}>
      <div className={styles['tool-img-wrap']}>
        <div className={styles['tool-img-inner']}>
          <img src={tool.iconUrl} alt={tool.name} />
        </div>
      </div>
      <div className={styles['tool-details']}>
        <p className={styles['tool-title']}>
          {tool.name}
          <span className={styles.end} />
        </p>
        <p className={styles['tool-creator']}>{tool.center}</p>
      </div>
    </div>
  );
}

Tool.propTypes = {
  tool: PropTypes.object,
};
