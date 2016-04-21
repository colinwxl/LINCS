import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import extend from 'extend';

import styles from './PublicationsView.scss';
import PageBanner from 'components/PageBanner';
import Publication from './Publication';
import PubCheckBox from './PubCheckBox';
import { loadPublications } from 'actions/pubsNews';

const mapStateToProps = (state) => ({
  publications: state.pubsNews.publications,
  isFetchingPubs: state.pubsNews.isFetching,
});

export class PublicationsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: {
        assayDevelopment: true,
        dataAnalysis: true,
        dataGeneration: true,
        dataIntegration: true,
        dataStandards: true,
        signatureGeneration: true,
        softwareDevelopment: true,
        review: true,
      },
      sortOrder: 'descending',
    };
  }

  componentWillMount() {
    this.props.loadPublications();
  }

  // Check if category is wanted (this.state.categories[category] is true) and that
  // the publication falls under that category (p[category] is true)
  _filterCategories = (p) => {
    const { categories } = this.state;
    return (p.assayDevelopment && categories.assayDevelopment) ||
      (p.dataAnalysis && categories.dataAnalysis) ||
      (p.dataGeneration && categories.dataGeneration) ||
      (p.dataIntegration && categories.dataIntegration) ||
      (p.dataStandards && categories.dataStandards) ||
      (p.signatureGeneration && categories.signatureGeneration) ||
      (p.softwareDevelopment && categories.softwareDevelopment) ||
      (p.review && categories.review);
  };

  _handleSortOrderChanged = (event) => {
    this.setState({ sortOrder: event.target.value });
  }

  _handleCategoryChecked = (name, checked) => {
    const categories = extend(true, {}, this.state.categories);
    categories[name] = checked;
    this.setState({ categories });
  }

  _handleCatClicked = (key) => {
    const categories = {
      assayDevelopment: false,
      dataAnalysis: false,
      dataGeneration: false,
      dataIntegration: false,
      dataStandards: false,
      signatureGeneration: false,
      softwareDevelopment: false,
      review: false,
    };
    if (categories.hasOwnProperty(key)) {
      categories[key] = true;
      this.setState({ categories });
    }
  }

  _selectAll = () => {
    this.setState({
      categories: {
        assayDevelopment: true,
        dataAnalysis: true,
        dataGeneration: true,
        dataIntegration: true,
        dataStandards: true,
        signatureGeneration: true,
        softwareDevelopment: true,
        review: true,
      },
    });
  }

  render() {
    let publications = this.props.publications;
    publications.sort((a, b) => {
      let result = a.yearPublished > b.yearPublished;
      if (this.state.sortOrder === 'descending') {
        result = a.yearPublished < b.yearPublished;
      }
      return result ? 1 : -1;
    });
    publications = publications.filter(this._filterCategories);
    return (
      <div className={styles.wrapper}>
        <PageBanner
          title="LINCS Publications"
          subTitle="Discover and cite publications from members of the LINCS Consortium"
        />
        <div className="container">
          <div className="row">
            <div className={`col-md-3 col-md-push-9 ${styles.filter}`}>
              <h5 className="text-xs-center">Filter Publications</h5>
              <div className="form-group">
                <label className={styles.label} htmlFor="sort-order">Sort Order</label>
                <select
                  id="sort-order"
                  className="form-control"
                  onChange={this._handleSortOrderChanged}
                  value={this.state.sortOrder}
                >
                  <option value="descending">Descending</option>
                  <option value="ascending">Ascending</option>
                </select>
              </div>
              <div className="form-group">
                <label className={styles.label} htmlFor="">Categories</label>
                <PubCheckBox
                  name="assayDevelopment"
                  label="Assay Development"
                  checked={this.state.categories.assayDevelopment}
                  onChange={this._handleCategoryChecked}
                />
                <PubCheckBox
                  name="dataAnalysis"
                  label="Data Analysis"
                  checked={this.state.categories.dataAnalysis}
                  onChange={this._handleCategoryChecked}
                />
                <PubCheckBox
                  name="dataGeneration"
                  label="Data Generation"
                  checked={this.state.categories.dataGeneration}
                  onChange={this._handleCategoryChecked}
                />
                <PubCheckBox
                  name="dataIntegration"
                  label="Data Integration"
                  checked={this.state.categories.dataIntegration}
                  onChange={this._handleCategoryChecked}
                />
                <PubCheckBox
                  name="dataStandards"
                  label="Data Standards"
                  checked={this.state.categories.dataStandards}
                  onChange={this._handleCategoryChecked}
                />
                <PubCheckBox
                  name="signatureGeneration"
                  label="Signature Generation"
                  checked={this.state.categories.signatureGeneration}
                  onChange={this._handleCategoryChecked}
                />
                <PubCheckBox
                  name="softwareDevelopment"
                  label="Software Development"
                  checked={this.state.categories.softwareDevelopment}
                  onChange={this._handleCategoryChecked}
                />
                <PubCheckBox
                  name="review"
                  label="Review"
                  checked={this.state.categories.review}
                  onChange={this._handleCategoryChecked}
                />
                <button
                  className={`btn btn-secondary ${styles['select-all-btn']}`}
                  onClick={this._selectAll}
                >
                  Select All
                </button>
              </div>
            </div>
            <div className="col-md-9 col-md-pull-3">
              {
                publications.map(p =>
                  <Publication key={p.id} pub={p} onCatClicked={this._handleCatClicked} />
                )
              }
              {
                !this.props.isFetchingPubs && !publications.length &&
                <h2>Please select a category to view publications.</h2>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PublicationsView.propTypes = {
  loadPublications: PropTypes.func,
  publications: PropTypes.array,
  isFetchingPubs: PropTypes.bool,
};

export default connect(mapStateToProps, { loadPublications })(PublicationsView);
