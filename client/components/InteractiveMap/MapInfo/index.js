import React, { Component, propTypes } from 'react';
import styles from './MapInfo.scss';


export default class MapInfo extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className={styles.infoContainer}>
        Hello world!
      </div>
    );
  }
}

MapInfo.propTypes = {

}
