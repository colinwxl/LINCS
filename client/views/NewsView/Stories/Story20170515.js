import React from 'react';

import Story from './Story';
import styles from '../NewsView.scss';
import ldpLogo from './images/ldp_logo.png';

export default function Story20170515() {
  return (
    <Story
      title="Cellosaurus Adds Cross-References to the LINCS Data Portal"
      date="May 22nd, 2017"
    >
      <img
        src={ldpLogo}
        alt="LINCS Data Portal"
        style={{ width: '5rem', marginRight: '4rem', marginLeft: '2rem' }}
        className={styles['inline-img-right']}
      />
      <p>
        The Cellosaurus is the most complete curated online knowledge resource on
        immortalized cell lines, naturally immortal cell lines (for example,
        embryonic stem cells), finite life cell lines and vertebrate cell
        line with an emphasis on human, mouse and rat cell lines. The
        Cellosaurus is a participant of the&nbsp;
        <a href="http://web.expasy.org/cellosaurus/overview_rii.html" target="_blank">
          Resource Identification Initiative
        </a>. The <a href="https://scicrunch.org/resolver" target="_blank">
          Research Resource Identifiers
        </a> (RRIDs) aim to promote the references to a community accepted and
        cross-referenced identifiers from  authoritative community databases and
        vendors. Release 22 of the Cellosaurus was made available on&nbsp;
        <a href="http://web.expasy.org/cellosaurus/" target="_blank">ExPASy</a> and
        includes cross-references to LINCS_LDP.
      </p>
      <span className={styles['twitter-label']}>
        <a
          title="Follow @LINCSProgram on Twitter"
          href="https://twitter.com/LINCSProgram"
        >
          Follow <strong>@LINCSProgram</strong>
        </a>
      </span>
    </Story>
  );
}
