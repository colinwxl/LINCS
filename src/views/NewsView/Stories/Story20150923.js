import React from 'react';

import Story from './Story';
import styles from '../NewsView.scss';
import dcicLogo from './images/lincs-dcic-logo.jpg';


export default function Story20150923() {
  return (
    <Story
      title="BD2K-LINCS DCIC | Systems Biology Data Science Symposium | January 19-20, 2016"
      date="September 23rd, 2015"
    >
      <p className="clearfix">
        <img
          className={styles['inline-img-left']}
          src={dcicLogo}
          alt="BD2K-LINCS DCIC"
          />
        The <a href="http://lincs-dcic.org" target="_blank">BD2K-LINCS Data
        Coordination and Integration Center</a> and the University of Miami will
        host a
        two-day <a href="http://lincs-dcic.org/#/2016-data-science-symposium" target="_blank">
        Systems Biology Data Science Symposium</a> on <strong>January 19-20,
        2016</strong> at the University of Miami.
      </p>
      <p>
        On January 19-20, 2016, the first
        annual <a href="http://lincs-dcic.org/#/2016-data-science-symposium" target="_blank">
        Systems Biology Data Science Symposium (SBDSS 2016)</a> at the University
        of Miami will bring together the <a href="http://lincs-dcic.org/#/" target="_blank">
        BD2K-LINCS Data Coordination and Integration Center</a>, local researchers, and
        outside experts who apply or develop computational systems biology resources.
        In presentations, a poster reception and several working sessions, the DCIC
        showcased <a href="http://lincs-dcic.org/#/resources" target="_blank">
        tools/resources</a> and <a href="http://lincs-dcic.org/#/about#nav" target="_blank">
        scientific projects</a>, connected developers with users, and initiated
        new collaborations.
      </p>
      <p>
        <strong>Details: </strong>
        <a href="http://lincs-dcic.org/#/2016-data-science-symposium" target="_blank">
          http://lincs-dcic.org/#/2016-data-science-symposium
        </a>
      </p>
    </Story>
  );
}
