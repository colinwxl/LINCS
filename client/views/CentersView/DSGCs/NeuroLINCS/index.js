import React from 'react';
import { Link } from 'react-router';

import PageBanner from 'components/PageBanner';
import PageNav from 'components/PageNav';
import styles from '../DSGCs.scss';

export default function NeuroLINCS() {
  return (
    <div className={styles.wrapper}>
      <PageBanner
        title="NeuroLINCS"
        subTitle={
          'The NeuroLINCS Center studies ALS and SMA by characterizing the molecular ' +
          'networks within patient-derived iPSCs, and their differentiated progeny, ' +
          'across many regulatory layers'
        }
        imgSrc="/LINCS/files/centers_logos/NeuroLINCS.png"
        imgAlt="NeuroLINCS logo"
      />
      <div className="container">
        <div className="row">
          <PageNav
            mainPage="Data and Signature Generation Centers"
            subPage="NeuroLINCS Center"
          />
          <div className="col-md-9 col-md-pull-3">
            <ul>
              <li>
                Project Title: <a href="http://projectreporter.nih.gov/project_description.cfm?projectnumber=1U54NS091046-01" target="_blank">
                Neuron and Glial Cellular Signatures from Normal and Diseased
                iPS Cells (1U54NS091046)</a>
              </li>
              <li>
                Principal Investigators: <a href="http://www.faculty.uci.edu/profile.cfm?faculty_id=4708" target="_blank">
                Leslie Thompson PhD</a>, <a href="https://gladstone.org/our-science/people/steve-finkbeiner" target="_blank">
                Steven Finkbeiner MD/PhD</a>, <a href="https://be.mit.edu/directory/ernest-fraenkel" target="_blank">
                Ernest Fraenkel PhD</a>, <a href="http://neuroscience.jhu.edu/research/faculty/75" target="_blank">
                Jeffrey Rothstein MD/PhD</a>, <a href="https://www.cedars-sinai.edu/Research/Faculty-Directory/Bios/Clive-Svendsen-PhD.aspx" target="_blank">
                Clive Svendsen PhD</a>
              </li>
              <li>
                Awardee Institution: <a title="University of California, Irvine" href="http://uci.edu/" target="_blank">
                University of California-Irvine</a>
              </li>
              <li>
                Press Release: <a title="UCI to lead $8 million effort to create library of brain cell activity" href="http://news.uci.edu/press-releases/uci-to-lead-8-million-effort-to-create-library-of-brain-cell-activity/" target="_blank">
                UCI to lead $8 million effort to create library of brain cell activity</a>
              </li>
              <li>
                Center Website: <a href="http://www.neurolincs.org/" target="_blank">
                neurolincs.org</a>
              </li>
            </ul>
            <h2>Overview</h2>
            <p>
              There is a critical need to define the state and predict the behavior of human
              brain cells in health and disease. The number of different cell types in the CNS
              remains undefined, and despite a demographically ordained wave of neurodegenerative
              diseases, not a single disease-modifying therapy exists. Our knowledge of the CNS
              and the foundation for intervening rationally in disease would be dramatically
              advanced by generating quantitative molecular phenotypes essentially cell
              signatures of human neurons, astrocytes and oligodendrocytes from healthy people
              and from patients with motor neuron disease, Huntington’s disease, and Parkinson’s
              disease. The CNS is so unique that studying non-neuronal cells does not provide
              much assistance. Despite this desperate need, the inaccessibility of human brain
              cells meant studying them would have been impossible until the recent discovery of
              cellular reprogramming and induced pluripotent stem cell technology. Here we
              propose to form the NeuroLINCS Consortium to accomplish these goals. We have
              handpicked the <a href="http://www.neurolincs.org/people" target="_blank">team</a> to
              bring in critical expertise in iPSC technology, disease modeling, transcriptomics,
              epigenomics, metabolomics, whole genome sequencing, proteomics, high content,
              high throughput longitudinal single cell analysis, other cell-based assays,
              bioinformatics, statistics and computational biology. In addition, we are
              collaborating with Google to bring in special expertise in machine learning and the
              integration of signatures across platforms into highly predictive models of
              responses to perturbagens. Together, we expect to develop cell signatures of an
              array of human brain cell types under different conditions that should be broadly
              applicable to the LINCS community. We also anticipate generating innovative
              software tools and approaches that will make the signature generating process
              cheaper, faster, and more reliable. Besides the unique combination of expertise
              represented within NeuroLINCS, another distinguishing feature is the long track
              record that its members have of collaborating with each other. That collaborative
              spirit will be expressed in NeuroLINCS through its significant and multifaceted
              community outreach programs. These will involve specific and detailed plans to
              make the data and tools that NeuroLINCS generates available to the community,
              to interact with other LINCS sites, and to prepare for
              the <Link to="/centers/dcic/">DCIC</Link> and the prospect of
              disseminating knowledge and resources at scale.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
