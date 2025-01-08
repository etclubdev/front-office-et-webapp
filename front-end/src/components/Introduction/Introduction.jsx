import './Introduction.css';
import Slider from "react-slick";
import { SliderArrow } from '../SliderArrow';
import { bannerData } from "../../mocks/data";
import { Carousel } from "antd";
import React from 'react';

const banners = bannerData.banners;
export const Introduction = () => {


  return (
    <div className="">
      <Carousel autoplay>
        {banners.map((banner, idx) => (
          <img src={require(`../../mocks${banner.image}`)} alt={`slide ${idx}`} />
        ))}
      </Carousel>
    </div>
  )
}