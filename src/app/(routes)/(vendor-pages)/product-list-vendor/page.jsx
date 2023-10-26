"use client";

import React, { useState } from "react";
import Link from "next/link";
import { _api, Icon } from "@iconify/react";
import fetch from "cross-fetch";
import ProductList from "../../components/ProductList";
import TextInput from "@/app/components/TextInput";
import { Button } from "@nextui-org/react";

_api.setFetch(fetch);

const ProductListVendor = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isCollapsed2, setIsCollapsed2] = useState(true);
  const [isCollapsed3, setIsCollapsed3] = useState(true);
  return (
    <div className="drawer lg:drawer-open bg-white lg:bg-grey">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <div className="w-full flex flex-col max-w-md lg:max-w-full mx-auto md:max-w-2x"></div>
        <div className="m-5 lg:m-16">
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <p className="text-paragraph3 lg:text-heading1Res">Produk Saya</p>
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
              startContent={
                <Icon icon={"material-symbols:add"} className="text-white" />
              }
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
            <p className="w-16 text-paragraph9 hidden lg:block">Kategori</p>
            <p className="w-28 text-paragraph9 hidden lg:block">Harga</p>
            <p className="w-28 text-paragraph9 hidden lg:block">
              Tgl.Diterbitkan
            </p>
            <p className="w-11 text-paragraph9 hidden lg:block">Status</p>
            <p className="w-11 text-paragraph9 hidden lg:block">Action</p>
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
                src={"/assets/images/productVendorDashboard.png"}
                alt="porto"
                className="w-20 lg:w-14 aspect-square rounded-lg object-cover"
              />
              <div className="flex flex-col justify-center ml-4">
                <p className="text-paragraph9">
                  Jasa Foto Produk Berkualitas,da..
                </p>
                <p className="text-paragraph lg:hidden">Rp.10.500.000</p>
                <div className="flex flex-row justify-between">
                  <div className="flex gap-x-4">
                    <div className="flex items-center gap-x-1">
                      <Icon
                        icon={"material-symbols:visibility-outline"}
                        className="text-textGrey"
                      />
                      <p className="text-paragraph9 text-textGrey">129</p>
                    </div>
                    <div className="flex items-center gap-x-1">
                      <Icon
                        icon={"material-symbols:shopping-bag-outline"}
                        className="text-textGrey"
                      />
                      <p className="text-paragraph9 text-textGrey">20</p>
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
            <p className="w-16 text-paragraph hidden lg:block">Videografi</p>
            <p className="w-28 text-paragraph hidden lg:block">Rp.10.500.000</p>
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
                <Icon
                  icon={"material-symbols:edit-outline"}
                  className="text-lg"
                />
              </Button>
              <Button
                isIconOnly
                color="danger"
                variant="bordered"
                size="sm"
                aria-label="Take a photo"
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                <Icon
                  icon={"material-symbols:delete-outline"}
                  className="text-lg"
                />
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
      <div className="drawer-side hidden lg:block bg-white">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        {/* Sidebar content here */}
        <div className="flex flex-col mt-6 items-start gap-y-3 w-64">
          <Link href="#">
            <div className="flex justify-center items-center gap-3 ml-5">
              <Icon
                icon={"material-symbols:home-outline"}
                className="text-black"
              />
              <p className="text-paragraph7">Beranda</p>
            </div>
          </Link>
          <Link href="#">
            <div className="flex justify-center items-center gap-3 ml-5">
              <Icon
                icon={"material-symbols:chat-outline"}
                className="text-black"
              />
              <p className="text-paragraph7">Chat</p>
            </div>
          </Link>
          <Link href="#" onClick={() => setIsCollapsed(!isCollapsed)}>
            <div className="flex flex-row justify-between items-center gap-3 ml-5 w-52">
              <div className="flex items-center gap-3">
                <Icon
                  icon={"material-symbols:inventory-2"}
                  className="text-primary"
                />
                <p className="text-paragraph6 text-primary">Produk</p>
              </div>
              <div>
                <Icon
                  icon={"material-symbols:expand-more"}
                  className="text-textGrey"
                />
              </div>
            </div>
          </Link>
          {isCollapsed ? null : (
            <div className="flex flex-col gap-3">
              <Link href="#">
                <div className="flex flex-row justify-between items-center gap-3 ml-5 w-52 bg-[#F0F0F0] rounded-md">
                  <div className="flex items-center gap-3">
                    <p className="text-paragraph8 text-[#595959] ml-7">
                      Produk Saya
                    </p>
                  </div>
                </div>
              </Link>
              <Link href="#">
                <div className="flex flex-row justify-between items-center gap-3 ml-5 w-52 rounded-md">
                  <div className="flex items-center gap-3">
                    <p className="text-paragraph8 text-[#595959] ml-7">
                      Tambah Produk
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          )}
          <Link href="#" onClick={() => setIsCollapsed2(!isCollapsed2)}>
            <div className="flex flex-row justify-between items-center gap-3 ml-5 w-52">
              <div className="flex items-center gap-3">
                <Icon
                  icon={"material-symbols:contract-outline"}
                  className="text-black"
                />
                <p className="text-paragraph7">Pesanan</p>
              </div>
              <div>
                <Icon
                  icon={"material-symbols:expand-more"}
                  className="text-textGrey"
                />
              </div>
            </div>
          </Link>
          {isCollapsed2 ? null : (
            <div className="flex flex-col gap-3">
              <Link href="#">
                <div className="flex flex-row justify-between items-center gap-3 ml-5 w-52 rounded-md">
                  <div className="flex items-center gap-3">
                    <p className="text-paragraph8 text-[#595959] ml-7">
                      Pesanan Masuk
                    </p>
                  </div>
                </div>
              </Link>
              <Link href="#">
                <div className="flex flex-row justify-between items-center gap-3 ml-5 w-52 rounded-md">
                  <div className="flex items-center gap-3">
                    <p className="text-paragraph8 text-[#595959] ml-7">
                      Pesanan Dibatalkan
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          )}
          <Link href="#">
            <div className="flex justify-center items-center gap-3 ml-5">
              <Icon
                icon={"material-symbols:payments-outline"}
                className="text-black"
              />
              <p className="text-paragraph7">Keuangan</p>
            </div>
          </Link>
          <Link href="#" onClick={() => setIsCollapsed3(!isCollapsed3)}>
            <div className="flex flex-row justify-between items-center gap-3 ml-5 w-52">
              <div className="flex items-center gap-3">
                <Icon
                  icon={"material-symbols:settings-outline"}
                  className="text-black"
                />
                <p className="text-paragraph7">Pengaturan</p>
              </div>
              <div>
                <Icon
                  icon={"material-symbols:expand-more"}
                  className="text-textGrey"
                />
              </div>
            </div>
          </Link>
          {isCollapsed3 ? null : (
            <div className="flex flex-col gap-3">
              <Link href="#">
                <div className="flex flex-row justify-between items-center gap-3 ml-5 w-52 rounded-md">
                  <div className="flex items-center gap-3">
                    <p className="text-paragraph8 text-[#595959] ml-7">
                      Alamat Saya
                    </p>
                  </div>
                </div>
              </Link>
              <Link href="#">
                <div className="flex flex-row justify-between items-center gap-3 ml-5 w-52 rounded-md">
                  <div className="flex items-center gap-3">
                    <p className="text-paragraph8 text-[#595959] ml-7">
                      Pengaturan Vendor
                    </p>
                  </div>
                </div>
              </Link>
              <Link href="#">
                <div className="flex flex-row justify-between items-center gap-3 ml-5 w-52 rounded-md">
                  <div className="flex items-center gap-3">
                    <p className="text-paragraph8 text-[#595959] ml-7">
                      Pengaturan Akun
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          )}
          <Link href="#">
            <div className="flex justify-center items-center gap-3 ml-5">
              <Icon
                icon={"material-symbols:table-chart-view-outline"}
                className="text-black"
              />
              <p className="text-paragraph7">Statistik Vendor</p>
            </div>
          </Link>
          <Link href="#">
            <div className="flex justify-center items-center gap-3 ml-5">
              <Icon
                icon={"material-symbols:rate-review-outline"}
                className="text-black"
              />
              <p className="text-paragraph7">Ulasan</p>
            </div>
          </Link>
          <Link href="#">
            <div className="flex justify-center items-center gap-3 ml-5">
              <Icon
                icon={"material-symbols:info-outline"}
                className="text-black"
              />
              <p className="text-paragraph7">Bantuan</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ProductListVendor;
