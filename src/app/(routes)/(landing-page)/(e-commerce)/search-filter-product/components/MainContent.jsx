"use client";

import React from "react";
import Link from "next/link";
import icons from "@/app/utils/icons";
import MainContentSection from "./MainContentSection";
import { ProductCardItem } from "@/app/components";
import { Select, SelectItem } from "@nextui-org/react";
import { Input, Button } from "@nextui-org/react";
import { Toast } from "@/app/components";
const {
  SearchRoundedIcon,
  CancelIcon,
  SearchIcon,
  TuneRoundedIcon,
  ArrowBackIcon,
} = icons.searchFilterProductIcon;

const MainContent = ({ products = [], setAlerts }) => {
  const sorting = [
    "Termurah",
    "Termahal",
    "Rating Terbaik",
    "Rating Terburuk",
    "Relevansi",
  ];

  return (
    <MainContentSection>
      <Toast duration={2000} alerts={setAlerts} start />
      <div className="w-full flex flex-col gap-3 my-6 items-center ">
        <div className="flex items-center w-full gap-4">
          <div className="flex items-center mr-4 lg:hidden">
            <Link href={"/"} className="flex items-center">
              <ArrowBackIcon />
            </Link>
          </div>
          <Input
            fullWidth
            placeholder="Cari disini..."
            radius="sm"
            endContent={
              <Button isIconOnly variant="light">
                <CancelIcon />
              </Button>
            }
          />
          <Button color="primary" isIconOnly>
            <SearchIcon />
          </Button>
        </div>
        <div className="flex h-min w-full justify-between items-center">
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
          <div className="flex md:items-center flex-col items-start md:flex-row">
            <p className="text-paragraph pr-2">Urutkan</p>
            <Select
              placeholder="Urutkan..."
              variant="bordered"
              color="primary"
              className="max-w-xs w-52"
            >
              {sorting.map((value, index) => (
                <SelectItem
                  key={index}
                  color="primary"
                  value={value}
                >
                  {value}
                </SelectItem>
              ))}
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {products.map(
            (
              {
                attributes: {
                  name,
                  slug,
                  price,
                  rating,
                  image,
                },
                relevant: {
                  vendor: {
                    atributes: { location },
                  },
                },
              },
              index
            ) => (
              <ProductCardItem
                key={index}
                title={name}
                price={price}
                city={location}
                imgUrl={
                  image.length
                    ? image[0]?.attributes?.image_url
                    : "/assets/images/img-produk1.png"
                }
                rate={rating}
                slug={slug}
              />
            )
          )}
        </div>
      </div>
    </MainContentSection>
  );
};

export default MainContent;
