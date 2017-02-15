import React from 'react';
import { Link } from 'react-router';

import Story from './Story';
import styles from '../NewsView.scss';
import aacrLogo from 'static/files/aacr_logo.png';
import dcicLogo from 'static/files/centers_logos/DCIC.svg';
import broadLogo from 'static/files/centers_logos/CMap.svg';
import hmsLogo from 'static/files/centers_logos/hms-lincs.png';
import mepLogo from 'static/files/centers_logos/mep-lincs-logo.png';

const AACR = [
  {
    time: '5:00 - 5:15 PM',
    talkTitle: 'Introduction to the NIH LINCS Program',
    speaker: 'Peter K. Sorger',
    centerLogo: hmsLogo,
    centerName: 'HMS LINCS',
    centerPath: 'LINCS/centers/data-and-signature-generating-centers/hms-lincs',
  },
  {
    time: '5:15 - 5:30 PM',
    talkTitle: 'Navigating the global landscape of cellular fate with LINCS data',
    speaker: "Avi Ma'ayan",
    centerLogo: dcicLogo,
    centerName: 'BD2K-LINCS DCIC',
    centerPath: 'LINCS/centers/dcic',
  },
  {
    time: '5:30 - 5:45 PM',
    talkTitle: 'Mining LINCS drug-response databases to identify novel activities'
    + ' of investigational breast cancer therapeutics',
    speaker: 'Caitlin Mills',
    centerLogo: hmsLogo,
    centerName: 'HMS LINCS',
    centerPath: 'LINCS/centers/data-and-signature-generating-centers/hms-lincs',
  },
  {
    time: '5:45 - 6:00 PM',
    talkTitle: 'The L1000 Platform and Next Generation Connectivity Map',
    speaker: 'Todd R. Golub',
    centerLogo: broadLogo,
    centerName: 'LINCS Transcriptomics',
    centerPath: 'LINCS/centers/data-and-signature-generating-centers/lincs-transcriptomics',
  },
  {
    time: '6:00 - 6:15 PM',
    talkTitle: 'Systematic study of the influence of the microenvironment'
    + 'on cancer cell phenotypes: An overview of the MEP-LINCS center',
    speaker: 'Laura M. Heiser',
    centerLogo: mepLogo,
    centerName: 'MEP-LINCS',
    centerPath: 'LINCS/centers/data-and-signature-generating-centers/mep-lincs',
  },
  {
    time: '6:15 - 6:30 PM',
    talkTitle: 'Proteomic connectivity maps of chromatin and'
    + 'signaling for functional drug discovery',
    speaker: 'Jake Jaffe',
    centerLogo: broadLogo,
    centerName: 'LINCS Transcriptomics',
    centerPath: 'LINCS/centers/data-and-signature-generating-centers/lincs-transcriptomics',
  },
];

export default function Story20170214() {
  return (
    <Story
      title="AACR Annual Meeting 2017 Special Session -
      Advancing Cancer Therapy Using Data from the NIH LINCS Program"
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
        drugs derived from large-scale profiling studies.
      </p>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Time</th>
            <th>Presentation</th>
            <th style={{ textAlign: 'center' }}>Center</th>
          </tr>
        </thead>
        <tbody>
          {
            AACR.map((pres, idx) => (
              <tr key={idx}>
                <td>{pres.time}</td>
                <td><strong>{pres.talkTitle}</strong><br /><i>{pres.speaker}</i></td>
                <td>
                  <div className={styles['center-box']}>
                    <Link to={pres.centerPath} className={styles.link}>
                      <img
                        src={pres.centerLogo}
                        alt={pres.centerLogo}
                        className={styles.centerLogo}
                      />
                      <span className={styles.centerTitle}>{pres.centerName}</span>
                    </Link>
                  </div>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <hr />
      <br />
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
