import { bannerData } from "../../mocks/data";
import React from 'react';
import Slider from "react-slick";
import { SliderArrow } from "../SliderArrow";
import './Introduction.css';

const banners = bannerData.banners;
export const Introduction = () => {

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
    initialSlide: 0,
    nextArrow: <SliderArrow />,
    prevArrow: <SliderArrow />,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }
    ]
  };

  return (
    <div className="introduction-slider">
      <Slider {...settings}>
        {banners.map((banner, idx) => (
          <img key={idx} src={require(`../../mocks${banner.image}`)} alt={`slide ${idx}`} />
        ))}
      </Slider>
    </div>
  )
}