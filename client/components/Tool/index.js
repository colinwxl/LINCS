import React, { PropTypes } from 'react';

import styles from './Tool.scss';

const toolPageSize = {
  title: '1rem',
  creator: '0.8rem',
  description: '0.75rem',
}
const homeViewSize = {
  title: '1.1rem',
  creator: '0.8rem',
  description: '0.88rem',
}

export default function Tool(props) {
  const { tool, homeview } = props;
  let creatorList = tool.centers.sort((a, b) => a.name > b.name);
  creatorList = creatorList.map((center, idx) =>
    <li key={idx}>
      <a href={center.website} target="_blank">{center.name}</a>
    </li>
  );
  let fontSizeSet = toolPageSize;
  if (homeview) {
    fontSizeSet = homeViewSize;
  }
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
          <a
            href={tool.url}
            className={styles['tool-title']}
            target="_blank"
            style={{ fontSize: fontSizeSet.title}}
          >
            {tool.name}
          </a>
          <ul className={styles['tool-creator']} style={{ fontSize: fontSizeSet.creator}}>
            {creatorList}
          </ul>
          <div style={{ fontSize: fontSizeSet.description}} className={styles['tool-description']}>
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
