import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';

import { loadTools } from 'actions/toolsWorkflows';
import ToolsModule from './ToolsModule';
import TutorialsModule from './TutorialsModule';
import styles from '../AppsView.scss';

const mapStateToProps = (state) => ({
  tools: state.toolsWorkflows.tools,
});

export class AppsContainerModule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      marketTutSelection: 'market',
    };
  }

  componentDidMount() {
    this.props.loadTools();
  }

  handleMarketClicked = () => { this.setState({ marketTutSelection: 'market' }); }
  handleTutClicked = () => { this.setState({ marketTutSelection: 'tut' }); }

  render() {
    const { tools } = this.props;
    const { marketTutSelection } = this.state;
    const isMarket = marketTutSelection === 'market';
    const isTut = marketTutSelection === 'tut';
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

    return (
      <div>
        <h2 className={styles['wf-title']}>LINCS Applications</h2>

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
        </div>

        <div className={styles.workflow}>
          <ReactCSSTransitionGroup
            transitionName={{ enter: styles.enter, enterActive: styles['enter-active'] }}
            transitionEnterTimeout={750}
            transitionLeave={false}
          >
            {
              isMarket ?
                <ToolsModule tools={tools} key="market" /> :
                <TutorialsModule tools={toolsWithTuts} key="tut" />
            }
          </ReactCSSTransitionGroup>
        </div>
      </div>
    );
  }
}

AppsContainerModule.propTypes = {
  loadTools: PropTypes.func,
  tools: PropTypes.array,
};

export default connect(mapStateToProps, { loadTools })(AppsContainerModule);
