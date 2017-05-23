import React from 'react';
import PageBanner from 'components/PageBanner';
import styles from './dmoa.scss';

export default () => (
  <div className={styles.wrapper}>
    <PageBanner
      title="LINCS Drugs Mechanisms of Action"
      subTitle={'Aggregated Analysis and Large-Scale Visualization' +
      'of Drug-Induced L1000 Transcriptomic Signatures'}
    />
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <iframe
            frameBorder="0"
            style={{
              width: '100%',
              padding: '1rem',
              minHeight: '50rem',
              marginTop: '1rem',
              marginBottom: '2rem',
            }}
            src="https://amp.pharm.mssm.edu/dmoa-embed1/"
          />
          <p>
            <b>Abstract:</b> As part of the NIH Library of Integrated Network-based
            Cellular Signatures (LINCS) program, the Broad Center for Transcriptomics
            has profiled the responses of human cell lines to over 20,000 small
            molecule compounds using the L1000 technology. This effort resulted
            in hundreds of thousands of transcriptomic signatures. Integrative
            analysis of aggregated collections of small molecule induced signatures
            generated across different cell lines, time points and dosages, can
            reveal the collective mode-of-actions (MoAs) for drugs and new compounds.
            Here we present a web application called the LINCS Drugs Mechanisms of
            Action (DMOA). LINCS-DMOA provides landing page reports for each profiled
            small molecule. The entire collection of reports covers 5,314 small
            molecules and 89,419 signatures. Each report is composed of a principal
            component analysis (PCA) plot of a collection of the same small molecule
            induced signatures, interactive clustergram visualizing of the
            differentially expressed genes (DEGs) before and after compound treatment,
            aggregated enrichment analyses from Enrichr of the differentially
            expressed genes, and results from querying the small molecule induced
            signatures with the L1000CDS2 tool. Metadata and external links for
            all compounds are provided at the top of each small molecule report
            page. In addition, an interactive visualization of 17,000 individual
            signatures is implemented. This Fireworks interactive display is
            using the JavaScript library three.js. The visualization allows users
            to color signatures in the Fireworks display by different attributes
            such as cell type or drug class. Furthermore, signature similarity
            search is implemented to enable users to search for similar or opposite
            signatures given their input signatures. Overall, LINCS DMOA will serve
            as a platform for drug MoA exploration which could enable drug discovery
            and drug repurposing. The prototype web-site is accessible at:&nbsp;
            <a href="http://amp.pharm.mssm.edu/dmoa/" target="_blank">
              http://amp.pharm.mssm.edu/dmoa/
            </a>.
          </p>
        </div>
      </div>
    </div>
  </div>
);
