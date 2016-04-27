import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import unEscape from 'lodash/unescape';

import styles from './Twitter.scss';
import { fetchTimeline } from 'actions/twitter';

const mapStateToProps = ({ twitter }) => ({ twitter });

export class Twitter extends Component {
  componentWillMount() {
    this.props.fetchTimeline();
  }

  _humanDate(date) {
    const d = new Date(date);
    return moment(d).fromNow();
  }

  _rawTweetHtml(status) {
    const { text, entities } = status;
    let tweetHtml = unEscape(text);
    entities.urls.forEach(urlObj => {
      // urlObj.url is a url that exists in text. Replace it with an actual url.
      tweetHtml = tweetHtml.replace(
        urlObj.url,
        `<a href="${urlObj.url}" target="_blank">${urlObj.displayUrl}</a>`,
      );
    });
    entities.hashtags.forEach(hashtagObj => {
      // Replace all hashtags with a link to the hashtag search
      tweetHtml = tweetHtml.replace(
        `#${hashtagObj.text}`,
        `<span class="${styles.link}">#</span><a href="https://twitter.com/hashtag/${hashtagObj.text}?src=hash" target="_blank">${hashtagObj.text}</a>`,
      );
    });

    entities.userMentions.forEach(mentionObj => {
      // Replace all hashtags with a link to the hashtag search
      tweetHtml = tweetHtml.replace(
        `@${mentionObj.screenName}`,
        `<span class="${styles.link}">@</span><a href="https://twitter.com/${mentionObj.screenName}" target="_blank">${mentionObj.screenName}</a>`,
      );
    });
    // Other https://t.co/... urls occur at the end of the tweet and
    // refer to images so remove them.
    const urlRegex = new RegExp('https://t.co/[0-9a-z]*', 'ig');
    tweetHtml = tweetHtml.replace(urlRegex, '');
    return { __html: tweetHtml };
  }

  render() {
    const { twitter } = this.props;
    const timeline = twitter.timeline;
    if (!timeline.length || twitter.isFetching) {
      return <h3>Loading...</h3>;
    }
    return (
      <div className={styles.wrapper}>
        <div className={styles['twitter-bird']}>
          <img src={require('./twitter-bird.svg')} alt="Twitter logo" />
        </div>
        {
          timeline.splice(0, 1).map(status => {
            const { id, createdAt, user } = status;
            return (
              <div key={id} className={styles.tweet}>
                <div className={styles.tweeter}>
                  <div className={styles['img-wrap']}>
                    <img
                      src={user.profileImageUrlHttps}
                      className={styles.avatar}
                      alt="User's Twitter avatar"
                    />
                  </div>
                  <a href={`https://twitter.com/${user.screenName}`} target="_blank">
                    {user.name}
                  </a>
                </div>
                <div key={id} className={styles.status}>
                  <p dangerouslySetInnerHTML={this._rawTweetHtml(status)} />
                  <p className={styles.time}>{this._humanDate(createdAt)}</p>
                </div>
              </div>
            );
          })
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
