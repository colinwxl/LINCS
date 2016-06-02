import React from 'react';
import { Link } from 'react-router';

import Story from './Story';


export default function Story201508172() {
  return (
    <Story
      title="Data Standards Update"
      date="August 17th, 2015"
    >
      <p>
        The <Link to="/data/standards">Data Standards</Link> page has been updated
        to reflect the most recent standards releases in LINCS Production Phase 2.
      </p>
    </Story>
  );
}
