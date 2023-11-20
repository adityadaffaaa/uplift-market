"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
// import { ProductList } from "@/app/(routes)/components";
import { TextInput, CustomButton } from "@/app/components";

import icons from "@/app/utils/icons";

const {
  SearchRoundedIcon,
  CancelIcon,
  SearchIcon,
  TuneRoundedIcon,
  RoundCloseIcon,
  StarIcon,
  ArrowBackIcon,
} = icons.searchFilterProductIcon;

const SearchFilterProduct = () => {
  const [click, setClick] = useState(0);

  const handleChange = () => {};
  return (
    <div className={`drawer lg:drawer-open`}>
      <input
        id="filter-drawer"
        type="checkbox"
        className="drawer-toggle"
      />
      <div className="drawer-content flex flex-col items-center justify-center">
        <div className="grid lg:grid-cols"></div>
        <div className="w-full px-5 flex flex-col gap-3 mt-20 lg:mt-32 max-w-md mx-auto md:max-w-2xl">
          <div className="flex items-center">
            <div className="flex items-center mr-4 lg:hidden">
              <Link
                href={"/"}
                className="flex items-center"
              >
                <ArrowBackIcon />
              </Link>
            </div>
            <div className="flex items-center bg-greyBackground p-2.5 max-h-[41px] w-full rounded-lg ">
              <SearchRoundedIcon />
              <TextInput
                id={"search"}
                onChange={handleChange}
                type={"text"}
                placeholder={"Search Product"}
                customBorderClassName={"border-none"}
                customClassName={
                  "bg-greyBackground max-h-[41px]"
                }
              />
              <CancelIcon />
            </div>
            <button className="hidden lg:flex btn btn-square bg-primary ml-4">
              <SearchIcon />
            </button>
          </div>
          <div className="flex h-min justify-between items-center">
            <label
              htmlFor="filter-drawer"
              className="drawer-button flex items-center pl-4 pr-4 border rounded-xl border-[#D2D5DA] lg:hidden h-[37px]"
            >
              <TuneRoundedIcon />
              <p className="text-paragraph h-min lg:text-paragraph6">
                Filter
              </p>
            </label>
            <p className="text-paragraph8 hidden lg:flex">
              Menampilkan 59 Produk
            </p>
            <div className="flex items-center">
              <p className="text-paragraph pr-2">Urutkan</p>
              <select className="select w-min pl-4 pr-4 border rounded-xl border-[#D2D5DA] h-[37px]">
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
          {/* <ProductList categoryNumber={click} /> */}
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="filter-drawer"></label>
        <div className="menu flex flex-col gap-5 p-4 w-60 min-h-full text-base-content mt-14 lg:mt-28 bg-white lg:ml-10">
          <div className="flex items-center justify-between">
            <p className="text-heading3Res h-min">Filter</p>
            <label
              htmlFor="filter-drawer"
              className="btn btn-ghost drawer-button flex justify-end self-end "
            >
              <RoundCloseIcon />
            </label>
          </div>
          <hr className="bg-[#D5D6D8]"></hr>
          <p className="text-paragraph2Res">Kategori</p>
          <div className="form-control items-start">
            <label className="cursor-pointer label">
              <input
                type="checkbox"
                checked="checked"
                onChange={handleChange}
                className="checkbox checkbox-success "
              />
              <p className="text-paragraph8 ml-4">Semua</p>
            </label>
            <label className="cursor-pointer label">
              <input
                type="checkbox"
                className="checkbox checkbox-success "
              />
              <p className="text-paragraph8 ml-4">
                Fotografi
              </p>
            </label>
            <label className="cursor-pointer label">
              <input
                type="checkbox"
                className="checkbox checkbox-success "
              />
              <p className="text-paragraph8 ml-4">Design</p>
            </label>
            <label className="cursor-pointer label">
              <input
                type="checkbox"
                className="checkbox checkbox-success "
              />
              <p className="text-paragraph8 ml-4">
                Videografi
              </p>
            </label>
          </div>
          <p className="text-paragraph2Res">Lokasi</p>
          <div className="form-control items-start">
            <label className="cursor-pointer label">
              <input
                type="checkbox"
                checked="checked"
                onChange={handleChange}
                className="checkbox checkbox-success "
              />
              <p className="text-paragraph8 ml-4">
                D.I. Yogyakarta
              </p>
            </label>
            <label className="cursor-pointer label">
              <input
                type="checkbox"
                className="checkbox checkbox-success "
              />
              <p className="text-paragraph8 ml-4">
                Jakarta
              </p>
            </label>
            <label className="cursor-pointer label">
              <input
                type="checkbox"
                className="checkbox checkbox-success "
              />
              <p className="text-paragraph8 ml-4">
                Sulawesi Selatan
              </p>
            </label>
            <label className="cursor-pointer label">
              <input
                type="checkbox"
                className="checkbox checkbox-success "
              />
              <p className="text-paragraph8 ml-4">
                Bandung
              </p>
            </label>
            <label className="cursor-pointer label">
              <input
                type="checkbox"
                className="checkbox checkbox-success "
              />
              <p className="text-paragraph8 ml-4">Depok</p>
            </label>
            <p className="text-paragraph9 text-primary">
              Lihat Semua
            </p>
          </div>
          <p className="text-paragraph2Res">Harga</p>
          <div className="flex items-center  rounded-lg border border-[#D2D5DA] divide-x divide-[#D2D5DA]">
            <div className="p-3">
              <p className="text-paragraph9">Rp</p>
            </div>
            <div>
              <TextInput
                id={"hargaMin"}
                onChange={handleChange}
                type={"text"}
                placeholder={"Harga Minimum"}
                customBorderClassName={"border-none"}
                customClassName={"bg-transparent"}
              />
            </div>
          </div>
          <div className="flex items-center  rounded-lg border border-[#D2D5DA] divide-x divide-[#D2D5DA]">
            <div className="p-3">
              <p className="text-paragraph9">Rp</p>
            </div>
            <div>
              <TextInput
                id={"hargaMax"}
                onChange={handleChange}
                type={"text"}
                placeholder={"Harga Maksimal"}
                customBorderClassName={"border-none"}
                customClassName={"bg-transparent"}
              />
            </div>
          </div>
          <p className="text-paragraph2Res">Rating</p>
          <div className="form-control items-start">
            <div className="flex items-center">
              <label className="cursor-pointer label">
                <input
                  type="checkbox"
                  className="checkbox checkbox-success "
                />
                <p className="text-paragraph8 ml-4">5</p>
              </label>
              <StarIcon />
            </div>
            <div className="flex items-center">
              <label className="cursor-pointer label">
                <input
                  type="checkbox"
                  className="checkbox checkbox-success "
                />
                <p className="text-paragraph8 ml-4">4</p>
              </label>
              <StarIcon />
            </div>
            <div className="flex items-center">
              <label className="cursor-pointer label">
                <input
                  type="checkbox"
                  className="checkbox checkbox-success "
                />
                <p className="text-paragraph8 ml-4">3</p>
              </label>
              <StarIcon />
            </div>
            <div className="flex items-center">
              <label className="cursor-pointer label">
                <input
                  type="checkbox"
                  className="checkbox checkbox-success "
                />
                <p className="text-paragraph8 ml-4">2</p>
              </label>
              <StarIcon />
            </div>
            <div className="flex items-center">
              <label className="cursor-pointer label">
                <input
                  type="checkbox"
                  className="checkbox checkbox-success "
                />
                <p className="text-paragraph8 ml-4">1</p>
              </label>
              <StarIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFilterProduct;
