import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
// import { Link } from 'react-router';

import styles from './AACRMeetingBox.scss';

export default class AACRMeetingBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.updateDimensions();
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  updateDimensions = () => {
    const w = window;
    const width = w.innerWidth;
    const height = w.innerHeight;
    this.setState({ width, height });
  }

  render() {
    const { scheduleItem } = this.props;
    return (
      <div className={styles.widget}>
        <div className={`${styles['widget-inner']}`}>
          <div className={styles['widget-description']}>
            <div className={`${styles.presenter} ${styles['inline-img-left']}`}>
              <img
                src={scheduleItem.speakerImg}
                className={`${styles.thumbnail}`}
                alt={scheduleItem.speaker}
              />
            </div>
            <i>{scheduleItem.speaker}</i><br />
            <strong>Time:</strong> <i>{scheduleItem.time}</i>
            <br />
            <div className={styles['desc-limit']}>
              <a
                href={scheduleItem.abstractLink}
                target="_blank"
                className={`${styles['no-style-link']}`}
              >
                {
                  scheduleItem.talkTitle.length > 65 && this.state.width >= 990 ?
                    <span
                      data-tip="Information is not available at this time."
                      data-for={scheduleItem.time}
                    >
                      {
                        this.state.width >= 1200 ?
                        scheduleItem.talkTitle.split(' ').slice(0, 8).join(' ')
                        : scheduleItem.talkTitle.split(' ').slice(0, 10).join(' ')
                      }...
                    </span>
                    : <span>{scheduleItem.talkTitle}</span>
                }
              </a>
              {
                this.state.width >= 990 ?
                  <ReactTooltip
                    id={scheduleItem.time}
                    place="right"
                    type="dark"
                    effect="float"
                  >
                    <div style={{ maxWidth: '10rem' }}>
                      {scheduleItem.talkTitle}
                    </div>
                  </ReactTooltip>
                : null
              }
            </div>
            {
              scheduleItem.presentationResourceLink &&
              scheduleItem.presentationResourceLink.length > 0 ?
                <a
                  href={scheduleItem.presentationResourceLink}
                  target="_blank"
                  className={`${styles.resource} ${styles['no-style-link']}`}
                >
                  View presentation
                </a> :
              null
            }

          </div>
        </div>
      </div>
    );
  }
}

AACRMeetingBox.propTypes = {
  scheduleItem: PropTypes.object,
};
