/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Collapsible from 'react-collapsible';

import { loadCannedAnalyses, cannedAnalysisIncrementClick } from 'actions/cannedAnalyses';
import CannedAnalysisCard from 'components/CannedAnalysisCard';
import Carousel from 'components/carousel';
import styles from '../AppsView.scss';
import cannedAnalysisImage from 'static/files/canned_analysis.png';

const mapStateToProps = (state) => ({
  analyses: state.cannedAnalyses.analyses,
});

class CannedAnalysisModule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
    }
  }

  componentWillMount() {
    this.updateDimensions();
    this.props.loadCannedAnalyses();
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  updateDimensions = () => {
    const w = window;
    const width = w.innerWidth;
    const height = w.innerHeight;
    this.setState({ width, height });
  }

  _updateSearchQuery = (event) => {
    this.setState({searchQuery: event.target.value.toLowerCase()});
  }

  _filterCannedAnalyses = (analyses) => {
    if (analyses.length === 0) return [];
    const queries = this.state.searchQuery.split(" ");
    if (queries.length === 0) return analyses;
    return analyses.filter((analysis) => {
      let giantSearchString = (analysis.cannedAnalysisDescription +
      analysis.title +
      analysis.subtitle +
      analysis.toolName +
      analysis.metadata)
      .replace(/([\s\-.*+?^=!:${}()|\[\]\/\\])/g, "")
      .toLowerCase();

      return queries.every(element => {
        return giantSearchString.indexOf(element) !== -1;
      })
    });
  }

  _groupAnalyses = (analyses) => {
    const grouping = {};
    analyses.forEach(an => {
      if (!grouping[an.grouping]) {
        grouping[an.grouping] = [an];
      } else {
        grouping[an.grouping].push(an);
      }
    });
    return grouping;
  }

  carouselChildInGroups(caList, childPerGroup) {
    if (caList.length <= childPerGroup) {
      return [caList];
    }
    const group = [];
    for (let i = 0; i < caList.length; i += childPerGroup) {
      group.push(caList.slice(i, i + childPerGroup));
    }
    return group;
  }

  render() {
    const analyses = typeof this.props.analyses === 'undefined' ? [] : this.props.analyses;
    const filtedAnalyses = this._filterCannedAnalyses(analyses);
    const groupedAnalyses = this._groupAnalyses(filtedAnalyses);
    const groupKeys = Object.keys(groupedAnalyses);
    const numInCarousel = this.state.width >= 1200 ? 3 : 2;

    return (
      <div className="row">
        <div className="col-xs-12 col-md-12 col-xl-12">
          <div className="row">
            <div className="col-xs-12 col-md-12 col-xl-12">
              <div className="col-xs-12 col-md-12 col-xl-12">
                <h3 className={styles['section-title']}>Canned Analyses</h3>
                <div className="row">
                  <div className="col-xs-12 col-md-6 col-xl-8">
                    <br />
                    <p>
                      A <em>Canned Analysis</em> is a pre-run analysis of a biomedical dataset
                      by a computational tool.

                      It is defined by 3 key elements: 1) Dataset accession(s),
                      2) Name of computational tool, and 3) a link to a webpage which
                      contains the results of the analysis browseable by users. This
                      is visualized by the adjacent figure.
                    </p>
                  </div>
                  <div className="col-xs-12 col-md-6 col-xl-4">
                    <img className={styles['ca-image']} src={cannedAnalysisImage} />
                  </div>
                </div>
                <br />
                <p>
                  For each canned analysis below, you can learn more about the specific
                  analysis by hovering over their respective subtitles for a full description.

                  You can additionally hover over the informational icon on the top right corner
                  and click on a dataset of interest for more information on the dataset being
                  analyzed.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-md-12 col-xl-12">
              <div className="col-xs-12 col-md-12 col-xl-12">
                <input
                  className={`form-control ${styles['search-bar']}`}
                  onChange={this._updateSearchQuery}
                  value={this.state.value}
                  style={{ display: 'block' }}
                  placeholder="Search"
                />
              </div>
              {
                groupKeys && groupKeys.length ? (
                  <div>
                    {
                      groupKeys.map((group, idx) => {
                        const grouping = this.carouselChildInGroups(groupedAnalyses[group], numInCarousel);
                        return (
                          <div key={idx} className="row">
                            <div className="col-xs-12 col-md-12 col-xl-12">
                              <div className="col-xs-12 col-md-12 col-xl-12">
                                {
                                  group === 'Dose-Response Cell Proliferation Analysis' ||
                                  group === 'MEMA Analysis' ?
                                  <h6><i>{group}</i></h6> :
                                  <h5><strong>{group}</strong></h5>
                                }
                              </div>
                            </div>
                            <div className="col-xs-12 col-md-12 col-xl-12">
                              <Carousel infinite={false}>
                                {
                                  grouping && grouping.map((carouselChildArr, idx2) => (
                                    <div key={idx2}>
                                      {
                                        carouselChildArr && carouselChildArr.length && carouselChildArr.map((ca, idx3) => (
                                          <div key={idx3} className="col-xs-12 col-md-6 col-xl-4">
                                            <CannedAnalysisCard
                                              incrementClick={this.props.cannedAnalysisIncrementClick}
                                              ca={ca}
                                            />
                                          </div>
                                        ))
                                      }
                                    </div>
                                  ))
                                }
                              </Carousel>
                            </div>
                            <br />
                          </div>
                        );
                      })
                    }
                  </div>
                ) : (
                  <div className="col-xs-12 col-md-12 col-xl-12">
                    No analysis found.
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CannedAnalysisModule.propTypes = {
  cannedAnalysisIncrementClick: PropTypes.func,
  loadCannedAnalyses: PropTypes.func,
  analyses: PropTypes.array,
};

export default connect(mapStateToProps,
  {
    loadCannedAnalyses,
    cannedAnalysisIncrementClick
  })(CannedAnalysisModule);
