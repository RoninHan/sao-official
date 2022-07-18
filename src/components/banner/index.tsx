
import React from 'react';
import './index.scss'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";



const Banner: React.FC = () => {
  const navigationConfig = {
    enabled:true,
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
  return (
    <div className='banner'>
      <Swiper className="mySwiper" modules={[Navigation]} navigation={navigationConfig} >
        <SwiperSlide><div className={'banner-item banner-item1'}></div></SwiperSlide>
        <SwiperSlide><div className={'banner-item banner-item2'}></div></SwiperSlide>
        <SwiperSlide><div className={'banner-item banner-item3'}></div></SwiperSlide>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>
    </div>
  );
};

export default Banner;