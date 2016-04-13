import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import each from 'lodash/each';
import moment from 'moment';

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


const mapStateToProps = (state) => ({ datasets: state.entities.datasets });
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
    // So here we have a date dataset map and an array of dates.
    // dateDatasetMap is structured like so: { 2016: { 1 (month index): [datasets] } }
    const dateDatasetMap = {};
    // dates is structured like [{ year: 2016, months: [1, 2, 3 (month indicies)] }]
    let dates = [];
    // Dates only contains years and months that exist in the dateDatasetMap so this is essentially
    // a way to sort the keys of dateDatasetMap to ensure that we can sort the years and
    // months in the proper order in the tree.
    each(this.props.entities.datasets, (ds) => {
      const date = moment(ds.dateRetrieved);
      const month = date.month();
      const year = date.year();
      // Check if an object exists in dates with the year of the current dataset
      if (dates.filter(obj => obj.year === year).length === 0) {
        dates.push({ year, months: [month] });
      } else {
        // Find the object with the correct year and add the month of the current dataset if it does
        // not exist there already
        dates.forEach(obj => {
          if (obj.year === year && obj.months.indexOf(month) === -1) {
            obj.months.push(month);
          }
        });
      }
      // Build the dateDatasetMap
      if (dateDatasetMap[year]) {
        if (dateDatasetMap[year][month]) {
          dateDatasetMap[year][month].push(ds.id);
        } else {
          dateDatasetMap[year][month] = [ds.id];
        }
      } else {
        dateDatasetMap[year] = {
          [month]: [ds.id],
        };
      }
    });
    // Sort the objects in the dates array by their year
    dates = dates.sort((a, b) => {
      const result = a.year < b.year;
      return result ? 1 : -1;
    });
    // Sort the months array in each object in the dates array
    dates.forEach(dateObj => {
      dateObj.months.sort((a, b) => b - a);
    });

    let label = <span className={styles['loading-node']}>Loading...</span>;
    if (dates.length === 0) {
      return <Tree nodeLabel={label} defaultCollapsed />;
    }

    label = <span className={styles.node}>By Initial Release Date</span>;
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
  entities: PropTypes.object,
  incrementDatasetClicks: PropTypes.func,
};

export default connect(mapStateToProps, {
  incrementDatasetClicks,
})(DateTree);
