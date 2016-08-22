import React from 'react';
import { Link } from 'react-router';
import PageBanner from 'components/PageBanner';
import styles from './AboutView.scss';

const dsgcRoute = '/centers/data-and-signature-generating-centers';

export default function AboutView() {
  return (
    <div className={styles.wrapper}>
      <PageBanner
        title="About"
        subTitle="Information about the LINCS Consortium, including common questions and answers"
      />
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-xl-9">
            <p>
              The LINCS project is based on the premise that disrupting any one of the many
              steps of a given biological process will cause related changes in the molecular
              and cellular characteristics, behavior, and/or function of the cell – the
              observable composite of which is known as the cellular phenotype. Observing
              how and when a cell’s phenotype is altered by specific stressors can provide
              clues about the underlying mechanisms involved in perturbation and, ultimately,
              disease.
            </p>
            <p>
              LINCS data are being made openly available as a community resource through a
              series of <a
                href="http://dev3.ccs.miami.edu:8080/datasets-beta/"
                target="_blank"
              >
                data releases
              </a>
              , so as to enable scientists to address a broad range
              of basic research questions and to facilitate the identification of biological
              targets for new disease therapies. LINCS datasets consist of assay results
              from cultured and primary human cells treated with bioactive small molecules,
              ligands such as growth factors and cytokines, or genetic perturbations. Many
              different assays are used to monitor cell responses, including assays measuring
              transcript and protein expression; cell phenotype data are captured by biochemical
              and imaging readouts. Assays are typically carried out on multiple cell types,
              and at multiple timepoints; perturbagen activity is monitored at multiple
              doses.
            </p>
            <p>
              The LINCS program is an <a href="http://commonfund.nih.gov/" target="_blank">
              NIH Common Fund</a> program and has been implemented in two phases.
              The pilot phase of the program was completed in FY 2013 and focused on the
              following activities:
            </p>
            <ul>
              <li>
                Large-scale production of perturbation-induced molecular and cellular signatures
              </li>
              <li>
                Creation of  databases, common data standards, and public user interfaces for
                accessing the data
              </li>
              <li>Computational tool development and integrative data analyses</li>
              <li>Development of new cost-effective molecular and cellular phenotypic assays</li>
              <li>Integration of existing datasets into LINCS</li>
            </ul>
            <p>
              Phase 2, which began in FY 2014, supports
              six <Link to={dsgcRoute}>
              LINCS Data and Signature Generation Centers</Link>. Phase 2 also
              synergizes with the efforts of the NIH Big Data to Knowledge
              (BD2K) program through the <Link to="/centers/dcic">
              BD2K-LINCS Data Coordination and Integration Center (DCIC)</Link>, which
              focuses on the following activities:
            </p>
            <ul>
              <li>Work with data/signature generators to ensure common annotation of data</li>
              <li>
                Coordinate data and signature accessibility across data generators so that data
                can be easily accessed
              </li>
              <li>
                Ensure that tools/algorithms can be found through the portal and that they are
                annotated
              </li>
              <li>Coordinate outreach activities across the LINCS consortium</li>
              <li>
                Develop and implement tools/approaches for integrative queries across multiple
                LINCS data/signature types
              </li>
            </ul>
            <h2 id="q-a">Q & A</h2>
            <ul>
              <li>
                <a href="#goal">What is the overall goal of this program?</a>
              </li>
              <li>
                <a href="#what-are-signatures">What are cellular signatures?</a>
              </li>
              <li>
                <a href="#assays">What assays are being run?</a>
              </li>
              <li>
                <a href="#perturbations">What perturbations are being used?</a>
              </li>
              <li>
                <a href="#timeline">Is there a timeline available for release of data?</a>
              </li>
              <li>
                <a href="#where-are-signatures">So where are the signatures?</a>
              </li>
              <li>
                <a href="#future-plans">What are your future plans?</a>
              </li>
              <li>
                <a href="#data-integration">
                  What data integration challenges are you taking on?
                </a>
              </li>
              <li>
                <a href="#collaborations">Any opportunities to collaborate?</a>
              </li>
            </ul>
            <h5 id="goal">What is the overall goal of this program?</h5>
            <ul>
              <li>
                LINCS is working to establish a new understanding of health and disease
                through an integrative approach that identifies patterns of common networks
                and cellular responses (called <em>cellular signatures</em>) across
                different types of tissues and cells in response to a broad range of
                perturbations.
              </li>
              <li>
                The underlying premise of the LINCS program is that disrupting any one
                of the many steps of a given biological process will cause related changes
                in the molecular and cellular characteristics, behavior, and/or function
                of the cell – also known as the <em>cellular phenotype</em>. A cellular phenotype,
                in turn, can be reflected by signatures derived from comparable assays of
                clinical states. Observing how and when a cell phenotype is altered by
                specific stressors can provide clues about the mechanisms involved in
                perturbation and, ultimately, disease.
              </li>
            </ul>
            <h5 id="what-are-signatures">What are cellular signatures?</h5>
            <ul>
              <li>
                A cellular signature of a perturbagen response is the set of reduced
                dimensionality descriptors of the underlying data that provide insight
                into mechanism and serve as predictors. Therefore, meaningful signatures
                are dependent on the assay, and on how diverse assays are integrated
                together, either into predictive patterns or signaling networks that
                could lead to mechanistic interpretations.
              </li>
              <li>
                To develop meaningful signatures, data from diverse assays must be scaled and
                normalized. Integration, normalization, and scaling of heterogeneous,
                multi-parameter dose-response data is a non-trivial task involving
                conceptual and practical hurdles.
              </li>
            </ul>
            <h5 id="assays">What assays are being run?</h5>
            <ul>
              <li>
                <span>
                  The program has six <Link to={dsgcRoute}>
                  Data and Signature Generation Centers</Link>: Drug Toxicity Signature Generation
                  Center, HMS LINCS Center, LINCS Center for Transcriptomics, LINCS Proteomic
                  Characterization Center for Signaling and Epigenetics, MEP LINCS Center,
                  and NeuroLINCS Center.
                </span>
                <ul>
                  <li>
                    The <Link to={`${dsgcRoute}/dtoxs`}>
                    Drug Toxicity Signature Generation Center’s</Link> assays monitor gene and
                    protein expression, as well as phenotype assays that are applied to
                    understand the response of differentiated iPSCs to single and combinations
                    of FDA-approved drug perturbations.
                  </li>
                  <li>
                    The <Link to={`${dsgcRoute}/hms-lincs`}>HMS LINCS Center</Link> monitors
                    cell responses using multiple biochemical, imaging and cell biological
                    assays. They range from direct assays of drug-kinase interaction in cell
                    extracts, to multiplex biochemical assays of cell signaling proteins, to
                    imaging assays, to assays of transcriptional response (in collaboration with
                    the <Link to={`${dsgcRoute}/lincs-transcriptomics`}>
                    LINCS Center for Transcriptomics</Link>) and cell viability assays. More
                    details about HMS LINCS Center assays can be
                    found <a href="http://lincs.hms.harvard.edu/resources/assays/" target="_blank">
                    here</a>.
                  </li>
                  <li>
                    The <Link to={`${dsgcRoute}/lincs-transcriptomics`}>
                    LINCS Center for Transcriptomics</Link> uses
                    the <a href="http://www.lincscloud.org/l1000/" target="_blank">
                    L1000 assay</a> which is a gene-expression profiling assay based on the
                    direct measurement of a reduced representation of the transcriptome and
                    computational inference of the portion of the transcriptome not explicitly
                    measured. Measurements are (a) of endogenous mRNA (i.e. not reporter-based
                    system); (b) from treated whole cell lysates. The current detection method
                    is by optically-addressed microspheres-based Luminex system.
                  </li>
                  <li>
                    The <Link to={`${dsgcRoute}/lincs-pccse`}>LINCS Proteomic Characterization
                    Center for Signaling and Epigenetics</Link> performs
                    two assays: P100 reduced representation phosphoprofiling (3 hour time point)
                    and GCP global chromatin profiling (24 hour time point).
                    The P100 assay is
                    a mass spectrometry-based targeted proteomics assay that detects and
                    quantifies a representative set of ~100 phosphopeptide probes that are
                    present in a wide range of cell types and have been demonstrated to be
                    modulated via perturbations. The Global Chromatin Profiling assay is a
                    mass spectrometry-based targeted proteomics assay that detects and quantifies
                    an extensive set of chromatin modifications (specifically, post-translational
                    modifications on histone proteins).
                  </li>
                  <li>
                    The <Link to={`${dsgcRoute}/mep-lincs`}>MEP LINCS Center’s</Link> assays
                    start with a novel assay that images cancer cell lines placed in a
                    micro-environment array. Selected conditions are then followed with
                    transcriptomics (L1000) and proteomics assays.
                  </li>
                  <li>
                    The <Link to={`${dsgcRoute}/neurolincs`}>NeuroLINCS Center</Link> is
                    focused on studying the properties of iPSCs derived from normal, familial
                    and sporadic ALS patients. These cells are differentiated into motor
                    neurons and assayed using targeted proteomics, transcriptomics (RNA-seq),
                    and imaging assays.
                  </li>
                </ul>
              </li>
            </ul>
            <h5 id="perturbations">What perturbations are being used?</h5>
            <ul>
              <li>
                The program uses small molecules, ligands, micro-environments, CRISPR gene
                over-expression and knockdown perturbations.
              </li>
              <li>
                <span>
                  Each data and signature generation center has its own set of perturbations
                  and they are determined primarily by the assay technology being used to
                  determine response.
                </span>
                <ul>
                  <li>
                    The <Link to={`${dsgcRoute}/dtoxs`}>
                    Drug Toxicity Signature Generation Center’s</Link> perturbations are FDA
                    -approved drugs applied individually or in combinations.
                  </li>
                  <li>
                    The <Link to={`${dsgcRoute}/hms-lincs`}>HMS LINCS Center</Link> currently
                    focuses on two types of perturbagens, small-molecule protein kinase
                    inhibitors and naturally occurring growth factors, cytokines and
                    chemokines in various combinations. Complete information about all
                    perturbagens used at HMS LINCS can be found in
                    the <a href="http://lincs.hms.harvard.edu/db/" target="_blank">
                    HMS LINCS Database</a>.
                  </li>
                  <li>
                    The <Link to={`${dsgcRoute}/lincs-transcriptomics`}>
                    LINCS Center for Transcriptomics</Link> and
                    the <Link to={`${dsgcRoute}/lincs-pccse`}>LINCS Proteomic Characterization
                    Center for Signaling and Epigenetics</Link> profile over 20,000
                    small molecules and 5,000 human genes.
                    See <a href="http://lincscloud.org/" target="_blank">lincscloud.org</a> for
                    more details.
                  </li>
                  <li>
                    The <Link to={`${dsgcRoute}/mep-lincs`}>MEP LINCS Center’s</Link> perturbations
                    are over 3,000 unique micro-environment conditions where an extracellular
                    matrix protein is combined with an extracellular ligand to define a
                    unique condition.
                  </li>
                  <li>
                    The <Link to={`${dsgcRoute}/neurolincs`}>
                    NeuroLINCS Center's</Link> perturbations involve the disease ALS motor
                    neuron cells compared with cells from subjects that do not have the disease.
                  </li>
                </ul>
              </li>
            </ul>
            <h5 id="timeline">Is there a timeline available for release of data?</h5>
            <ul>
              <li>
                New releases of data will become available every quarter, and the release
                schedule is summarized
                <a
                  href="http://dev3.ccs.miami.edu:8080/datasets-beta/"
                  target="_blank"
                >
                  here
                </a>.
              </li>
              <li>
                Metadata annotations of LINCS data will be available along with each data
                release. We are working diligently to include sufficient metadata with
                each release of data.
              </li>
              <li>
                In addition to the data generated by the LINCS Data and Signature Generation
                Centers, the <Link to="/centers/dcic">
                BD2K-LINCS Data Coordination and Integration Center</Link> is extracting
                signatures from the public domain, and these can be
                accessed <a href="http://amp.pharm.mssm.edu/Enrichr/#stats" target="_blank">
                here</a>. APIs, attribute tables, and metadata are expected to be provided
                soon.
              </li>
            </ul>
            <h5 id="where-are-signatures">So where are the signatures?</h5>
            <ul>
              <li>
                The signatures are available via multiple methods: (a) APIs to
                programmatically search and download the signatures;
                (b) <Link to="/applications">Tools</Link> that display the signatures and
                provide integrative analyses.
              </li>
            </ul>
            <h5 id="future-plans">What are your future plans?</h5>
            <ul>
              <li>
                In the coming months you will see more user interfaces to query LINCS data
                and signatures, and publications demonstrating the utility of the LINCS approach.
              </li>
              <li>
                We are also focusing on generating data in primary cells and iPS cells,
                and data pertaining to these will be available soon.
              </li>
            </ul>
            <h5 id="data-integration">What data integration challenges are you taking on?</h5>
            <ul>
              <li>
                Data is being collected via a joint project called the “Dense Cube”
                between all the data and signature generation centers. This project
                will focus on five common cell lines to explore the relationships between
                immediate early cell signaling events, transcription, and phenotypes. This
                will constitute the largest such public dataset, generated in a coherent
                manner, available for download and querying.
              </li>
              <li>
                One of the most significant challenges we have is to establish standards for
                metadata for all LINCS perturbations, assays, and experiments. We want
                to annotate these consistently, and to make them widely available
                so that outside groups can perform their own analysis and develop better
                methods to extract signatures from the LINCS data.
              </li>
            </ul>
            <h5 id="collaborations">Any opportunities to collaborate?</h5>
            <ul>
              <li>
                <Link to="/community/funding-opportunities">
                Funding opportunities</Link> often exist to enable collaborations
                with the BD2K-LINCS DCIC and the LINCS Data and Signature Generation Centers.
              </li>
              <li>
                There are also <Link to="/community/webinars">
                LINCS Data Science Research Webinars</Link> that can be used to learn
                about the various LINCS datasets and research projects.
              </li>
              <li>
                Details about outreach opportunities related to LINCS can be found
                in the <Link to="/community">Community</Link> section of this website.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
