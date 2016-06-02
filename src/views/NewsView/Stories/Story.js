import React from 'react';
import styles from '../NewsView.scss';


function Story(props) {
  const author = props.author || 'Sherry Jenkins';
  return (
    <div className={styles['news-group']}>
      <h2>{props.title}</h2>
      <p className="text-muted"><em>Posted on {props.date} by {author}</em></p>
      <div>
        {props.children}
      </div>
    </div>
  );
}

Story.propTypes = {
  title: React.PropTypes.string.isRequired,
  date: React.PropTypes.string.isRequired,
  author: React.PropTypes.string,
  children: React.PropTypes.node,
};

export default Story;
