import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import { loadTools } from 'actions/toolsWorkflows';
import TutVid from 'components/TutVid';
import styles from '../AppsView.scss';

const mapStateToProps = (state) => ({
  tools: state.toolsWorkflows.tools,
});

export class TutorialsModule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: 'Shuffled',
    };
  }

  componentDidMount() {
    this.props.loadTools();
  }

  render() {
    const tools = this.props.tools;

    return (
      <div className="row">
        <h3>Tutorials</h3>
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
              No tools found. Please try another filter.
            </h5>
        }
      </div>
    );
  }
}

TutorialsModule.propTypes = {
  loadTools: PropTypes.func,
  tools: PropTypes.array,
};

export default connect(mapStateToProps, { loadTools })(TutorialsModule);
