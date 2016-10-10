import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import { loadTools } from 'actions/toolsWorkflows';
import Tool from 'components/Tool';
import styles from './AppsView.scss';


const sortDataTypes = [
  'All', 'Cell State Data', 'Drug Binding Data', 'Morphology Data', 'Protein Data',
  'Transcript Data',
];

const sortRoles = [
  'All', 'Data Analysis', 'Data Documentation', 'Data Formatting', 'Data Integration',
  'Data Storage', 'Data Visualization', 'Network Analysis', 'Signature Generation',
];

const sortFeatures = [
  'All', 'API', 'Command Line', 'Database', 'Documentation', 'Ontology', 'Open Source',
  'Provenance', 'Scripting', 'Search Engine', 'Versioning', 'Web-based',
];

const mapStateToProps = (state) => ({
  tools: state.toolsWorkflows.tools,
});

export class ToolsModule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortCenter: 'All',
      sortDataType: 'All',
      sortRole: 'All',
      sortFeature: 'All',
      appsCategory: 'tools',
    };
  }

  componentDidMount() {
    this.props.loadTools();
  }

  checkAllDataTypes = (tool) => {
    const { sortDataType } = this.state;
    return (sortDataType === 'All') ||
      (sortDataType === 'Cell State Data' && tool.cellStateData) ||
      (sortDataType === 'Drug Binding Data' && tool.drugBindingData) ||
      (sortDataType === 'Morphology Data' && tool.morphologyData) ||
      (sortDataType === 'Protein Data' && tool.proteinData) ||
      (sortDataType === 'Transcript Data' && tool.transcriptData);
  }

  checkAllRoles = (tool) => {
    const { sortRole } = this.state;
    return (sortRole === 'All') ||
      (sortRole === 'Data Analysis' && tool.dataAnalysis) ||
      (sortRole === 'Data Documentation' && tool.dataDocumentation) ||
      (sortRole === 'Data Formatting' && tool.dataFormatting) ||
      (sortRole === 'Data Integration' && tool.dataIntegration) ||
      (sortRole === 'Data Storage' && tool.dataStorage) ||
      (sortRole === 'Data Visualization' && tool.dataVisualization) ||
      (sortRole === 'Network Analysis' && tool.networkAnalysis) ||
      (sortRole === 'Signature Generation' && tool.signatureGeneration);
  }

  checkAllFeatures = (tool) => {
    const { sortFeature } = this.state;
    return (sortFeature === 'All') ||
      (sortFeature === 'API' && tool.api) ||
      (sortFeature === 'Command Line' && tool.commandLine) ||
      (sortFeature === 'Database' && tool.database) ||
      (sortFeature === 'Documentation' && tool.documentation) ||
      (sortFeature === 'Ontology' && tool.ontology) ||
      (sortFeature === 'Open Source' && tool.openSource) ||
      (sortFeature === 'Provenance' && tool.provenance) ||
      (sortFeature === 'Scripting' && tool.scripting) ||
      (sortFeature === 'Search Engine' && tool.searchEngine) ||
      (sortFeature === 'Versioning' && tool.versioning) ||
      (sortFeature === 'Web-based' && tool.webBased);
  }

  filterTools = (tool) => {
    const centersName = tool.centers.map(center => center.name);
    const { sortCenter, sortDataType, sortRole, sortFeature } = this.state;
    if (sortCenter === 'All' &&
        sortDataType === 'All' &&
        sortRole === 'All' &&
        sortFeature === 'All') {
      return true;
    } else if (sortCenter === 'All') {
      return this.checkAllDataTypes(tool) &&
             this.checkAllRoles(tool) &&
             this.checkAllFeatures(tool);
    } else if (sortDataType === 'All' &&
               sortRole === 'All' &&
               sortFeature === 'All') {
      return centersName.includes(sortCenter);
    } else if (sortDataType === 'All') {
      return centersName.includes(sortCenter) &&
             this.checkAllRoles(tool) &&
             this.checkAllFeatures(tool);
    } else if (sortRole === 'All') {
      return centersName.includes(sortCenter) &&
             this.checkAllDataTypes(tool) &&
             this.checkAllFeatures(tool);
    } else if (sortFeature === 'All') {
      return centersName.includes(sortCenter) &&
             this.checkAllDataTypes(tool) &&
             this.checkAllRoles(tool);
    }
    return centersName.includes(sortCenter) &&
           this.checkAllDataTypes(tool) &&
           this.checkAllRoles(tool) &&
           this.checkAllFeatures(tool);
  }

  handleSortCenterChanged = (e) => {
    this.setState({ sortCenter: e.target.value });
  }

  handleSortRoleChanged = (e) => {
    this.setState({ sortRole: e.target.value });
  }

  handleSortDataTypeChanged = (e) => {
    this.setState({ sortDataType: e.target.value });
  }

  handleSortFeatureChanged = (e) => {
    this.setState({ sortFeature: e.target.value });
  }

  handleToolTabClicked = () => { this.setState({ appsCategory: 'tools' }); }
  handleDSATTabClicked = () => { this.setState({ appsCategory: 'dsat' }); }

  render() {
    const { fetchingTools,
            sortCenter,
            sortDataType,
            sortRole,
            sortFeature,
            appsCategory } = this.state;

    const isTools = appsCategory === 'tools';
    const isDSAT = appsCategory === 'dsat';

    const centers = ['All', ...new Set(this.props.tools.map(tool => tool.centers[0].name))].sort();
    const tools = this.props.tools.filter(this.filterTools);

    return (
      <div>
        <h2 id="tools" className="text-xs-center text-sm-left">
          LINCS Applications{' '}
          {fetchingTools && <i className="fa fa-circle-o-notch fa-spin" />}
        </h2>
        <div className={`btn-group ${styles.categories}`} data-toggle="buttons">
          <label
            onClick={this.handleToolTabClicked}
            className={`btn ${styles['category-check']} ${isTools ? styles.active : ''}`}
          >
            <input
              type="radio"
              name="tools"
              defaultChecked={isTools}
            />
            Tools
          </label>
          <label
            onClick={this.handleDSATTabClicked}
            className={`btn ${styles['category-check']} ${isDSAT ? styles.active : ''}`}
          >
            <input
              type="radio"
              name="dsat"
              defaultChecked={isDSAT}
            />
            Dataset-associated Tools
          </label>
        </div>
        
        <div className={styles.toolsmodule}>
          <form className={styles.flex}>
            <div className={styles.filter}>
              <label htmlFor="sort-center">Center</label>
              <select
                id="sort-center"
                className={`form-control ${styles.select}`}
                onChange={this.handleSortCenterChanged}
                value={sortCenter}
              >
                {centers.map((center, i) => <option key={i} value={center}>{center}</option>)}
              </select>
            </div>
            <div className={styles.filter}>
              <label htmlFor="sort-type">Data Type</label>
              <select
                id="sort-type"
                className={`form-control ${styles.select}`}
                onChange={this.handleSortDataTypeChanged}
                value={sortDataType}
              >
                {
                  sortDataTypes.map((type, i) =>
                    <option key={i} value={type}>{type}</option>)
                }
              </select>
            </div>
            <div className={styles.filter}>
              <label htmlFor="sort-role">Role</label>
              <select
                id="sort-role"
                className={`form-control ${styles.select}`}
                onChange={this.handleSortRoleChanged}
                value={sortRole}
              >
                {
                  sortRoles.map((role, i) =>
                    <option key={i} value={role}>{role}</option>)
                }
              </select>
            </div>
            <div className={styles.filter}>
              <label htmlFor="sort-feature">Feature</label>
              <select
                id="sort-feature"
                className={`form-control ${styles.select}`}
                onChange={this.handleSortFeatureChanged}
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
    );
  }
}

ToolsModule.propTypes = {
  loadTools: PropTypes.func,
  tools: PropTypes.array,
};

export default connect(mapStateToProps, { loadTools })(ToolsModule);
