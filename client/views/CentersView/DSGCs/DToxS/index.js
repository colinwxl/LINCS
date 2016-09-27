import React from 'react';
import { Link } from 'react-router';

import PageBanner from 'components/PageBanner';
import PageNav from 'components/PageNav';
import styles from '../DSGCs.scss';

const dsgcRoute = '/centers/data-and-signature-generating-centers';

export default function DToxS() {
  return (
    <div className={`${styles.wrapper} ${styles.dtoxs}`}>
      <PageBanner
        title="DToxS"
        subTitle={
          'The Drug Toxicity Signature Generation Center links ' +
          'cellular drug responses to adverse events'
        }
        imgSrc="/LINCS/files/centers_logos/DToxS.png"
        imgAlt="DToxS Logo"
      />
      <div className="container">
        <div className="row">
          <PageNav
            mainPage="Data and Signature Generation Centers"
            subPage="Drug Toxicity Signature Generation Center"
          />
          <div className="col-md-9 col-md-pull-3">
            <ul>
              <li>
                Project Title: <a href="http://projectreporter.nih.gov/project_description.cfm?projectnumber=1U54HG008098-01" target="_blank">
                Drug Combination Signatures for Prediction and Mitigation of
                Toxicity (1U54HG008098)</a>
              </li>
              <li>
                Principal Investigators: <a href="http://icahn.mssm.edu/profiles/srinivas-ravi-iyengar" target="_blank">
                Ravi Iyengar PhD</a>, <a href="http://icahn.mssm.edu/profiles/marc-birtwistle" target="_blank">
                Marc Birtwistle PhD</a>, <a href="http://icahn.mssm.edu/profiles/eric-a-sobie" target="_blank">
                Eric Sobie PhD</a>
              </li>
              <li>
                Awardee
                Institution: <a title="Icahn School of Medicine at Mount Sinai" href="http://icahn.mssm.edu/" target="_blank">
                Icahn School of Medicine at Mount Sinai</a>
              </li>
              <li>
                Press Release: <a title="Center to Find Drug Combinations that Reduce Side Effects" href="http://www.newswise.com/articles/center-to-find-drug-combinations-that-reduce-side-effects" target="_blank">
                Center to Find Drug Combinations that Reduce Side Effects</a>
              </li>
              <li>
                Center Website: <a href="http://dtoxs.org" target="_blank">dtoxs.org</a>
              </li>
            </ul>
            <h2>About</h2>
            <p>
              The Drug Toxicity Signature Generation Center is a Systems Pharmacology research
              center at the Icahn School of Medicine. The proteomics experiments for the center
              are conducted at the Center for Advanced Proteomics, Rutgers-New Jersey Medical
              School. The overall goal of DToxS is to use genomic and proteomic high-throughput
              measurements coupled with medium-throughput experimental measurement of protein
              states as the basis for computational analysis that integrates network analyses
              with structural constraints and dynamical models in multiple cell types to identify
              signatures that predict toxicity induced by individual drugs and mitigation of this
              toxicity by drug combinations. To anchor the signatures in observable human disease
              and therapeutics, we leverage the strategy employed in our recent study, in which
              we searched the FDA-Adverse Event Reporting System Database (FAERS) and found
              nearly thousands of drug combinations used in humans where a second drug mitigates
              serious toxicity associated with first drug. We hypothesize that we can use these
              observations to improve our capability to predict toxicity of drugs and mitigation
              by drug pairs.
            </p>
            <h2>Goals</h2>
            <ol>
              <li>
                Experimentally obtain expression patterns of mRNA, proteins and protein states
                (e.g. phosphorylation) for hundreds of individual drugs and two -drug combinations
                identified in the FAERS whereby the second drug mitigates serious toxicities
                induced by the first drug and shown in FAERS to cause one of three serious
                toxicities-cardiotoxicity; hepatic toxicity or peripheral neuropathy. We use
                primary or established human cell lines and cell types directly differentiated
                from human induced pluripotent cells (hIPSC) obtained from normal subjects. For
                each drug combination and the two constituent drugs we obtain mRNA, proteomic data,
                and dynamic protein state from multiple cell lines.
              </li>
              <li>
                Computationally we utilize the experimental data for multi-tier analyses that
                combines statistical and network models using the human interactome and Gene
                Ontology with structural model based filtering and dynamical multi-compartment
                ODE models to obtain sets of relational signatures for each drug combination.
                For this we combine the perturbagen induced changes in mRNA levels and protein
                levels to develop networks that will be constrained by structural modeling to
                identify new off-targets and dynamical models using the protein state data. From
                the subnetworks we infer pathways involved in toxicity and its mitigation, and the
                nodes in these pathways will be quantitatively weighted by global sensitivity
                analysis of the dynamical models to develop signatures grounded in mechanisms and
                cellular phenotypes inferred by
                the <Link to={`${dsgcRoute}/mep-lincs`}>
                MEP</Link> and <Link title="HMS LINCS Center" to={`${dsgcRoute}/hms-lincs`}>
                HMS</Link> LINCS Centers. This integrative approach generate sets of
                experimentally-observed (EOS), network-inferred (NIS) and dynamical model
                weighted (wEOS &amp; wNIS) signatures for both drug combinations and individual
                drugs at signatures per year from our Center’s experiments.
              </li>
              <li>
                We will extensively share our data and resources. We will provide the raw and
                processed data with annotations to
                the <Link title="BD2K-LINCS CIC" to="/centers/dcic">
                BD2K-LINCS Data Coordination and Integration Center</Link> for dissemination
                to the larger community. We will provide our hiPSC-derived cardiomyocytes,
                hepatocytes and neurons to all
                other <Link title="LINCS DSGCs" to={dsgcRoute}>
                LINCS centers</Link> for use in their assay systems and to the biomedical
                research community. We will develop computational models that integrate our
                toxicity data with those from other LINCS centers to develop molecular
                signature based efficacy to toxicity ratios that could be broadly useful
                in drug development. We will run web-based courses using Coursera for data
                utilization and development of signature–based research projects and conduct
                personalized workshops online to enable academic researchers to utilize our
                signatures to develop research projects that can compete for individual
                research grant funding.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
