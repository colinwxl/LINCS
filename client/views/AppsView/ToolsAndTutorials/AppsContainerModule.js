import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';

import { loadTools } from 'actions/toolsWorkflows';
import ToolsModule from './ToolsModule';
import TutorialsModule from './TutorialsModule';
import CannedAnalysisModule from './CannedAnalysisModule';
import styles from '../AppsView.scss';

const mapStateToProps = (state) => ({
  tools: state.toolsWorkflows.tools,
});

export class AppsContainerModule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      marketAnalTutSelection: this.props.initialTab || 'market',
    };
  }

  componentWillMount() {
    this.props.loadTools();
  }

  scrollToCA() {
    setTimeout(() => { window.scrollTo(0, 800); }, 50);
  }

  handleMarketClicked = () => { this.setState({ marketAnalTutSelection: 'market' }); }
  handleTutClicked = () => { this.setState({ marketAnalTutSelection: 'tut' }); }
  handleAnalClicked = () => { this.setState({ marketAnalTutSelection: 'ca' }); }

  render() {
    if (this.props.initialTab === 'ca') {
      this.scrollToCA();
    }
    const { tools, initialCenter } = this.props;
    const { marketAnalTutSelection } = this.state;
    const isMarket = marketAnalTutSelection === 'market';
    const isTut = marketAnalTutSelection === 'tut';
    const isAnal = marketAnalTutSelection === 'ca';
    const toolsWithTuts = tools
                            .filter(tool => tool.tutorialUrl)
                            .sort((t1, t2) => {
                              const tool1Name = t1.name.toUpperCase();
                              const tool2Name = t2.name.toUpperCase();
                              if (tool1Name > tool2Name) {
                                return 1;
                              } else if (tool1Name < tool2Name) {
                                return -1;
                              }
                              return 0;
                            });
    let module;

    if (isMarket) {
      module = (<ToolsModule initialCenter={initialCenter} tools={tools} key="market" />);
    } else if (isTut) {
      module = (<TutorialsModule tools={toolsWithTuts} key="tut" />);
    } else if (isAnal) {
      // Change this module next
      module = (<CannedAnalysisModule />);
    } else {
      module = (<ToolsModule initialCenter={initialCenter} tools={tools} key="market" />);
    }

    return (
      <div>
        <h2 className={styles['wf-title']}>LINCS Tools</h2>
        <div className={`btn-group ${styles.categories}`} data-toggle="buttons">
          <label
            onClick={this.handleMarketClicked}
            className={`btn ${styles['category-check']} ${isMarket ? styles.active : ''}`}
          >
            <input
              type="radio"
              name="exp"
              defaultChecked={isMarket}
            />
            Marketplace
          </label>

          <label
            onClick={this.handleTutClicked}
            className={`btn ${styles['category-check']} ${isTut ? styles.active : ''}`}
          >
            <input
              type="radio"
              name="compBio"
              defaultChecked={isTut}
            />
          Video Tutorials
          </label>
          {
          // <label
          //   onClick={this.handleAnalClicked}
          //   className={`btn ${styles['category-check']} ${isAnal ? styles.active : ''}`}
          // >
          //   <input
          //     type="radio"
          //     name="compBio"
          //     defaultChecked={isAnal}
          //   />
          // Canned Analyses
          // </label>
          }
        </div>

        <div className={styles.workflow}>
          <ReactCSSTransitionGroup
            transitionName={{ enter: styles.enter, enterActive: styles['enter-active'] }}
            transitionEnterTimeout={750}
            transitionLeave={false}
          >
            {module}
          </ReactCSSTransitionGroup>
        </div>
      </div>
    );
  }
}

AppsContainerModule.propTypes = {
  loadTools: PropTypes.func,
  tools: PropTypes.array,
  initialCenter: PropTypes.string,
  initialTab: PropTypes.string,
};

export default connect(mapStateToProps, { loadTools })(AppsContainerModule);
