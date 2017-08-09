import React from 'react';

import Story from './Story';
import styles from '../NewsView.scss';
import creedsLogo from './images/creeds-logo.png';

export default function Story20160923() {
  return (

    <Story
      title="Press Release: Crowdsourcing for Scientific Discovery"
      date="September 23rd, 2016"
    >
      <div className="clearfix">
        <img
          src={creedsLogo}
          alt="creedsLogo"
          className={styles['inline-img-right']}
        />
        <p>
          Mount Sinai Researchers Find Novel Ways to Analyze Data for Drug and
          Target Discovery
          <br />
          <br />
          Avi Ma’ayan and his team (members of&nbsp;
          <a href="http://www.lincsproject.org/LINCS/centers/dcic" target="_blank">
            BD2K-LINCS DCIC
          </a>) have crowdsourced the annotation and analysis of a large number of
          gene expression profiles from the National Center for Biotechnology
          Information’s (NCBI) Gene Expression Omnibus (GEO). More than 70 volunteers
          from 25 countries helped the Ma’ayan Lab analyze the data, enabling the
          identification of new associations between genes, diseases, and drugs.
          The&nbsp;
          <a href="http://amp.pharm.mssm.edu/CREEDS" target="blank">
            Crowd Extracted Expression of Differential Signatures (CREEDS)
          </a> web portal developed by the Ma’ayan Lab at Icahn School of Medicine
          at Mount Sinai contains the collections of processed gene, drug and
          disease signatures from GEO. An article published September 26 in the
          journal Nature Communications describes the crowdsourcing project.&nbsp;
          <a
            href="http://www.newswise.com/articles/crowdsourcing-for-scientific-discovery-mount-sinai-researchers-find-novel-ways-to-analyze-data-for-drug-and-target-discovery"
            target="_blank"
          >
            Read More
          </a>
          <br />
          <br />
          Wang Z, Monteiro CD, Jagodnik KM, Fernandez NF, Gundersen GW, Rouillard AD,
          Jenkins SL, Feldmann AS, Hu KS, McDermott MG, Duan Q, Clark NR, Jones MR,
          Kou Y, Goff T, et al [...] Ma'ayan A.&nbsp;
          <strong>Extraction and analysis of signatures from the Gene Expression
          Omnibus by the crowd</strong>.
          Nature Communications 2016 Sep 26;7:12846.<br />
          <a href="https://www.ncbi.nlm.nih.gov/pubmed/27667448" target="_blank">
            PMID: 27667448
          </a>
        </p>
        <span className={styles['twitter-label']}>
          <a
            title="Follow @BD2KLINCSDCIC on Twitter"
            href="https://twitter.com/BD2KLINCSDCIC"
          >
            Follow <strong>@BD2KLINCSDCIC</strong>
          </a>
        </span>
      </div>
    </Story>
  );
}
