import React from 'react';

import Story from './Story';
import styles from '../NewsView.scss';
import Collapsible from 'react-collapsible';

export default function Story20161207() {
  return (
    <Story
      title="BD2K-LINCS DCIC at the 2016 BD@K All-Hands Meeting and Open Data Science Symposium"
      date="December 7th, 2016"
    >
      <p>
        Members of the BD2K-LINCS Data Coordination and Integration Center
        participated in the BD2K All-Hands Meeting and Open Data Science
        Symposium in Bethesda, MD which took place on November 29 – December
        1, 2016. The BD2K All-Hands Meeting brought together researchers,
        educators, developers, and trainees funded by the BD2K Initiative.
        The goals of the All-Hands Meeting were to showcase the work being
        done by BD2K-sponsored programs and to build a cohesive BD2K consortium
        that maximizes synergies between participants.
      </p>
      <Collapsible trigger="Research Highlights">
        <ul>
          <li>
            <a href="http://doi.org/10.7490/f1000research.1113434.1" target="_blank">
              Predicting Adverse Cardiovascular Events for Tyrosine Kinase
              Inhibitors from Molecular Features
            </a> (Podium Presentation by Anders Dohlman)
          </li>

          <li>
            <a href="http://doi.org/10.1038/ncomms12846" target="_blank">
              Extraction and Analysis of Signatures from the Gene Expression
              Omnibus by the Crowd
            </a>
          </li>
        </ul>
      </Collapsible>

      <Collapsible trigger="Data Commons">
        <ul>
          <li>
            <a href="http://doi.org/10.6084/m9.figshare.4244216" target="_blank">
              FAIR Dataset Landing Pages, Digital Research Objects,
              and Software Tools for LINCS and BD2K
            </a>
          </li>

          <li>
            <a href="http://doi.org/10.7490/f1000research.1113424.1" target="_blank">
              Cloud-Based Drag-and-Drop Scalable RNA Sequencing Pipeline
            </a>
          </li>

          <li>
            <a href="http://doi.org/10.1093/database/baw100" target="_blank">
              The Harmonizome:  A Collection of Processed Datasets
              Gathered to Serve and Mine Knowledge about Genes
            </a>
          </li>

          <li>
            <a href="http://doi.org/10.7490/f1000research.1113423.1" target="_blank">
              RNA-Seq Pipeline Tutorial with an Example of Reprocessing
              Data from a Recent Zika Virus Study
            </a>
          </li>

          <li>
            <p>
              Deriving Signatures of Pharmacological Action via LINCS Signatures
            </p>
          </li>
        </ul>
      </Collapsible>

      <Collapsible trigger="Standards Development">
        <ul>
          <li>
            <a href="http://doi.org/10.6084/m9.figshare.4244180" target="_blank">
              Integrative Representation and Analysis of the LINCS Cell
              lines using the Cell Line Ontology
            </a>
          </li>
        </ul>
      </Collapsible>

      <Collapsible trigger="Training and Workforce Development">
        <ul>
          <li>
            <a href="http://doi.org/10.7490/f1000research.1113421.1" target="_blank">
              Community Training and Outreach Activities of the BD2K-LINCS DCIC
            </a>
          </li>
        </ul>
      </Collapsible>

      <Collapsible trigger="BioCADDIE and Resource indexing">
        <ul>
          <li>
            <a href="http://doi.org/10.6084/m9.figshare.4244210" target="_blank">
              The LINCS Data Portal and FAIR LINCS Dataset Landing Pages
            </a>
          </li>
        </ul>

        <ul>
          <li>
            <a href="http://doi.org/10.7490/f1000research.1113420.1" target="_blank">
              Datasets2Tools:
              Enriching DataMed with Canned Analyses
            </a>
            (Podium Presentation by Denis Torre)
          </li>
        </ul>
      </Collapsible>

      <Collapsible trigger="Software, Analysis, and Methods Development">
        <ul>
          <li>
            <a href="http://doi.org/10.6084/m9.figshare.4244408.v1" target="_blank">
              GRcalculator: An Online Tool for Calculating and Mining Drug Response Data
            </a>
          </li>

          <li>
            <a href="http://doi.org/10.7490/f1000research.1113430.1" target="_blank">
              Clustergrammer: Interactive Visualization and Analysis
              Tool for High-Dimensional Biological Data
            </a>
          </li>

          <li>
            <a href="http://doi.org/10.7490/f1000research.1113431.1" target="_blank">
              Dashboard Visualization and Tool Integration for Enrichr
            </a>
          </li>

          <li>
            <a href="http://doi.org/10.7490/f1000research.1113433.1" target="_blank">
            GEN3VA: Aggregation and Analysis of Gene Expression
            Signatures from Related Studies
            </a>
            (Podium Presentation by Avi Ma’ayan)
          </li>

          <li>
            <a href="http://doi.org/10.5281/zenodo.167645" target="_blank">
            Integrative LINCS (iLincs): Connecting Diseases, Drugs and Mechanisms of Actions
            </a>
          </li>

          <li>
            <p>
              NetLINCS:
              Correlation of Chemical Perturbagen and Signatures to Identify Biological Targets
            </p>
          </li>

          <li>
            <a href="http://doi.org/10.5281/zenodo.167644" target="_blank">
              Computational Tools and Resources for LINCS Proteomics Data
            </a>
          </li>

          <li>
            <a href="http://doi.org/10.7490/f1000research.1113436.1" target="_blank">
              KEGGlincs Design and Application:
              An R Package for Exploring Relationships in Biological Pathways
            </a>
          </li>

          <li>
            <a href="http://doi.org/10.6084/m9.figshare.4244204" target="_blank">
              Multitask Deep Neural Net Kinase Activity Profiler
            </a>
          </li>

        </ul>
      </Collapsible>

      <Collapsible trigger="Collaborative Presentations">
        <ul>
          <li>
            <a href="http://doi.org/10.6084/m9.figshare.4244213" target="_blank">
              FAIR LINCS Data and Metadata powered by the CEDAR Framework
            </a>
          </li>
        </ul>
      </Collapsible>

      <span className={styles['twitter-label']}>
        <a
          title="Follow @BD2KLINCSDCIC on Twitter"
          href="https://twitter.com/BD2KLINCSDCIC"
        >
          Follow <strong>@BD2KLINCSDCIC</strong>
        </a>
      </span>
    </Story>
  );
}
