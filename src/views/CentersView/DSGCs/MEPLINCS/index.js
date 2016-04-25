import React from 'react';

import PageBanner from 'components/PageBanner';
import PageNav from 'components/PageNav';
import styles from '../DSGCs.scss';

const bmeLink =
  'http://www.ohsu.edu/xd/education/schools/school-of-medicine/departments/basic-science-departments';

const bmeStaffLink = `${bmeLink}/biomedical-engineering/people`;

export default function MEPLINCS() {
  return (
    <div className={styles.wrapper}>
      <PageBanner
        title="MEP LINCS"
        subTitle={
          'The Microenvironment Perturbagen LINCS Center at the Oregon ' +
          'Health and Science University utilizes advanced microscopy to ' +
          'profile the effects of different microenvironments on the response ' +
          'of human cell lines to many perturbations'
        }
        imgSrc={require('./mep-lincs-logo.png')}
        imgAlt="MEP LINCS Logo"
      />
      <div className="container">
        <div className="row">
          <PageNav
            mainPage="Data and Signature Generation Centers"
            subPage="Microenvironment Perturbagen (MEP) LINCS Center"
          />
          <div className="col-md-9 col-md-pull-3">
            <ul>
              <li>
                Project Title: <a href="http://projectreporter.nih.gov/project_description.cfm?projectnumber=1U54HG008100-01" target="_blank">
                Extrinsic Perturbations of Cell Physiology and Associated Regulatory
                Networks (1U54HG008100)</a>
              </li>
              <li>
                Principal Investigators: <a href={`${bmeStaffLink}/joe-gray.cfm`} target="_blank">
                Joe Gray PhD</a>, <a href={`${bmeStaffLink}/laura-heiser.cfm`} target="_blank">
                Laura Heiser PhD</a>, <a href={`${bmeStaffLink}/james-korkola.cfm`} target="_blank">
                James Korkola PhD</a>
              </li>
              <li>
                Awardee Institution: <a title="OHSU" href="http://www.ohsu.edu/xd/" target="_blank">
                Oregon Health and Science University</a>
              </li>
            </ul>
            <h2>Overview</h2>
            <p>
              Our goal in this project is to contribute to further development of the NIH Library
              of Integrated Network-based cellular signatures (LINCS) program by developing a
              dataset and computational strategy to elucidate how microenvironment (ME) signals
              affect cell intrinsic intracellular transcriptional- and protein-defined molecular
              networks to generate experimentally observable cellular phenotypes. We will infer
              these regulatory relationships by combining measurements of ME perturbagen-induced
              changes in multiple cellular phenotypes, RNA expression and regulatory protein
              expression in a core set of cell lines with measurements of responses of the same
              lines to chemical and genomic perturbagens made by our team in other projects and
              by other LINCS sites. Our data will complement existing perturbagen response LINCS
              data by providing information on ME perturbagen-induced changes and by providing
              quantitative image based measurements of seven cellular response phenotypes plus
              associated changes in gene transcription and regulatory protein expression.
              Integrative analysis of these data will enable us to address four key questions:
            </p>
            <ol>
              <li>
                How are ME peturbagen-induced cellular phenotypes regulated by specific molecular
                networks?
              </li>
              <li>
                Do subsets of ME-induced perturbations elicit common molecular network changes
                and phenotypic responses?
              </li>
              <li>
                Do specific molecular network signatures influence multiple cellular phenotypes
              </li>
              <li>
                Are the ME perturbagen-induced network changes similar to the genetic or
                chemically induced network changes identified in other LINCS projects?
              </li>
            </ol>
            <h2>Resources</h2>
              <ul>
                <li>
                  <a href="https://www.synapse.org/#!Synapse:syn2862345/wiki/72486">
                    MEP LINCS Synapse Website
                  </a>
                </li>
                <li>
                  <a href="https://www.synapse.org/#!Synapse:syn2346643/wiki/">
                    Breast Cancer Cell Line Panel
                  </a>
                </li>
                <li>
                  <a href={`${bmeLink}/spatial-systems-biomedicine/`}>
                    OHSU Center for Spatial Systems Biomedicine
                  </a>
                </li>
              </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
