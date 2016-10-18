import React, { PropTypes } from 'react';
import { toolIncrementClick } from 'actions/toolsWorkflows';
import { connect } from 'react-redux';
import thumbnail from './tutorial_thumbnails/enrichr.jpg';

import styles from './TutVid.scss';

const toolPageSize = {
  title: '1rem',
  creator: '0.8rem',
  description: '0.75rem',
};
const homeViewSize = {
  title: '1.1rem',
  creator: '0.8rem',
  description: '0.88rem',
};

export function Tool(props) {
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
        <img src={thumbnail} className={styles.thumbnail} alt={tool.name} />
        <div className={styles['tool-details']}>
          <a
            href={tool.url}
            className={styles['tool-title']}
            onClick={() => props.toolIncrementClick([tool.id])}
            target="_blank"
            style={{ fontSize: fontSizeSet.title }}
          >
            {tool.name}
          </a>
          <ul className={styles['tool-creator']} style={{ fontSize: fontSizeSet.creator }}>
            {creatorList}
          </ul>
          <div style={{ fontSize: fontSizeSet.description }} className={styles['tool-description']}>
            {tool.description}
          </div>
        </div>
        <div className={styles['tool-ranking']}></div>
      </div>
    </div>
  );
}

Tool.propTypes = {
  homeview: PropTypes.bool,
  tool: PropTypes.object,
  toolIncrementClick: PropTypes.func,
};

export default connect(null, { toolIncrementClick })(Tool);
