import React, { Component } from 'react';
import { Link } from 'react-router';

import PageBanner from 'components/PageBanner';
import PageNav from 'components/PageNav';
import styles from './DSGCs.scss';

const dsgcRoute = '/centers/data-and-signature-generating-centers';

// TODO: Make a stateless function once completed. Leave for now to enable hot-reloading.
/* eslint react/prefer-stateless-function:0 max-len:0 */
export default class DSGCs extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <PageBanner
          title="DSGCs"
          subTitle="The LINCS centers responsible for the generation of raw data and signatures."
        />
        <div className="container">
          <div className="row">
            <PageNav mainPage="Data and Signature Generation Centers" subPage="Introduction" />
            <div className="col-md-9 col-md-pull-3">
              <div className={`${styles.content} dsgcs`}>
                <h1 className={styles.title}>Introduction</h1>
                <div className="entry">
                  <p className={styles.intro}>
                    Building on a successful pilot project, the National Institutes of Health has
                    awarded grants to six research institutions to establish centers,
                    collectively called the Data and Signature Generation Centers. The National
                    Human Genome Research Institute (NHGRI) and the National Heart, Lung, and
                    Blood Institute (NHLBI), both part of NIH, administer the program on
                    behalf of the <a title="NIH Common Fund" href="https://commonfund.nih.gov/" target="_blank">NIH Common Fund</a>.
                  </p>
                  <div className={styles['center-info']}>
                    <div className={styles.header}>
                      <h5>
                        Drug Toxicity Signature Generation Center
                      </h5>
                      <p>Icahn School of Medicine at Mount Sinai</p>
                      <a href="http://dtoxs.org">Visit Center website</a>
                    </div>
                    <p>
                      The Drug Toxicity Signature Generation Center aims to develop cell signatures
                      that will predict adverse events that might be caused by drugs and will
                      identify other drugs that might lessen these side effects. The center will
                      leverage the U.S. Food and Drug Administration’s (FDA) Adverse Event
                      Reporting System database to identify drugs that produce adverse events in
                      heart, liver and neuronal function, and to search for drugs that may mitigate
                      these events. <Link title="DToxS" to={`${dsgcRoute}/dtoxs`}>Learn More</Link>
                    </p>
                  </div>
                  <div className={styles['center-info']}>
                    <div className={styles.header}>
                      <h5>
                        HMS LINCS Center
                      </h5>
                      <p>Harvard Medical School</p>
                      <a href="http://lincs.hms.harvard.edu">Visit Center website</a>
                    </div>
                    <p>
                      The HMS LINCS Center develops new measurement methods and computer
                      algorithms to detect and analyze perturbations induced by therapeutic drugs
                      in healthy and diseased human cells. <Link title="HMS LINCS Center" to={`${dsgcRoute}/hms-lincs`}>Learn More</Link>
                    </p>
                  </div>
                  <div className={styles['center-info']}>
                    <div className={styles.header}>
                      <h5>
                        LINCS Center for Transcriptomics
                      </h5>
                      <p>Broad Institute</p>
                      <a href="http://www.lincscloud.org">Visit Center website</a>
                    </div>
                    <p>
                      The LINCS Center for Transcriptomics is studying up to 50 cell types
                      perturbed by a large number of chemical compounds and genetic reagents that
                      activate or deactivate genes. Each perturbation will produce about 1,000
                      gene-expression readouts. By the project’s end, the center expects to have
                      generated more than 1 million profiles of how genes are expressed in
                      different cells. <Link title="LINCS Center for Transcriptomics" to={`${dsgcRoute}/lincs-transcriptomics`}>Learn More</Link>
                    </p>
                  </div>
                  <div className={styles['center-info']}>
                    <div className={styles.header}>
                      <h5>
                        LINCS Proteomic Characterization Center for Signaling and Epigenetics
                      </h5>
                      <p>Broad Institute</p>
                      <a href="https://panoramaweb.org/labkey/project/LINCS/begin.view">Resource</a>
                    </div>
                    <p>
                      The LINCS Proteomic Characterization Center for Signaling and Epigenetics
                      studies cell disruption at the most basic levels: phosphorylation-mediated
                      signaling — that is, how cells communicate internally; and epigenetics, or
                      how cells perpetuate non-genetic information as they grow. <Link title="LINCS Proteomic Characterization Center for Signaling and Epigenetics" to={`${dsgcRoute}/lincs-pccse`}>Learn More</Link>
                    </p>
                  </div>
                  <div className={styles['center-info']}>
                    <div className={styles.header}>
                      <h5>
                        Microenvironment Perturbagen (MEP) LINCS Center
                      </h5>
                      <p>Oregon Health and Science University</p>
                      <a href="https://www.synapse.org/#!Synapse:syn2862345/wiki/72486">Resource</a>
                    </div>
                    <p>
                      The MEP LINCS Center studies how both malignant and non-malignant cells are
                      controlled by the microenvironments in which they live. The researchers will
                      provide measurements of the impacts of thousands of different
                      microenvironments on cellular phenotypes, protein make-up and gene
                      expression readouts in cell lines. <Link title="MEP LINCS Center" to={`${dsgcRoute}/mep-lincs`}>Learn More</Link>
                    </p>
                  </div>
                  <div className={styles['center-info']}>
                    <div className={styles.header}>
                      <h5>
                        NeuroLINCS Center
                      </h5>
                      <p>University of California, Irvine</p>
                      <a href="http://www.neurolincs.org">Visit Center website</a>
                    </div>
                    <p>
                      The NeuroLINCS Center concentrates on human brain cells, which are far less
                      understood than other cells in the body. The researchers believe it will be
                      necessary to study these cell types directly to understand the causes of
                      neurological disease and to develop new therapies. By applying LINCS-type
                      perturbations to studying an array of human brain cells, the researchers
                      hope to identify targets for developing drugs against neurodegenerative
                      diseases such as Parkinson’s disease, amyotrophic lateral sclerosis (ALS,
                      also known as Lou Gehrig’s disease), spinal muscular atrophy and
                      Huntington’s disease. <Link title="NeuroLINCS Center" to={`${dsgcRoute}/neurolincs`}>Learn More</Link>
                    </p>
                  </div>
                  <p>
                    <em>Press Release: </em>
                    <a href="http://www.nih.gov/news/health/sep2014/nhgri-11.htm">
                      NIH awards aim to improve understanding of cell pathways, development of new
                      therapies
                    </a>
                  </p>
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
