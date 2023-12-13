"use client";
import React from "react";
import icons from "@/app/utils/icons";
import { Button } from "@nextui-org/react";
const { CheckIcon, SmsIcon, CloseIcon } =
  icons.vendorDashboard.pesananMasukIcon;

const InformationSection = () => {
  return (
    <div className="">
      <div className=" bg-white lg:mt-9 lg:px-6 lg:py-8 rounded-xl flex flex-col w-full h-min">
        <p className="text-heading3Res">Actions</p>
        <div className="flex justify-between mt-4">
          <p className="text-paragraph10">Batas Waktu</p>
          <p className="text-paragraph9 text-red-600">
            13 jam 28 menit
          </p>
        </div>
        <div>
          <Button
            color="primary"
            className="w-full mt-8"
            startContent={<CheckIcon />}
          >
            Terima Project
          </Button>
          <Button
            color="danger"
            className="w-full mt-3"
            startContent={<CloseIcon />}
          >
            Tolak Project
          </Button>
        </div>
      </div>

      <div className="hidden lg:flex lg:flex-col lg:w-[328px]">
        <div className=" bg-white lg:mt-9 lg:px-6 lg:py-8 rounded-xl flex flex-col w-full h-min">
          <p className="text-heading4">Project Info</p>
          <div className="flex flex-col mt-4 gap-y-2">
            <div className="flex justify-between">
              <p className="text-paragraph10 text-textGrey">
                Harga
              </p>
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
              <p className="text-paragraph9">
                21 September 2023
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-paragraph10 text-textGrey">
                Pemesan
              </p>
              <p className="text-paragraph9">
                Sisca Kohlis
              </p>
            </div>
          </div>
          <Button
            color="default"
            className="w-full mt-4 lg:mt-8"
            variant="bordered"
            startContent={<SmsIcon />}
          >
            Chat
          </Button>
        </div>
      </div>
    </div>
  );
};

{
  /* <div className="w-full bg-white lg:mt-9 lg:px-6 lg:py-8 rounded-xl flex flex-col lg:hidden">
  <p className="text-heading4">Project Info</p>
  <div className="flex flex-col mt-4 gap-y-2">
    <div className="flex justify-between">
      <p className="text-paragraph10 text-textGrey">
        Harga
      </p>
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
      <p className="text-paragraph10 text-textGrey">
        Pemesan
      </p>
      <p className="text-paragraph9">Sisca Kohlis</p>
    </div>
  </div>
  <Button
    color="default"
    className="w-full mt-4 lg:mt-8"
    variant="bordered"
    startContent={<SmsIcon />}
  >
    Chat
  </Button>
</div>; */
}

export default InformationSection;
