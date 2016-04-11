import React from 'react';
import { Link } from 'react-router';

import PageBanner from 'components/PageBanner';
import PageNav from 'components/PageNav';
import styles from './Standards.scss';

export default function Standards(/* props */) {
  return (
    <div className={styles.wrapper}>
      <PageBanner title="Data Standards" includeSearchBar />
      <div className="container">
        <div className="row">
          <PageNav mainPage="Standards" isDataPage />
          <div className="col-md-9 col-md-pull-3">
            <h2>LINCS Phase 2 Extended Metadata Standards</h2>
            <p>
              In LINCS Production Phase 2, the <strong>LINCS Data Working Group (DWG) is
              currently developing extended metadata specifications</strong> describing
              LINCS reagents, assays and experiments. Annotations for the perturbagens
              (small molecules, siRNA, growth factors and other ligands), cells, and some
              elements of experimental metadata should be common between all LINCS Centers.
              This will facilitate development of data analysis, formatting, and visualization
              strategies by LINCS investigators, and also the development of databases and data
              repositories in which to store and share LINCS data.
            </p>
            <ul>
              <li>
                <Link to="/files/cell-line-standards.pdf">Cell lines</Link> (Released 8-14-15)
              </li>
              <li>
                <Link to="/files/primary-cell-standards.pdf">Primary cells</Link> (Released 8-14-15)
              </li>
              <li>
                <Link to="/files/iPSC-standards.pdf">iPSCs</Link> (Released 8-14-15)
              </li>
              <li>
                <Link to="/files/differentiated-iPSC-standards.pdf">
                Differentiated iPSCs</Link> (Released 8-14-15)
              </li>
              <li>
                <Link to="/files/small-molecule-standards.pdf">
                Small molecules</Link> (Released 8-14-15)
              </li>
              <li>
                <Link to="/files/RNAi-standards.pdf">RNAi reagents</Link> (Released 8-14-15)
              </li>
              <li>
                <Link to="/files/antibody-standards.pdf">Antibody reagents</Link> (Released 8-14-15)
              </li>
              <li>
                <Link to="/files/other-reagent-standards.pdf">
                Other reagents</Link> (Released 8-14-15)
              </li>
            </ul>
            <h2>LINCS Pilot Phase 1 Metadata Standards</h2>
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
                <Link to="/files/LINCS_DWG_CellLine_Metadata_Release_Apr-11-2012.pdf">
                Cell lines</Link> (Released 4-11-12)
              </li>
              <li>
                <Link to="/files/LINCS_DWG_PrimaryCell_Metadata_Release_Apr-11-2012.pdf">
                Primary cells</Link> (Released 4-11-12)
              </li>
              <li>
                <Link to="/files/LINCS_DWG_SmallMolecule_Metadata_Released_May-04-2012.pdf">
                Small molecules</Link> (Released 5-4-12)
              </li>
              <li>
                <Link to="/files/LINCS_DWG_siRNAshRNAReagents_Metadata_Release_Jul-31-2012.pdf">
                RNAi reagents</Link> (Released 7-31-12)
              </li>
              <li>
                <Link to="/files/LINCS_DWG_ProteinReagents_Metadata_Release_Jul-31-2012.pdf">
                Protein reagents</Link> (Released 7-31-12)
              </li>
              <li>
                <Link to="/files/LINCS_DWG_AntibodyReagents_Metadata_Release_Oct-12-2012.pdf">
                Antibody reagents</Link> (Released 10-12-12)
              </li>
              <li>
                <Link to="/files/LINCS_DWG_OtherReagents_Metadata_Release_Nov-07-12.pdf">
                Other reagents</Link> (Released 11-7-12)
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
