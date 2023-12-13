"use client";

import React from "react";
import { Button } from "@nextui-org/react";
import icons from "@/app/utils/icons";

const { ArrowDownIcon } =
  icons.vendorDashboard.pesananMasukIcon;

const MainContentSection = () => {
  return (
    <div className="flex flex-col">
      <div className="w-full bg-white lg:mt-9 lg:px-6 py-8 rounded-xl flex flex-col">
        <p className="text-paragraph7 text-textGrey">
          Jasa Foto Produk Berkualitas, dan ...
        </p>
        <p className="text-heading4">
          Photo Product Kosmetik Savana
        </p>
        <p className="text-paragraph">
          Tolong dibuatkan briefing untuk jasa foto produk
          yang akan saya pesan dari Metrofa Photo. Produk
          yang ingin saya difoto adalah keripik singkong.
          Saya ingin memberikan kreativitas sepenuhnya
          kepada tim Metrofa Photo dalam menentukan tema
          foto produk ini, jadi tema boleh bebas sesuai
          dengan visi dan ide kreatif mereka. Yang saya
          harapkan adalah bahwa dalam foto produk ini, ada
          properti singkong yang dapat ditempatkan di luar
          produk, untuk menambah daya tarik dan memberikan
          sentuhan alami pada hasil akhir. Saya berharap
          hasil fotonya akan mencerminkan kualitas dan
          kelezatan keripik singkong kami secara visual.
          Terima kasih atas kerja sama Anda dalam proyek
          ini.
        </p>
      </div>
      <div className="w-full bg-white lg:mt-9 lg:px-6 lg:py-8 rounded-xl flex flex-col">
        <p className="text-heading4">Lampiran</p>
        <div className="flex flex-col mt-4 gap-y-2">
          <div className="flex justify-between">
            <div className="flex gap-x-3">
              <img
                src={
                  "/assets/images/productVendorDashboard.png"
                }
                alt="porto"
                className="w-12 lg:w-14 aspect-square rounded-lg object-cover"
              />
              <div className="flex flex-col">
                <p>Logo Fib Bismillah fix... png</p>
                <p className="text-paragraph10 text-textGrey">
                  2 MB
                </p>
              </div>
            </div>
            <Button
              isIconOnly
              color="warning"
              variant="faded"
              aria-label="Take a photo"
              radius="full"
            >
              <ArrowDownIcon />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContentSection;
