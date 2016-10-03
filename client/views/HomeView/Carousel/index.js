import React from 'react';
import Slider from 'react-slick';

export default function Carousel() {
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
      <img src="/LINCS/files/f2f_2016/2037.jpg" alt="presentation" />
      <img src="/LINCS/files/f2f_2016/2038.jpg" alt="presentation" />
      <img src="/LINCS/files/f2f_2016/2044.jpg" alt="presentation" />
      <img src="/LINCS/files/f2f_2016/2045.jpg" alt="presentation" />
      <img src="/LINCS/files/f2f_2016/2067.jpg" alt="presentation" />
      <img src="/LINCS/files/f2f_2016/2078.jpg" alt="presentation" />
      <img src="/LINCS/files/f2f_2016/2086.jpg" alt="presentation" />
      <img src="/LINCS/files/f2f_2016/2098.jpg" alt="presentation" />
    </Slider>
  );
}
