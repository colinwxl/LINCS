import React from 'react';
import ReactTooltip from 'react-tooltip';

import styles from './Pipeline.scss';

import DocImage from 'static/files/dockerLogo.jpg';
import GitImage from 'static/files/gitHub.png';

export default function PipelineCard() {
  let name = this.props.name;
  let title = this.props.title;
  let description = this.props.description;
  let gitHubUrl = this.props.githubUrl;
  let dockerHubUrl = this.props.dockerHubUrl;
  let toolTipItems = this.props.toolTipItems;

  return (
    <div className={styles.tool}>
      <div className={styles['tool-inner']}>

        <div className={styles.cover}>
        {
          <div className={styles['cover-Top']}>
            <div className={styles['tool-img-wrap']}>
              <div className={styles['tool-img-inner']}>
                <img src={DocImage} height="50" width="50" alt={name} />
              </div>
            </div>
            <a
              href={dockerHubUrl}
              className={styles['tool-click-target']}
              onClick={() => this.props.toolIncrementClick(['id'])}
              target="_blank"
            >
              <span className={styles.overlay} />
            </a>
          </div>
        }
        {
          <div className={styles['cover-Bottom']}>
            <div className={styles['tool-img-wrap']}>
              <div className={styles['tool-img-inner']}>
                <img src={GitImage} height="50" width="50" alt={name} />
              </div>
            </div>
            <a
              href={gitHubUrl}
              className={styles['tool-click-target']}
              onClick={() => this.props.toolIncrementClick(['id'])}
              target="_blank"
            >
              <span className={styles.overlay} />
            </a>
          </div>
        }
        </div>

        <div className={styles['tool-details']}>
          <i
            className={`fa fa-info-circle ${styles.tooltip}`}
            aria-hidden="true"
            data-tip="Information is not available at this time."
            data-for={name}
          />
          <ReactTooltip
            id={name}
            place="right"
            type="dark"
            effect="float"
          >
            {toolTipItems}
          </ReactTooltip>
          <a
            href={gitHubUrl}
            className={styles['tool-title']}
            onClick={() => this.props.toolIncrementClick(['id'])}
            target="_blank"
            style={{ fontSize: '20px' }}
          >
            {name}
          </a>
          <br />
          <div className={styles['tool-creator']} style={{ fontSize: '13px' }}>
            {title}
          </div>
          <div style={{ fontSize: '12px' }} className={styles['tool-description']}>
            {description}
          </div>
        </div>
        <div className={styles['tool-ranking']}></div>
      </div>
    </div>
  );
}
