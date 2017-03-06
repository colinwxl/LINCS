import React, { Component, PropTypes } from 'react';
import Select from 'react-select-plus';
import { DateRange } from 'react-date-range';

import PageBanner from 'components/PageBanner';
import PageNav from 'components/PageNav';
import styles from './PreviousEvents.scss';


export default class PreviousEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <PageBanner
          title="Previous Events"
          subTitle=""
        />
        <div className="container">
          <div className="row">
            <PageNav mainPage="Previous Events" />
            <div className="col-md-9 col-md-pull-3">
              <div className={`row ${styles['filter-and-calendar']}`}>
                <div className="col-md-3">
                  <label className={styles['label-title']}>Sort by</label>
                  <Select
                    className={styles.uniSelectSort}
                    name="form-field-name"
                    placeholder="Popularity"
                    simpleValue
                  />
                  <br />
                  <label className={styles['label-title']}>Sort by date</label>
                  <Select
                    className={styles.uniSelectSort}
                    name="form-field-name"
                    placeholder="Ascending"
                    simpleValue
                  />
                </div>
                <div className="col-md-9">
                  <DateRange />
                </div>
              </div>
              <div className={`row ${styles['filter-and-calendar']} ${styles['previous-events']}`}>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PreviousEvents.propTypes = {

};
