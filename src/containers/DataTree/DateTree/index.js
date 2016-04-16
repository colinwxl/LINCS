import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import { incrementDatasetClicks } from 'actions/entities';
import styles from '../DataTree.scss';
import Tree from '../Tree';
import MonthTree from './MonthTree';

function getMonthName(monthIndex) {
  if (monthIndex > 11) {
    return 'Invalid Month';
  }
  return [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ][monthIndex];
}

export class DateTree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
    };
  }

  _handleClick = (datasetIds) => {
    const collapsed = !this.state.collapsed;
    if (!collapsed) {
      this.props.incrementDatasetClicks(datasetIds);
    }
    this.setState({ collapsed });
  }

  render() {
    const { dates, dateDatasetMap } = this.props;
    const label = <span className={styles.node}>By Initial Release Date</span>;
    return (
      <Tree nodeLabel={label} defaultCollapsed>
        {
          dates.map((dateObj, i) => {
            const yearLabel = <span className={styles.node}>{dateObj.year}</span>;
            return (
              <Tree key={`year ${i}`} nodeLabel={yearLabel} defaultCollapsed>
                {
                  dateObj.months.map((month, index) =>
                    <MonthTree
                      key={`month ${index}`}
                      datasetIds={dateDatasetMap[dateObj.year][month]}
                      monthName={getMonthName(month)}
                      onClick={this._handleClick}
                      collapsed={this.state.collapsed}
                    />
                  )
                }
              </Tree>
            );
          })
        }
      </Tree>
    );
  }
}

DateTree.propTypes = {
  dates: PropTypes.array,
  dateDatasetMap: PropTypes.object,
  incrementDatasetClicks: PropTypes.func,
};

export default connect(null, { incrementDatasetClicks })(DateTree);
