import React, { PropTypes } from 'react';
import { toolIncrementClick } from 'actions/toolsWorkflows';
import { connect } from 'react-redux';

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
    <li key={idx}>{center.name}</li>
  );
  let fontSizeSet = toolPageSize;
  if (homeview) {
    fontSizeSet = homeViewSize;
  }
  return (
    <div className={styles.tool}>
      <a className={styles['tool-link']} href={tool.tutorialUrl}>
        <div className={styles['tool-inner']}>
          <img src={tool.tutorialPreviewUrl} className={styles.thumbnail} alt={tool.name} />

          <div className={styles['tool-details']}>
            <label className={styles['tool-title']}>{tool.name}</label>
            <ul className={styles['tool-creator']} style={{ fontSize: fontSizeSet.creator }}>
              {creatorList}
            </ul>
            <div style={{ fontSize: fontSizeSet.description }} className={styles['tool-description']}>
              {tool.description}
            </div>
          </div>
          <div className={styles['tool-ranking']}></div>
        </div>
      </a>
    </div>
  );
}

Tool.propTypes = {
  homeview: PropTypes.bool,
  tool: PropTypes.object,
  toolIncrementClick: PropTypes.func,
};

export default connect(null, { toolIncrementClick })(Tool);
