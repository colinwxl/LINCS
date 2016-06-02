import React from 'react';

import Story from './Story';
import styles from '../NewsView.scss';
import dcicScreenshot from './images/lincs-dcic-screenshot.jpg';


export default function Story20151105() {
  return (
    <Story
      title="BD2K-LINCS DCIC | Accepting Applications For 2016 Summer Research Training Program"
      date="November 5th, 2015"
    >
      <p className="clearfix">
        <img
          className={styles['inline-img-left']}
          src={dcicScreenshot}
          alt="BD2K-LINCS DCIC Summer Research Training Program"
        />
        The <a href="http://lincs-dcic.org/#/summer-research-app#nav" target="_blank">
        BD2K-LINCS DCIC Summer Research Training Program in Biomedical Big
        Data Science</a> is a research intensive ten-week training program for
        undergraduate and graduate students interested in participating in cutting
        edge research projects aimed at solving data-intensive biomedical problems.
        <a href="http://lincs-dcic.org/#/summer-fellows-2015#nav" target="_blank">
          Summer fellows</a> conduct faculty-mentored independent research projects
        within laboratories affiliated with the Center in the following areas: data
        integration, dynamic data visualization, machine learning, data harmonization,
        computational drug discovery, metadata and APIs, knowledge modeling,
        Bayesian networks and statistical mining.
      </p>
      <p>
        In summer session 2016, our research training program will be offered at
        the three sites affiliated with our NIH-funded Center:
      </p>
      <p>
        <a href="http://icahn.mssm.edu/research/labs/maayan-laboratory" target="_blank">
          Ma’ayan Laboratory of Computational Systems Biology</a> | Icahn School of
        Medicine at Mount Sinai
        <br />
        <a href="http://eh3.uc.edu/" target="_blank">Medvedovic Laboratory for
          Statistical Genomics and Systems Biology</a> | University of Cincinnati
        <br />
        <a href="http://ccs.miami.edu/focus-area/drug-discovery/" target="_blank">
          Schurer Laboratory in the Center for Computational Science</a> |
        University of Miami
      </p>
      <p><strong>Application Deadline: March 4, 2016 at 11:00 PM ET</strong></p>
      <p>
        For the program description and information on how to
        apply, <a href="" target="_blank">click here</a>.
      </p>
    </Story>
  );
}
