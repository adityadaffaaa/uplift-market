"use client";

import React from "react";

import SwiperTestimonial from "./SwiperTestimonial";

export const TestimonialSection = () => {
  return (
    <section className="py-10 bg-[#066A69] w-full flex justify-center">
      <div className="container flex flex-col gap-6 lg:px-24">
        <h2 className="text-heading2Res text-white pl-5 lg:text-heading2">
          Apa Kata Mereka?
        </h2>
        <SwiperTestimonial data={testimonialDatas} />
      </div>
    </section>
  );
};

const testimonialDatas = [
  {
    rate: 4,
    desc: "Gokil abis! Bootcamp di EduPrina bener-bener ngebantu banget buat nambahin skill. Mentornya juga asik-asik dan gak bikin bosen",
  },
  {
    rate: 5,
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ad soluta voluptate autem, molestias odit ullam!",
  },
  {
    rate: 4,
    desc: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, vel!",
  },
  {
    rate: 5,
    desc: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, vel!",
  },
  {
    rate: 3,
    desc: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, vel!",
  },
  {
    rate: 5,
    desc: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, vel!",
  },
];

export default TestimonialSection;
