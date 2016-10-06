import React, { PropTypes } from 'react';
import Slider from 'react-slick';

export default function Carousel(props) {
  const { autoplay, aps } = props;
  const settings = {
    autoplay: autoplay || false,
    autoplaySpeed: aps,
    dots: true,
    infinite: true,
    pauseOnHover: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {props.children}
    </Slider>
  );
}

Carousel.propTypes = {
  autoplay: PropTypes.bool,
  aps: PropTypes.number,
  children: PropTypes.node,
};
