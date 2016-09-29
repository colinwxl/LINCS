import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import extend from 'extend';
// import { Link } from 'react-router';

import { fetchWebinars } from 'actions/community';
import formatDate from 'utils/formatDate';
import PageBanner from 'components/PageBanner';
import PageNav from 'components/PageNav';
import styles from './Webinars.scss';

const mapStateToProps = (state) => ({
  webinars: state.community.webinars,
});

export class Webinars extends Component {
  componentWillMount() {
    this.props.fetchWebinars();
  }

  get webinars() {
    const { webinars } = this.props;
    const upcomingWebinars = [];
    const pastWebinars = [];
    webinars.forEach((webinar) => {
      const web = extend(true, {}, webinar);
      const now = new Date();
      if (web.date) {
        // Ensure web.date is a date object so that it can be compared to Date.now() to check
        // if in past or future
        web.date = new Date(web.date);
        if (web.date < now) {
          pastWebinars.push(web);
        } else {
          upcomingWebinars.unshift(web);
        }
      }
    });
    return { upcomingWebinars, pastWebinars };
  }

  generateWebinarElems(webinars) {
    return webinars.map((web, i) => {
      const hasVideo = web.url && !!web.url.length;
      return (
        <div key={i} className={styles.webinar}>
          <h5>
            {
              hasVideo
                ? <a href={web.url}>{web.title}</a>
                : web.title
            }
          </h5>
          <p><em>{formatDate(web.date)}</em></p>
          {
            web.presenterUrl && !!web.presenterUrl.length
              ? <p><a href={web.presenterUrl}>{web.presenterName}</a></p>
              : <p>{web.presenterName}</p>
          }
          {
            web.presenterAffiliation && !!web.presenterAffiliation.length
              ? <p>{web.presenterAffiliation}</p>
              : <p></p>
          }
          {
            hasVideo
              ? <p><a href={web.url}>Watch webinar on YouTube</a></p>
              : <p></p>
          }
        </div>
      );
    });
  }

  render() {
    const { upcomingWebinars, pastWebinars } = this.webinars;
    return (
      <div className={styles.wrapper}>
        <PageBanner
          title="Webinars"
          subTitle="An overview of LINCS Data Science Research (DSR) Webinars"
        />
        <div className="container">
          <div className="row">
            <PageNav isCommunityPage mainPage="Webinars" />
            <div className="col-md-9 col-md-pull-3">
              <p>
                The LINCS Data Science Research Webinars serve as a general forum to engage data
                scientists within and outside of the LINCS project to work on problems related to
                LINCS data analysis and integration.
              </p>
              <p><strong>Webinars are held on select Tuesdays at 3:00 PM Eastern Time</strong></p>
              <h5>How to Connect with GoToMeeting</h5>
              <ol>
                <li>
                  Join from your computer, tablet, or smartphone by
                  visiting <a href="https://global.gotomeeting.com/join/168894253">
                  https://global.gotomeeting.com/join/168894253</a>
                </li>
                <li>
                  Use your microphone and speakers (VOIP) for audio. You’ll sound best with a
                  headset. You can also call in using your telephone: United States
                  (Long distance): +1 (312) 757-3121
                </li>
                <li>When prompted, enter access code 168-894-253</li>
                <li>
                  You may need an audio PIN. If so, this will be shown after joining the session
                </li>
              </ol>
              <p>
                For summary information about LINCS Data Science Webinars, please visit the
                BD2K-LINCS DCIC's <a href="http://lincs-dcic.org/#/webinars">webinars page</a> or
                their <a href="https://www.youtube.com/channel/UC88h_MIO1LP7Jv52VQ4qKkg">
                YouTube channel</a>.
              </p>
              <p>
                For detailed information including the discussion group, please visit the wiki
                at <a href="https://sites.google.com/site/bd2klincsdatascience">
                https://sites.google.com/site/bd2klincsdatascience</a>
              </p>
              <div className={styles.webinars}>
                <h2>Upcoming Webinars</h2>
                {
                  !!upcomingWebinars.length
                  ? this.generateWebinarElems(upcomingWebinars)
                  : <p>There are currently no upcoming webinars. Please check back later.</p>
                }
              </div>
              <div className={styles.webinars}>
                <h2>Past Webinars</h2>
                <div className={styles.playlist}>
                  <iframe
                    src="https://www.youtube.com/embed/videoseries?list=PL0Bwuj8819U-G9Ob0jIGHp5AtwpCghLV5"
                    frameBorder="0"
                    allowFullScreen=""
                  />
                </div>
                {this.generateWebinarElems(pastWebinars)}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Webinars.propTypes = {
  fetchWebinars: PropTypes.func.isRequired,
  webinars: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, {
  fetchWebinars,
})(Webinars);
