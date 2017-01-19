import React, { PropTypes, Component } from 'react';
import styles from '../AppsView.scss';

export default class TutorialsModule extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // Plan is to parse denis's file into json and load it in via a table here
    return (
      <div className="row">
        <h3 className={styles['section-title']}>Canned Analysis</h3>
        <h5 className="m-t-3 text-xs-center">
          No tutorials found. Please try again later.
        </h5>
      </div>
    );
  }
}

TutorialsModule.propTypes = {
  tools: PropTypes.array,
};
