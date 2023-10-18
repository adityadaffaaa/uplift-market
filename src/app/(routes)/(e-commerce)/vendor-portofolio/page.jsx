"use client";

import React, { useState } from "react";
import Link from "next/link";
import { _api, Icon } from "@iconify/react";
import fetch from "cross-fetch";
import ProductList from "../../components/ProductList";
import TextInput from "@/app/components/TextInput";
import CustomButton from "@/app/components/CustomButton";

_api.setFetch(fetch);

const VendorPortofolio = () => {
  const [click, setClick] = useState(0);

  const handleChange = () => {};
  return (
    <div className="w-full flex flex-col mt-20 lg:mt-28 max-w-md lg:max-w-full mx-auto md:max-w-2xl">
      <img
        src={"/assets/images/banner-vendor.png"}
        alt="banner"
        className="w-full lg:hidden"
      />
      <img
        src={"/assets/images/banner-vendor-web.png"}
        alt="banner"
        className="hidden lg:block"
      />
      <div className="absolute top-72 md:top-[400px] lg:hidden left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img
          src={"/assets/images/pp-vendor.png"}
          alt="pp-vendor"
          className="w-32 h-32"
        />
      </div>
      <div className="flex flex-col lg:flex-row lg:items-start">
        <div className="flex flex-col justify-center items-center px-5 gap-3 lg:ml-32 lg:w-96 lg:border lg:border-[#D2D5DA] lg:p-9 lg:rounded-2xl lg:mt-12 lg:mr-7">
          <img
            src={"/assets/images/pp-vendor.png"}
            alt="pp-vendor"
            className="w-32 h-32 hidden lg:block"
          />
          <div>
            <p className="w-full mt-20 lg:mt-0 text-heading2Res">
              Metrofa Agency
            </p>
          </div>
          <div className="flex border border-[#D2D5DA] rounded-full items-center px-4 py-2">
            <Icon icon="material-symbols:location-on-outline" />
            <p className="text-paragraph pl-2">Yogyakarta</p>
          </div>
          <p className="text-paragraph8 text-[#686868] text-center">
            Metrofa Studio adalah salah satu vendor
            <br />
            yang bergerak dibidang video. Menyediakan
            <br className="lg:hidden" />
            banyak layanan seperti editing video,
            <br className="lg:hidden" />
            effects,dll.
          </p>
          <div className="flex gap-x-3 items-center">
            <img
              src={"/assets/images/instagram-icon.png"}
              alt="instagram"
              className="w-9 h-9"
            />
            <img
              src={"/assets/images/facebook-icon.png"}
              alt="facebook"
              className="w-9 h-9"
            />
            <Icon icon="material-symbols:link" />
            <p className="text-paragraph">metrofastudio.com</p>
          </div>
          <CustomButton
            title="Chat"
            customClassName="bg-primary text-white w-full text-paragraph7 mt-6"
            leftIcon={<Icon icon="material-symbols:sms-outline" />}
          ></CustomButton>
        </div>
        <div className="flex flex-col mt-10 lg:w-8/12 px-5 lg:pr-20">
          <div className="flex flex-row justify-between w-full">
            <div className="tabs w-full ">
              <a className="tab tab-bordered bg-success-50">Produk</a>
              <a className="tab tab-bordered tab-active bg-primary text-white">
                Portofolio
              </a>
            </div>
            <div className="hidden lg:flex items-center">
              <p className="text-paragraph pr-2">Urutkan</p>
              <select className="select w-min pl-4 pr-4 border rounded-xl border-[#D2D5DA] h-[48px]">
                <option disabled selected>
                  Pilih
                </option>
                <option>Termurah</option>
                <option>Termahal</option>
                <option>Rating terbaik</option>
                <option>Rating terburuk</option>
                <option>Relevansi</option>
              </select>
            </div>
          </div>
          <br />
          <div className="aspect-video max-w-full">
            <iframe
              src="https://www.youtube.com/watch?v=Fq4I0FluQKs"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              className="w-full h-full"
            ></iframe>
          </div>
          <div className="grid grid-cols-2">
            <div className="p-3">
              <img
                src={"/assets/images/porto1.png"}
                alt="porto"
                className="w-full aspect-square rounded-lg object-cover"
              />
            </div>
            <div className="p-3">
              <img
                src={"/assets/images/porto2.png"}
                alt="porto"
                className="w-full aspect-square rounded-lg object-cover"
              />
            </div>
            <div className="p-3">
              <img
                src={"/assets/images/porto3.png"}
                alt="porto"
                className="w-full aspect-square rounded-lg object-cover"
              />
            </div>
            <div className="p-3">
              <img
                src={"/assets/images/porto4.png"}
                alt="porto"
                className="w-full aspect-square rounded-lg object-cover"
              />
            </div>
            <div className="p-3">
              <img
                src={"/assets/images/porto5.png"}
                alt="porto"
                className="w-full aspect-square rounded-lg object-cover"
              />
            </div>
            <div className="p-3">
              <img
                src={"/assets/images/porto6.png"}
                alt="porto"
                className="w-full aspect-square rounded-lg object-cover"
              />
            </div>
            <div className="p-3">
              <img
                src={"/assets/images/porto7.png"}
                alt="porto"
                className="w-full aspect-square rounded-lg object-cover"
              />
            </div>
            <div className="p-3">
              <img
                src={"/assets/images/porto8.png"}
                alt="porto"
                className="w-full aspect-square rounded-lg object-cover"
              />
            </div>
            <div className="p-3">
              <img
                src={"/assets/images/porto9.png"}
                alt="porto"
                className="w-full aspect-square rounded-lg object-cover"
              />
            </div>
            <div className="p-3">
              <img
                src={"/assets/images/porto10.png"}
                alt="porto"
                className="w-full aspect-square rounded-lg object-cover"
              />
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};
export default VendorPortofolio;
