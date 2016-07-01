import React from 'react';
import { Link } from 'react-router';

import PageBanner from 'components/PageBanner';
import PageNav from 'components/PageNav';
import styles from '../DSGCs.scss';

export default function HMSLINCS() {
  return (
    <div className={styles.wrapper}>
      <PageBanner
        title="HMS LINCS"
        subTitle={
          'The Harvard Medical School LINCS Center collects data and develops analytical ' +
          'tools needed to understand how human cells respond to perturbation by drugs'
        }
        imgSrc="/LINCS/files/hms-lincs.png"
        imgAlt="HMS LINCS Logo"
      />
      <div className="container">
        <div className="row">
          <PageNav mainPage="Data and Signature Generation Centers" subPage="HMS LINCS" />
          <div className="col-md-9 col-md-pull-3">
            <ul>
              <li>
                Project Title: <a href="http://projectreporter.nih.gov/project_description.cfm?projectnumber=1U54HL127365-01" target="_blank">
                Pharmaco-Response Signatures and Disease Mechanisms (1U54HL127365)</a>
              </li>
              <li>
                Principal Investigator: <a href="http://sorger.med.harvard.edu/people/peter-sorger-phd/" target="_blank">
                Peter Sorger PhD</a>
              </li>
              <li>
                Awardee Institution: <a title="Harvard Medical School" href="http://hms.harvard.edu/" target="_blank">
                Harvard Medical School</a>
              </li>
              <li>
                Center Website: <a href="http://lincs.hms.harvard.edu/" target="_blank">
                HMS LINCS Center</a>
              </li>
            </ul>
            <h2>Goals</h2>
            <p>
              The overall goal of the HMS LINCS Center is to delineate the fundamental principles
              of cellular response to perturbagens – clinical grade kinase inhibitors and
              components of the cellular microenvironment in particular – at the level of
              single-cells and cell populations and to make response data routinely available
              along with web-based browse, query and programmatic tools. The Center develops,
              tests and applies diverse measurement and computational methods and uses these to
              create response signatures for normal and diseased human cells exposed to
              perturbations individually and in combination. We emphasize systematic collection
              of data not currently available in public databases including live and fixed-cell
              imaging, biochemical data on signaling proteins and multi-factorial drug-response
              phenotypes. In pursuit of this goal, we also help to develop metadata standards
              and informatics systems for these types of data.
            </p>
            <h2>Approaches</h2>
            <p>
              The collection of multiplex perturbagen-response data at HMS involves the use of
              complementary assays including imaging, flow cytometry, sandwich immunoassays,
              protein mass spectrometry and mRNA profiling as a means to measure the levels,
              localization and states of modification of proteins targeted by perturbagens and
              the networks in which these proteins are embedded. Systematic analysis of this
              data yields the most fundamental measure of cellular response to perturbation:
              the dose-response relationship. Construction of perturbagen-response signatures
              using statistical modeling, network inference and machine learning creates models
              predictive of responses by genetically diverse cells to specific perturbations.
              Customized query, browse and explore functions developed in collaboration with
              the <Link title="BD2K-LINCS DCIC" to="/centers/dcic">BD2K-LINCS Data Coordination
              and Integration Center</Link>, and grounded in established ontologies and
              standards, will make it possible to
              access <a title="HMS LINCS Data" href="http://lincs.hms.harvard.edu/db/" target="_blank">
              HMS LINCS data</a> and manipulate it programmatically.
            </p>
            <h2>Outcomes</h2>
            <p>
              The Center’s research will provide a comprehensive picture of the responses of
              cells and tissues to some of the most important classes of therapeutic molecules
              (kinase inhibitors and chromatin targeting drugs) and the extent to which these
              responses vary with changes in the solid-phase and soluble components of the
              microenvironment. We aim to characterize variation in the biochemistry of cell
              signaling pathways under basal and perturbed conditions and then explain the
              origins of this variation in precise molecular terms. By comparing
              perturbagen-response across tissue types and disease we will not only uncover
              fundamental properties of cell signaling networks, we will identify opportunities
              for drug repurposing. We expect repurposing of cancer drugs for cardiovascular and
              inflammatory diseases to represent a particularly significant opportunity. By
              directly comparing perturbagen-responses in diseased and normal cells, including
              cardiomyocytes, hepatocytes, kidney epithelia, neurons, and immune cells we will
              increase our understanding of toxic responses and develop means for efficiently
              scoring the potential therapeutic index of new drugs. Finally, by creating
              predictive models of drug response for different tissue niches we hope to improve
              our ability to personalize therapies to the needs of individual patients and to
              increase the durability of existing treatments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
