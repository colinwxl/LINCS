import React from 'react';

import Story from './Story';
import quickStartImg from './images/quick-start-lincs.png';


export default function Story20160328() {
  return (
    <Story
      title="New Feature for LINCS Tools: ‘Quick Start with LINCS’"
      date="March 28th, 2016"
    >
      <img
        src={quickStartImg}
        alt="Quick Start With LINCS"
      />
      <p>
        The <a href="http://lincs-dcic.org/#/">‘Quick Start with LINCS‘</a> analysis tool
        feature enables users to search signatures
        (<a href="http://amp.pharm.mssm.edu/L1000CDS2/">L1000CDS2</a>), access data
        (<a href="http://lincsportal.ccs.miami.edu/dcic-portal/">LINCS Data Portal</a>),
        analyze data (<a href="http://eh3.uc.edu/GenomicsPortals/viewiLincs.jsp">iLINCS</a>),
        search transcriptomics (<a href="http://amp.pharm.mssm.edu/Slicr">Slicr</a>)
        and visualize proteomics (<a href="http://eh3.uc.edu/pilincs">piLINCS</a>).
      </p>
    </Story>
  );
}
