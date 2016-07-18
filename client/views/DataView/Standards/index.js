import React from 'react';

import PageBanner from 'components/PageBanner';
import PageNav from 'components/PageNav';
import styles from './Standards.scss';

export default function Standards(/* props */) {
  const d = '/LINCS/files/';
  return (
    <div className={styles.wrapper}>
      <PageBanner title="Data Standards" includeSearchBar />

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
                <a href={`${d} Nucleic_Acid_Metadata_2016.pdf`}>
                  Nucleic acids
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

            <p><strong>Previous Versions of Standards Released: 8-14-15</strong></p>
            <ul>
              <li>
                <a href={`${d}cell-line-standards.pdf`}>
                  Cell lines
                </a>
              </li>
              <li>
                <a href={`${d}primary-cell-standards.pdf`}>
                  Primary cells
                </a>
              </li>
              <li>
                <a href={`${d}iPSC-standards.pdf`}>
                  iPSCs
                </a>
              </li>
              <li>
                <a href={`${d}differentiated-iPSC-standards.pdf`}>
                  Differentiated iPSCs
                </a>
              </li>
              <li>
                <a href={`${d}small-molecule-standards.pdf`}>
                  Small molecules
                </a>
              </li>
              <li>
                <a href={`${d}RNAi-standards.pdf`}>
                  RNAi reagents
                </a>
              </li>
              <li>
                <a href={`${d}antibody-standards.pdf`}>
                  Antibody reagents
                </a>
              </li>
              <li>
                <a href={`${d}other-reagent-standards.pdf`}>
                  Other reagents
                </a>
              </li>
            </ul>
            <h2>LINCS Pilot Phase I Metadata Standards</h2>

            <p>
              The documents below annotate reagents outside the context of the experiments in
              which they were used. For example, the small molecules standards do not include
              solvent information as that is usually specific to the experimental context in
              which the reagent is used. Please note that the <em>Unique ID</em> field in these
              documents is used by the LINCS DWG to track fields and is not meant for any
              other purpose.
            </p>
            <ul>
              <li>
                <a href={`${d}LINCS_DWG_CellLine_Metadata_Release_Apr-11-2012.pdf`}>
                  Cell lines
                </a> (Released 4-11-12)
              </li>
              <li>
                <a href={`${d}LINCS_DWG_PrimaryCell_Metadata_Release_Apr-11-2012.pdf`}>
                  Primary cells
                </a> (Released 4-11-12)
              </li>
              <li>
                <a href={`${d}LINCS_DWG_SmallMolecule_Metadata_Released_May-04-2012.pdf`}>
                  Small molecules
                </a> (Released 5-4-12)
              </li>
              <li>
                <a href={`${d}LINCS_DWG_siRNAshRNAReagents_Metadata_Release_Jul-31-2012.pdf`}>
                  RNAi reagents
                </a> (Released 7-31-12)
              </li>
              <li>
                <a href={`${d}LINCS_DWG_ProteinReagents_Metadata_Release_Jul-31-2012.pdf`}>
                  Protein reagents
                </a> (Released 7-31-12)
              </li>
              <li>
                <a href={`${d}LINCS_DWG_AntibodyReagents_Metadata_Release_Oct-12-2012.pdf`}>
                  Antibody reagents
                </a> (Released 10-12-12)
              </li>
              <li>
                <a href={`${d}LINCS_DWG_OtherReagents_Metadata_Release_Nov-07-12.pdf`}>
                  Other reagents
                </a> (Released 11-7-12)
              </li>
            </ul>
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
