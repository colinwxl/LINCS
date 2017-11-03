import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Citations from 'components/Citations';
import PageBanner from 'components/PageBanner';
import styles from './CitationsView.scss';
import { loadCitations } from 'actions/citations';

const mapStateToProps = (state) => ({
  cite: state.citations.citation,
  isFetchingCites: state.pubsNews.isFetching,
});

class CitationsView extends Component {

  constructor(props) {
    super(props);
    this.initialState = {
      sortOrder: 'descending',
    };
    this.state = { ...this.initialState };
  }

  componentWillMount() {
    this.props.loadCitations();
  }


  sortCitaions = (a, b) => {
    let result = a.year > b.year;
    if (a.year === b.year) {
      result = a.title > b.title;
    }
    if (this.state.sortOrder === 'descending') {
      result = a.year < b.year;
      if (a.year === b.year) {
        result = a.title < b.title;
      }
    }
    return result ? 1 : -1;
  }

  handleSortOrderChanged = (event) => {
    this.setState({ sortOrder: event.target.value });
  }


  render() {
    let citations = this.props.cite;
    citations = citations.sort(this.sortCitaions);
    return (
      <div className={styles.wrapper}>
        <PageBanner
          title="LINCS Data Citations"
          subTitle="Please cite us if the use of this library has
          helped you in your work and/or resulted in any publication by using
          the appropriate following citation(s):"
        />
        <div className="container">
          <div className="row">
            <div className={`col-md-3 col-md-push-9 ${styles.filter}`}>
              {/* ----------------Sort Order----------------- */}
              <div className="form-group">
                <label className={styles.label} htmlFor="sort-order">
                  Sort By Year
                </label>
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
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
          {citations.map(c => (<Citations cite={c} />))}
          </div>
        </div>
      </div>

      );
  }
}

CitationsView.propTypes = {
  cite: PropTypes.object,
  loadCitations: PropTypes.func,
};

export default connect(mapStateToProps, { loadCitations })(CitationsView);
