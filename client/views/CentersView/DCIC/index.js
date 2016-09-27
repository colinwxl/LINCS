import React from 'react';
import { Link } from 'react-router';

import PageBanner from 'components/PageBanner';
import PageNav from 'components/PageNav';
import styles from './DCIC.scss';

export default function DCIC() {
  return (
    <div className={styles.wrapper}>
      <PageBanner
        title="BD2K-LINCS DCIC"
        subTitle={
          'The BD2K-LINCS Data Coordination and Integration Center is ' +
          'responsible for harmonizing LINCS data with other available resources'
        }
        imgSrc="/LINCS/files/centers_logos/DCIC.svg"
        imgAlt="BD2K-LINCS DCIC Logo"
      />
      <div className="container">
        <div className="row">
          <PageNav mainPage="BD2K-LINCS Data Coordination and Integration Center" />
          <div className="col-md-9 col-md-pull-3">
            <ul>
              <li>
                Project Title: <a href="http://projectreporter.nih.gov/project_description.cfm?projectnumber=1U54HL127624-01" target="_blank">
                Data Coordination and Integration Center for LINCS-BD2K (1U54HL127624)</a>
              </li>
              <li>
                Principal Investigators: <a title="Avi Ma'ayan PhD, Faculty Profile" href="http://icahn.mssm.edu/profiles/avi-maayan" target="_blank">
                Avi Ma’ayan PhD</a>, <a title="Mario Medvedovic PhD, Faculty Profile" href="http://eh.uc.edu/personnel/mario-medvedovic/" target="_blank">
                Mario Medvedovic PhD</a>, <a title="Stephan Schurer PhD, Faculty Profile" href="http://ccs.miami.edu/team_member/stephan-c-schurer-phd/" target="_blank">
                Stephan Schurer PhD</a>
              </li>
              <li>
                Awardee Institution: <a href="http://icahn.mssm.edu/" target="_blank">
                Icahn School of Medicine at Mount Sinai</a>
              </li>
              <li>
                Press Release: <a title="NIH invests almost $32 million to increase utility of biomedical research data" href="http://www.nih.gov/news/health/oct2014/od-09.htm" target="_blank">
                NIH invests almost $32 million to increase utility of biomedical research data</a>
              </li>
              <li>
                Center Website: <a href="http://lincs-dcic.org/#/">lincs-dcic.org</a>
              </li>
            </ul>
            <p>
              The Big Data to Knowledge (BD2K) Data Coordination and Integration Center (DCIC)
              for the Library of Integrated Network-based Signatures (LINCS) program consists
              of four major components:
            </p>
            <h2>Integrated Knowledge Environment (IKE)</h2>
            <p>
              The Center is constructing a high-capacity scalable IKE enabling federated access,
              intuitive querying and integrative analysis and visualization across all LINCS
              resources and many additional external data types from other relevant resources.
              The IKE resources are built on the
              infrastructure, <a href="http://lincs-dcic.org/#/resources" target="_blank">
              analysis tools</a> and data that we have already established in
              the <Link to="/centers/phase-one">LINCS pilot</Link> and transition phases.
            </p>
            <h2>Data Science Research (DSR)</h2>
            <p>
              The DCIC has several <a href="http://lincs-dcic.org/#/internal-dsrp#nav" target="_blank">
              internal research projects</a> and supports
              several <a href="http://lincs-dcic.org/#/external-dsrp#nav" target="_blank">
              external data science research projects</a>, addressing various data integration
              and intracellular molecular regulatory network challenges.
            </p>
            <h2>Community Training and Outreach (CTO)</h2>
            <p>
              The CTO efforts of the DCIC established
              several <a href="http://lincs-dcic.org/#/training" target="_blank">
              educational resources</a> including
              a <a href="https://www.coursera.org/course/bd2klincs" target="_blank">
              LINCS MOOC</a> and
              a <a href="http://lincs-dcic.org/#/summer-research-app#nav" target="_blank">
              summer research training program</a>. In addition, the DCIC is initiating
              and supporting diverse collaborative projects that leverage LINCS resources
              and disseminate LINCS data and tools.
            </p>
            <h2>Consortium Coordination and Administration (CCA)</h2>
            <p>
              The organizational structure of the Center includes a strong CCA that supports and
              manages the Center’s goals and deliverables, and coordinates activities across
              the <a title="LINCS" href="https://commonfund.nih.gov/LINCS/index" target="_blank">
              LINCS</a> and <a title="BD2K" href="http://bd2k.nih.gov/#sthash.KvwCAGCP.dpbs" target="_blank">
              BD2K</a> programs.
            </p>
            <p>
              The Center brings together
              a <a href="http://lincs-dcic.org/#/about#nav" target="_blank">team</a> of
              computational experts with several years of experience with LINCS data and
              complementary expertise: Drs. Ma’ayan, Schürer, and Medvedovic develop and deploy a
              next generation computational infrastructure, develop
              novel <a href="http://lincs-dcic.org/#/resources" target="_blank">
              analysis tools</a> and methods enabling researchers to glean new insights
              from integrative models of biological systems to link complex diseases/phenotypes
              with drugs and the pathways that those drugs target in different cells and
              tissues. The DCIC plays a key role in realizing the transformative potential
              of LINCS data and resources in accelerating the discovery of novel therapeutics
              and improving diagnostics of human health.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
