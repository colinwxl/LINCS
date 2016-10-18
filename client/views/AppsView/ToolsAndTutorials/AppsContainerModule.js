import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import ToolsModule from './ToolsModule';
import TutorialsModule from './TutorialsModule';
import styles from '../AppsView.scss';


export default class WorkflowsModule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      marketTutSelection: 'market',
    };
  }
  handleMarketClicked = () => { this.setState({ marketTutSelection: 'market' }); }
  handleTutClicked = () => { this.setState({ marketTutSelection: 'tut' }); }

  render() {
    const { marketTutSelection } = this.state;
    const isMarket = marketTutSelection === 'market';
    const isTut = marketTutSelection === 'tut';

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
            Tutorials
          </label>
        </div>

        <div className={styles.workflow}>
          <ReactCSSTransitionGroup
            transitionName={{ enter: styles.enter, enterActive: styles['enter-active'] }}
            transitionEnterTimeout={750}
            transitionLeave={false}
          >
            {isMarket ? <ToolsModule key="market" /> : <TutorialsModule key="tut" />}
          </ReactCSSTransitionGroup>
        </div>
      </div>
    );
  }
}
