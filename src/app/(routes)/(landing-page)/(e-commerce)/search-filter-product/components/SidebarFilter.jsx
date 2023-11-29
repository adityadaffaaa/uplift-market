"use client";

import React from "react";
import icons from "@/app/utils/icons";
import { Checkbox, Input, Button } from "@nextui-org/react";
import { useFilter } from "../context/FilterContext";
const { RoundCloseIcon, StarIcon } =
  icons.searchFilterProductIcon;

const SidebarFilter = () => {
  const { filterList, handleFilterList } = useFilter();

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
            <div className="flex flex-col gap-3">
              <Checkbox
                defaultSelected
                size="lg"
                color="primary"
              >
                <p className="text-paragraph8 ">Semua</p>
              </Checkbox>
              <Checkbox size="lg" color="primary">
                <p className="text-paragraph8 ">
                  Fotografi
                </p>
              </Checkbox>
              <Checkbox size="lg" color="primary">
                <p className="text-paragraph8 ">Design</p>
              </Checkbox>
              <Checkbox size="lg" color="primary">
                <p className="text-paragraph8 ">
                  Videografi
                </p>
              </Checkbox>
            </div>
            <p className="text-paragraph2Res">Lokasi</p>
            <div className="flex flex-col gap-3">
              <Checkbox
                defaultSelected
                size="lg"
                color="primary"
              >
                <p className="text-paragraph8 ">
                  D.I. Yogyakarta
                </p>
              </Checkbox>
              <Checkbox size="lg" color="primary">
                <p className="text-paragraph8 ">Jakarta</p>
              </Checkbox>
              <Checkbox size="lg" color="primary">
                <p className="text-paragraph8 ">
                  Sulawesi Selatan
                </p>
              </Checkbox>
              <Checkbox size="lg" color="primary">
                <p className="text-paragraph8 ">Bandung</p>
              </Checkbox>
              <Checkbox size="lg" color="primary">
                <p className="text-paragraph8 ">Depok</p>
              </Checkbox>
              <div className="flex justify-start ">
                <Button
                  color="primary"
                  size="sm"
                  variant="light"
                >
                  Lihat Semua
                </Button>
              </div>
            </div>
            <p className="text-paragraph2Res">Harga</p>
            <Input
              radius="sm"
              id={"hargaMin"}
              type={"text"}
              placeholder={"Harga Minimum"}
              variant="bordered"
              classNames={{ inputWrapper: "px-0" }}
              startContent={
                <div className="h-full border-r-2 px-3 grid place-items-center">
                  <p className="text-paragraph9">Rp</p>
                </div>
              }
            />
            <Input
              radius="sm"
              id={"hargaMax"}
              type={"text"}
              placeholder={"Harga Maksimal"}
              variant="bordered"
              classNames={{ inputWrapper: "px-0" }}
              startContent={
                <div className="h-full border-r-2 px-3 grid place-items-center">
                  <p className="text-paragraph9">Rp</p>
                </div>
              }
            />
            <p className="text-paragraph2Res">Rating</p>
            <div className="flex flex-col gap-3">
              <Checkbox size="lg" color="primary">
                <div className="flex items-center">
                  <p className="text-paragraph8">5</p>
                  <StarIcon />
                </div>
              </Checkbox>
              <Checkbox size="lg" color="primary">
                <div className="flex items-center">
                  <p className="text-paragraph8">4</p>
                  <StarIcon />
                </div>
              </Checkbox>
              <Checkbox size="lg" color="primary">
                <div className="flex items-center">
                  <p className="text-paragraph8">3</p>
                  <StarIcon />
                </div>
              </Checkbox>
              <Checkbox size="lg" color="primary">
                <div className="flex items-center">
                  <p className="text-paragraph8">2</p>
                  <StarIcon />
                </div>
              </Checkbox>
              <Checkbox size="lg" color="primary">
                <div className="flex items-center">
                  <p className="text-paragraph8">1</p>
                  <StarIcon />
                </div>
              </Checkbox>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SidebarFilter;
