import React, { Component, propTypes } from 'react';
import styles from './MapInfo.scss';


export default class MapInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.mapInfo}>
        <div className={styles.mapTitle}>
          Learn about BD2K Centers
        </div>

        <div className={styles.mapImgContainer}>
          <img alt="img" />
        </div>
        <div className={styles.mapContent}>
          Mouse over a center to display info. Click to select.
          <br />
          <br />
            A list of all BD2K Centers is available
          <a href="">here</a>.
        </div>
      </div>
    );
  }
}

MapInfo.propTypes = {
};
