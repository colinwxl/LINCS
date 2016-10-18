import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import { loadTools } from 'actions/toolsWorkflows';
import Tool from 'components/Tool';
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
      <div>
        <div className="row">
          {
            tools.map(tool =>
              <div key={tool.id} className="col-xs-12 col-md-6 col-xl-4">
                <Tool tool={tool} />
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
      </div>
    );
  }
}

TutorialsModule.propTypes = {
  loadTools: PropTypes.func,
  tools: PropTypes.array,
};

export default connect(mapStateToProps, { loadTools })(TutorialsModule);
