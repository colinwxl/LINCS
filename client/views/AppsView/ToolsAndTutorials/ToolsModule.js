import React, { PropTypes, Component } from 'react';
import Select from 'react-select-plus';
import 'react-select-plus/dist/react-select-plus.css';

import Tool from 'components/Tool';
import styles from '../AppsView.scss';

const sortOptions = [
  { value: 'Popularity', label: 'Popularity' },
  { value: 'Ascending', label: 'Ascending' },
  { value: 'Descending', label: 'Descending' },
  { value: 'Center', label: 'Center' },
];

const multiSelectCenters = [
  { value: 'BD2K-LINCS DCIC', label: 'BD2K-LINCS DCIC' },
  { value: 'BroadT LINCS', label: 'BroadT LINCS' },
  { value: 'DToxS', label: 'DToxS' },
  { value: 'HMS LINCS', label: 'HMS LINCS' },
  { value: 'LINCS PCCSE', label: 'LINCS PCCSE' },
  { value: 'MEP LINCS', label: 'MEP LINCS' },
  { value: 'NeuroLINCS', label: 'NeuroLINCS' },
];

const multiSelectDataTypes = [
  { value: 'Cell State Data', label: 'Cell State Data' },
  { value: 'Drug Binding Data', label: 'Drug Binding Data' },
  { value: 'Morphology Data', label: 'Morphology Data' },
  { value: 'Protein Data', label: 'Protein Data' },
  { value: 'Transcript Data', label: 'Transcript Data' },
];

const multiSelectRoles = [
  { value: 'Data Analysis', label: 'Data Analysis' },
  { value: 'Data Documentation', label: 'Data Documentation' },
  { value: 'Data Formatting', label: 'Data Formatting' },
  { value: 'Data Integration', label: 'Data Integration' },
  { value: 'Data Storage', label: 'Data Storage' },
  { value: 'Data Visualization', label: 'Data Visualization' },
  { value: 'Network Analysis', label: 'Network Analysis' },
  { value: 'Signature Generation', label: 'Signature Generation' },
];

const multiSelectFeatures = [
  { value: 'API', label: 'API' },
  { value: 'Command Line', label: 'Command Line' },
  { value: 'Database', label: 'Database' },
  { value: 'Documentation', label: 'Documentation' },
  { value: 'Ontology', label: 'Ontology' },
  { value: 'Open Source', label: 'Open Source' },
  { value: 'Provenance', label: 'Provenance' },
  { value: 'Scripting', label: 'Scripting' },
  { value: 'Search Engine', label: 'Search Engine' },
  { value: 'Versioning', label: 'Versioning' },
  { value: 'Web-based', label: 'Web-based' },
];

