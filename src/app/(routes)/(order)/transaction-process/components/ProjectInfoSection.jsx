"use client";
import React from "react";
import Image from "next/image";
import { CustomButton } from "@/app/components";
import { _api, Icon } from "@iconify/react";
import fetch from "cross-fetch";
_api.setFetch(fetch);
export const ProjectInfoSection = () => {
  return (
    <aside className="flex flex-col gap-6 flex-[1_1_40%]">
      <div className="flex flex-col gap-6 md:bg-white rounded-lg p-6 border-2">
        <h4 className="text-heading4Res lg:text-heading4">
          Project Info
        </h4>
        <div className="flex flex-col gap-4">
          <figure className="flex gap-2 items-center">
            <Image
              className="rounded-lg flex-[1_1_20%]"
              src={"/assets/images/img-summary-product.png"}
              height={54}
              width={90}
              alt="img"
            />
            <figcaption className="text-paragraph9  flex-[1_1_80%]">
              Jasa Video Editing Profesional, Motion
              Graphics, Cepat dan Berkualitas
            </figcaption>
          </figure>
          <div className="flex justify-between">
            <p className="text-paragraph7 text-neutral-500">
              No. Transaksi
            </p>
            <p className="text-paragraph7">X923HSD8273</p>
          </div>
          <div className="flex justify-between">
            <p className="text-paragraph7 text-neutral-500">
              Total Harga
            </p>
            <p className="text-paragraph7">Rp575.000</p>
          </div>
          <div className="flex justify-between">
            <p className="text-paragraph7 text-neutral-500">
              Tgl. Pesanan
            </p>
            <p className="text-paragraph7">
              12 September 2023
            </p>
          </div>
          <div className="flex justify-between">
            <p className="text-paragraph7 text-neutral-500">
              Estimasi Selesai
            </p>
            <p className="text-paragraph7">
              16 September 2023
            </p>
          </div>
        </div>
      </div>
      <div className="p-6 bg-green-100 flex flex-col rounded-lg text-neutral-600 gap-2">
        <h6 className="text-paragraph3">Butuh bantuan?</h6>
        <p className="text-paragraph8">
          Cari jawabannya disini atau hubungi kami di
          uplift@market.com
        </p>
      </div>
    </aside>
  );
};

export default ProjectInfoSection;
