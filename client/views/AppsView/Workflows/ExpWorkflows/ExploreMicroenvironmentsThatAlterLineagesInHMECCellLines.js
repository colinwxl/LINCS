import React, { Component } from 'react';

import styles from '../Workflow.scss';
import PageNav from 'components/PageNav';
import PageBanner from 'components/PageBanner';
import hmec240LProliferationDashboard from '../images/meplincs-hmec240L.png';
import mepCellLineAnalysis from '../images/meplincs-hmec240l-analysis.png';
import mepLineageMarker from '../images/meplincs-hmec240l-analysis_lineage_marker.png';

export default class Workflow extends Component {

  static subTitle =
  'Explore microenvironments that alter the lineages in human mammary epithelial cells (HMEC) cell lines'; // eslint-disable-line
  static path = 'explore-microenvironments-that-alter-lineages-in-hmec-cell-lines';

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
              <strong>
                <ul>
                  <li>
                    Are there microenvironments that alter the lineages in the human mammary
                    epithelial cells (HMEC) cell lines?
                  </li>
                  <li>
                    What are some recommended tools and methods for discovering MEPs with
                    extreme luminal or basal marker values?
                  </li>
                </ul>
              </strong>
              <p>
                The HMEC122L and HMEC240L cells often have subpopulations with distinct luminal
                and basal lineages<sup>[1]</sup>. These cells have been stained for KRT19 and
                KRT5, which are luminal and basal lineage markers, respectively. The ratio
                of KRT19 to KRT5 intensity values (lineage ratio) is calculated at the cell level
                and then summarized at the spot and MEP levels. In addition, the KRT19 intensities
                have a bimodal distribution and are gated into KRT19 low and high classes.
                The proportion of KRT19 high cells in a population can also be used to identify
                MEPs with altered lineage markers.
              </p>
              <p>
                Beta-version HMEC lineage dashboards are available for the&nbsp;
                <a href="https://dane.shinyapps.io/HMEC240LLineageDashboard/" target="_blank">
                HMEC 240L cell line</a> and the&nbsp;
                <a href="https://dane.shinyapps.io/HMEC122LLineageDashboard/" target="_blank">
                HMEC 122L cell line</a> that show the responses subsetted and stratified
                by ligand and by ECM protein.
              </p>
              <img
                className={styles['img-bordered']}
                src={hmec240LProliferationDashboard}
                alt="MEP-LINCS Proliferation Dashboard (HMEC 240L)"
              />
              <p>
                The HMEC122L <a href="https://www.synapse.org/#!Synapse:syn7186831" target="_blank">
                syn7186831</a> and HMEC240L&nbsp;
                <a href="https://www.synapse.org/#!Synapse:syn7186831" target="_blank">
                syn7186833 </a> cell-level analysis reports
                have several figures that plot lineage markers against each other and against
                other signals such as cell count and proliferation.
              </p>
              <img
                className={styles['img-bordered']}
                src={mepCellLineAnalysis}
                alt="MEP-LINCS Cell Line Analysis (HMEC 240L)"
              />
              <p>
                Also, the HMEC122L&nbsp;
                <a href="https://www.synapse.org/#!Synapse:syn7122580" target="_blank">
                syn7122580</a> and HMEC240L&nbsp;
                <a href="https://www.synapse.org/#!Synapse:syn7122584" target="_blank">syn7122584</a>
                &nbsp;staining set-level reports display the
                MEPs ordered by lineage ratio and can be zoomed in to identify the MEPs with
                extreme values.
              </p>
              <img
                className={styles['img-bordered']}
                src={mepLineageMarker}
                alt="MEP-LINCS Cell Line Analysis Lineage Marker (HMEC 240L)"
              />
              <p>
                Finally, the data explorer at&nbsp;
                <a href="https://www.synapse.org/#!Synapse:syn4939350" target="_blank">syn4939350</a>
                &nbsp;can be used to generate boxplots and scatterplots of many features in the
                MCF10A and HMEC datasets.
              </p>
              <ol>
                <li style={{ fontSize: '0.8rem' }}>
                  Pelissier, Fanny A., James C. Garbe, Badriprasad Ananthanarayanan, Masaru Miyano,
                  ChunHan Lin, Tiina Jokela, Sanjay Kumar, Martha R. Stampfer, James B. Lorens, and
                  Mark A. LaBarge. “Age-Related Dysfunction in Mechanotransduction Impairs
                  Differentiation of Human Mammary Epithelial Progenitors.” Cell Reports 7,
                  no. 6 (June 2014): 1926–39.&nbsp;
                  <a href="http://dx.doi.org/doi:10.1016/j.celrep.2014.05.021" target="_blank">
                  doi:10.1016/j.celrep.2014.05.021</a>.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
