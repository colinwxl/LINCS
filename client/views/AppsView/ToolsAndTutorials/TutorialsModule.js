import React, { PropTypes, Component } from 'react';
import styles from '../AppsView.scss';

import TutVid from 'components/TutVid';

export default class TutorialsModule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: 'Shuffled',
    };
  }

  render() {
    const tools = this.props.tools;

    return (
      <div className="row">
        <h3 className={styles['section-title']}>Video Tutorials</h3>
        {
          tools.map(tool =>
            <div key={tool.id} className="col-xs-12 col-md-6 col-xl-3">
              <TutVid tool={tool} />
            </div>
          )
        }
        {
          !tools.length &&
            <h5 className="m-t-3 text-xs-center">
              No tutorials found. Please try again later.
            </h5>
        }
      </div>
    );
  }
}

TutorialsModule.propTypes = {
  tools: PropTypes.array,
};
