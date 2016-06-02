import React from 'react';

import Story from './Story';
import styles from '../NewsView.scss';
import sbdssImg from './images/sbdss.jpg';


export default function Story20160125() {
  return (
    <Story
      title="Systems Biology Data Science Symposium 2016"
      date="January 25th, 2016"
    >
      <p>
        On January 19-20, 2016, the first
        annual <a href="http://lincs-dcic.org/#/2016-data-science-symposium" target="_blank">
        Systems Biology Data Science Symposium (SBDSS 2016)</a> at the University
        of Miami brought together the <a href="http://lincs-dcic.org/#/" target="_blank">
        BD2K-LINCS Data Coordination and Integration Center</a>, local researchers, and
        outside experts who apply or develop computational systems biology resources.
        In presentations, a poster reception and several working sessions, the DCIC
        showcased <a href="http://lincs-dcic.org/#/resources" target="_blank">
        tools/resources</a> and <a href="http://lincs-dcic.org/#/about#nav" target="_blank">
        scientific projects</a>, connected developers with users, and initiated
        new collaborations.
      </p>
      <div className={styles['img-wrap']}>
        <img
          src={sbdssImg}
          alt="SBDSS 2016"
        />
      </div>
      <h5>Day 1 Presentations:</h5>
      <div className={styles.pres}>
        <p className={styles.italic}>
          Keynote Address: Overcoming Cancer Cell Heterogeneity through
          Epigenetic Therapies
        </p>
        <p>Speaker: Stephen D. Nimer MD, University of Miami</p>
      </div>
      <div className={styles.pres}>
        <p className={styles.italic}>
          The NIH BD2K Initiative: How it Hopes to Impact Biomedical Research
        </p>
        <p>
          Ajay Pillai, PhD, Program Director – National Human Genome Research
          Institute (NHGRI), NIH Program
        </p>
      </div>
      <div className={styles.pres}>
        <p className={styles.italic}>
          From Big Data to Knowledge – Experiences in Rare Disease Genomics
        </p>
        <p>Stephan Zuchner, MD, PhD, University of Miami</p>
      </div>
      <div className={styles.pres}>
        <p className={styles.italic}>LINCS Computational Pipelines for Drug Discovery</p>
        <p>
          Avi Ma’ayan, PhD, Icahn School of Medicine at Mount Sinai | BD2K-LINCS DCIC
        </p>
      </div>
      <div className={styles.pres}>
        <p className={styles.italic}>
          Uncovering Perturbation Mode of Action with LINCS Data and Tools
        </p>
        <p>Mario Medvedovic, PhD, University of Cincinnati | BD2K-LINCS DCIC</p>
      </div>
      <div className={styles.pres}>
        <p className={styles.italic}>
          L1K++: Fast and Accurate Pipeline for Processing L1000 Gene Expression Data
        </p>
        <p>Ka Yee Yeung, PhD, University of Washington</p>
      </div>
      <div className={styles.pres}>
        <p className={styles.italic}>Target Predictions using LINCS Perturbation Data</p>
        <p>Ziv Bar-Joseph, PhD, Carnegie Mellon University</p>
      </div>
      <div className={styles.pres}>
        <p className={styles.italic}>
          Disease and Perturbagen Posttranslational Signatures across Multiple
          Signaling Pathways in Lung Cancer Cell Lines: Analysis of TMT Data
          Published in PhosphoSitePlus (PSP)
        </p>
        <p>Peter Hornbeck, PhD, Cell Signaling Technology</p>
      </div>
      <div className={styles.pres}>
        <p className={styles.italic}>
          Building a Culture of Model-driven Drug Discovery at Merck
        </p>
        <p>Chris Waller, PhD, Merck &amp; Co.</p>
      </div>
      <div className={styles.pres}>
        <p className={styles.italic}>
          Modeling Spinal Cord Injury using Knowledge-Based and Data Driven Approaches
        </p>
        <p>Vance Lemmon, PhD, University of Miami</p>
      </div>
      <div className={styles.pres}>
        <p className={styles.italic}>
          A Next Generation Connectivity Map: L1000 Platform and the First
          1,000,000 Profiles
        </p>
        <p>Aravind Subramanian, PhD, Broad Institute of MIT &amp; Harvard</p>
      </div>
      <div className={styles.pres}>
        <p className={styles.italic}>
          Systematic Discovery of Drug Targets and Disease Indications using
          Genetics and Connectivity Map
        </p>
        <p>Pankaj Agarwal, PhD, GlaxoSmithKline</p>
      </div>
      <p>
        <strong>
          For information about the SBDSS 2016, including the full
          agenda, <a href="http://lincs-dcic.org/#/2016-data-science-symposium" target="_blank">
          click here</a>.
        </strong>
      </p>
    </Story>
  );
}
