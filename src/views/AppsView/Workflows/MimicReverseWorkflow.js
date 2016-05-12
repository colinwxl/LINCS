import React from 'react';

import styles from './Workflow.scss';
import PageBanner from 'components/PageBanner';
// Images
import lcQueryToolImg from './lc-query-tool.png';
import lcResultsScreenshot from './lc-results-screenshot.png';
import l1000cds2QueryImg from './l1000cds2-query.png';
import l1000cds2ResultsImg from './l1000cds2-results.png';
import l1000cds2ClustImg from './l1000cds2-clust.png';
import g2eMarketplaceImg from './g2e-marketplace.png';
import g2eSelectionImg from './g2e-selection.png';
import g2eFormImg from './g2e-form.png';
import g2eResultsImg from './g2e-results.png';

export default function Workflow() {
  return (
    <div className={styles.wrapper}>
      <PageBanner
        title="LINCS Workflow"
        subTitle="Finding novel compounds that mimic or reverse a disease signature"
      />
      <div className="container">
        <div className="row">
          <div className={`col-xl-9 ${styles.workflow} ${styles.mimic}`}>
            <p>
              The Broad Transcriptomics Center within LINCS collected gene expression data
              from human cells treated with thousands of chemical and biological perturbagens
              using the L1000 technology. This large dataset was processed into signatures:
              lists of up and down genes, or vectors of differentially expressed genes. This
              resource of molecular gene expression signatures can be used to find perturbagens
              that mimic or reverse your own gene expression signature, or any external
              signature you might be interested in studying.
            </p>
            <p>
              For example, a disease gene expression signature can be defined as the
              differentially regulated genes that characterize a disease by comparing
              normal tissue to diseased tissue. With LINCS data you can search for compounds
              that can either reverse or mimic the disease signature. The top ranked compounds
              may have therapeutic potential. There are currently two web-apps that can be
              used to perform this type of query.
            </p>
            <h4>The lincscloud Query Tool</h4>
            <p>
              The lincscloud web-site at <a href="http://apps.lincscloud.org/" target="_blank">
              http://apps.lincscloud.org/</a> has a query tool that enables users to find
              perturbagens (e.g. compounds or RNAi knockouts) that mimic or reverse their
              input signature. The query tool can be accessed after logging in
              at <a href="http://apps.lincscloud.org/query" target="_blank">
              http://apps.lincscloud.org/query</a>
            </p>
            <div className="row">
              <div className="col-xs-12 col-md-10 col-md-offset-1">
                <img src={lcQueryToolImg} alt="lincscloud Query Tool" />
              </div>
            </div>
            <p>
              The query page takes as input lists of up- and down-regulated genes. After
              submitting your gene signature to the query tool you will be given a link to
              your results page. The results page shows the top compounds, knockdowns, and
              overexpression perturbations that match your signature input.
            </p>
            <div className="row">
              <div className="col-xs-12 col-md-10 col-md-offset-1">
                <img src={lcResultsScreenshot} alt="lincscloud Results Page" />
              </div>
            </div>
            <h4>L1000 Characteristic Direction Signature Search Engine (L1000CDS<sup>2</sup>)</h4>
            <p>
              The <a href="http://lincs-dcic.org" target="_blank">BD2K-LINCS DCIC</a> has
              developed an alternative L1000 query tool. This tool enables users to search
              only a subset of the L1000 small molecules data. The tool underlying database
              computes signatures differently. It uses
              the <a href="http://maayanlab.net/CD" target="_blank">
              Characteristic Direction (CD)</a> method to select significant perturbations
              as well as prioritize differentially expressed genes. The CD processed L1000
              signatures are served through a state-of-the-art web-based search engine
              application called L1000CDS<sup>2</sup>
              (<a href="http://amp.pharm.mssm.edu/L1000CDS2" target="_blank">
                http://amp.pharm.mssm.edu/L1000CDS<sup>2</sup></a>). The
              L1000CDS<sup>2</sup> search engine provides prioritization
              of thousands of small molecule signatures, and their pairwise combinations,
              predicted to either mimic or reverse an input gene expression signature using
              two methods. The L1000CDS<sup>2</sup> search engine also predicts drug targets for
              all the small molecules profiled by the L1000 assay that were processed. Targets
              are predicted by computing the cosine similarity between the L1000 small
              molecules signatures and a large collection of signatures extracted from the
              gene expression omnibus (GEO) for single gene perturbations in mammalian cells.
            </p>
            <p>
              The L1000CDS<sup>2</sup> homepage is shown below. A user can input their disease
              gene signatures as a weighted list of genes (not shown) or separate up and down
              genes (shown on the left).
            </p>
            <div className="row">
              <div className="col-xs-12 col-md-10 col-md-offset-1">
                <img src={l1000cds2QueryImg} alt="L1000CDS2 Query Page" />
              </div>
            </div>
            <p>
              The default is to search for perturbagens that reverse the user’s signature.
              Clicking the search button directs the user to their results page.
            </p>
            <div className="row">
              <div className="col-xs-12 col-md-10 col-md-offset-1">
                <img src={l1000cds2ResultsImg} alt="L1000CDS2 Results Page" />
              </div>
            </div>
            <p>
              The results page shows the user the top perturbagens that reverse their
              input disease signature. The user can also identify which genes are affected
              by the perturbation using the overlap button or by viewing a clustergram of
              their results, shown below:
            </p>
            <div className="row">
              <div className="col-xs-12 col-md-10 col-md-offset-1">
                <img src={l1000cds2ClustImg} alt="L1000CDS2 Clustergram" />
              </div>
            </div>
            <p>
              The clustergram view shows the user’s input disease signature as rows,
              perturbagens as columns and the effect of a perturbagen on a gene’s
              expression: red/blue squares indicate increased/decreased expression.
            </p>
            <p>
              L1000CDS<sup>2</sup> enables users to easily identify perturbagens that mimic or
              reverse their disease signature of interest using LINCS L1000 data. For more
              information please view the help documentation
              at <a href="http://amp.pharm.mssm.edu/L1000CDS2/help/" target="_blank">
              http://amp.pharm.mssm.edu/L1000CDS2/help/</a>.
            </p>
            <h4>Generating disease signatures from GEO</h4>
            <p>
              The <a href="http://lincs-dcic.org" target="_blank">BD2K-LINCS DCIC</a> developed
              a tool that allows users to create their own disease signatures. Using GEO2Enrichr,
              (<a href="http://amp.pharm.mssm.edu/g2e" target="_blank">
              http://amp.pharm.mssm.edu/g2e</a>) and GEO (Gene Expression
              Omnibus <a href="http://www.ncbi.nlm.nih.gov/geo" target="_blank">
              http://www.ncbi.nlm.nih.gov/geo</a>), a user can find gene expression data from a
              disease of interest, compute a signature and then submit it to the lincscloud
              query tool or to L1000CDS<sup>2</sup> for drugs/small-molecules.
            </p>
            <p>
              Start by following the installation instructions of GEO2Enrichr and install
              the browser extension as shown below for Chrome.
            </p>
            <div className="row">
              <div className="col-xs-12 col-md-10 col-md-offset-1">
                <img src={g2eMarketplaceImg} alt="G2E on the Google Play Store" />
              </div>
            </div>
            <p>
              After installing the browser extension, a user can perform a search for a
              disease on GEO and identify a study of interest as shown below for Huntington’s
              disease KO mouse model:
            </p>
            <div className="row">
              <div className="col-xs-12 col-md-10 col-md-offset-1">
                <img src={g2eSelectionImg} alt="Selecting Samples with G2E" />
              </div>
            </div>
            <p>
              After selecting the control and experimental samples and pressing the
              GEO2Enrichr button you will be shown a submission page.
            </p>
            <div className="row">
              <div className="col-xs-12 col-md-10 col-md-offset-1">
                <img src={g2eFormImg} alt="G2E Submission Form" />
              </div>
            </div>
            <p>
              Here you can add meta-data and choose your analysis parameters (e.g.
              differential expression method) and submit your data for analysis. When the
              analysis has finished you can open your results tab (shown below) to download
              your disease signature or perform more analyses.
            </p>
            <div className="row">
              <div className="col-xs-12 col-md-8 col-md-offset-2">
                <img src={g2eResultsImg} alt="G2E Results Page" />
              </div>
            </div>
            <p>
              You can now download the up and down genes and submit them to the lincscloud
              Query Tool or simply click on the L1000CDS<sup>2</sup> icon to open the results
              from the L1000CDS<sup>2</sup> analysis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
