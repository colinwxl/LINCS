import React, { Component } from 'react';
import Datamaps from 'datamaps';

import styles from './InteractiveMap.scss';
import dataset from './dataset';

export default class InteractiveMap extends Component {
  constructor(props) {
    super(props);
    this.dataset = dataset;

    window.addEventListener('resize', this.resize.bind(this));
  }

  resize() {
    if (this.map) {
      this.map.resize();
    }
  }

  // this will create the map when the component mounts
  componentDidMount() {
    this.drawMap.bind(this)();
    this.drawBubbles.bind(this)();
  }

// this will remove the map from the dom when the react component is unmounted
  componentWillReceiveProps() {
    this.clear();
  }

// this will update the map with the latest props
  componentDidUpdate() {
    this.drawMap.bind(this)();
  }

  componentWillUnmount() {
    this.clear();
    window.removeEventListener('resize', this.resize.bind(this));
  }

  clear() {
    const intMap = this.refs.intMap;

    for (const child of Array.from(intMap.childNodes)) {
      intMap.removeChild(child);
    }
  }

  drawMap() {
    const map = new Datamaps(Object.assign({}, {
      ...this.props,
    }, {
      // this is the place where the react dom and the Datamaps dom will be wired
      element: this.refs.intMap,
      // this is hardcoded here as we want the projection to be constant
      projection: 'mercator',
      scope: 'usa',
      responsive: true,
      fills: {
        'RED': '#cc4731',
        'BLUE': '#306596',
        defaultFill: '#a9c0de',
      },
      data: {
        'RED': { fillKey: 'RED'},
        'BLUE': { fillKey: 'BLUE'},
      },
      geographyConfig: {
        highlightOnHover: false,
        popupOnHover: false,
      },
    }));

    this.map = map;
  }

  drawBubbles() {
    this.map.bubbles(this.dataset, {
      popupTemplate: (geo, data) => {
        return (
          `<div class='${styles.hoverinfo}'>
            <img src='${data.logo}' class='${styles.logo}' />
            <h1 class='${styles.title}'>${data.name}</h1>
          </div>`
        );
      },
    });
  }

  render() {
    const style = {
      position: 'relative',
      width: '100%',
    };

    return <div ref="intMap" style={style}> </div>;
  }
}
