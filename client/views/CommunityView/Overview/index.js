import React, { Component } from 'react';
import { Link } from 'react-router';

import PageBanner from 'components/PageBanner';
import PageNav from 'components/PageNav';

import styles from './Overview.scss';
// Images

import Event20170404 from './Events/Event20170404';
import Event20170516 from './Events/Event20170516';
import Event20160119 from './Events/Event20160119';
import Event20170301 from './Events/Event20170301';
import Event20160310 from './Events/Event20160310';
import Event20170220 from './Events/Event20170220';
import Event20160726 from './Events/Event20160726';
import Event20170126 from './Events/Event20170126';
import EventBD2KCrowdSourcing from './Events/EventBD2KCrowdSourcing';
import Event2017Webinar from './Events/Event2017Webinar';

export default class Overview extends Component {
  componentDidMount() {
    // Render the Google+ Follow Button
    // https://developers.google.com/+/web/follow/#javascript_api
    if (window && window.gapi) {
      window.gapi.follow.go(styles.wrapper);
    }
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <PageBanner
          title="The LINCS Community"
          subTitle={
            'The consortium engages the biomedical research ' +
            'communities through various outreach activities'
          }
        />

        <div className="container">
          <div className="row">
            <PageNav isCommunityPage mainPage="Overview" />
            <div className="col-md-9 col-md-pull-3">
              <h1 className={styles.title}>Overview</h1>
              <p>
                Access to and utilization of LINCS resources by the biomedical and data science
                research communities is one of the major aims of the LINCS program.
                The <a href="http://lincs-dcic.org/#/">BD2K-LINCS Data Coordination and Integration Center</a>,
                together with the <Link to="/centers/data-and-signature-generating-centers/">
                data and signature generation centers</Link>, use approaches like webinars,
                courses, training seminars, challenges, workshops and symposia to foster
                an active LINCS community.
              </p>
            </div>
            <Event20170404 />
          </div>
          <Event2017Webinar />
          <Event20170516 />
          <Event20170301 />
          <Event20170220 />
          <Event20170126 />
          <Event20160726 />
          <EventBD2KCrowdSourcing />
          <Event20160310 />
          <Event20160119 />
        </div>
      </div>
    );
  }
}
