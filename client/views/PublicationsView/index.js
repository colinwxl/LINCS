import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import extend from 'extend';
import isEqual from 'lodash/isEqual';

import styles from './PublicationsView.scss';
import PageBanner from 'components/PageBanner';
import Publication from 'containers/Publication';
import PubCheckBox from './PubCheckBox';
import { loadPublications } from 'actions/pubsNews';

const mapStateToProps = (state) => ({
  publications: state.pubsNews.publications,
  isFetchingPubs: state.pubsNews.isFetching,
});

export const initialCategories = {
  assayDevelopment: true,
  dataGeneration: true,
  dataAnalysis: true,
  dataIntegration: true,
  signatureGeneration: true,
  analyticalMethodDevelopment: true,
  softwareDevelopment: true,
  dataStandards: true,
  review: true,
};

export class PublicationsView extends Component {

  constructor(props) {
    super(props);
    this.initialState = {
      categories: initialCategories,
      sortOrder: 'descending',
    };
    this.state = this.initialState;
  }

  componentWillMount() {
    this.props.loadPublications();
  }

  shouldComponentUpdate(nextProps, nextState) {
    // Prevent the component from updating if this.props.publications exists and
    // the state has not changed.
    // This prevents the publications from swapping everytime you click 'Select All'
    return !this.props.publications.length
      || !isEqual(this.state.categories, nextState.categories)
      || this.state.sortOrder !== nextState.sortOrder;
  }

  // Check if category is wanted (this.state.categories[category] is true) and that
  // the publication falls under that category (p[category] is true)
  filterCategories = (p) => {
    const { categories } = this.state;
    const keys = Object.keys(categories);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (p[key] && categories[key]) {
        return true;
      }
    }
    return false;
  };

  sortPublications = (a, b) => {
    let result = a.yearPublished > b.yearPublished;
    if (a.yearPublished === b.yearPublished) {
      result = a.pmId > b.pmId;
    }
    if (this.state.sortOrder === 'descending') {
      result = a.yearPublished < b.yearPublished;
      if (a.yearPublished === b.yearPublished) {
        result = a.pmId < b.pmId;
      }
    }
    return result ? 1 : -1;
  }

  handleSortOrderChanged = (event) => {
    this.setState({ sortOrder: event.target.value });
  }

  handleCategoryChecked = (name, checked) => {
    const categories = extend(true, {}, this.state.categories);
    categories[name] = checked;
    this.setState({ categories });
  }

  handleCatClicked = (key) => {
    const { categories } = this.state;
    const newCategories = {};
    Object.keys(categories).forEach((k) => {
      if (k === key) {
        newCategories[k] = true;
      } else {
        newCategories[k] = false;
      }
    });
    this.setState({ categories: newCategories });
    if (window) {
      window.scrollTo(0, 0);
    }
  }

  categoryKeyToName = (key) => key
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => str.toUpperCase());

  selectAll = () => {
    this.setState(this.initialState);
  }

  render() {
    const { categories } = this.state;
    let publications = this.props.publications;
    publications = publications.sort(this.sortPublications).filter(this.filterCategories);
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
                  onChange={this.handleSortOrderChanged}
                  value={this.state.sortOrder}
                >
                  <option value="descending">Descending</option>
                  <option value="ascending">Ascending</option>
                </select>
              </div>
              <div className="form-group">
                <label className={styles.label} htmlFor="">Categories</label>
                {Object.keys(categories).map((category, i) =>
                  <PubCheckBox
                    key={i}
                    name={category}
                    label={this.categoryKeyToName(category)}
                    checked={this.state.categories[category]}
                    onChange={this.handleCategoryChecked}
                  />
                )}
                <button
                  className={`btn btn-secondary ${styles['select-all-btn']}`}
                  onClick={this.selectAll}
                >
                  Select All
                </button>
              </div>
            </div>
            <div className="col-md-9 col-md-pull-3">
              {
                publications.map(p =>
                  <Publication
                    key={p.id}
                    pub={p}
                    categories={Object.keys(categories)}
                    onCatClicked={this.handleCatClicked}
                  />
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
