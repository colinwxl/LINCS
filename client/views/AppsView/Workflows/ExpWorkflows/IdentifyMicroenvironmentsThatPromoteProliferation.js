import React, { Component } from 'react';

import styles from '../Workflow.scss';
import PageNav from 'components/PageNav';
import PageBanner from 'components/PageBanner';
import proliferationDashboard from '../images/meplincs-proliferationdashboard.png';
import mepCellLineAnalysis from '../images/meplincs-hmec240l-analysis.png';

export default class Workflow extends Component {

  static subTitle = 'Identify microenvironments that affect proliferation'
  static path = 'identify-microenvironments-that-affect-proliferation'

  render() {
    return (
      <div className={styles.wrapper}>
        <PageBanner
          title="LINCS Workflow"
          subTitle={this.constructor.subTitle}
        />
        <div className="container">
          <div className="row">
            <PageNav
              mainPage="Experimentalist Workflow"
              subPage={this.constructor.subTitle}
              isWorkflowPage
            />
            <div className={`col-md-9 col-md-pull-3 ${styles.workflow} ${styles['sm-profiled']}`}>
              <ul>
                <li>
                  How do I identify microenvironments that affect proliferation?
                </li>
              </ul>
              <p>
                The <a href="https://www.synapse.org/#!Synapse:syn2862345/wiki/231720" target="_blank">
                MEP-LINCS dataset</a> uses the proportion of cells that are synthesizing
                copies of their DNA (S Phase) as a measure of proliferation. During the
                last hour of the assay, cells in S phase incorporate EdU into their DNA.
                During imaging the proportion of S phase cells in each spot population is
                calculated and summarized across its replicates.
              </p>
              <p>
                The proportion of cells that are proliferating in a population is shown in
                a <a href="https://dane.shinyapps.io/ProliferationDashboard/" target="_blank">
                beta-version dashboard</a> and in figures and tables in the cell line analysis
                report. Specific figures in the report are titled
                "Proliferation Boxplots", "Proliferation vs. Spot Cell Count Scatterplot", and
                "Lineage vs. Proliferation Scatterplot". The MEP-Level interactive datatables
                can be ordered by proliferation and filtered by ligand, ECM protein, or both
                to show specific proliferation values. These can be used to define a set of
                perturbations with extreme proliferation values.
              </p>
              <img
                className={styles['img-bordered']}
                src={proliferationDashboard}
                alt="MEP-LINCS Proliferation Dashboard"
              />
              <p>
                The cell line level analysis reports are available here:&nbsp;
                <a href="https://www.synapse.org/#!Synapse:syn7186843" target="_blank">
                  MCF10A syn7186843
                </a>
                ,&nbsp;
                <a href="https://www.synapse.org/#!Synapse:syn7186831" target="_blank">
                  HMEC122L syn7186831
                </a>, and&nbsp;
                <a href="https://www.synapse.org/#!Synapse:syn7186833/version/" target="_blank">
                  HMEC240L syn7186833
                </a>.
              </p>
              <img
                className={styles['img-bordered']}
                src={mepCellLineAnalysis}
                alt="MEP-LINCS Cell line Analysis"
              />
              <p>
                Below, you will find a short playlist of videos describing the proliferation
                signal and how to mine it for interesting MEPs.
              </p>

              MEP LINCS Experiment Overview
              <iframe
                src="https://www.youtube.com/embed/2a94fNZOQSE"
                frameBorder="0"
                allowFullScreen
              />
              <br />

              Proliferation Signal
              <iframe
                src="https://www.youtube.com/embed/_X_on7GSyhQ"
                frameBorder="0"
                allowFullScreen
              />
              <br />

              MCF10A Proliferation Dashboard
              <iframe
                src="https://www.youtube.com/embed/wU27cRpKPIs"
                frameBorder="0"
                allowFullScreen
              />
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
