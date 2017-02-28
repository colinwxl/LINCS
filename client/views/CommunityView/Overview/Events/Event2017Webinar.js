import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { loadAnnouncements } from 'actions/announcements';
import styles from '../Overview.scss';

import formatDate from 'utils/formatDate';

const mapStateToProps = (state) => ({
  announcements: state.announcements.announcements,
});

export class Event2017Webinar extends Component {
  componentDidMount() {
    this.props.loadAnnouncements();
  }

  latestSort(anns) {
    let latestAnnsIdx = anns.length;
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    for (let i = 0; i < anns.length; i++) {
      const annDate = new Date(anns[i].eventDate);
      if (annDate < yesterday) {
        latestAnnsIdx = i;
        break;
      }
    }
    const latestAnns = anns.slice(0, latestAnnsIdx).reverse();
    const remainingAnns = anns.slice(latestAnnsIdx).reverse();
    return latestAnns.concat(remainingAnns);
  }

  findUpcomingWebinars(anns) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return anns.filter(ann => ann.webinar && (new Date(ann.eventDate) >= yesterday));
  }

  render() {
    const webinars = this.findUpcomingWebinars(this.props.announcements);
    const latestWebinars = this.latestSort(webinars);
    return (
      <div className={styles['ann-card']}>
        <h6 className={`${styles['ann-group']} ${styles.webinar}`}>LINCS DATA SCIENCE WEBINAR</h6>
        <div className={styles['ann-content']}>
          <h3>LINCS Data Science Research Webinars</h3>
          <iframe
            src="https://www.youtube.com/embed/videoseries?list=PL0Bwuj8819U-G9Ob0jIGHp5AtwpCghLV5"
            frameBorder="0"
            allowFullScreen=""
            style={{ width: '16rem', height: '12rem' }}
            className={styles['inline-img-left']}
          />
          <div className={styles['info-block']}>
            <p>
              The LINCS Data Science Research Webinars serve as a general
              forum to engage data scientists within and outside of the
              LINCS project to work on problems related to
              LINCS data analysis and integration.&nbsp;
              <Link to="/community/webinars">Learn More</Link>
            </p>
            <br />
            <div>
              <h6>
                <strong>
                  Webinars are held on select Tuesdays at 3:00 PM Eastern Time
                </strong>
              </h6>
              <div>
                How to Connect with GoToMeeting
                <ul className={styles.ol}>
                  <li>
                    <b>1.</b> Join from your computer, tablet, or smartphone by
                    visiting&nbsp;
                    <a href="https://global.gotomeeting.com/join/168894253" target="_blank">
                      https://global.gotomeeting.com/join/168894253
                    </a>
                  </li>
                  <li>
                    <b>2.</b>Use your microphone and speakers (VOIP) for audio.
                    You’ll sound best with a headset. You can also call
                    in using your telephone: United States (Long distance)
                    : +1 (312) 757-3121
                  </li>
                  <li><b>3.</b>When prompted, enter access code 168-894-253</li>
                  <li>
                    <b>4.</b>You may need an audio PIN. If so,
                    this will be shown after joining the session
                  </li>
                </ul>
              </div>
              <div>
                <strong>Upcoming Webinars</strong>
                <ul>
                    {latestWebinars.map((web, idx) => (
                      <li key={idx}>
                        {formatDate(web.eventDate)}:&nbsp;
                        <Link to="/community/webinars">
                          {web.title}
                        </Link>
                        {web.presenter ? ` (Speaker: ${web.presenter})` : null}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Event2017Webinar.propTypes = {
  loadAnnouncements: PropTypes.func,
  announcements: PropTypes.array,
};

export default connect(mapStateToProps, {
  loadAnnouncements,
})(Event2017Webinar);
