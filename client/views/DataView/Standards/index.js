import React from 'react';

import PageBanner from 'components/PageBanner';
import PageNav from 'components/PageNav';
import styles from './Standards.scss';

export default function Standards(/* props */) {
  const d = '/LINCS/files/';
  return (
    <div className={styles.wrapper}>
      <PageBanner title="Data Standards" />

      <div className="container">
        <div className="row">
          <PageNav mainPage="Standards" isDataPage />

          <div className="col-md-9 col-md-pull-3">
            <h2>LINCS Phase II Extended Metadata Standards</h2>

            <p>
              In LINCS Production Phase II, the <strong>LINCS Data Working Group (DWG) is
              currently developing extended metadata specifications</strong> describing
              LINCS reagents, assays and experiments. Annotations for the perturbagens
              (small molecules, siRNA, growth factors and other ligands), cells, and some
              elements of experimental metadata should be common between all LINCS Centers.
              This will facilitate development of data analysis, formatting, and visualization
              strategies by LINCS investigators, and also the development of databases and data
              repositories in which to store and share LINCS data.
            </p>

            <p><strong>Current Versions of Standards Released: 5-13-2016</strong></p>
            <ul>
              <li>
                <a href={`${d}Antibody_Metadata_2016_General.pdf`}>
                  Antibody reagents
                </a>
              </li>
              <li>
                <a href={`${d}Cell_Line_Metadata_2016_General.pdf`}>
                  Cell lines
                </a>
              </li>
              <li>
                <a href={`${d}Differentiated_Cell_Metadata_2016_General.pdf`}>
                  Differentiated cells
                </a>
              </li>
              <li>
                <a href={`${d}Embryonic_Stem_Cell_Metadata_2016_General.pdf`}>
                  Embryonic stem cells
                </a>
              </li>
              <li>
                <a href={`${d}iPSC_Metadata_2016_General.pdf`}>
                  iPSCs
                </a>
              </li>
              <li>
                <a href={`${d}Nucleic_Acid_Metadata_2016.pdf`}>
                  Nucleic acid reagents
                </a>
              </li>

              <li>
                <a href={`${d}Other_Reagent_Metadata_2016_General.pdf`}>
                  Other reagents
                </a>
              </li>
              <li>
                <a href={`${d}Primary_Cell_Metadata_2016_General.pdf`}>
                  Primary cells
                </a>
              </li>
              <li>
                <a href={`${d}Protein_Metadata_2016_General.pdf`}>
                  Proteins
                </a>
              </li>
              <li>
                <a href={`${d}Small_Molecule_Metadata_2016_General.pdf`}>
                  Small molecules
                </a>
              </li>

            </ul>
            <p>
              <a href={`${d}Standards5132016.zip`}>Download pdf and xlsx formats</a>
            </p>
            <h2>Experiment Metadata</h2>

            <p>
              The LINCS DWG will also develop standards to annotate the metadata that should
              be reported to describe LINCS assay protocols, data analysis strategies, and
              datasets. As much as possible we plan to make use of experimental metadata
              standards developed by other groups such as
              the <a href="http://isatab.sourceforge.net/index.html">ISA infrastructure project</a>,
              the <a href="http://www.biosharing.org/mibbi">MIBBI</a> efforts (e.g. MIACA, MIARE),
              and NCBI PubChem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
