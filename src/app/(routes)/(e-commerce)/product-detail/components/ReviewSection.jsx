"use client";

import React from "react";
import icons from "@/app/utils/icons";
import {
  CustomButton,
  CustomCustomButton,
} from "@/app/components";
import { Select, SelectItem } from "@nextui-org/react";

const { StarIcon, ArrowDownIcon } = icons.productDetailIcon;

export const ReviewSection = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="hidden lg:flex items-center justify-between">
        <p className="text-paragraph3 lg:text-heading3 ">
          Ulasan
        </p>
        <div className="flex w-full justify-end gap-2 items-center">
          <p className="text-paragraph8">Urutkan</p>
          <Select
            placeholder="Urutkan"
            variant="bordered"
            fullWidth={false}
            className="max-w-xs"
            color="primary"
            radius="sm"
          >
            <SelectItem
              key={1}
              value={"Tertinggi"}
              color="primary"
            >
              Tertinggi
            </SelectItem>
            <SelectItem
              key={2}
              value={"Terlaris"}
              color="primary"
            >
              Terlaris
            </SelectItem>
            <SelectItem
              key={3}
              value={"Termurah"}
              color="primary"
            >
              Termurah
            </SelectItem>
            <SelectItem
              key={4}
              value={"Termahal"}
              color="primary"
            >
              Termahal
            </SelectItem>
          </Select>
        </div>
      </div>

      <div className="flex justify-evenly items-center bg-neutral-100 p-8 rounded-xl">
        <div className="flex flex-col items-center">
          <p className="text-heading3">5.0</p>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((index) => (
              <StarIcon key={index} />
            ))}
          </div>
          <p className="text-paragraph10">234 Ulasan</p>
        </div>
        <span className="h-full w-[1px] bg-neutral-300"></span>
        <div className="flex flex-col items-center w-40">
          <table className="w-full">
            <thead>
              <tr>
                <th style={{ width: "5%" }}></th>
                <th style={{ width: "10%" }}></th>
                <th style={{ width: "80%" }}></th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((value) => (
                <tr>
                  <td>
                    {" "}
                    <p className="text-paragraph9">
                      {value}
                    </p>
                  </td>
                  <td>
                    {" "}
                    <StarIcon />
                  </td>
                  <td>
                    {" "}
                    <progress
                      className="progress progress-success w-full"
                      value={parseInt(value + "0")}
                      max="100"
                    ></progress>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {[1, 2, 3, 4, 5].map(() => (
        <ReviewItem />
      ))}
      <div className="flex justify-center ">
        <CustomButton
          customClassName="rounded-full text-paragraph8Res h-[20px] w-[190px] border border-[#D2D5DA]"
          rightIcon={<ArrowDownIcon />}
          title="Lihat Selengkapnya"
        ></CustomButton>
      </div>
      <ProfileItem />
    </div>
  );
};

const ReviewItem = () => {
  return (
    <div className="flex-col pt-4">
      <div className="flex items-center">
        <img
          src={"/assets/images/user-dummy.png"}
          alt="User"
          className="h-6 w-6"
          loading="lazy"
        />
        <div className="flex-col">
          <p className="text-paragraph9 ml-[6px]">
            Alexander Nirwan
          </p>
          <div className="flex ml-[6px]">
            {[1, 2, 3, 4, 5].map((index) => (
              <StarIcon key={index} />
            ))}
          </div>
        </div>
      </div>
      <p className="text-paragraph8 pt-4 lg:text-paragraph5">
        Direkomendasikan vendor ini sama temen karena
        katanya hasilnya bagus dan ternyata beneran sebagus
        ini. Pelayanannya sangat ramah mulai dari diskusi
        sampai akhir. Rumah saya jadi keliatan bagus
        banget.! Happy! Terima kasih dan sukses terus Pak!
      </p>
      <p className="text-paragraph8Res pt-4 pb-4">
        21 September 2022
      </p>
    </div>
  );
};

const ProfileItem = () => {
  return (
    <div className="border border-[#D2D5DA] rounded-xl ">
      <div className="p-6">
        <div className="flex justify-between items-center pb-3">
          <div>
            <img
              src={"/assets/images/studio.png"}
              alt="User"
              className="h-[54px] w-[54px]"
              loading="lazy"
            />
          </div>

          <CustomButton
            title="Lihat Profile"
            customClassName="bg-primary text-white h-[38px]"
          ></CustomButton>
        </div>
        <p className="text-paragraphBold">
          Metafora Photography
        </p>
        <p className="text-paragraph10 pt-[6px]">
          Metrofa adalah vendor studio video profesional
          yang menyediakan layanan edit video berkualitas
          tinggi
        </p>
        <div className="flex flex-col lg:flex-row pt-6 space-y-3 lg:space-y-0 lg:justify-between">
          <div className="flex lg:flex-col justify-between items-center">
            <p className="text-paragraph10">Bergabung</p>
            <p className="text-paragraphBold">Maret 2023</p>
          </div>
          <div className="flex lg:flex-col justify-between lg:justify-center items-center">
            <p className="text-paragraph10">Lokasi</p>
            <p className="text-paragraphBold">Yogyakarta</p>
          </div>
          <div className="flex lg:flex-col justify-between lg:justify-center items-center">
            <p className="text-paragraph10">Rating</p>
            <p className="text-paragraphBold">4.3</p>
          </div>
          <div className="flex lg:flex-col justify-between lg:justify-center items-center">
            <p className="text-paragraph10">Produk</p>
            <p className="text-paragraphBold">132</p>
          </div>
          <div className="flex lg:flex-col justify-between lg:justify-center items-center">
            <p className="text-paragraph10">
              Project Diselesaikan
            </p>
            <p className="text-paragraphBold">20</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
