import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import unEscape from 'lodash/unescape';

import styles from './Twitter.scss';
import { fetchTimeline } from 'actions/twitter';
import twitterBirdImg from './twitter-bird.svg';

const mapStateToProps = ({ twitter }) => ({ twitter });

export class Twitter extends Component {
  componentWillMount() {
    this.props.fetchTimeline();
  }

  humanDate(date) {
    const d = new Date(date);
    return moment(d).fromNow();
  }

  rawTweetHtml(status) {
    const urlsToKeep = [];
    const { text, entities } = status;
    let tweetHtml = unEscape(text);
    entities.urls.forEach(urlObj => {
      // urlObj.url is a url that exists in text. Replace it with an actual url.
      urlsToKeep.push(urlObj.url);
      tweetHtml = tweetHtml.replace(
        urlObj.url,
        `<a href="${urlObj.url}" target="_blank">${urlObj.displayUrl}</a>`
      );
    });
    entities.hashtags.forEach(hashtagObj => {
      // Replace all hashtags with a link to the hashtag search
      tweetHtml = tweetHtml.replace(
        `#${hashtagObj.text}`,
        `<span class="${styles.link}">#</span><a href="https://twitter.com/hashtag/${hashtagObj.text}?src=hash" target="_blank">${hashtagObj.text}</a>`
      );
    });

    entities.userMentions.forEach(mentionObj => {
      // Replace all hashtags with a link to the hashtag search
      tweetHtml = tweetHtml.replace(
        `@${mentionObj.screenName}`,
        `<span class="${styles.link}">@</span><a href="https://twitter.com/${mentionObj.screenName}" target="_blank">${mentionObj.screenName}</a>`
      );
    });

    // Other https://t.co/... URLs occur at the end of the tweet and refer to
    // images so remove them. But we cannot just use `replace()` because some
    // URLs we want to keep match the same regular expression. Only strip out
    // URLs that are not already embedded in the tweet.
    const urlRegex = new RegExp('https://t.co/[0-9a-z]*', 'ig');
    const matches = tweetHtml.match(urlRegex);
    if (matches) {
      matches.forEach(url => {
        if (urlsToKeep.indexOf(url) === -1) {
          tweetHtml = tweetHtml.replace(url, '');
        }
      });
    }
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
          <img src={twitterBirdImg} alt="Twitter logo" />
        </div>
        {
          timeline.slice(0, 3).map(status => {
            const { idStr, createdAt, user, favoriteCount, retweetCount } = status;
            const userLink = `https://twitter.com/${user.screenName}`;
            return (
              <div key={idStr} className="col-xs-12 col-md-4">
                <div className={styles['tweet-card']}>
                  <div className={styles.tweet}>
                    <div className={`clearfix ${styles.tweeter}`}>
                      <div className={styles['img-wrap']}>
                        <img
                          src={user.profileImageUrlHttps}
                          className={styles.avatar}
                          alt="User's Twitter avatar"
                        />
                      </div>
                      <p className={styles.username}>
                        <a href={userLink} target="_blank">{user.name}</a>
                      </p>
                      <p className={styles['screen-name']}>
                        <a href={userLink} target="_blank">@{user.screenName}</a>
                      </p>
                    </div>
                    <div className={styles.group}>
                      <div className={styles.status}>
                        <p dangerouslySetInnerHTML={this.rawTweetHtml(status)} />
                        <p className={styles.info}>
                          <span className={styles.date}>{this.humanDate(createdAt)}</span>
                          <a
                            href={`https://twitter.com/intent/tweet?in_reply_to=${idStr}`}
                            target="_blank"
                          >
                            <i className="fa fa-reply" />
                          </a>
                          {'  '}
                          <a
                            href={`https://twitter.com/intent/retweet?tweet_id=${idStr}`}
                            target="_blank"
                          >
                            <i className="fa fa-retweet" />
                          </a>
                          {` ${retweetCount}`}
                          <a
                            href={`https://twitter.com/intent/favorite?tweet_id=${idStr}`}
                            target="_blank"
                          >
                            <i className="fa fa-star" />
                          </a>
                          {` ${favoriteCount}`}
                        </p>
                      </div>
                    </div>
                  </div>
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
