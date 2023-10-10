"use client";

import React from "react";
import Image from "next/image";
import { NextTextArea, NextButton } from "@/app/components";
import { _api, Icon } from "@iconify/react";
import fetch from "cross-fetch";
_api.setFetch(fetch);

const Review = () => {
  return (
    <section className="flex flex-col items-center gap-8">
      <h2 className="text-heading3Res lg:text-heading2">
        Bagikan Pengalamanmu!
      </h2>
      <div className="flex flex-col p-4 border-2 rounded-xl w-full gap-4 text-neutral-600  lg:max-w-xl">
        <figure className="flex gap-2 items-center">
          <Image
            className="rounded-lg flex-[1_1_30%] "
            src={"/assets/images/img-summary-product.png"}
            height={54}
            width={90}
            alt="img"
          />
          <figcaption className="flex-[1_1_70%] flex flex-col gap-2 ">
            <p className="text-paragraph7Res lg:text-paragraph6">
              Jasa Video Editing Profesional, Motion
              Graphics, Cepat dan Berkualitas
            </p>{" "}
            <div className="flex gap-2 items-center">
              <Image
                src={"/assets/icons/icon-vendor-studio.png"}
                height={32}
                width={32}
                alt="icon"
              />
              <p className="text-paragraph11Res lg:text-paragraph7">
                Metrofa Photography
              </p>
            </div>
          </figcaption>
        </figure>
        <div className="flex flex-col gap-1">
          <p className="text-paragraph4Res lg:text-paragraph6">
            Rating
          </p>
          <div className="rating">
            {[1, 2, 3, 4, 5].map((val) => (
              <input
                key={val}
                type="radio"
                name="rating-1"
                className="mask mask-star bg-yellow-400"
              />
            ))}
          </div>
        </div>
        <NextTextArea
          label={
            <p className="text-paragraph4Res lg:text-paragraph6 text-neutral-600">
              Ulasan
            </p>
          }
          minRows={5}
          maxRows={8}
          placeholder={"Ketik disini untuk ulasan"}
          variant={"faded"}
          rightContent={
            <Icon
              onClick={() => alert("halo")}
              height={20}
              className="text-neutral-400 cursor-pointer"
              icon="material-symbols:attach-file-rounded"
            />
          }
        />
        <NextButton
          className={"lg:text-paragraph1 "}
          size={"lg"}
          fullWidth
          color={"primary"}
        >
          Kirim
        </NextButton>
      </div>
    </section>
  );
};

export default Review;
