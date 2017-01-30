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
          'The Harvard Medical School LINCS Center studies how normal and diseased human ' +
          'cells respond at the molecular level to perturbation by drugs, mutations, ' +
          'and the local environment.'
        }
        imgSrc="/LINCS/files/centers_logos/hms-lincs.png"
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
              of cellular response to perturbagens – in particular, small molecule kinase
              inhibitors, epigenome-modifying agents, and naturally occurring ligands such
              as growth factors and inflammatory cytokines – at the level of both cell
              populations and single cells. Current research is focused on understanding
              the relationship between dose and response, the origin and significance of
              cell-to-cell variation, and the molecular basis of drug sensitivity and
              resistance in both normal and disease contexts. At the same time,
              the Center commits substantial resources toward the development of improved analytical
              tools, metadata standards, and informatics systems to promote data analysis,
              accessibility, and reuse.
            </p>
            <h2>Approaches</h2>
            <p>
              The HMS LINCS Center collects multiplex perturbagen-response data across
              a number of complementary experimental platforms including live- and
              fixed-cell imaging, sandwich immunoassays, protein mass spectrometry,
              and mRNA profiling as a means to measure the levels, localization, and
              states of modification of key signaling proteins and the networks in
              which these proteins are embedded. From these diverse data types,
              perturbagen-response signatures are constructed using existing and novel
              statistical modeling, network inference, and machine learning tools, and
              these signatures enable predictive modeling of the responses of genetically
              diverse cells to specific perturbations.
            </p>
            <p>
              All data and tools developed by the HMS LINCS Center are released to the
              public in a timely manner. Information about these resources is available
              through the HMS LINCS <a href="http://lincs.hms.harvard.edu" target="_blank">
              website</a>. In addition, customized query, browse, and
              explore tools grounded in established ontologies and standards developed
              in collaboration with the <Link to="/LINCS/centers/dcic">
              BD2K-LINCS Data Coordination and Integration</Link> Center
              make it possible to access and interrogate HMS LINCS data
              programmatically through the&nbsp;
              <a href="http://lincs.hms.harvard.edu/db" target="_blank">HMS LINCS Database
              </a> and the&nbsp;
              <a href="http://lincsportal.ccs.miami.edu/dcic-portal/" target="_blank">
                LINCS Data Portal
              </a>.
            </p>
            <h2>Outcomes</h2>
            <p>
              The Center’s research will provide a comprehensive picture at the molecular
              level of the responses of cells and tissues to some of the most important
              classes of therapeutic molecules and of the extent to which these
              responses vary with genetic and epigenetic context. By comparing
              perturbagen response across tissue types and disease states, this
              research will not only uncover fundamental properties of cell signaling
              networks but also will identify opportunities for drug repurposing and
              for reducing drug toxicity. Finally, by creating predictive models of
              drug response for different tissue niches this work aims to improve our
              ability to personalize therapies to the needs of individual patients
              and to increase the durability of existing treatments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
