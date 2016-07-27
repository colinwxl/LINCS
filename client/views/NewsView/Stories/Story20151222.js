import React from 'react';

import Story from './Story';
import styles from '../NewsView.scss';
import slicrImg from './images/slicr-news.png';
import ldpImg from './images/ldp-news.png';


export default function Story20151222() {
  return (
    <Story
      title="New LINCS L1000 Tool and Updated Release of LINCS Data Portal"
      date="December 22nd, 2015"
    >
      <div className={styles['img-wrap']}>
        <img src={slicrImg} alt="Slicr" />
      </div>
      <p>
        The BD2K-LINCS DCIC recently released a new tool
        called <a href="http://amp.pharm.mssm.edu/Slicr" target="_blank">Slicr</a> which
        is a metadata search engine that searches for LINCS L1000 gene expression
        profiles and signatures matching users' input parameters. It features download
        of selected search results as csv files in a zipped folder and visualization of
        selected results in a 3D scatter plot using PCA or MDS.
      </p>
      <div className={styles['img-wrap']}>
        <img src={ldpImg} alt="LINCS Data Portal" />
      </div>
      <p>
        The BD2K-LINCS DCIC recently released an updated version of
        the <a href="http://lincsportal.ccs.miami.edu/dcic-portal/">
        LINCS Data Portal</a> that provides a unified interface for searching
        LINCS dataset packages and reagents
      </p>
    </Story>
  );
}
