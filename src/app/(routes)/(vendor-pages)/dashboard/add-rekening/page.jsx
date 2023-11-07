"use client";

import React, { useState } from "react";
import Link from "next/link";
import { _api, Icon } from "@iconify/react";
import fetch from "cross-fetch";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";

_api.setFetch(fetch);

const AddRekeningVendor = () => {
  const bank = [
    {
      label: "Bank Central Asia (BCA)",
      value: "bca",
    },
    {
      label: "Bank Rakyat Indonesia(BRI)",
      value: "bri",
    },
    {
      label: "Bank Nasional Indonesia(BNI)",
      value: "bni",
    },
  ];

  return (
    <div className="w-full flex flex-col max-w-md lg:max-w-full mx-auto md:max-w-2x">
      <div className="m-5 lg:m-16">
        <div className="flex justify-between items-center">
          <div className="w-full hidden lg:flex justify-between">
            <p className="text-paragraph3 lg:text-heading1Res">Rekening Saya</p>
            <Button
              color="primary"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              Tambah Rekening
            </Button>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <div className="flex flex-col">
                  <p className="text-heading4">Tambah Rekening</p>
                  <p className="py-4 text-paragraph">
                    Pastikan Rekening yang Anda Masukkan Benar
                  </p>
                  <p className="mt-6 mb-2 text-paragraph7">Bank</p>
                  <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                    <div className="mt-2 mb-4 w-full">
                      <Select
                        items={bank}
                        label="Pilih Bank"
                        variant="bordered"
                        size="sm"
                      >
                        {bank.map((bank) => (
                          <SelectItem key={bank.value} value={bank.value}>
                            {bank.label}
                          </SelectItem>
                        ))}
                      </Select>
                    </div>
                  </div>
                  <p className="mt-4 mb-2 text-paragraph7">No. Rekening</p>
                  <Input
                    type="text"
                    label="09123XXX"
                    variant="bordered"
                    size="sm"
                  />
                  <p className="mt-4 mb-2 text-paragraph7">Nama Pemilik</p>
                  <Input
                    type="text"
                    label="Msaukkan Nama Pemilik"
                    variant="bordered"
                    size="sm"
                  />

                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <div className="flex items-center justify-end gap-x-2 mt-10">
                      <button className="btn bg-white text-textGrey text-paragraph4Res">
                        Batal
                      </button>
                      <button className="btn bg-primary text-white text-paragraph4Res">
                        Tambah Rekening
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
        <div className="w-full bg-white mt-9 px-6 py-8 rounded-xl flex justify-between items-center">
          <div className="flex">
            <img
              src={"/assets/images/bca.png"}
              alt="bca"
              className="h-12 object-cover items-center"
            />
            <div className="flex flex-col ml-4">
              <p className="text-paragraph7">Rahmat Nur Kholis</p>
              <p className="text-paragraph">BCA - 09273621922</p>
            </div>
          </div>
          <Button
            isIconOnly
            color="default"
            variant="bordered"
            size="md"
            onClick={() => document.getElementById("my_modal_2").showModal()}
          >
            <Icon
              icon={"material-symbols:delete-outline"}
              className="text-xl text-black"
            />
          </Button>
          <dialog id="my_modal_2" className="modal">
            <div className="modal-box">
              <div className="flex flex-col justify-center items-center">
                <img
                  src={"/assets/images/deletePopUp.png"}
                  alt="delete"
                  className="h-14 aspect-square rounded-full object-cover items-center"
                />
                <h3 className="font-bold text-lg text-center mt-7">
                  Apakah kamu yakin ingin menghapus?
                </h3>
                <p className="py-4 text-center mb-7">
                  Dengan klik hapus kamu tidak bisa
                  <br />
                  mengembalikannya lagi.
                </p>
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <div className="flex items-center justify-center gap-x-2">
                    <button className="btn bg-white text-textGrey text-paragraph4Res">
                      Batal
                    </button>
                    <button className="btn bg-red-600 text-white text-paragraph4Res">
                      Hapus
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </dialog>
        </div>

        <div className="btm-nav lg:hidden">
          <Button
            color="primary"
            className="mx-5"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            Tambah Rekening
          </Button>
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <div className="flex flex-col">
                <p className="text-heading4">Tambah Rekening</p>
                <p className="py-4 text-paragraph">
                  Pastikan Rekening yang Anda Masukkan Benar
                </p>
                <p className="mt-6 mb-2 text-paragraph7">Bank</p>
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                  <div className="mt-2 mb-4 w-full">
                    <Select
                      items={bank}
                      label="Pilih Bank"
                      variant="bordered"
                      size="sm"
                    >
                      {bank.map((bank) => (
                        <SelectItem key={bank.value} value={bank.value}>
                          {bank.label}
                        </SelectItem>
                      ))}
                    </Select>
                  </div>
                </div>
                <p className="mt-4 mb-2 text-paragraph7">No. Rekening</p>
                <Input
                  type="text"
                  label="09123XXX"
                  variant="bordered"
                  size="sm"
                />
                <p className="mt-4 mb-2 text-paragraph7">Nama Pemilik</p>
                <Input
                  type="text"
                  label="Msaukkan Nama Pemilik"
                  variant="bordered"
                  size="sm"
                />

                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <div className="flex items-center justify-end gap-x-2 mt-10">
                    <button className="btn bg-white text-textGrey text-paragraph4Res">
                      Batal
                    </button>
                    <button className="btn bg-primary text-white text-paragraph4Res">
                      Tambah Rekening
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>

    // {/* Page content here */}
    // {/* <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
    //   Open drawer
    // </label> */}
  );
};
export default AddRekeningVendor;
