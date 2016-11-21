import React, { Component } from 'react';
import { Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import PageBanner from 'components/PageBanner';
import PageNav from 'components/PageNav';
import CenterWidgetsContainer from 'components/CenterWidgetsContainer';
import styles from './Overview.scss';
import centersMapImg from './centers-map.png';

const dsgcRoute = '/centers/data-and-signature-generating-centers';

export default class Overview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapTab: 'staticMap',
    };
  }

  componentDidMount() {
    // console.log(this.state);
    const { mapTab } = this.state;
    const isStaticMap = mapTab === 'staticMap';
    if (isStaticMap) {
      console.log($('img[usemap]'));
    }
  }

  handleSMClicked = () => { this.setState({ mapTab: 'staticMap' }); }
  handleMWClicked = () => { this.setState({ mapTab: 'mapWidget' }); }

  render() {
    const { mapTab } = this.state;
    const isStaticMap = mapTab === 'staticMap';
    const isMapWidget = mapTab === 'mapWidget';

    return (
      <div className={styles.wrapper}>
        <PageBanner
          title="The LINCS Consortium"
          subTitle="The Consortium consists of six DSGCs and one DCIC"
        />
        <div className="container">
          <div className="row">
            <PageNav mainPage="Overview" />
            <div className="col-md-9 col-md-pull-3">
              <h1 className={styles.title}>Overview</h1>
              <p>
                The LINCS Consortium is an NIH Common Fund program that supports six Data
                and Signature Generation Centers (DSGCs) and the BD2K-LINCS Data Integration
                and Coordination Center. The LINCS program is currently in phase II after
                the completion of pilot phase I in fiscal year 2013.
              </p>

              <div>
                <div className={`btn-group ${styles.categories}`} data-toggle="buttons">
                  <label
                    onClick={this.handleSMClicked}
                    className={
                      `btn ${styles['category-check']} ${isStaticMap ? styles.active : ''}`
                    }
                  >
                    <input
                      type="radio"
                      name="map"
                      defaultChecked={isStaticMap}
                    />
                  Map View
                  </label>
                  <label
                    onClick={this.handleMWClicked}
                    className={
                      `btn ${styles['category-check']} ${isMapWidget ? styles.active : ''}`
                    }
                  >
                    <input
                      type="radio"
                      name="centerInfo"
                      defaultChecked={isMapWidget}
                    />
                  Cards View
                  </label>
                </div>
                <div className={styles['map-and-center-info']}>
                  <ReactCSSTransitionGroup
                    transitionName={{ enter: styles.enter, enterActive: styles['enter-active'] }}
                    transitionEnterTimeout={750}
                    transitionLeave={false}
                  >
                    {
                      isStaticMap ?
                        <div>
                          <img src={centersMapImg} alt="Map of LINCS Centers" useMap="#Map" />
                          <map name="Map" id="Map">
                            <area alt="" title="" href="#" shape="poly" coords="263,142,267,144,272,143,274,140,272,136,270,133,267,132,263,136,263,139" />
                            <area alt="" title="" href="#" shape="poly" coords="247,190,254,189,260,182,262,189,271,189,264,195,267,208,258,201,251,206,254,196" />
                            <area alt="" title="" href="#" shape="poly" coords="212,359,215,355,212,350,206,349,203,352,203,354,207,358,210,361" />
                            <area alt="" title="" href="#" shape="poly" coords="218,376,219,378,220,382,220,385,216,388,213,387,211,384,211,380,213,377" />
                            <area alt="" title="" href="#" shape="poly" coords="252,466,249,464,248,459,248,456,249,454,253,454,257,455,257,459,257,462,256,465" />
                            <area alt="" title="" href="#" shape="poly" coords="268,484,276,484,280,475,281,482,290,484,285,488,287,499,280,495,272,499,275,490" />
                            <area alt="" title="" href="#" shape="poly" coords="700,626,704,625,705,620,705,618,703,615,699,614,698,616,696,618,695,621,697,623" />
                            <area alt="" title="" href="#" shape="poly" coords="1016,686,1017,683,1018,678,1017,673,1011,673,1009,675,1006,677,1006,679,1006,683,1009,685,1011,688" />
                            <area alt="" title="" href="#" shape="poly" coords="884,394,886,390,886,387,882,384,878,383,875,385,874,388,875,391,877,392,879,392,880,395" />
                            <area alt="" title="" href="#" shape="poly" coords="1027,360,1030,360,1030,357,1031,353,1030,350,1026,349,1022,350,1022,354,1021,359" />
                            <area alt="" title="" href="#" shape="poly" coords="1060,339,1063,338,1065,335,1065,331,1063,329,1059,327,1056,329,1055,333,1056,337" />
                            <area alt="" title="" href="#" shape="poly" coords="1058,317,1064,309,1072,316,1069,305,1075,299,1067,299,1063,289,1060,298,1052,299,1059,304,1055,316" />
                            <area alt="" title="" href="#" shape="poly" coords="1072,277,1077,273,1077,267,1072,263,1069,265,1066,268,1068,273" />
                            <area alt="" title="" href="#" shape="poly" coords="1082,277,1090,270,1100,278,1097,267,1102,260,1094,260,1090,251,1087,258,1079,260,1087,268,1089,260" />
                            <area alt="" title="" href="#" shape="poly" coords="1100,270,1105,270,1110,261,1113,268,1122,269,1116,275,1120,286,1109,279,1103,286,1105,275" />
                          </map>
                        </div> :
                        <CenterWidgetsContainer />
                    }
                  </ReactCSSTransitionGroup>
                </div>
              </div>

              <h2>LINCS Production Phase II</h2>
              <h5>LINCS Data and Signature Generation Centers</h5>
              <p>
                The <Link title="Data and Signature Generation Centers" to={dsgcRoute}>
                LINCS Data and Signature Generation Centers</Link> are
                six research centers focused on high-throughput experiments that examine
                the changes that occur when a variety of different cell lines are exposed to
                perturbations.
              </p>
              <h5>BD2K-LINCS Data Coordination and Integration Center</h5>
              <p>
                The <a title="BD2K-LINCS Data Coordination and Integration Center" href="http://lincs-dcic.org/#/" target="_blank">
                BD2K-LINCS Data Coordination and Integration Center (DCIC)</a> is
                the data coordination center for the NIH Common Fund’s Library of Integrated
                Network-based Cellular Signatures (LINCS) program, which aims to characterize how a
                variety of types of cells, tissues and networks respond to disruption by drugs and
                other factors. The center supports data science research focusing on interpreting
                and integrating LINCS-generated data from different data types and databases in the
                LINCS-funded projects. This center is co-funded
                by <a title="Big Data to Knowledge" href="http://bd2k.nih.gov/#sthash.UHtPu2rQ.dpbs" target="_blank">
                BD2K</a> and the <a title="NIH Common Fund" href="https://commonfund.nih.gov/" target="_blank">
                NIH Common Fund</a>.
              </p>
              <p>
                The organizational structure of the Center includes a strong Consortium Coordination
                and Administration (CCA) that supports and manages the Center’s goals and
                deliverables, and coordinates activities across the LINCS and BD2K programs.
              </p>
              <h2>LINCS Pilot Phase I (fiscal year completion 2013)</h2>
              <p>
                The <Link title="LINCS Pilot Phase I" to="/centers/phase-one">
                LINCS Pilot Phase I</Link> was
                composed of 10 centers: two data production/analysis centers, that generated data
                for the LINCS matrix, four centers dedicated to developing technology to complement
                and facilitate the collection of cellular signatures, and four centers that
                developed computational tools for analyzing the data produced by the data
                production centers. In addition, two external supplements, as well as a number
                of internal collaborations, supported and augmented the work done by the LINCS
                centers.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
