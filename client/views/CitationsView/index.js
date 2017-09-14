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

  componentWillMount() {
    this.props.loadCitations();
  }

  sortCitaions = (a, b) => {
    let result = a.year < b.year;
    if (a.year === b.year) {
      result = a.title > b.title;
    }
    return result ? 1 : -1;
  }

  render() {
    let citations = this.props.cite;
    citations = citations.sort(this.sortCitaions);
    return (
      <div className={styles.wrapper}>
        <PageBanner
          title="Lincs Data Citations"
          subTitle="Please cite us if the use of this library has
          helped you in your work and/or resulted in any publication by using
          the appropriate following citation(s):"
        />
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
  cite: PropTypes.array,
  loadCitations: PropTypes.func,
};

/*
class CitationsView extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <PageBanner title="Lincs Data Citations" />
        <h1>Testing, Hello</h1>
      </div>
      );
  }
}
*/
/*
const citation = [
                  { name: 'Nathanael Gray',
                  title: '(R)-Roscovitine KINOMEscan',
                  year: 2013,
                  url: 'http://identifiers.org/lincs.data/LDG-1107',
                  },
                  { name: 'Nathanael Gray',
                  title: '5z-7-oxozeaenol KINOMEscan',
                  year: 2014,
                  url: 'http://identifiers.org/lincs.data/LDG-1187',
                  },
                  { name: 'Nathanael Gray',
                  title: '5z-7-oxozeaenol KiNativ -- single dose experiment',
                  year: 2016,
                  url: 'http://identifiers.org/lincs.data/LDG-1251',
                },
];
*/
/*
export function View() {
  return (
    < CitationsView cite={citation} />
    );
}
*/
/*
export default function CitationsView() {
  return (
    <div className={styles.wrapper}>
      <PageBanner title="Lincs Data Citations" />
      <h1>Testing, Hi</h1>
    </div>
  );
}
*/
export default connect(mapStateToProps, { loadCitations })(CitationsView);
