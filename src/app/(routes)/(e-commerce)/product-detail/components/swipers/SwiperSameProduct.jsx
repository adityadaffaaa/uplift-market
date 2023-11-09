"use client";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import icons from "@/app/utils/icons";

import { products } from "@/helpers/constants";

const { StarIcon } = icons.productDetailIcon;
const { LocationIcon } = icons.homeScreenIcon;

export const SwiperSameProduct = () => {
  return (
    <div>
      <Swiper
        freeMode={true}
        grabCursor={true}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
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
        className="swiperSameProduct"
      >
        {products.map(
          (
            { title, city, cover, price, rate, review },
            index
          ) => {
            const first = index === 0;
            const last = index === products.length - 1;
            return (
              <SwiperSlide
                className={
                  first
                    ? "pl-5 lg:pl-0"
                    : last && "pr-5 lg:pr-0"
                }
                key={index}
              >
                <ProductCardItem
                  title={title}
                  city={city}
                  price={price}
                  rate={rate}
                  review={review}
                  imgUrl={cover}
                />
              </SwiperSlide>
            );
          }
        )}
      </Swiper>
    </div>
  );
};

const ProductCardItem = ({
  imgUrl,
  title,
  price,
  rate,
  review,
  city,
}) => {
  return (
    <Link href={"/product-detail"}>
      <div className="card cursor-pointer card-compact w-full bg-base-100 rounded-xl border-2 transition-default hover:shadow-defaultShadow">
        <figure>
          <img
            src={imgUrl}
            alt="Shoes"
            loading="lazy"
            className="w-full object-cover"
          />
        </figure>
        <div className="text-start py-3 px-2 text-textBlack flex flex-col gap-4">
          <h2 className=" text-paragraph8Res lg:text-heading6">
            {title}
          </h2>
          <p className="text-primary text-paragraph7Res lg:text-paragraph6">
            Rp{price}
          </p>
          <div className="flex flex-col gap-1">
            <div className="flex gap-2 items-center">
              <StarIcon />
              <p className="text-paragraph8Res lg:text-paragraph9 flex gap-1">
                {rate}
                <span className="text-paragraph9Res text-grey2 lg:text-paragraph10">
                  ({review} reviews)
                </span>
              </p>
            </div>
            <div className="flex gap-2 text-grey2 items-center">
              <LocationIcon />
              <p className="text-paragraph8Res lg:text-paragraph10">
                {city}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SwiperSameProduct;
