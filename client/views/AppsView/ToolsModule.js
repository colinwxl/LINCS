import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import { loadTools } from 'actions/toolsWorkflows';
import Tool from 'components/Tool';
import styles from './AppsView.scss';

const sortOptions = [
  'Featured', 'A-Z', 'Center',
];

const filterByDataTypes = [
  'All', 'Cell State Data', 'Drug Binding Data', 'Morphology Data', 'Protein Data',
  'Transcript Data',
];

const filterByRoles = [
  'All', 'Data Analysis', 'Data Documentation', 'Data Formatting', 'Data Integration',
  'Data Storage', 'Data Visualization', 'Network Analysis', 'Signature Generation',
];

const filterByFeatures = [
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
      sortBy: 'Featured',
      filterByCenter: 'All',
      filterByDataType: 'All',
      filterByRole: 'All',
      filterByFeature: 'All',
    };
  }

  componentDidMount() {
    this.props.loadTools();
  }

  checkAllDataTypes = (tool) => {
    const { filterByDataType } = this.state;
    return (filterByDataType === 'All') ||
      (filterByDataType === 'Cell State Data' && tool.cellStateData) ||
      (filterByDataType === 'Drug Binding Data' && tool.drugBindingData) ||
      (filterByDataType === 'Morphology Data' && tool.morphologyData) ||
      (filterByDataType === 'Protein Data' && tool.proteinData) ||
      (filterByDataType === 'Transcript Data' && tool.transcriptData);
  }

  checkAllRoles = (tool) => {
    const { filterByRole } = this.state;
    return (filterByRole === 'All') ||
      (filterByRole === 'Data Analysis' && tool.dataAnalysis) ||
      (filterByRole === 'Data Documentation' && tool.dataDocumentation) ||
      (filterByRole === 'Data Formatting' && tool.dataFormatting) ||
      (filterByRole === 'Data Integration' && tool.dataIntegration) ||
      (filterByRole === 'Data Storage' && tool.dataStorage) ||
      (filterByRole === 'Data Visualization' && tool.dataVisualization) ||
      (filterByRole === 'Network Analysis' && tool.networkAnalysis) ||
      (filterByRole === 'Signature Generation' && tool.signatureGeneration);
  }

  checkAllFeatures = (tool) => {
    const { filterByFeature } = this.state;
    return (filterByFeature === 'All') ||
      (filterByFeature === 'API' && tool.api) ||
      (filterByFeature === 'Command Line' && tool.commandLine) ||
      (filterByFeature === 'Database' && tool.database) ||
      (filterByFeature === 'Documentation' && tool.documentation) ||
      (filterByFeature === 'Ontology' && tool.ontology) ||
      (filterByFeature === 'Open Source' && tool.openSource) ||
      (filterByFeature === 'Provenance' && tool.provenance) ||
      (filterByFeature === 'Scripting' && tool.scripting) ||
      (filterByFeature === 'Search Engine' && tool.searchEngine) ||
      (filterByFeature === 'Versioning' && tool.versioning) ||
      (filterByFeature === 'Web-based' && tool.webBased);
  }

  filterTools = (tool) => {
    const centersName = tool.centers.map(center => center.name);
    const { filterByCenter, filterByDataType, filterByRole, filterByFeature } = this.state;
    if (filterByCenter === 'All' &&
        filterByDataType === 'All' &&
        filterByRole === 'All' &&
        filterByFeature === 'All') {
      return true;
    } else if (filterByCenter === 'All') {
      return this.checkAllDataTypes(tool) &&
             this.checkAllRoles(tool) &&
             this.checkAllFeatures(tool);
    } else if (filterByDataType === 'All' &&
               filterByRole === 'All' &&
               filterByFeature === 'All') {
      return centersName.includes(filterByCenter);
    } else if (filterByDataType === 'All') {
      return centersName.includes(filterByCenter) &&
             this.checkAllRoles(tool) &&
             this.checkAllFeatures(tool);
    } else if (filterByRole === 'All') {
      return centersName.includes(filterByCenter) &&
             this.checkAllDataTypes(tool) &&
             this.checkAllFeatures(tool);
    } else if (filterByFeature === 'All') {
      return centersName.includes(filterByCenter) &&
             this.checkAllDataTypes(tool) &&
             this.checkAllRoles(tool);
    }
    return centersName.includes(filterByCenter) &&
           this.checkAllDataTypes(tool) &&
           this.checkAllRoles(tool) &&
           this.checkAllFeatures(tool);
  }

  // sortByProperty = (items, property) => {
  //   return items.sort((a, b) => {
  //     let propertyA = a[property]; // ignore upper and lowercase
  //     let propertyB = b[property]; // ignore upper and lowercase
  //     if (propertyA < propertyB) {
  //       return -1;
  //     }
  //     if (propertyA > propertyB) {
  //       return 1;
  //     }
  //     return 0;
  //   });
  // }

  sortTools = (tools, sortBy) => {
    if (sortBy === 'Featured') {
      return tools.sort((t1, t2) => {
        const toolAOrder = t1.order;
        const toolBOrder = t2.order;
        if (toolAOrder < toolBOrder) {
          return -1;
        }
        if (toolAOrder > toolBOrder) {
          return 1;
        }
        return 0;
      });
    } else if (sortBy === 'A-Z') {
      return tools.sort((t1, t2) => {
        const toolAName = t1.name;
        const toolBName = t2.name;
        if (toolAName < toolBName) {
          return -1;
        }
        if (toolAName > toolBName) {
          return 1;
        }
        return 0;
      });
    } else if (sortBy === 'Center') {
      return tools.sort((t1, t2) => {
        const toolACenter = t1.centers[0].name.toUpperCase();
        const toolBCenter = t2.centers[0].name.toUpperCase();
        if (toolACenter < toolBCenter) {
          return -1;
        }
        if (toolACenter > toolBCenter) {
          return 1;
        }
        return 0;
      });
    }
    return tools;
  }

  handleSortByChanged = (e) => {
    this.setState({ sortBy: e.target.value });
  }

  handleFilterByCenterChanged = (e) => {
    this.setState({ filterByCenter: e.target.value });
  }

  handleFilterByRoleChanged = (e) => {
    this.setState({ filterByRole: e.target.value });
  }

  handleFilterByDataTypeChanged = (e) => {
    this.setState({ filterByDataType: e.target.value });
  }

  handleFilterByFeatureChanged = (e) => {
    this.setState({ filterByFeature: e.target.value });
  }

  render() {
    const { fetchingTools,
            sortBy,
            filterByCenter,
            filterByDataType,
            filterByRole,
            filterByFeature } = this.state;

    const centers = ['All', ...new Set(this.props.tools.map(tool => tool.centers[0].name))].sort();
    const tools = this.sortTools(this.props.tools.filter(this.filterTools), sortBy);

    const toolsList = (
      <div>
        <form className={styles.flex}>
          <div className={styles.filter}>
            <label htmlFor="sort-center">Sort by</label>
            <select
              id="sort-center"
              className={`form-control ${styles.select}`}
              onChange={this.handleSortByChanged}
              value={sortBy}
            >
              {
                sortOptions.map((sortOption, i) =>
                  <option key={i} value={sortOption}>
                    {sortOption}
                  </option>
                )
              }
            </select>
          </div>

          <div className={styles.filter}>
            <label htmlFor="sort-center">Center</label>
            <select
              id="sort-center"
              className={`form-control ${styles.select}`}
              onChange={this.handleFilterByCenterChanged}
              value={filterByCenter}
            >
              {centers.map((center, i) => <option key={i} value={center}>{center}</option>)}
            </select>
          </div>
          <div className={styles.filter}>
            <label htmlFor="sort-type">Data Type</label>
            <select
              id="sort-type"
              className={`form-control ${styles.select}`}
              onChange={this.handleFilterByDataTypeChanged}
              value={filterByDataType}
            >
              {
                filterByDataTypes.map((type, i) =>
                  <option key={i} value={type}>{type}</option>)
              }
            </select>
          </div>
          <div className={styles.filter}>
            <label htmlFor="sort-role">Role</label>
            <select
              id="sort-role"
              className={`form-control ${styles.select}`}
              onChange={this.handleFilterByRoleChanged}
              value={filterByRole}
            >
              {
                filterByRoles.map((role, i) =>
                  <option key={i} value={role}>{role}</option>)
              }
            </select>
          </div>
          <div className={styles.filter}>
            <label htmlFor="sort-feature">Feature</label>
            <select
              id="sort-feature"
              className={`form-control ${styles.select}`}
              onChange={this.handleFilterByFeatureChanged}
              value={filterByFeature}
            >
              {filterByFeatures.map((feat, i) => <option key={i} value={feat}>{feat}</option>)}
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
    );

    return (
      <div>
        <h2 id="tools" className="text-xs-center text-sm-left">
          LINCS Applications Marketplace{' '}
          {fetchingTools && <i className="fa fa-circle-o-notch fa-spin" />}
        </h2>
        {toolsList}
      </div>
    );
  }
}

ToolsModule.propTypes = {
  loadTools: PropTypes.func,
  tools: PropTypes.array,
};

export default connect(mapStateToProps, { loadTools })(ToolsModule);
