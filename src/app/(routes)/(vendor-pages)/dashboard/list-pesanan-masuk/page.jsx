"use client";

import React, { useState } from "react";
import Link from "next/link";
import { _api, Icon } from "@iconify/react";
import fetch from "cross-fetch";
import TextInput from "@/app/components/TextInput";
import { Button } from "@nextui-org/react";

_api.setFetch(fetch);

const ListPesananVendor = () => {
  return (
    <div className="">
      <div className="w-full flex flex-col max-w-md lg:max-w-full mx-auto md:max-w-2x"></div>
      <div className="m-5 lg:m-16">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <p className="text-paragraph3 lg:text-heading1Res">Produk Saya</p>
            <div className="hidden lg:block tabs mt-4">
              <a className="tab tab-bordered tab-active text-primary">
                Semua Pesanan
              </a>
              <a className="tab tab-bordered">Dikerjakan</a>
              <a className="tab tab-bordered">Dibatalkan</a>
              <a className="tab tab-bordered">Selesai</a>
            </div>
          </div>
        </div>
        <div className="w-full p-5 mt-9 h-[104px] rounded-[7px] bg-white items-center flex gap-x-2 lg:gap-x-[50px] ">
          <div className="w-full lg:w-72 flex">
            <img
              src={"/assets/images/productVendorDashboard.png"}
              alt="porto"
              className="w-20 lg:w-14 aspect-square rounded-lg object-cover"
            />
            <div className="flex flex-col justify-center ml-4 w-56">
              <p className="text-paragraph4Res">Lays’co Ads Video</p>
              <p className="text-paragraph lg:hidden">Rp.10.500.000</p>
              <div className="flex flex-row justify-between">
                <p className="text-paragraph9 text-textGrey">
                  Edit Video Professional 5 Menit
                </p>
                <Button
                  radius="full"
                  size="sm"
                  variant="bordered"
                  className="lg:hidden"
                >
                  Edit
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-32">
            <p className="text-paragraph10 text-textGrey">Pemesan</p>
            <p className="text-paragraph9 hidden lg:block">Rahmat Kholis</p>
          </div>
          <div className="flex flex-col w-24">
            <p className="text-paragraph10 text-textGrey">Harga</p>
            <p className="text-paragraph9 hidden lg:block">Rp500.000</p>
          </div>
          <div className="flex flex-col w-[148px]">
            <p className="text-paragraph10 text-textGrey">Batas Pengiriman</p>
            <p className="text-paragraph9 hidden lg:block">
              17 Sep 2023, 15.39 WIB
            </p>
          </div>
          <div className="flex flex-col w-[99px]">
            <p className="text-paragraph10 text-textGrey">Status</p>
            <div className="rounded-full bg-amber-200 items-center">
              <p className="text-paragraph7Res text-center text-[#E1AB1F] hidden lg:block">
                Baru
              </p>
            </div>
          </div>
          <Button
            isIconOnly
            color="default"
            variant="bordered"
            size="sm"
            aria-label="Take a photo"
          >
            <Icon
              icon={"material-symbols:arrow-forward-ios"}
              className="text-xs"
            />
          </Button>
        </div>
      </div>
      <div className="btm-nav lg:hidden">
        <div className="flex flex-col">
          <Button
            color="primary"
            variant="light"
            size="sm"
            aria-label="Take a photo"
          >
            <Icon
              icon={"material-symbols:home-outline"}
              className="text-2xl text-textGrey"
            />
          </Button>
          <p className="text-smallParagraph text-textGrey">Home</p>
        </div>
        <div className="flex flex-col">
          <Button
            color="primary"
            variant="light"
            size="sm"
            aria-label="Take a photo"
          >
            <Icon
              icon={"material-symbols:chat-outline"}
              className="text-2xl text-textGrey"
            />
          </Button>
          <p className="text-smallParagraph text-textGrey">Pesan</p>
        </div>
        <div className="flex flex-col">
          <Button
            color="primary"
            variant="light"
            size="sm"
            aria-label="Take a photo"
          >
            <Icon
              icon={"material-symbols:contract-outline"}
              className="text-2xl text-textGrey"
            />
          </Button>
          <p className="text-smallParagraph text-textGrey">Transaksi</p>
        </div>
        <div className="flex flex-col">
          <Button
            color="primary"
            variant="light"
            size="sm"
            aria-label="Take a photo"
          >
            <Icon
              icon={"material-symbols:inventory-2"}
              className="text-2xl text-primary"
            />
          </Button>
          <p className="text-smallParagraph text-primary">Produk</p>
        </div>
        <div className="flex flex-col">
          <Button
            color="primary"
            variant="light"
            size="sm"
            aria-label="Take a photo"
          >
            <Icon
              icon={"material-symbols:density-medium"}
              className="text-2xl text-textGrey"
            />
          </Button>
          <p className="text-smallParagraph text-textGrey">Lainnya</p>
        </div>
      </div>

      {/* Page content here */}
      {/* <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
          Open drawer
        </label> */}
    </div>
  );
};
export default ListPesananVendor;
