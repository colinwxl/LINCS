import React from 'react';
import Collapsible from 'react-collapsible';
import styles from '../Overview.scss';

import AACRMeetingBox from '../AACR/AACRMeetingBox';
import aacrLogo from 'static/files/aacr_logo.png';
import AACR from '../AACR/AACRList';

export default function Event20170404() {
  return (
    <div className="col-md-9 col-md-pull-3">
      <div className={styles['ann-card']}>
        <h6 className={styles['ann-group']}>CONFERENCE</h6>
        <div className={styles['ann-content']}>
          <h3>AACR Annual Meeting 2017</h3>
          <h5>
            <a
              href="http://www.abstractsonline.com/pp8/#!/4292/session/901"
              target="_blank"
              style={{ textDecoration: 'none' }}
            >
              Special Session 17:
              Advancing Cancer Therapy Using Data from the NIH LINCS Program
            </a>
          </h5>
          <div>
            <img
              src={aacrLogo}
              alt="AACR Logo"
              style={{ width: '20rem' }}
              className={styles['inline-img-left']}
            />
            <h6><strong>Date:</strong> April 4, 2017, 5:00 - 6:30 PM</h6>
            <h6><strong>Location:</strong>
              &nbsp;Room 147, Level 1, Washington Convention Center, Washington, DC
            </h6>
          </div>
          <p>
            Cancer cells respond to small molecule drugs and components of
            the microenvironment in a complex, time-dependent manner that
            varies from one cell type to the next and, within a genetically
            homogenous population, from one cell to the next. This session
            highlights recent results from the NIH-funded Library of Network-Based
            Cellular Signatures (LINCS) program, which is assembling
            libraries of perturbagen-response signatures using high-throughput
            transcript and proteomic profiling, live and fixed-cell imaging and
            phenotypic assays. Ways of accessing and analyzing LINCS data,
            software and experimental protocols will be presented along with
            recent insights into oncogenic mechanisms and responses to therapeutic
            drugs derived from large-scale profiling studies.
          </p>
          <Collapsible
            open
            trigger="Session Schedule ▸"
            triggerWhenOpen="Session Schedule ▾"
            transitionTime={300}
          >
            {
              AACR.map((si, idx) => (
                <AACRMeetingBox key={idx} scheduleItem={si} />
              ))
            }
          </Collapsible>
        </div>
      </div>
    </div>
  );
}
