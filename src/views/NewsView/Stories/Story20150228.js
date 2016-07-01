import React from 'react';
import { Link } from 'react-router';

import Story from './Story';


export default function Story20150228() {
  return (
    <Story
      title="Administrative Supplements to Extend the Scope and Reach of LINCS Datasets"
      date="February 28th, 2015"
    >
      <p>
        This notice (<a href="http://grants.nih.gov/grants/guide/notice-files/NOT-RM-15-012.html" target="_blank">NOT-RM-15-102</a>)
        announces an opportunity to request administrative supplements to existing NIH
        research grants, to support generation of new data that will also advance the
        goals of the LINCS program. Please visit
        the <Link to="/community/funding-opportunities">funding opportunities</Link> page
        for more details.
      </p>
    </Story>
  );
}
