import React, { Component } from 'react';

import PageBanner from 'components/PageBanner';
import PageNav from 'components/PageNav';
import styles from './PhaseOne.scss';

// TODO: Make a stateless function once completed. Leave for now to enable hot-reloading.
/* eslint react/prefer-stateless-function:0 max-len:0 */
export default class PhaseOne extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <PageBanner
          title="LINCS Phase One"
          subTitle="The initial phase of the LINCS program, completed in fiscal year 2013."
        />
        <div className="container">
          <div className="row">
            <PageNav mainPage="Pilot Phase I Centers" />
            <div className="col-md-9 col-md-pull-3">
              <p>
                The pilot phase of the program was completed in fiscal year 2013 and focused on
                the following activities:
              </p>
              <ul>
              <li>
                Large-scale production of perturbation-induced molecular and cellular signatures
              </li>
              <li>
                Creation of a database, common data standards and public user interface for
                accessing the data
              </li>
              <li>Computational tool development and integrative data analyses</li>
              <li>Development of new cost-effective, molecular and cellular phenotypic assays</li>
              <li>Integration of existing datasets into LINCS</li>
              </ul>
              <p>
                The LINCS pilot phase was composed of 10 centers: two data production/analysis
                centers, that generate data for the LINCS matrix, four centers dedicated to
                developing technology to complement and facilitate the collection of cellular
                signatures, and four centers that are developing computational tools for
                analyzing the data produced by the data production centers. In addition, two
                external supplements, as well as a number of internal collaborations, support and
                augment the work done by the LINCS centers.
              </p>
              <h2>LINCS Pilot Phase Data Production and Analysis Centers (U54)</h2>
              <p>
                The LINCS Data Production and Analysis program consisted of two research centers,
                one at Harvard Medical School and the other at the Broad Institute. These centers
                focused on high-throughput experiments that examine the changes that occur when a
                variety of different cell lines are exposed to perturbations.
              </p>
              <ul>
              <li>
                At <a href="http://lincs.hms.harvard.edu/" target="_blank">Harvard Medical School</a>,
                LINCS researchers aimed to create signatures that measure the responses to
                therapeutic drugs of cells derived from different human tissues. The perturbing agents they focused on are small molecule kinase inhibitors, which are a leading class of therapeutic agents for treatment of cancer, autoimmune and other diseases.</li>
              <li>
                At the Broad Institute, LINCS researchers concentrated on cataloging the cellular
                consequences of diverse small-molecule and genetic perturbations in a breadth of
                human cell lines.
              </li>
              <li>
                There was also a joint Broad-HMS collaboration project, in which the two data
                production centers worked together to ensure that the data they generated is
                consistent and will be able to be meaningfully integrated. Through this
                collaboration, the Broad Institute carried out expression profiling on a subset
                of the HMS perturbation studies.
              </li>
              </ul>
              <h2>LINCS Pilot Phase Technology Development (U01)</h2>
              <p>
                The Technology Development program focused on developing and substantially
                adapting technologies and methodologies to significantly improve the
                functionality, quality, scope, and/or throughput of perturbation-induced cellular
                signature data generation. These technologies should accelerate the rate of data
                generation and the range of signatures that can be identified and characterized
                by large scale high-throughput perturbation-induced signature collection efforts
                like LINCS. There were four LINCS technology awards: Arizona State University,
                the Broad Institute, Columbia University, and Yale University.
              </p>
              <h2>LINCS Pilot Phase Computational Tools (U01)</h2>
              <p>
                The Computational Tools program focused on developing ways to integrate, analyze,
                and utilize the data generated by the Data Production Centers. The four LINCS
                computational awardees were the University of Cincinnati, Columbia University,
                Methodist Hospital Research Institute, and the University of Miami.
              </p>
              <h2>LINCS Pilot Phase External Collaborations</h2>
              <p>
                There were two external collaborations that supported the LINCS program, one
                between Dr. Vamsi Mootha and the HMS LINCS Center and one between Dr. Evan Snyder
                and the HMS LINCS Center. The Mootha project focused on applying cell and
                protein-based profiling methods to characterize the changes in cell signaling
                networks that result from mutations in components of the oxidative
                phosphorylation (OXPHOS) pathway. The Snyder project focused on patient-derived
                induced pluripotent stem (iPS) cells to study signaling pathways that might be
                relevant to neuropsychopathology.
              </p>
              <h2>LINCS Pilot Phase Internal Collaborations</h2>
              <p>
                LINCS internal collaborations facilitated cooperation and partnerships between
                LINCS centers that advance the overall goals of the LINCS project.
              </p>
              <ul>
                <li>
                  HMS-Broad: Interactive Web Content for Integrated Analysis of LINCS Joint Project
                  <br />
                  <em>Creation of non-expert dynamic web tools for analysis of combined LINCS data
                  (biochemical and cell-based data from HMS Center and gene expression data from the
                  Broad Center)</em>
                </li>
                <li>
                  HMS-Miami: Development of a Unified LINCS Data Portal
                  <br />
                  <em>Pilot project to develop an easy-to-use user interface (UI) to directly
                  query and explore a small slice of LINCS data; this project will inform best
                  practices for curation of LINCS data and set the stage for development of a
                  distributed data management system (portal).</em>
                </li>
                <li>
                  Columbia-Columbia: A Systems Approach to Elucidate Mechanisms of Drug Activity
                  and Sensitivity
                  <br />
                  <em>Develop software to allow expert users to query the Columbia LINCS Center
                  data, and probe for synergistic effects of drug-pairs in a number of different
                  cancer cell lines; this will aid in the elucidation of mechanisms of drug
                  activity and sensitivity.</em>
                </li>
                <li>
                  Broad-HMS: Prototyping a Cloud-based Solution to Enhance Access to LINCS
                  Datasets
                  <br />
                  <em>Making raw and analyzed LINCS data freely accessible to the broader
                  scientific community via hosting on the Amazon Web Services (cloud).</em>
                </li>
                <li>
                  Methodist-Miami: A Pan-LINCS Data Warehouse-based Supply Chain Landscape Model
                  <br />
                  <em>Enable more comprehensive data integration and novel types of queries to
                  interrogate LINCS data.</em>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
