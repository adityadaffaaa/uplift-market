"use client";

import React from "react";
import icons from "@/app/utils/icons";
import SwiperProductPhoto from "./swipers/SwiperProductPhoto";
import ReviewSection from "./ReviewSection";

const { StarIcon } = icons.productDetailIcon;

export const MainSection = () => {
  return (
    <section className="flex flex-col gap-7 lg:flex-[1_1_60%]">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col items-center md:items-start gap-4 w-full">
          <article className="text-textBlack flex flex-col items-start gap-4">
            <h1 className="text-heading4 lg:text-heading3">
              Jasa Foto Produk Berkualitas, Professional,
              dan Cepat 15 Foto
            </h1>
            <div className="flex justify-between w-full lg:justify-start">
              <div className="flex items-center">
                <img
                  src={"/assets/images/studio.png"}
                  alt="Studio"
                  className="w-6 h-6"
                />
                <p className="text-paragraph9 ml-[6px]">
                  Metrofa Photography
                </p>
              </div>
              <div className="hidden lg:flex divider divider-horizontal"></div>
              <div className="flex items-center gap-1">
                <StarIcon />
                <p className="text-paragraph9 ml-[2px]">
                  4.7
                </p>
                <p className="text-paragraph9 text-grey2">
                  {" "}
                  (233 reviews)
                </p>
              </div>
            </div>
          </article>
          <div className="max-w-lg sm:max-w-2xl xl:max-w-4xl">
            <SwiperProductPhoto />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-paragraph3 lg:text-heading3">
            Detail
          </p>
          <p className="text-paragraph10 mb-9 lg:text-paragraph5">
            Kami menyediakan layanan video editing
            profesional dan motion graphics yang memadukan
            kreativitas tinggi dengan kecepatan pengerjaan
            yang luar biasa dan hasil berkualitas. Dengan
            tim ahli kami, kami mampu mengubah ide Anda
            menjadi video yang menakjubkan dan menarik. Baik
            Anda seorang content creator, perusahaan, atau
            individu yang membutuhkan video berkualitas
            tinggi, kami siap membantu Anda mencapai visi
            Anda.<br></br>
            <br></br>
            Video jadi durasi maksimal 1 menit Revisi minor
            maksimal 3 Pengiriman bahan video melalui e-mail
            atau Google Drive
          </p>
        </div>
      </div>
      <ReviewSection />
    </section>
  );
};

export default MainSection;
