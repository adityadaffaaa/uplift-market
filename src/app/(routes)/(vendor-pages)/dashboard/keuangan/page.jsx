"use client";

import React, { useState } from "react";
import Link from "next/link";
import { _api, Icon } from "@iconify/react";
import fetch from "cross-fetch";
import { Button, Input } from "@nextui-org/react";

_api.setFetch(fetch);

const DashboardKeuanganVendor = () => {
  return (
    <div className="w-full flex flex-col max-w-md lg:max-w-full mx-auto md:max-w-2x">
      <div className="m-5 lg:m-16">
        <div className="hidden lg:flex justify-between items-center">
          <div className="flex flex-col">
            <p className="text-paragraph3 lg:text-heading1Res">Keuangan</p>
          </div>
        </div>
        <div className="w-full bg-white mt-9 lg:px-6 py-8 rounded-xl flex flex-col">
          <p className="text-heading4">Penghasilan Saya</p>
          <div className="flex mt-6 gap-x-10 flex-col lg:flex-row">
            <div className="flex-col">
              <p className="text-paragraph7 text-grey2">Total Penjualan</p>
              <p className="text-heading3 w-64">Rp.480.000</p>
            </div>
            <div className="border-1 lg:h-16 lg:w-0 w-full my-3"></div>
            <div className="flex-col">
              <p className="text-paragraph7 text-grey2">
                Total Dana yang Sudah Ditarik
              </p>
              <p className="text-heading3">Rp.1.390.000</p>
            </div>
          </div>
          <Button
            color="primary"
            className="w-min mt-8"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            Tarik Dana
          </Button>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <div className="flex flex-col">
                <p className="text-heading4">Tarik Dana</p>
                <div className="rounded-xl bg-[#FEFAED] border-[#FBC947] flex px-4 py-4 items-center justify-start">
                  <div className="w-7 h-7">
                    <Icon
                      icon={"material-symbols:info-outline"}
                      height={28}
                      width={28}
                      className="text-3xl text-[#FBC947]"
                    />
                  </div>
                  <div>
                    <p className="text-paragraph8 ml-3">
                      Penarikan dana dikenakan Biaya Admin Rp5.000 dan akan
                      terproses selambat-lambatnya dalam waktu 3 (tiga) hari
                      kerja.{" "}
                    </p>
                  </div>
                </div>
                <p className="py-4 my -2 text-heading6">
                  Jumlah yang Ingin Ditarik
                </p>
                <Input
                  type="text"
                  placeholder="Harga"
                  variant="bordered"
                  size="lg"
                  classNames={{ inputWrapper: "p-0 overflow-hidden" }}
                  startContent={
                    <div className="bg-greyBackground border-r-1 h-full w-[42px] flex justify-center items-center">
                      <p className="text-center text-paragraph9">Rp</p>
                    </div>
                  }
                />
                <p className="mt-3 text-paragraph">Minimum Rp20.000</p>
                <p className="text-heading6 mt-6">Tujuan Bank</p>
                <p className="text-paragraph mt-2">
                  Kamu belum mengatur Rekening Bank. Silahkan kamu atur di
                  Rekening Saya
                </p>

                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <div className="flex items-center justify-end gap-x-2">
                    <button className="btn bg-white text-textGrey text-paragraph4Res">
                      Batal
                    </button>
                    <button className="btn bg-primary text-white text-paragraph4Res">
                      Tarik Dana
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </dialog>
        </div>
        <div className="w-full bg-white mt-9 lg:px-6 py-4 rounded-t-xl flex flex-col">
          <p className="text-heading4 w-[107px]">Riwayat</p>
        </div>
        <div className="hidden w-full bg-white px-6 py-5 lg:flex gap-x-8 justify-between">
          <div className="flex gap-x-8">
            <p className="text-paragraphBold w-[107px]">Tanggal</p>
            <p className="text-paragraphBold">Deskripsi</p>
          </div>
          <p className="text-paragraphBold">Jumlah</p>
        </div>
        <div className="w-full bg-white lg:px-6 py-5 border-t-1 flex gap-x-8 justify-between">
          <img
            src={"/assets/images/keuanganMasuk.png"}
            alt="keuanganMasuk"
            className="h-7 object-cover items-center lg:hidden"
          />
          <div className="flex flex-col lg:hidden gap-x-8">
            <p className="text-paragraph">Pesanan #2402939839013</p>
            <p className="text-paragraph w-[107px] text-grey2">
              7 Okt 2023, 13:18
            </p>
          </div>

          <div className="hidden lg:flex gap-x-8 items-start">
            <p className="text-paragraph w-[107px] text-grey2">
              7 Okt 2023, 13:18
            </p>
            <p className="text-paragraph">Pesanan #2402939839013</p>
          </div>
          <p className="text-paragraph text-primary">Rp250.000</p>
        </div>
        <div className="w-full bg-white lg:px-6 py-5 border-t-1 flex gap-x-8 rounded-b-xl justify-between">
          <img
            src={"/assets/images/tarikBank.png"}
            alt="bank"
            className="h-7 object-cover items-center lg:hidden"
          />
          <div className="flex lg:hidden flex-col gap-x-8">
            <p className="text-paragraph">Penarikan Dana ke BCA *9283</p>
            <p className="text-paragraph w-[107px] text-grey2">
              7 Okt 2023, 13:18
            </p>
          </div>
          <div className="hidden lg:flex gap-x-8">
            <p className="text-paragraph w-[107px] text-grey2">
              7 Okt 2023, 13:18
            </p>
            <p className="text-paragraph">Penarikan Dana ke BCA *9283</p>
          </div>
          <p className="text-paragraph text-danger">Rp5.000.000</p>
        </div>
      </div>
    </div>

    // {/* Page content here */}
    // {/* <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
    //   Open drawer
    // </label> */}
  );
};
export default DashboardKeuanganVendor;
