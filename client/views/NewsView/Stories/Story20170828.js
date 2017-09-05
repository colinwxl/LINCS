import React from 'react';

import Story from './Story';
import styles from '../NewsView.scss';

export default function Story20170828() {
  return (
    <Story
      title="Data Standards Update"
      date="August 28th, 2017"
    >
      <p>
        <h5>Metadata Standards – New Versions Released</h5>
      </p>
      <p>
        Current Versions of Standards Released: 8-22-17
        <ul>
          <li>
            <a href="/LINCS/files/Antibody_Metadata_2017.pdf">Antibody reagents</a>
          </li>
          <li>
            <a href="/LINCS/files/Cell_Line_Metadata_2017.pdf">Cell lines</a>
          </li>
          <li>
            <a href="/LINCS/files/Differentiated_Cell_Metadata_2017.pdf">Differentiated cells</a>
          </li>
          <li>
            <a href="/LINCS/files/Embryonic_Stem_Cell_Metadata_2017.pdf">Embryonic stem cells</a>
          </li>
          <li>
            <a href="/LINCS/files/iPSC_Metadata_2017.pdf">iPSCs</a>
          </li>
          <li>
            <a href="/LINCS/files/Nucleic_Acid_Metadata_2017.pdf">Nucleic acid reagents</a>
          </li>
          <li>
            <a href="/LINCS/files/Other_Reagent_Metadata_2017.pdf">Other reagents</a>
          </li>
          <li>
            <a href="/LINCS/files/Primary_Cell_Metadata_2017.pdf">Primary cells</a>
          </li>
          <li>
            <a href="/LINCS/files/Protein_Metadata_2017.pdf">Proteins</a>
          </li>
          <li>
            <a href="/LINCS/files/Small_Molecule_Metadata_2017.pdf">Small molecules</a>
          </li>
          <li>
            <a href="/LINCS/files/Unclassified_Perturbagen_Metadata_2017.pdf">
              Unclassified perturbagens
            </a>
          </li>
        </ul>

        <a href={"/LINCS/files/Standards08222017.zip"}>Download pdf and xlsx formats</a> <br />
        Please visit the <a href="http://lincsproject.org/LINCS/data/standards"> data standards </a>  page for more details.
      </p>

      <span className={styles['twitter-label']}>
        <a
          title="Follow @LINCSProgram on Twitter"
          href="https://twitter.com/LINCSProgram"
        >
          Follow <strong>@LINCSProgram</strong>
        </a>
      </span>
    </Story>
  );
}
