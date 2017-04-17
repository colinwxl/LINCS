import React from 'react';
import PropTypes from 'prop-types';
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

export function TutVid(props) {
  const { tool, homeview } = props;
  let creatorList = tool.centers.sort((a, b) => a.name > b.name);
  creatorList = creatorList.map((center, idx) =>
    <li key={idx} className={styles['creator-list-item']}>{center.name}</li>
  );
  let fontSizeSet = toolPageSize;
  if (homeview) {
    fontSizeSet = homeViewSize;
  }
  return (
    <div className={styles.tool}>
      <a href={tool.tutorialUrl} className={styles['tool-link']} target="_blank">
        <div className={styles['tool-inner']}>
          <img src={tool.tutorialPreviewUrl} className={styles.thumbnail} alt={tool.name} />
          <div className={styles['tool-details']}>
            <label className={styles['tool-title']}>{tool.name}</label>
            <ul className={styles['tool-creator']} style={{ fontSize: fontSizeSet.creator }}>
              {creatorList}
            </ul>
            <div
              style={{ fontSize: fontSizeSet.description }}
              className={styles['tool-description']}
            >
              {tool.description}
            </div>
          </div>
          <div className={styles['tool-ranking']}></div>
        </div>
      </a>
    </div>
  );
}

TutVid.propTypes = {
  homeview: PropTypes.bool,
  tool: PropTypes.object,
  toolIncrementClick: PropTypes.func,
};

export default connect(null, { toolIncrementClick })(TutVid);
