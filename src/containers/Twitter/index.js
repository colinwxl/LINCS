import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import unEscape from 'lodash/unescape';

import styles from './Twitter.scss';
import { fetchTimeline } from 'actions/twitter';

const mapStateToProps = ({ twitter }) => ({ twitter });

function humanDate(date) {
  return moment(date).fromNow();
}

export class Twitter extends Component {
  componentWillMount() {
    this.props.fetchTimeline();
  }

  render() {
    return (
      <div className={styles.wrapper}>
        {
          this.props.twitter.timeline.map((status, index) =>
            <div key={index} className={styles.status}>
              <p>{unEscape(status.text)}</p>
              <p>{humanDate(status.created_at)}</p>
            </div>
          )
        }
      </div>
    );
  }
}

Twitter.propTypes = {
  twitter: PropTypes.object,
  fetchTimeline: PropTypes.func,
};

export default connect(mapStateToProps, {
  fetchTimeline,
})(Twitter);
