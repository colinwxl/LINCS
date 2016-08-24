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

  componentDidMount() {
    // Containing component for InteractiveMap isn't yet rendered when map is drawn
    // This causes the map size to be rendered erroneously. SetTimeout here is to to
    // draw map once the containing component is fully rendered.
    setTimeout(() => {
      this.drawMap.bind(this)();
      this.drawBubbles.bind(this)();
    }, 0);
  }

  componentWillReceiveProps() {
    this.clear();
  }

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
      element: this.refs.intMap,
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
      width: '70%',
    };

    return <div ref="intMap" style={style}> </div>;
  }
}
