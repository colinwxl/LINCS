import React from 'react';
import { Link } from 'react-router';

import Story from './Story';
import styles from '../NewsView.scss';
import aacrLogo from 'static/files/aacr_logo.png';

export default function Story20170214() {
  return (
    <Story
      title="AACR Annual Meeting 2017 Special Session"
      subtitle="Advancing Cancer Therapy Using Data from the NIH LINCS Program"
      date="February 14th, 2017"
    >
      <p>
        <strong>
          Date: <i>April 4, 2017, 5:00 - 6:30 PM</i>
          <br />
          Location: <i>Room 147, Level 1, Washington Convention Center, Washington, DC</i>
        </strong>
      </p>
      <img
        src={aacrLogo}
        alt="AACR Logo"
        style={{ width: '20rem' }}
        className={styles['inline-img-right']}
      />
      <p>
        Cancer cells respond to small molecule drugs and components of
        the microenvironment in a complex, time-dependent manner that
        varies from one cell type to the next and, within a genetically
        homogenous population, from one cell to the next. This session
        highlights recent results from the NIH-funded Library of Network-
        Based Cellular Signatures (LINCS) program, which is assembling
        libraries of perturbagen-response signatures using high-throughput
        transcript and proteomic profiling, live and fixed-cell imaging and
        phenotypic assays. Ways of accessing and analyzing LINCS data,
        software and experimental protocols will be presented along with
        recent insights into oncogenic mechanisms and responses to therapeutic
        drugs derived from large-scale profiling studies.&nbsp;
        <Link to="/community/overview">Details</Link>
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
