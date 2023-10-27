"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import icons from "@/app/utils/icons";

const {
  AddIcon,
  DeleteIcon,
  EditOutlineIcon,
  ShoppingBagOutlineIcon,
  VisibilityIcon,
} = icons.vendorDashboard.productListVendor;

const ProductListVendor = () => {
  return (
    <section className="w-[calc(100%-280px)]  h-full">
      <div className="m-5 lg:m-16">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <p className="text-paragraph3 lg:text-heading1Res">
              Produk Saya
            </p>
            <div className="hidden lg:block tabs mt-4">
              <a className="tab tab-bordered tab-active text-primary">
                Semua Produk (10)
              </a>
              <a className="tab tab-bordered">Aktif</a>
              <a className="tab tab-bordered">Nonaktif</a>
            </div>
          </div>
          <Button
            color="primary"
            startContent={<AddIcon />}
          >
            Tambah Produk
          </Button>
        </div>
        <div className="w-full h-14 bg-white mt-9 rounded-t-xl items-center flex gap-x-[50px]">
          <div className="form-control ml-6 hidden lg:block">
            <label className="cursor-pointer label">
              <input
                type="checkbox"
                className="checkbox checkbox-sm  checkbox-accent"
              />
            </label>
          </div>
          <p className="w-72 text-paragraph9">Produk</p>
          <p className="w-16 text-paragraph9 hidden lg:block">
            Kategori
          </p>
          <p className="w-28 text-paragraph9 hidden lg:block">
            Harga
          </p>
          <p className="w-28 text-paragraph9 hidden lg:block">
            Tgl.Diterbitkan
          </p>
          <p className="w-11 text-paragraph9 hidden lg:block">
            Status
          </p>
          <p className="w-11 text-paragraph9 hidden lg:block">
            Action
          </p>
        </div>
        <div className="w-full h-[88px] bg-white items-center flex gap-x-2 lg:gap-x-[50px] lg:border-t-1 border-b-1">
          <div className="form-control ml-6 hidden lg:block">
            <label className="cursor-pointer label">
              <input
                type="checkbox"
                className="checkbox checkbox-sm  checkbox-accent"
              />
            </label>
          </div>
          <div className="w-full lg:w-72 flex">
            <img
              src={
                "/assets/images/productVendorDashboard.png"
              }
              alt="porto"
              className="w-20 lg:w-14 aspect-square rounded-lg object-cover"
            />
            <div className="flex flex-col justify-center ml-4">
              <p className="text-paragraph9">
                Jasa Foto Produk Berkualitas,da..
              </p>
              <p className="text-paragraph lg:hidden">
                Rp.10.500.000
              </p>
              <div className="flex flex-row justify-between">
                <div className="flex gap-x-4">
                  <div className="flex items-center gap-x-1">
                    <VisibilityIcon />
                    <p className="text-paragraph9 text-textGrey">
                      129
                    </p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <ShoppingBagOutlineIcon />
                    <p className="text-paragraph9 text-textGrey">
                      20
                    </p>
                  </div>
                </div>
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
          <p className="w-16 text-paragraph hidden lg:block">
            Videografi
          </p>
          <p className="w-28 text-paragraph hidden lg:block">
            Rp.10.500.000
          </p>
          <p className="w-28 text-paragraph hidden lg:block">
            19 Sept 2023, 9:10
          </p>
          <p className="w-11 items-center hidden lg:block">
            <input
              type="checkbox"
              className="toggle toggle-success toggle-sm"
            />
          </p>
          <div className="w-11 gap-x-2 hidden lg:flex">
            <Button
              isIconOnly
              color="primary"
              variant="bordered"
              size="sm"
              aria-label="Take a photo"
            >
              <EditOutlineIcon />
            </Button>
            <Button
              isIconOnly
              color="danger"
              variant="bordered"
              size="sm"
              aria-label="Take a photo"
              onClick={() =>
                document
                  .getElementById("my_modal_1")
                  .showModal()
              }
            >
              <DeleteIcon />
            </Button>
            <dialog id="my_modal_1" className="modal">
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
        </div>
      </div>
    </section>
  );
};

export default ProductListVendor;
