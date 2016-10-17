import React, { Component } from 'react';
import Datamaps from 'datamaps';

import styles from './Map.scss';
import dataset from './dataset';

export default class InteractiveMap extends Component {
  constructor(props) {
    super(props);
    this.dataset = dataset;
    this.bubbles = [
      {latitude: 42.478319, longitude: -73.028895},
      {latitude: 42.367086, longitude: -72.214419},
    ];
    window.addEventListener('resize', this.resize.bind(this));
  }

  componentDidMount() {
    // Containing component for InteractiveMap isn't yet rendered when map is drawn
    // This causes the map size to be rendered erroneously. SetTimeout here is to to
    // draw map once the containing component is fully rendered and solves this problem.
    setTimeout(() => {
      this.drawMap.bind(this)();
      this.map.addPlugin('bigCircle', function(layer, data) {
        const self = this;

        const className = 'bigCircles';

        let bubbles = layer
            .selectAll(className)
            .data(data, JSON.stringify);

        bubbles
             .enter()
             .append('circle')
             .attr("class", className)
             .attr('cx', function (datum) {
               return self.latLngToXY(datum.latitude, datum.longitude)[0];
             })
             .attr('cy', function (datum) {
               return self.latLngToXY(datum.latitude, datum.longitude)[1];
             })
             .attr('r', 5)
             .on('click', function() {
               alert("hello world");
             })
      });
      this.map.bigCircle(this.bubbles)
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

  resize() {
    if (this.map) {
      this.map.resize();
    }
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
        RED: '#cc4731',
        BLUE: '#306596',
        defaultFill: '#a9c0de',
      },
      data: {
        RED: { fillKey: 'RED' },
        BLUE: { fillKey: 'BLUE' },
      },
      geographyConfig: {
        highlightOnHover: false,
        popupOnHover: false,
      },
    }));

    this.map = map;
  }

  drawBubbles() {
    // this.map.bubbles(this.dataset, {
    //   popupTemplate: (geo, data) =>
    //     `<div class='${styles.hoverinfo}'>
    //       <img src='${data.logo}' class='${styles.logo}' />
    //       <h1 class='${styles.title}'>${data.name}</h1>
    //     </div>`,
    // }

  }

  render() {
    const style = {
      position: 'relative',
      width: '100%',
    };

    return <div ref="intMap" style={style}> </div>;
  }
}
