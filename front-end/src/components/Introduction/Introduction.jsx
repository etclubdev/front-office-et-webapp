import React from 'react';
import Slider from "react-slick";
import { SliderArrow } from "../SliderArrow";
import './Introduction.css';
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { CircularLoading } from '../CircularLoading';

export const Introduction = ({ banners }) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    adaptiveHeight: true,
    autoplay: false,
    autoplaySpeed: 3000,
    initialSlide: 0,
    nextArrow: <SliderArrow icon={faChevronRight} />,
    prevArrow: <SliderArrow icon={faChevronLeft} />,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }
    ]
  };

  if (!banners || banners.length === 0) {
    return (
      <CircularLoading />
    );
  }

  return (
    <div className="introduction-slider">
      <Slider {...settings}>
        {banners.map((banner, idx) => {
          if (!banner.visible) return null;
          else
            return (
              <img key={banner.banner_id} src={banner.image_url} alt={banner.banner_name} />
            )
        })}
      </Slider>
    </div>
  )
}