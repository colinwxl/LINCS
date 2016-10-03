import React, { PropTypes } from 'react';
import Slider from 'react-slick';

export default function Carousel(props) {
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
  return (
    <Slider {...settings}>
      {props.children}
    </Slider>
  );
}

Carousel.propTypes = {
  children: PropTypes.node,
};
