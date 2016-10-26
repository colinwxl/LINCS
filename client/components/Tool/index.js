import React, { PropTypes } from 'react';
import ReactTooltip from 'react-tooltip';
import { toolIncrementClick } from 'actions/toolsWorkflows';
import { connect } from 'react-redux';

import styles from './Tool.scss';

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

const dataTypesCat = new Set(['Cell State Data',
                          'Drug Binding Data',
                          'Morphology Data',
                          'Protein Data',
                          'Transcript Data']);
const roleCat = new Set(['Data Analysis',
                         'Data Documentation',
                         'Data Formatting',
                         'Data Integration',
                         'Data Storage',
                         'Data Visualization',
                         'Network Analysis',
                         'Signature Generation']);
const featCat = new Set(['API',
                         'Command Line',
                         'Database',
                         'Documentation',
                         'Ontology',
                         'Open Source',
                         'Provenance',
                         'Scripting',
                         'Search Engine',
                         'Versioning',
                         'Web-based']);

function camelCaseToTitleCase(input) {
  if (input === 'api') return 'API';
  if (input === 'webBased') return 'Web-based';
  const spaced = input.replace(/([A-Z])/g, ' $1').replace(/_/, '-');
  return spaced.charAt(0).toUpperCase() + spaced.slice(1);
}

export function Tool(props) {
  const { tool, homeview } = props;
  const dt = [];
  const role = [];
  const feat = [];
  Object.keys(tool).forEach(property => {
    const titleCaseProp = camelCaseToTitleCase(property);
    if (dataTypesCat.has(titleCaseProp) && !!tool[property]) {
      dt.push(titleCaseProp);
    } else if (roleCat.has(titleCaseProp) && !!tool[property]) {
      role.push(titleCaseProp);
    } else if (featCat.has(titleCaseProp) && !!tool[property]) {
      feat.push(titleCaseProp);
    }
  });
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

  const toolTipItems = [dt, role, feat].map((cat, idx) => {
    let title;
    if (idx === 0) {
      title = 'Data Type';
    } else if (idx === 1) {
      title = 'Role';
    } else if (idx === 2) {
      title = 'Feature';
    }
    return (
      <div className={styles['category-column']}>
        <label className={styles['category-label']}>
          {title}
        </label>
        <ul className={styles['category-ul']}>
          {
            cat.sort().map((catItem, i) => (
              <li key={i} className={styles['category-li']}>{catItem}</li>)
            )
          }
        </ul>
      </div>
    );
  });

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
            onClick={() => props.toolIncrementClick([tool.id])}
            target="_blank"
          >
            <span className={styles.overlay} />
          </a>
        </div>
        <div className={styles['tool-details']}>
          <i
            className={`fa fa-info-circle ${styles.tooltip}`}
            aria-hidden="true"
            data-tip="Information is not available at this time."
            data-for={tool.name}
          />
          <ReactTooltip
            id={tool.name}
            place="right"
            type="dark"
            effect="float"
          >
            {toolTipItems}
          </ReactTooltip>
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
