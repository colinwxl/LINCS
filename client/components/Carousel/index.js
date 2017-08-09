import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

export default function Carousel(props) {
  const { slidesToShow, slidesToScroll, autoplay, aps, infinite, dots } = props;
  const settings = {
    autoplay: autoplay || false,
    autoplaySpeed: aps,
    dots: dots || false,
    infinite: infinite || false,
    pauseOnHover: true,
    speed: 1000,
    slidesToShow: slidesToShow || 1,
    slidesToScroll: slidesToScroll || 1,
  };
  return (
    <Slider {...settings}>
      {props.children}
    </Slider>
  );
}

Carousel.propTypes = {
  slidesToShow: PropTypes.number,
  slidesToScroll: PropTypes.number,
  autoplay: PropTypes.bool,
  infinite: PropTypes.bool,
  dots: PropTypes.bool,
  aps: PropTypes.number,
  children: PropTypes.node,
};
