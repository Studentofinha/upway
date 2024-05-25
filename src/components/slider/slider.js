import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../../assets/Screenshot_13.png'
import img2 from '../../assets/Screenshot_12.png'
import img3 from '../../assets/Screenshot_14.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={img1} alt=""/></SwiperSlide>
        <SwiperSlide> <img src={img2} alt=""/></SwiperSlide>
        <SwiperSlide> <img src={img3} alt=""/></SwiperSlide>
      </Swiper>
    </>
  );
}