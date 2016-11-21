import React, { Component } from 'react';
import { Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import imageMapResize from './imageMapResize';

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
      institutionHighlighted: '',
    };
    imageMapResize($);
  }

  componentDidMount() {
    this.recalculateImageMap();
  }

  componentDidUpdate() {
    this.recalculateImageMap();
  }

  recalculateImageMap() {
    const { mapTab } = this.state;
    const isStaticMap = mapTab === 'staticMap';
    if (isStaticMap) {
      $('img[usemap]').rwdImageMaps();
    }
  }

  handleSMClicked = () => { this.setState({ mapTab: 'staticMap', institutionHighlighted: '' }); }
  handleMWClicked = () => { this.setState({ mapTab: 'mapWidget', institutionHighlighted: '' }); }

  handleSpotClick = (institution) => {
    this.setState({ mapTab: 'mapWidget', institutionHighlighted: institution });
  }

  render() {
    const { mapTab, institutionHighlighted } = this.state;
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
                            <area
                              onClick={() => this.handleSpotClick('Broad Institute')}
                              coords="280,79,533,171"
                              shape="rect"
                            />
                            <area
                              onClick={() => this.handleSpotClick('Broad Institute')}
                              coords="78,198,250,277"
                              shape="rect"
                            />
                            <area
                              onClick={() => this.handleSpotClick('Broad Institute')}
                              coords="223,313,470,375"
                              shape="rect"
                            />
                            <area
                              onClick={() => this.handleSpotClick('Broad Institute')}
                              coords="31,359,205,457"
                              shape="rect"
                            />
                            <area
                              onClick={() => this.handleSpotClick('Broad Institute')}
                              coords="262,423,528,481"
                              shape="rect"
                            />
                            <area
                              onClick={() => this.handleSpotClick('Broad Institute')}
                              coords="35,497,291,589"
                              shape="rect"
                            />
                            <area
                              onClick={() => this.handleSpotClick('Broad Institute')}
                              coords="619,631,797,699"
                              shape="rect"
                            />
                            <area
                              onClick={() => this.handleSpotClick('Broad Institute')}
                              coords="814,33,1036,152"
                              shape="rect"
                            />
                            <area
                              onClick={() => this.handleSpotClick('Broad Institute')}
                              coords="847,162,1037,261"
                              shape="rect"
                            />
                            <area
                              onClick={() => this.handleSpotClick('Broad Institute')}
                              coords="751,390,945,532"
                              shape="rect"
                            />
                            <area
                              onClick={() => this.handleSpotClick('Broad Institute')}
                              coords="1152,33,1404,105"
                              shape="rect"
                            />
                            <area
                              onClick={() => this.handleSpotClick('Broad Institute')}
                              coords="1222,133,1420,205"
                              shape="rect"
                            />
                            <area
                              onClick={() => this.handleSpotClick('Broad Institute')}
                              coords="1233,235,1417,349"
                              shape="rect"
                            />
                            <area
                              onClick={() => this.handleSpotClick('Broad Institute')}
                              coords="1196,372,1428,464"
                              shape="rect"
                            />
                            <area
                              onClick={() => this.handleSpotClick('Broad Institute')}
                              coords="1205,488,1380,581"
                              shape="rect"
                            />
                            <area
                              onClick={() => this.handleSpotClick('Broad Institute')}
                              coords="1071,599,1327,680"
                              shape="rect"
                            />
                            <area
                              onClick={() => this.handleSpotClick('Broad Institute')}
                              coords="886,668,1065,831"
                              shape="rect"
                            />
                          </map>
                        </div> :
                        <CenterWidgetsContainer institutionHighlighted={institutionHighlighted} />
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
