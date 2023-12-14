"use client";

import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import {
  FreeMode,
  Navigation,
  Thumbs,
} from "swiper/modules";

export const SwiperProductPhoto = ({ image = [] }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(0);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{
          swiper:
            thumbsSwiper && !thumbsSwiper.destroyed
              ? thumbsSwiper
              : null,
        }}
        modules={[Thumbs, Navigation]}
        className="mySwiper2 w-full"
      >
        {image.length
          ? image.map(
              ({ attributes: { image_url } }, index) => (
                <SwiperSlide key={index} className="mb-2">
                  <div className="w-full h-[500px] overflow-hidden rounded-lg">
                    <img
                      src={image_url}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </SwiperSlide>
              )
            )
          : null}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[Navigation, Thumbs]}
        className="mySwiper w-full"
      >
        {image.length
          ? image.map(
              ({ attributes: { image_url } }, index) => (
                <SwiperSlide key={index}>
                  <div className="h-32 w-full overflow-hidden rounded-lg">
                    <img
                      src={image_url}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </SwiperSlide>
              )
            )
          : null}
      </Swiper>
    </>
  );
};

const images = [
  "/assets/images/img-produk1.png",
  "/assets/images/img-produk2.png",
  "/assets/images/img-produk3.png",
  "/assets/images/img-produk4.png",
  "/assets/images/img-produk5.png",
];

export default SwiperProductPhoto;
