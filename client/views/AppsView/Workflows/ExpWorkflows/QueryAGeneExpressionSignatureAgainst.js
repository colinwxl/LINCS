import React, { Component } from 'react';

import styles from '../Workflow.scss';
import PageNav from 'components/PageNav';
import PageBanner from 'components/PageBanner';
import l1000QueryImg from '../images/l1000-query-process.png';
import l1000cds2InputImg from '../images/l1000cds2-input-box.png';
import l1000cds2ResultImg from '../images/l1000cds2-result-table.png';
import l1000cds2EnrichrImg from '../images/l1000cds2-enrichr.png';

export default class Workflow extends Component {

  static subTitle = 'Query a gene expression signature against the LINCS L1000 data'
  static path = 'query-a-gene-expression-signature-against-the-lincs-11000-data'

  render() {
    return (
      <div className={styles.wrapper}>
        <PageBanner
          title="LINCS Workflow"
          subTitle={this.constructor.subTitle}
        />
        <div className="container">
          <div className="row">
            <PageNav
              mainPage="Experimentalist Workflow"
              subPage={this.constructor.subTitle}
              isWorkflowPage
            />
            <div className={`col-md-9 col-md-pull-3 ${styles.workflow} ${styles['query-l1000']}`}>
              <p>
                The LINCS L1000 dataset is a comprehensive resource for gene expression
                changes observed in human cell lines perturbed with small molecules and
                genetic constructs. The L1000 experiments systematically measure the
                changes in gene expression after:
              </p>
              <ul>
                <li>Small-molecule exposure</li>
                <li>Gene knockdown by RNAi </li>
                <li>Gene overexpression</li>
              </ul>
              <p>
                Gene expression signatures from your experiments can be queried against
                the L1000 dataset to find experimental conditions that have similar patterns
                of differential expression. The result of the analysis is a ranked table of
                experimental conditions which have the highest matching score. In this way,
                the experimental conditions of the matches could inform about the nature of
                your input signature, addressing questions such as: are there gene knockout
                experiments that results in similar signatures? Are there small-molecule
                compounds which causes similar signatures? And if so, in which cell lines
                do these signatures occur?
              </p>
              <div className="row">
                <div className="col-xs-10 col-xs-offset-1 text-xs-center">
                  <img src={l1000QueryImg} alt="L1000 Query Process" />
                </div>
              </div>
              <p>
                There are two types of gene expression signatures: numerical signatures,
                such as a z-score or a p-value for each gene, and alternative unordered
                sets of up- and down-regulated genes. In both cases, the L1000 library of
                signatures can in principle be queried. There are 2 web-based tools enabling
                such queries, namely the L1000CDS<sup>2</sup> and the lincscloud CLUE query tool.
              </p>
              <h4>Querying signatures with L1000CDS<sup>2</sup></h4>
              <p>
                The L1000CDS<sup>2</sup> (<a href="http://amp.pharm.mssm.edu/L1000CDS2" target="_blank">
                http://amp.pharm.mssm.edu/L1000CDS2</a>) tool developed by the BD2K-LINCS DCIC
                can be used to search a subset of the L1000 data consisting of 20,000
                small-molecule perturbations across cell lines MCF7, VCAP, PC3, HA1E,
                A375, and A549. After you have determined the input up- and down-regulated
                genes of your gene expression signature, copy-paste the gene symbols into
                the L1000CDS<sup>2</sup> web-interface for analysis as shown below:
              </p>
              <div className="row">
                <div className="col-xs-8 col-xs-offset-2 text-xs-center">
                  <img src={l1000cds2InputImg} alt="L1000CDS2 Input" />
                </div>
              </div>
              <p>
                In the results table shown below, each row represents an experimental
                condition describing the matching cell line, small-molecule perturbation,
                dosage, and timing. The matched gene expression signatures can be downloaded
                as a .json files for subsequent analysis, the overlapping up and down genes
                with the signatures can be submitted for enrichment analysis
                with <a href="http://amp.pharm.mssm.edu/Enrichr" target="_blank">Enrichr</a>,
                and more information about the small molecules can be found
                on <a href="http://life.ccs.miami.edu/" target="_blank">
                LIFE</a>, <a href="https://pubchem.ncbi.nlm.nih.gov/" target="_blank">
                PubChem</a> and <a href="http://www.drugbank.ca/" target="_blank">DrugBank</a>.
              </p>
              <div className="row">
                <div className="col-xs-10 col-xs-offset-1 text-xs-center">
                  <img src={l1000cds2ResultImg} alt="L1000CDS2 Results" />
                </div>
              </div>
              <p>
                By clicking the "Overlap" button, the overlapping genes between your query
                signature and the L1000 matches are shown. The overlapping genes can
                then be analyzed for gene set enrichment by clicking
                the <a href="http://amp.pharm.mssm.edu/Enrichr/" target="_blank">Enrichr</a> link.
              </p>
              <div className="row">
                <div className="col-xs-8 col-xs-offset-2 text-xs-center">
                  <img src={l1000cds2EnrichrImg} alt="L1000CDS2 & Enrichr" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
