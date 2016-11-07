import React, { PropTypes } from 'react';
import styles from './CenterInfoWidget.scss';

export default function CenterInfoWidget(props) {
  const { center } = props;

  return (
    <div className={styles.tool}>
      <div className={styles['tool-inner']}>
        <div className={styles.cover}>
          <div className={styles['tool-img-wrap']}>
            <div className={styles['tool-img-inner']}>
              <img src={tool.iconUrl} alt={tool.name} />
            </div>
          </div>
          <a
            href={tool.url}
            className={styles['tool-click-target']}
            target="_blank"
          >
            <span className={styles.overlay} />
          </a>
        </div>
        <div className={styles['tool-details']}>
          <a
            href={tool.url}
            className={styles['tool-title']}
            target="_blank"
          >
            {tool.name}
          </a>
          <ul className={styles['tool-creator']}>
            {creatorList}
          </ul>
          <div className={styles['tool-description']}>
            {tool.description}
          </div>
        </div>
        <div className={styles['tool-ranking']}></div>
      </div>
    </div>
  );
}

CenterInfoWidget.propTypes = {
  center: PropTypes.object,
};
