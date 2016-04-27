import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import PageBanner from 'components/PageBanner';
import { loadTools } from 'actions/toolsWorkflows';
import ExpWorkflows from './ExpWorkflows';
import CompBioWorkflows from './CompBioWorkflows';
import Tool from 'components/Tool';
import styles from './AppsView.scss';

const sortTypes = [
  'All', 'Web Based UI', 'Processed L1000 Data',
  'Enrichment Analysis', 'APIs', 'MATLAB/Python Script',
];

const sortFeatures = [
  'All', 'Access', 'Search', 'Navigation', 'Integration', 'Visualization',
  'Download', 'Leverages Ontology', 'Image Analysis',
];

const sub = 'Tutorials, walkthroughs, and tools to help you be more productive with LINCS datasets';

const mapStateToProps = (state) => ({
  tools: state.toolsWorkflows.tools,
});

export class AppsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workflowCategory: 'exp',
      sortCenter: 'All',
      sortType: 'All',
      sortFeature: 'All',
    };
  }

  componentDidMount() {
    this.props.loadTools();
  }

  _checkAllTypes = (tool) => {
    const { sortType } = this.state;
    return (sortType === 'All') ||
      (sortType === 'Web Based UI' && tool.webBasedUi) ||
      (sortType === 'Processed L1000 Data' && tool.processedL1000Data) ||
      (sortType === 'Enrichment Analysis' && tool.enrichmentAnalysis) ||
      (sortType === 'APIs' && tool.api) ||
      (sortType === 'MATLAB/Python Script' && tool.matlabPythonScript);
  }

  _checkAllFeatures = (tool) => {
    const { sortFeature } = this.state;
    return (sortFeature === 'All') ||
      (sortFeature === 'Access' && tool.featureAccess) ||
      (sortFeature === 'Search' && tool.featureSearch) ||
      (sortFeature === 'Navigation' && tool.featureNavigation) ||
      (sortFeature === 'Integration' && tool.featureIntegration) ||
      (sortFeature === 'Visualization' && tool.featureVisualization) ||
      (sortFeature === 'Download' && tool.featureDownload) ||
      (sortFeature === 'Leverages Ontology' && tool.featureLeverageOntology) ||
      (sortFeature === 'Image Analysis' && tool.featureImageAnalysis);
  }

  _filterTools = (tool) => {
    const centerName = tool.center.name;
    const { sortCenter, sortType, sortFeature } = this.state;
    if (sortCenter === 'All' && sortType === 'All' && sortFeature === 'All') {
      return true;
    } else if (sortCenter === 'All') {
      return this._checkAllTypes(tool) && this._checkAllFeatures(tool);
    } else if (sortType === 'All' && sortFeature === 'All') {
      return centerName === sortCenter;
    } else if (sortType === 'All') {
      return centerName === sortCenter && this._checkAllFeatures(tool);
    } else if (sortFeature === 'All') {
      return centerName === sortCenter && this._checkAllTypes(tool);
    }
    return centerName === sortCenter && this._checkAllTypes(tool) && this._checkAllFeatures(tool);
  }

  _handleExpClicked = () => { this.setState({ workflowCategory: 'exp' }); }
  _handleCompBioClicked = () => { this.setState({ workflowCategory: 'compBio' }); }

  _handleSortCenterChanged = (e) => {
    this.setState({ sortCenter: e.target.value });
  }

  _handleSortTypeChanged = (e) => {
    this.setState({ sortType: e.target.value });
  }

  _handleSortFeatureChanged = (e) => {
    this.setState({ sortFeature: e.target.value });
  }

  render() {
    const { workflowCategory, fetchingTools, sortCenter, sortType, sortFeature } = this.state;
    const isExp = workflowCategory === 'exp';
    const isCompBio = workflowCategory === 'compBio';
    // http://stackoverflow.com/questions/15125920/how-to-get-distinct-values-from-an-array-of-objects-in-javascript
    // ES6 get unique elements
    const centers = ['All', ...new Set(this.props.tools.map(tool => tool.center.name))];
    const tools = this.props.tools.filter(this._filterTools);
    return (
      <div className={styles.wrapper}>
        <PageBanner title="LINCS Workflows & Applications" subTitle={sub} />
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h2 className={styles['wf-title']}>Workflows</h2>
              <div className={`btn-group ${styles.categories}`} data-toggle="buttons">
                <label
                  onClick={this._handleExpClicked}
                  className={`btn ${styles['category-check']} ${isExp ? styles.active : ''}`}
                >
                  <input
                    type="radio"
                    name="exp"
                    defaultChecked={isExp}
                  />
                  For Experimentalists
                </label>
                <label
                  onClick={this._handleCompBioClicked}
                  className={`btn ${styles['category-check']} ${isCompBio ? styles.active : ''}`}
                >
                  <input
                    type="radio"
                    name="compBio"
                    defaultChecked={isCompBio}
                  />
                  For Computational Biologists
                </label>
              </div>
              <div className={styles.workflow}>
                <ReactCSSTransitionGroup
                  transitionName={{ enter: styles.enter, enterActive: styles['enter-active'] }}
                  transitionEnterTimeout={750}
                  transitionLeave={false}
                >
                  {isExp ? <ExpWorkflows key="exp" /> : <CompBioWorkflows key="compBio" />}
                </ReactCSSTransitionGroup>
              </div>
              <h2 className="text-xs-center text-sm-left">
                LINCS Application Marketplace{' '}
                {fetchingTools && <i className="fa fa-circle-o-notch fa-spin" />}
              </h2>
              <form className={styles.flex}>
                <div className={styles.filter}>
                  <label htmlFor="sort-center">Center</label>
                  <select
                    id="sort-center"
                    className={`form-control ${styles.select}`}
                    onChange={this._handleSortCenterChanged}
                    value={sortCenter}
                  >
                    {centers.map((center, i) => <option key={i} value={center}>{center}</option>)}
                  </select>
                </div>
                <div className={styles.filter}>
                  <label htmlFor="sort-type">Type</label>
                  <select
                    id="sort-type"
                    className={`form-control ${styles.select}`}
                    onChange={this._handleSortTypeChanged}
                    value={sortType}
                  >
                    {sortTypes.map((type, i) => <option key={i} value={type}>{type}</option>)}
                  </select>
                </div>
                <div className={styles.filter}>
                  <label htmlFor="sort-feature">Features</label>
                  <select
                    id="sort-feature"
                    className={`form-control ${styles.select}`}
                    onChange={this._handleSortFeatureChanged}
                    value={sortFeature}
                  >
                    {sortFeatures.map((feat, i) => <option key={i} value={feat}>{feat}</option>)}
                  </select>
                </div>
              </form>
              <div className="row">
                {
                  tools.map(tool =>
                    <div key={tool.id} className="col-xs-12 col-md-6 col-xl-4">
                      <Tool tool={tool} />
                    </div>
                  )
                }
                {
                  !tools.length &&
                  <h5 className="m-t-3 text-xs-center">
                    No tools found. Please try another filter.
                  </h5>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AppsView.propTypes = {
  loadTools: PropTypes.func,
  tools: PropTypes.array,
};

export default connect(mapStateToProps, { loadTools })(AppsView);
