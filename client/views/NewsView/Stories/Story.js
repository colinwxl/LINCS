import React from 'react';
import { Link } from 'react-router';
import styles from '../NewsView.scss';


function Story(props) {
  const author = props.author || 'Sherry Jenkins';
  if (props.link) {
    return (
      <div className={styles['news-group']}>
        <h2><Link style={{ textDecoration: 'none' }} to={props.link}>{props.title}</Link></h2>
        {props.subtitle ? <h3>{props.subtitle}</h3> : null}
        <p className="text-muted"><em>Posted on {props.date} by {author}</em></p>
        <div>
          {props.children}
        </div>
      </div>
    );
  }
  return (
    <div className={styles['news-group']}>
      <h2>{props.title}</h2>
      {props.subtitle ? <h3>{props.subtitle}</h3> : null}
      <p className="text-muted"><em>Posted on {props.date} by {author}</em></p>
      <div>
        {props.children}
      </div>
    </div>
  );
}

Story.propTypes = {
  title: React.PropTypes.string.isRequired,
  subtitle: React.PropTypes.string,
  date: React.PropTypes.string.isRequired,
  author: React.PropTypes.string,
  children: React.PropTypes.node,
  link: React.PropTypes.string,
};

export default Story;
