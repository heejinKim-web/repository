import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const UpperVisual = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      speed={1000}
    >
      <SwiperSlide>
        <div className="slide">
          <img
            src="/img/slide1.png"
            alt="Slide 1"
            className="slide-background"
          />
          <div className="slide-content">
            <h1>Draconian</h1>
            <p>Your Swedish comfort</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide">
          <img
            src="/img/slide2.png"
            alt="Slide 2"
            className="slide-background"
          />
          <div className="slide-content">
            <h1>Draconian</h1>
            <p>Gothic Melancholy</p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default UpperVisual;
