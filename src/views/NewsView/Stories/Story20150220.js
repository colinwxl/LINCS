import React from 'react';

import Story from './Story';
import styles from '../NewsView.scss';
import chemblImg from './images/chembl.png';


export default function Story20150220() {
  return (
    <Story
      title="LINCS Cell Line Data Integrated Into ChEMBL"
      date="February 20th, 2015"
    >
      <p>
        CHEMBL now provides CHEMBL IDs for all cell lines stored in their database
        and also cross references to the LINCS project.
      </p>
      <div className={styles['img-wrap']}>
        <img
          className={`${styles['img-border']}`}
          src={chemblImg}
          alt="CHEMBL Screenshot"
        />
      </div>
    </Story>
  );
}