export default class ToolsModule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: '',
      centerFilters: '',
      dataTypeFilters: '',
      roleFilters: '',
      featureFilters: '',
    };
  }

  checkAllCenters = (tool) => {
    const { centerFilters } = this.state;
    return (centerFilters === '') ||
    (centerFilters.indexOf('BD2K-LINCS DCIC') !== -1
      && tool.centers.some(center => center.name === 'BD2K-LINCS DCIC')) ||
    (centerFilters.indexOf('BroadT LINCS') !== -1
      && tool.centers.some(center => center.name === 'BroadT LINCS')) ||
    (centerFilters.indexOf('DToxS') !== -1
      && tool.centers.some(center => center.name === 'DToxS')) ||
    (centerFilters.indexOf('HMS LINCS') !== -1
      && tool.centers.some(center => center.name === 'HMS LINCS')) ||
    (centerFilters.indexOf('LINCS PCCSE') !== -1
      && tool.centers.some(center => center.name === 'LINCS PCCSE')) ||
    (centerFilters.indexOf('MEP LINCS') !== -1
      && tool.centers.some(center => center.name === 'MEP LINCS')) ||
    (centerFilters.indexOf('NeuroLINCS') !== -1
      && tool.centers.some(center => center.name === 'NeuroLINCS'));
  }

  checkAllDataTypes = (tool) => {
    const { dataTypeFilters } = this.state;
    return (dataTypeFilters === '') ||
    (dataTypeFilters.indexOf('Cell State Data') !== -1 && tool.cellStateData) ||
    (dataTypeFilters.indexOf('Drug Binding Data') !== -1 && tool.drugBindingData) ||
    (dataTypeFilters.indexOf('Morphology Data') !== -1 && tool.morphologyData) ||
    (dataTypeFilters.indexOf('Protein Data') !== -1 && tool.proteinData) ||
    (dataTypeFilters.indexOf('Transcript Data') !== -1 && tool.transcriptData);
  }

  checkAllRoles = (tool) => {
    const { roleFilters } = this.state;
    return (roleFilters === '') ||
      (roleFilters.indexOf('Data Analysis') !== -1 && tool.dataAnalysis) ||
      (roleFilters.indexOf('Data Documentation') !== -1 && tool.dataDocumentation) ||
      (roleFilters.indexOf('Data Formatting') !== -1 && tool.dataFormatting) ||
      (roleFilters.indexOf('Data Integration') !== -1 && tool.dataIntegration) ||
      (roleFilters.indexOf('Data Storage') !== -1 && tool.dataStorage) ||
      (roleFilters.indexOf('Data Visualization') !== -1 && tool.dataVisualization) ||
      (roleFilters.indexOf('Network Analysis') !== -1 && tool.networkAnalysis) ||
      (roleFilters.indexOf('Signature Generation') !== -1 && tool.signatureGeneration);
  }

  checkAllFeatures = (tool) => {
    const { featureFilters } = this.state;
    return (featureFilters === '') ||
      (featureFilters.indexOf('API') !== -1 && tool.api) ||
      (featureFilters.indexOf('Command Line') !== -1 && tool.commandLine) ||
      (featureFilters.indexOf('Database') !== -1 && tool.database) ||
      (featureFilters.indexOf('Documentation') !== -1 && tool.documentation) ||
      (featureFilters.indexOf('Ontology') !== -1 && tool.ontology) ||
      (featureFilters.indexOf('Open Source') !== -1 && tool.openSource) ||
      (featureFilters.indexOf('Provenance') !== -1 && tool.provenance) ||
      (featureFilters.indexOf('Scripting') !== -1 && tool.scripting) ||
      (featureFilters.indexOf('Search Engine') !== -1 && tool.searchEngine) ||
      (featureFilters.indexOf('Versioning') !== -1 && tool.versioning) ||
      (featureFilters.indexOf('Web-based') !== -1 && tool.webBased);
  }

  filterTools = (tool) => {
    const { centerFilters, dataTypeFilters, roleFilters, featureFilters } = this.state;
    if (centerFilters === '' &&
        dataTypeFilters === '' &&
        roleFilters === '' &&
        featureFilters === '') {
      return true;
    } else if (centerFilters === '') {
      return this.checkAllDataTypes(tool) &&
             this.checkAllRoles(tool) &&
             this.checkAllFeatures(tool);
    } else if (dataTypeFilters === '') {
      return this.checkAllCenters(tool) &&
             this.checkAllRoles(tool) &&
             this.checkAllFeatures(tool);
    } else if (roleFilters === '') {
      return this.checkAllCenters(tool) &&
             this.checkAllDataTypes(tool) &&
             this.checkAllFeatures(tool);
    } else if (featureFilters === '') {
      return this.checkAllCenters(tool) &&
             this.checkAllDataTypes(tool) &&
             this.checkAllRoles(tool);
    }
    return this.checkAllCenters(tool) &&
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

  sortToolsByPopularityThenName = (t1, t2) => {
    const toolAClicks = t1.clicks;
    const toolBClicks = t2.clicks;
    if (toolAClicks < toolBClicks) {
      return 1;
    } else if (toolAClicks > toolBClicks) {
      return -1;
    }
    const toolAName = t1.name;
    const toolBName = t2.name;
    if (toolAName > toolBName) {
      return 1;
    } else if (toolAName < toolBName) {
      return -1;
    }
    return 0;
  }

  sortTools = (tools, sortBy) => {
    if (sortBy === 'Popularity') {
      return tools.sort(this.sortToolsByPopularityThenName);
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

  handleSortByChanged = (val) => {
    this.setState({ sortBy: val });
  }

  handleCentersSelect = (val) => {
    this.setState({ centerFilters: val });
  }

  handleDataTypeSelect = (val) => {
    this.setState({ dataTypeFilters: val });
  }

  handleRoleSelect = (val) => {
    this.setState({ roleFilters: val });
  }

  handleFeatureSelect = (val) => {
    this.setState({ featureFilters: val });
  }

  render() {
    const { fetchingTools, sortBy } = this.state;
    const { tools } = this.props;
    const toolsSortedByPopularityThenName = tools.sort(this.sortToolsByPopularityThenName);
    const sortedTools = this.sortTools(
      toolsSortedByPopularityThenName.filter(this.filterTools),
      sortBy
    );
    const toolsList = (
      <div className="row">
        <div className={`col-xl-2 ${styles.sort}`}>
          <label className={styles['label-title']}>Sort by</label>
          <Select
            className={styles.uniSelectSort}
            value={this.state.sortBy}
            name="form-field-name"
            placeholder="Popularity"
            options={sortOptions}
            onChange={this.handleSortByChanged}
            simpleValue
          />
        </div>

        <div className={`col-xl-10 ${styles.filter}`}>
          <div className="row">
            <div className="col-xl-12">
              <label className={styles['label-title']}>Filter by</label>
              <div className={`${styles['filter-item']}`}>
                <label htmlFor="sort-center">Center</label>
                <Select
                  className={styles.multiSelectCenter}
                  value={this.state.centerFilters}
                  name="form-field-name"
                  placeholder="All"
                  options={multiSelectCenters}
                  onChange={this.handleCentersSelect}
                  multi
                  simpleValue
                />
              </div>

              <div className={`${styles['filter-item']}`}>
                <label htmlFor="sort-type">
                  Data Type
                </label>

                <Select
                  className={styles.multiSelectDataType}
                  value={this.state.dataTypeFilters}
                  name="form-field-name"
                  placeholder="All"
                  options={multiSelectDataTypes}
                  onChange={this.handleDataTypeSelect}
                  multi
                  simpleValue
                />
              </div>

              <div className={`${styles['filter-item']}`}>
                <label htmlFor="sort-role">
                  Role
                </label>
                <Select
                  className={styles.multiSelectRole}
                  value={this.state.roleFilters}
                  name="form-field-name"
                  placeholder="All"
                  options={multiSelectRoles}
                  onChange={this.handleRoleSelect}
                  multi
                  simpleValue
                />
              </div>

              <div className={`${styles['filter-item']}`}>
                <label htmlFor="sort-feature">
                  Feature
                </label>
                <Select
                  className={styles.multiSelectFeature}
                  value={this.state.featureFilters}
                  name="form-field-name"
                  placeholder="All"
                  options={multiSelectFeatures}
                  onChange={this.handleFeatureSelect}
                  multi
                  simpleValue
                />
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
            sortedTools.map(tool =>
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
