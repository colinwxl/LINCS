import React, { Component } from 'react';
import Datamaps from 'datamaps';

import styles from './Map.scss';
import { awardeeInstitutions, institutions } from './dataset';

export default class InteractiveMap extends Component {
  constructor(props) {
    super(props);
    this.awardeeInstitutions = awardeeInstitutions;
    this.institutions = institutions;
    window.addEventListener('resize', this.resize.bind(this));
  }

  componentDidMount() {
    // Containing component for InteractiveMap isn't yet rendered when map is drawn
    // This causes the map size to be rendered erroneously. SetTimeout here is to to
    // draw map once the containing component is fully rendered and solves this problem.
    setTimeout(() => {
      this.drawMap.bind(this)();
      this.drawStars.bind(this)();
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

  // For template when hover over instutions
  // drawBubbles() {
  //   this.map.bubbles(this.dataset, {
  //     popupTemplate: (geo, data) =>
  //       `<div class='${styles.hoverinfo}'>
  //         <img src='${data.logo}' class='${styles.logo}' />
  //         <h1 class='${styles.title}'>${data.name}</h1>
  //       </div>`,
  //   }
  //
  // }

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

  calculateStarPoints(centerX, centerY, arms, outerRadius, innerRadius) {
    let results = "";
    const angle = Math.PI / arms;
    for (let i = 0; i < 2 * arms; i++) {
      const r = (i & 1) == 0 ? outerRadius : innerRadius;
      const currX = centerX + Math.cos(i * angle) * r;
      const currY = centerY + Math.sin(i * angle) * r;
      if (i == 0) {
        results = currX + "," + currY;
      } else {
        results += ", " + currX + "," + currY;
      }
    }
    return results;
  }

  drawBubbles() {
    const that = this;
    this.map.addPlugin('smallBubbles', function(layer, data) {
      const self = this;

      const className = 'smallBubbles';

      let bubbles = layer
          .selectAll(className)
          .data(data, JSON.stringify);

      bubbles.enter()
             .append('circle')
             .attr('class', className)
             .attr('cx', (datum) => {
               return self.latLngToXY(datum.latitude, datum.longitude)[0];
             })
             .attr('cy', (datum) => {
               return self.latLngToXY(datum.latitude, datum.longitude)[1];
             })
             .attr('r', 5)
             .on('click', () => {
               alert('hello world');
             });
    });
    this.map.smallBubbles(this.institutions);
  }

  drawStars() {
    const that = this;
    this.map.addPlugin('smallStars', function(layer, data) {
      const self = this;

      const className = 'smallStars';

      let stars = layer
          .selectAll(className)
          .data(data, JSON.stringify);

      stars.enter()
           .append('svg:polygon')
           .attr('id', 'star_1')
           .attr('visibility', 'visible')
           .attr('points', (datum) => {
             const pointX = self.latLngToXY(datum.latitude, datum.longitude)[0];
             const pointY = self.latLngToXY(datum.latitude, datum.longitude)[1];
             return that.calculateStarPoints(pointX, pointY, 5, 7, 3.5);
           })
           .on('click', that.appendToMapInfo);
    });
    this.map.smallStars(this.awardeeInstitutions);
  }

  appendToMapInfo(data) {
    alert(data.name);
  }

  render() {
    const style = {
      position: 'relative',
      width: '100%',
    };

    return <div ref="intMap" style={style}> </div>;
  }
}
