"use client";

import React, { useState } from "react";
import { _api, Icon } from "@iconify/react";
import fetch from "cross-fetch";
_api.setFetch(fetch);

const FaqSection = () => {
  const [click, setClick] = useState(null);

  const toggle = (index) => {
    if (click === index) {
      setClick(false);
    } else {
      setClick(index);
    }
  };

  return (
    <section className="py-20 bg-grey flex justify-center">
      <div className="container px-5 flex flex-col  lg:flex-row lg:items-center lg:px-24 gap-8">
        <div className="flex flex-col gap-6 lg:flex-[1_1_100px] text-textBlack">
          <h2 className="text-heading2Res lg:text-heading2 text-center lg:text-start">
            Pertanyaan yang Sering Ditanyakan
          </h2>
          <p className="text-paragraph5 hidden lg:block">
            Masih belum menemukan jawaban? Silahkan hubungi
            upliftmarket@gmail.com untuk pertanyaan lebih
            lanjut.
          </p>
        </div>
        <div className="flex lg:flex-[1_1_400px] flex-col gap-4">
          {accordionDatas.map(({ title, desc }, index) => (
            <FaqAccordion
              key={index}
              title={title}
              desc={desc}
              onClick={() => toggle(index)}
              clicked={click === index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const FaqAccordion = ({
  title,
  desc,
  onClick,
  clicked,
}) => {
  return (
    <div
      onClick={onClick}
      className="accordion cursor-pointer bg-white border-2 px-4 py-3 rounded-xl w-full flex flex-col text-textBlack"
    >
      <div className="flex items-center justify-between">
        <h6 className="accordion-title text-heading6 lg:text-heading5 font-bold">
          {title}
        </h6>
        <div className="p-[2px] rounded-full bg-primary">
          <Icon
            height={24}
            className={`text-white transition-linear ${
              clicked ? "rotate-180" : "rotate-0"
            }`}
            icon="iconamoon:arrow-down-2"
          />
        </div>
      </div>
      <div
        className={`accordion-content overflow-hidden transition-linear pt-0 h-0 ${
          clicked && "pt-6 h-auto"
        }`}
      >
        <p className="text-paragraph6 font-normal">
          {desc}
        </p>
      </div>
    </div>
  );
};

const accordionDatas = [
  {
    title: " Lorem ipsum dolor sit amet",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscingelit. Integer fringilla libero a turpis viverravehicula. Sed ac pellentesque ligula, ac pharetra justo. Donec ut erat vitae tortor accumsan convallis. Aenean ornare commodo purus se",
  },
  {
    title: " Lorem ipsum dolor sit amet",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscingelit. Integer fringilla libero a turpis viverravehicula. Sed ac pellentesque ligula, ac pharetra justo. Donec ut erat vitae tortor accumsan convallis. Aenean ornare commodo purus se",
  },
  {
    title: " Lorem ipsum dolor sit amet",
    desc: "Lorem ipsum dolor sit amet",
  },
  {
    title: " Lorem ipsum dolor sit amet",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscingelit. Integer fringilla libero a turpis viverravehicula. Sed ac pellentesque ligula, ac pharetra justo. Donec ut erat vitae tortor accumsan convallis. Aenean ornare commodo purus se",
  },
  {
    title: " Lorem ipsum dolor sit amet",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscingelit. Integer fringilla libero a turpis viverravehicula. Sed ac pellentesque ligula, ac pharetra justo. Donec ut erat vitae tortor accumsan convallis. Aenean ornare commodo purus se",
  },
];

export default FaqSection;
