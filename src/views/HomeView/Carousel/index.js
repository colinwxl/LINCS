import React, { PropTypes } from 'react';
import Slider from 'react-slick';

import DatasetSlide from './DatasetSlide';
import Tool from 'components/Tool';

export default function Carousel({ datasets, tools }) {
  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    infinite: true,
    pauseOnHover: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  let slides = null;
  if (!!datasets && !!datasets.length) {
    slides = datasets.map(ds =>
      <div key={ds.id}>
        <DatasetSlide dataset={ds} />
      </div>
    );
  } else if (!!tools && !!tools.length) {
    slides = tools.map(tool =>
      <div key={tool.id}>
        <Tool tool={tool} />
      </div>
    );
  }
  return (
    <Slider {...settings}>
      {slides}
    </Slider>
  );
}

Carousel.propTypes = {
  datasets: PropTypes.array,
  tools: PropTypes.array,
};
