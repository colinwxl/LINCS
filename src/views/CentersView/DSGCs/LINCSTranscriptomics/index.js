import React from 'react';

import PageBanner from 'components/PageBanner';
import PageNav from 'components/PageNav';
import styles from '../DSGCs.scss';

export default function LINCSTranscriptomics() {
  return (
    <div className={styles.wrapper}>
      <PageBanner
        title="LINCS Transcriptomics"
        subTitle={
          'The LINCS Center for Transcriptomics at the Broad Institute ' +
          'utilizes the L1000 technology to profile the response of human ' +
          'cells to thousands of perturbations'
        }
        imgSrc="/LINCS/files/CMap.svg"
        imgAlt="Connectivity Map Logo"
      />
      <div className="container">
        <div className="row">
          <PageNav
            mainPage="Data and Signature Generation Centers"
            subPage="LINCS Center for Transcriptomics"
          />
          <div className="col-md-9 col-md-pull-3">
            <ul>
              <li>
                Project Title: <a href="http://projectreporter.nih.gov/project_description.cfm?projectnumber=1U54HL127366-01" target="_blank">
                Broad Institute LINCS Center for Transcriptomics (1U54HL127366)</a>
              </li>
              <li>
                Principal Investigators: <a href="https://www.broadinstitute.org/what-broad/history-leadership/scientific-leadership/core-members/todd-r-golub" target="_blank">
                Todd Golub MD</a>, Aravind Subramanian PhD
              </li>
              <li>
                Awardee Organization: <a title="Broad Institute" href="https://www.broadinstitute.org/" target="_blank">
                Broad Institute</a>
              </li>
              <li>
                Related Website: <a href="https://clue.io/">ConnectivityMap 2.0</a>
              </li>
            </ul>
            <h2>Overview</h2>
            <p>
              The overarching goal of the Broad Institute’s LINCS program is the development of
              comprehensive signatures of cellular states that can be used by the entire research
              community to understand protein function, small-molecule action, physiological
              states and disease states. Our center will create the world’s most comprehensive
              resource of perturbational signatures. This will include 1.4 million L1000 genetic
              (CRISPER knock-out, shRNA knock-down and ORF overexpression) and small-molecule
              (drug and tool compound) perturbations spanning 50 cell types of varied lineage.
              We will make it possible for biologists and computational scientists worldwide to
              interact with the data by creating user-friendly apps that are designed to
              facilitate biological discovery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
