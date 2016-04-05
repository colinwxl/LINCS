import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// import styles from './NewsView.scss';
import PageBanner from 'components/PageBanner';
import { loadNews } from 'actions/pubsNews';

const mapStateToProps = (state) => ({
  news: state.pubsNews.news,
});

export class NewsView extends Component {
  componentWillMount() {
    this.props.loadNews();
  }

  render() {
    return (
      <div>
        <PageBanner title="News" />
        <div className="container"></div>
      </div>
    );
  }
}

NewsView.propTypes = {
  loadNews: PropTypes.func,
};

export default connect(mapStateToProps, {
  loadNews,
})(NewsView);
