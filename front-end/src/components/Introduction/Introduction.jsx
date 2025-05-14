import React from 'react';
import Slider from "react-slick";
import { SliderArrow } from "../SliderArrow";
import './Introduction.css';
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

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
      <div className="alt-img">
        <Box>
          <CircularProgress size="6rem" />
        </Box>
      </div>
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