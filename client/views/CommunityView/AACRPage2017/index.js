import React from 'react';
import PageBanner from 'components/PageBanner';
import PageNav from 'components/PageNav';

import AACRMeetingBox from '../Overview/AACR/AACRMeetingBox';
import aacrLogo from 'static/files/aacr_logo.png';
import AACR from '../Overview/AACR/AACRList';

import styles from './AACRPage2017.scss';

export default function AACRPage2017() {
  return (
    <div className={styles.wrapper}>
      <PageBanner
        title="AACR Annual Meeting"
      />
      <div className="container">
        <div className="row">
          <PageNav
            mainPage="AACR Annual Meeting 2017"
            isCommunityPage
          />
          <div className="col-md-9 col-md-pull-3">
            <h3>
              Special Session 17 - Advancing Cancer Therapy Using Data from the NIH LINCS Program
            </h3>
            <br />

            <img
              src={aacrLogo}
              alt="AACR Logo"
              style={{ display: 'inline-block' }}
            />
            <div style={{ display: 'inline-block' }}>
              <br />
              <p>
                <strong>Date | Time:</strong>&nbsp;
                April 4, 2017, 5:00 – 6:30 PM
              </p>
              <p>
                <strong>Location:</strong>&nbsp;
                Room 147 - Level 1 Washington Convention Center, Washington, D.C.
              </p>
            </div>
            <br />
            <br />
            <h4>
              DESCRIPTION
            </h4>
            <p>
              Cancer cells respond to small molecule drugs and components of the
              microenvironment in a complex, time-dependent manner that varies
              from one cell type to the next and, within a genetically homogenous
              population, from one cell to the next. This session highlighted
              recent results from the NIH-funded Library of Network-Based Cellular
              Signatures (LINCS) program, which is assembling libraries of
              perturbagen-response signatures using high-throughput transcript
              and proteomic profiling, live and fixed-cell imaging and phenotypic
              assays. Ways of accessing and analyzing LINCS data, software and
              experimental protocols were presented along with recent insights
              into oncogenic mechanisms and responses to therapeutic drugs derived
              from large-scale profiling studies.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-9">
            {
              AACR.map((si, idx) => (
                <AACRMeetingBox key={idx} scheduleItem={si} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}
