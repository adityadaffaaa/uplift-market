"use client";

import React from "react";
import icons from "@/app/utils/icons";
import { TextInput } from "@/app/components";

const { RoundCloseIcon, StarIcon } =
  icons.searchFilterProductIcon;

const SidebarFilter = () => {
  const handleChange = () => {};

  return (
    <aside className="overflow-hidden">
      <div
        className={`drawer lg:drawer-open border-r-2 max-w-0 z-10 lg:max-w-xs`}
      >
        <input
          id="filter-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content flex flex-col items-center justify-center">
          <div className="grid lg:grid-cols"></div>
        </div>
        <div className="drawer-side ">
          {/* <label htmlFor="filter-drawer"></label> */}
          <div className="menu flex flex-col gap-5 p-4 w-60 min-h-full mt-14 lg:mt-0 text-base-content  bg-white lg:ml-10">
            <div className="flex items-center justify-between">
              <p className="text-heading3Res h-min">
                Filter
              </p>
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
                <p className="text-paragraph8 ml-4">
                  Semua
                </p>
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
                <p className="text-paragraph8 ml-4">
                  Design
                </p>
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
                <p className="text-paragraph8 ml-4">
                  Depok
                </p>
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
    </aside>
  );
};

export default SidebarFilter;
