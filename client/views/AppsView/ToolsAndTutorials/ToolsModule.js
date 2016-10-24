import React, { PropTypes, Component } from 'react';
import Select from 'react-select-plus';
import 'react-select-plus/dist/react-select-plus.css';

import Tool from 'components/Tool';
import styles from '../AppsView.scss';

const sortOptions = [
  'Shuffled', 'Ascending', 'Descending', 'Center',
  // 'Most Popular', 'Featured',
];

const multiSelectDataType = [
  { value: 'Cell State Data', label: 'Cell State Data' },
  { value: 'Drug Binding Data', label: 'Drug Binding Data' },
  { value: 'Morphology Data', label: 'Morphology Data' },
  { value: 'Protein Data', label: 'Protein Data' },
  { value: 'Transcript Data', label: 'Transcript Data' },
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

export default class ToolsModule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: 'Shuffled',
      dataTypeFilters: "",
      centerFilters: "",
      roleFilters: "",
      featureFilters: "",
      // unecessary below
      filterByCenter: 'All',
      filterByDataType: 'All',
      filterByRole: 'All',
      filterByFeature: 'All',
    };
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

  shuffleTools = (tools) => {
    const result = tools.slice(0);
    for (let i = result.length - 1; i > 0; i--) {
      const randPos = Math.floor(Math.random() * (i + 1));
      const temp = result[i];
      result[i] = result[randPos];
      result[randPos] = temp;
    }
    return result;
  }

  sortTools = (tools, sortBy) => {
    // if (sortBy === 'Featured') {
    // return tools.sort((t1, t2) => {
    //   const toolAOrder = t1.order;
    //   const toolBOrder = t2.order;
    //   if (toolAOrder < toolBOrder) {
    //     return -1;
    //   }
    //   if (toolAOrder > toolBOrder) {
    //     return 1;
    //   }
    //   return 0;
    // });
    // }
  //   if (sortBy === 'Most Popular') {
  //    return tools.sort((t1, t2) => {
  //      const toolAClicks = t1.clicks;
  //      const toolBClicks = t2.clicks;
  //      if (toolAClicks < toolBClicks) {
  //        return 1;
  //      }
  //      if (toolAClicks > toolBClicks) {
  //        return -1;
  //      }
  //      return 0;
  //    });
  //  }
    if (sortBy === 'Shuffled') {
      return this.shuffleTools(tools);
    } else if (sortBy === 'Ascending') {
      return tools.sort((t1, t2) => {
        const toolAName = t1.name.toUpperCase();
        const toolBName = t2.name.toUpperCase();
        if (toolAName < toolBName) {
          return -1;
        }
        if (toolAName > toolBName) {
          return 1;
        }
        return 0;
      });
    } else if (sortBy === 'Descending') {
      return tools.sort((t1, t2) => {
        const toolAName = t1.name.toUpperCase();
        const toolBName = t2.name.toUpperCase();
        if (toolAName < toolBName) {
          return 1;
        }
        if (toolAName > toolBName) {
          return -1;
        }
        return 0;
      });
    } else if (sortBy === 'Center') {
      return tools.sort((t1, t2) => {
        const toolACenter = t1.centers[0].name.toUpperCase();
        const toolBCenter = t2.centers[0].name.toUpperCase();
        const toolAName = t1.name.toUpperCase();
        const toolBName = t2.name.toUpperCase();
        if (toolACenter < toolBCenter) {
          return -1;
        }
        if (toolACenter > toolBCenter) {
          return 1;
        }
        if (toolAName < toolBName) {
          return -1;
        }
        if (toolAName > toolBName) {
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

  handleDataTypeSelect = (val) => {
    this.setState({ dataTypeFilters: val });
    console.log(this.state.dataTypeFilters);
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
      <div className="row">
        <div className={`col-xl-2 ${styles.sort}`}>
          <label className={styles['label-title']}>Order</label>
          <select
            id="order"
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

        <div className={`col-lg-10 ${styles.filter}`}>
          <div className="row">
            <div className="col-xl-12">
              <label className={styles['label-title']}>Filter by</label>
              <div className={`${styles['filter-item']}`}>
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

              <div className={`${styles['filter-item']}`}>
                <label htmlFor="sort-type">Data Type</label>
                <Select
                  className={styles.multiselect}
                  value={this.state.dataTypeFilters}
                  name="form-field-name"
                  placeholder="All"
                  options={multiSelectDataType}
                  onChange={this.handleDataTypeSelect}
                  multi
                  simpleValue
                />
              </div>

              <div className={`${styles['filter-item']}`}>
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

              <div className={`${styles['filter-item']}`}>
                <label htmlFor="sort-feature">Feature</label>
                <select
                  id="sort-feature"
                  className={`form-control ${styles.select}`}
                  onChange={this.handleFilterByFeatureChanged}
                  value={filterByFeature}
                >
                  {
                    filterByFeatures.map(
                      (feat, i) => <option key={i} value={feat}>{feat}</option>
                    )
                  }
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

    return (
      <div>
        <h2 id="tools" className="text-xs-center text-sm-left">
          {fetchingTools && <i className="fa fa-circle-o-notch fa-spin" />}
        </h2>
        {toolsList}
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
                No tools found. Please try another filter or try again later.
              </h5>
          }
        </div>
      </div>
    );
  }
}

ToolsModule.propTypes = {
  tools: PropTypes.array,
};
