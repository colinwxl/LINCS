import React from 'react';

import Story from './Story';
import quickStartImg from './images/quick-start-lincs.png';


export default function Story20160328() {
  return (
    <Story
      title="New Feature For LINCS Tools: ‘Quick Start With LINCS’"
      date="March 28th, 2016"
    >
      <img
        src={quickStartImg}
        alt="Quick Start With LINCS"
      />
      <p>
        The <a href="http://lincs-dcic.org/#/">‘Quick Start with LINCS‘</a> analysis tool
        feature enables users to search signatures (L1000CDS2), access data
        (LINCS Data Portal), analyze data (iLINCS), search transcriptomics (Slicr) and
        visualize proteomics (piLINCS).
      </p>
    </Story>
  );
}
