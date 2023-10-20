"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import icons from "@/app/utils/icons";

const { StarIcon } = icons.homeScreenIcon;

export const SwiperTestimonial = ({ data }) => {
  return (
    <div>
      <Swiper
        spaceBetween={0}
        freeMode={true}
        grabCursor={true}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1.2,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 16,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 16,
          },
        }}
        modules={[FreeMode]}
        className="swiperTestimonial"
      >
        {data.map(({ rate, desc }, index) => {
          const first = index === 0;
          const last = index === data.length - 1;
          return (
            <SwiperSlide
              className={
                first
                  ? "pl-5 lg:pl-0"
                  : last && "pr-5 lg:pr-0"
              }
              key={index}
            >
              <TestimonialCardItem
                rate={rate}
                desc={desc}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

const TestimonialCardItem = ({ rate, desc }) => {
  const Ratings = ({ rate }) => {
    let rating = [];
    for (let index = 0; index < rate; index++) {
      rating.push(<StarIcon key={index} />);
    }
    return rating;
  };
  return (
    <div className="card w-full rounded-xl bg-base-100">
      <div className="px-4 py-8 flex flex-col gap-7 items-start">
        <article className="flex flex-col gap-3">
          <div className="flex">
            <Ratings rate={rate} />
          </div>
          <p className="text-paragraph6Res text-ellipsis lg:text-paragraph8">
            {desc}
          </p>
        </article>
        <figure className="flex gap-4">
          <img
            src={"/assets/images/img-profile-picture.png"}
            alt="img"
            loading="lazy"
            className="w-6 h-6"
          />
          <figcaption className="flex flex-col text-textBlack">
            <p className="text-paragraph5Res">
              Elizabeth Natasha
            </p>
            <p className="text-paragraph9Res text-grey2">
              UI/UX Designer at GOTO
            </p>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default SwiperTestimonial;
