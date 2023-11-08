"use client";

import React, { useState } from "react";
import Link from "next/link";
import { _api, Icon } from "@iconify/react";
import fetch from "cross-fetch";
import { Button, Input } from "@nextui-org/react";

_api.setFetch(fetch);

const DashboardDetailPesananMasukVendor = () => {
  return (
    <div className="w-full flex flex-col max-w-md lg:max-w-full mx-auto md:max-w-2x">
      <div className="m-5 lg:m-16 lg:mt-0">
        <div className="lg:flex lg:flex-row gap-x-6">
          <div className="lg:w-[680px]">
            <div className="w-full bg-white lg:mt-9 lg:px-6 lg:py-8 rounded-xl flex flex-col lg:hidden">
              <p className="text-heading4">Project Info</p>
              <div className="flex flex-col mt-4 gap-y-2">
                <div className="flex justify-between">
                  <p className="text-paragraph10 text-textGrey">Harga</p>
                  <p className="text-paragraph9">Rp500.000</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-paragraph10 text-textGrey">
                    Kode Transaksi
                  </p>
                  <p className="text-paragraph9">X923HSD8273</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-paragraph10 text-textGrey">
                    Tgl. Pemesanan
                  </p>
                  <p className="text-paragraph9">21 September 2023</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-paragraph10 text-textGrey">Pemesan</p>
                  <p className="text-paragraph9">Sisca Kohlis</p>
                </div>
              </div>
              <Button
                color="default"
                className="w-full mt-4 lg:mt-8"
                variant="bordered"
                startContent={
                  <Icon
                    icon={"material-symbols:sms-outline"}
                    className="text-xl text-black"
                  />
                }
              >
                Chat
              </Button>
            </div>
            <div className="w-full bg-white lg:mt-9 lg:px-6 py-8 rounded-xl flex flex-col">
              <p className="text-paragraph7 text-textGrey">
                Jasa Foto Produk Berkualitas, dan ...
              </p>
              <p className="text-heading4">Photo Product Kosmetik Savana</p>
              <p className="text-paragraph">
                Tolong dibuatkan briefing untuk jasa foto produk yang akan saya
                pesan dari Metrofa Photo. Produk yang ingin saya difoto adalah
                keripik singkong. Saya ingin memberikan kreativitas sepenuhnya
                kepada tim Metrofa Photo dalam menentukan tema foto produk ini,
                jadi tema boleh bebas sesuai dengan visi dan ide kreatif mereka.
                Yang saya harapkan adalah bahwa dalam foto produk ini, ada
                properti singkong yang dapat ditempatkan di luar produk, untuk
                menambah daya tarik dan memberikan sentuhan alami pada hasil
                akhir. Saya berharap hasil fotonya akan mencerminkan kualitas
                dan kelezatan keripik singkong kami secara visual. Terima kasih
                atas kerja sama Anda dalam proyek ini.
              </p>
            </div>
            <div className="w-full bg-white lg:mt-9 lg:px-6 lg:py-8 rounded-xl flex flex-col">
              <p className="text-heading4">Lampiran</p>
              <div className="flex flex-col mt-4 gap-y-2">
                <div className="flex justify-between">
                  <div className="flex gap-x-3">
                    <img
                      src={"/assets/images/productVendorDashboard.png"}
                      alt="porto"
                      className="w-12 lg:w-14 aspect-square rounded-lg object-cover"
                    />
                    <div className="flex flex-col">
                      <p>Logo Fib Bismillah fix... png</p>
                      <p className="text-paragraph10 text-textGrey">2 MB</p>
                    </div>
                  </div>
                  <Button
                    isIconOnly
                    color="warning"
                    variant="faded"
                    aria-label="Take a photo"
                    radius="full"
                  >
                    <Icon
                      icon={"material-symbols:arrow-downward"}
                      className="text-xl text-black"
                    />
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:hidden">
              <Button
                color="primary"
                className="w-full mt-8"
                startContent={
                  <Icon
                    icon={"material-symbols:check"}
                    className="text-xl text-white"
                  />
                }
              >
                Terima Project
              </Button>
              <Button
                color="danger"
                className="w-full mt-3"
                startContent={
                  <Icon
                    icon={"material-symbols:close"}
                    className="text-xl text-white"
                  />
                }
              >
                Tolak Project
              </Button>
            </div>
          </div>
          <div className="hidden lg:flex lg:flex-col lg:w-[328px]">
            <div className=" bg-white lg:mt-9 lg:px-6 lg:py-8 rounded-xl flex flex-col w-full h-min">
              <p className="text-heading3Res">Actions</p>
              <div className="flex justify-between mt-4">
                <p className="text-paragraph10">Batas Waktu</p>
                <p className="text-paragraph9 text-red-600">13 jam 28 menit</p>
              </div>
              <div>
                <Button
                  color="primary"
                  className="w-full mt-8"
                  startContent={
                    <Icon
                      icon={"material-symbols:check"}
                      className="text-xl text-white"
                    />
                  }
                >
                  Terima Project
                </Button>
                <Button
                  color="danger"
                  className="w-full mt-3"
                  startContent={
                    <Icon
                      icon={"material-symbols:close"}
                      className="text-xl text-white"
                    />
                  }
                >
                  Tolak Project
                </Button>
              </div>
            </div>
            <div className=" bg-white lg:mt-9 lg:px-6 lg:py-8 rounded-xl flex flex-col w-full h-min">
              <p className="text-heading4">Project Info</p>
              <div className="flex flex-col mt-4 gap-y-2">
                <div className="flex justify-between">
                  <p className="text-paragraph10 text-textGrey">Harga</p>
                  <p className="text-paragraph9">Rp500.000</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-paragraph10 text-textGrey">
                    Kode Transaksi
                  </p>
                  <p className="text-paragraph9">X923HSD8273</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-paragraph10 text-textGrey">
                    Tgl. Pemesanan
                  </p>
                  <p className="text-paragraph9">21 September 2023</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-paragraph10 text-textGrey">Pemesan</p>
                  <p className="text-paragraph9">Sisca Kohlis</p>
                </div>
              </div>
              <Button
                color="default"
                className="w-full mt-4 lg:mt-8"
                variant="bordered"
                startContent={
                  <Icon
                    icon={"material-symbols:sms-outline"}
                    className="text-xl text-black"
                  />
                }
              >
                Chat
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>

    // {/* Page content here */}
    // {/* <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
    //   Open drawer
    // </label> */}
  );
};
export default DashboardDetailPesananMasukVendor;
