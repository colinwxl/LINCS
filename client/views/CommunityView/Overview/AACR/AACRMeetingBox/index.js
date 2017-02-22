import React, { Component, PropTypes } from 'react';
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
    const d = document;
    const documentElement = d.documentElement;
    const body = d.getElementsByTagName('body')[0];
    const width = w.innerWidth || documentElement.clientWidth || body.clientWidth;
    const height = w.innerHeight || documentElement.clientHeight || body.clientHeight;
    this.setState({ width, height });
  }

  render() {
    const { scheduleItem } = this.props;
    return (
      <div className={styles.widget}>
        <div className={`${styles['widget-inner']}`}>
          <p className={styles['widget-description']}>
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
                  scheduleItem.talkTitle.length > 65 && this.state.width >= 1200 ?
                    <span
                      data-tip="Information is not available at this time."
                      data-for={scheduleItem.time}
                    >
                      {scheduleItem.talkTitle.slice(0, 62)}...
                    </span>
                    : <span>{scheduleItem.talkTitle}</span>
                }
              </a>
              {
                this.state.width >= 1200 ?
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
            <br />
          </p>
        </div>
      </div>
    );
  }
}

AACRMeetingBox.propTypes = {
  scheduleItem: PropTypes.object,
};
