import React from 'react';
import { Link } from 'react-router';

import Story from './Story';


export default function Story20150224() {
  return (
    <Story
      title="Call for External Collaborations with the BD2K-LINCS Data Coordination
                and Integration Center"
      date="February 24th, 2015"
    >
      <p>
        The <a href="http://www.lincs-dcic.org/" target="_blank">BD2K-LINCS
        DCIC</a> announces
        a <a href="http://www.lincs-dcic.org/#/edsr" target="_blank">call for
        applications</a> for the next round of external data science research
        projects. The call is for two year projects that would leverage LINCS
        generated data through application of novel computational methods.
        For more information, please
        visit: <a href="http://www.lincs-dcic.org/#/edsr" target="_blank">
        http://www.lincs-dcic.org/#/edsr</a>. Please visit
        the <Link to="/community/funding-opportunities">funding opportunities</Link> page
        for more details.
      </p>
    </Story>
  );
}
