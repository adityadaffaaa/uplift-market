"use client";

import React from "react";
import icons from "@/app/utils/icons";
import Link from "next/link";
import { formatRupiah } from "@/helpers/extensions";

const { LocationIcon, StarIcon } = icons.homeScreenIcon;

export const ProductList = ({
  categoryNumber,
  products,
}) => {
  const productCards = products
    .slice(0, 10)
    .map(
      (
        { attributes: { name, price, rate, slug } },
        index
      ) => (
        <ProductCardItem
          key={index}
          imgUrl={"/assets/images/img-cover-product.png"}
          title={name}
          city={"Jakarta"}
          price={price}
          rate={rate}
          review={200}
          slug={slug}
        />
      )
    );

  const filteredProductCards =
    categoryNumber !== 0
      ? products
          .filter(
            ({ relevant: { category } }) =>
              categoryNumber === parseInt(category)
          )
          .slice(0, 10)
          .map(
            (
              { attributes: { name, price, rate, slug } },
              index
            ) => (
              <ProductCardItem
                key={index}
                imgUrl={
                  "/assets/images/img-cover-product.png"
                }
                title={name}
                city={"Jakarta"}
                price={price}
                rate={rate}
                review={200}
                slug={slug}
              />
            )
          )
      : productCards;

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {filteredProductCards}
    </div>
  );
};

const ProductCardItem = ({
  imgUrl,
  title,
  price,
  rate,
  review,
  city,
  slug,
}) => {
  return (
    <Link href={`/product-detail/${slug}`}>
      <div className="card cursor-pointer card-compact w-full bg-base-100 rounded-xl border-2 transition-default hover:shadow-defaultShadow">
        <figure>
          <img
            src={imgUrl}
            alt="Shoes"
            loading="lazy"
            className="w-full"
          />
        </figure>
        <div className="text-start py-3 px-2 text-textBlack flex flex-col gap-4">
          <h2 className=" text-paragraph8Res lg:text-heading6">
            {title}
          </h2>
          <p className="text-primary text-paragraph7Res lg:text-paragraph6">
            Rp {formatRupiah(price)}
          </p>
          <div className="flex flex-col gap-1">
            <div className="flex gap-2 items-center">
              <StarIcon />
              <p className="text-paragraph8Res lg:text-paragraph9 flex gap-1">
                {rate}
                <span className="text-paragraph9Res text-grey2 lg:text-paragraph10">
                  ({review} reviews)
                </span>
              </p>
            </div>
            <div className="flex gap-2 text-grey2 items-center">
              <LocationIcon />
              <p className="text-paragraph8Res lg:text-paragraph10">
                {city}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

const product = [
  {
    category: 1,
    title: " Jasa Foto Produk Makanan dan Minuman 20 Foto",
    cover: "/assets/images/img-cover-product.png",
    price: "1.400.000",
    rate: 4.7,
    review: 223,
    city: "Yogyakarta",
  },
  {
    category: 1,
    title: " Jasa Foto Produk Makanan dan Minuman 20 Foto",
    cover: "/assets/images/img-cover-product.png",
    price: "1.400.000",
    rate: 4.7,
    review: 223,
    city: "Yogyakarta",
  },
  {
    category: 1,
    title: " Jasa Foto Produk Makanan dan Minuman 20 Foto",
    cover: "/assets/images/img-cover-product.png",
    price: "1.400.000",
    rate: 4.7,
    review: 223,
    city: "Yogyakarta",
  },
  {
    category: 1,
    title: " Jasa Foto Produk Makanan dan Minuman 20 Foto",
    cover: "/assets/images/img-cover-product.png",
    price: "1.400.000",
    rate: 4.7,
    review: 223,
    city: "Yogyakarta",
  },
  {
    category: 1,
    title: " Jasa Foto Produk Makanan dan Minuman 20 Foto",
    cover: "/assets/images/img-cover-product.png",
    price: "1.400.000",
    rate: 4.7,
    review: 223,
    city: "Yogyakarta",
  },
  {
    category: 1,
    title: " Jasa Foto Produk Makanan dan Minuman 20 Foto",
    cover: "/assets/images/img-cover-product.png",
    price: "1.400.000",
    rate: 4.7,
    review: 223,
    city: "Yogyakarta",
  },
  {
    category: 2,
    title: " Jasa Foto Produk Makanan dan Minuman 20 Foto",
    cover: "/assets/images/img-cover-product-2.png",
    price: "1.400.000",
    rate: 4.7,
    review: 223,
    city: "Malang",
  },
  {
    category: 2,
    title: " Jasa Foto Produk Makanan dan Minuman 20 Foto",
    cover: "/assets/images/img-cover-product-2.png",
    price: "1.400.000",
    rate: 4.7,
    review: 223,
    city: "Malang",
  },
  {
    category: 2,
    title: " Jasa Foto Produk Makanan dan Minuman 20 Foto",
    cover: "/assets/images/img-cover-product-2.png",
    price: "1.400.000",
    rate: 4.7,
    review: 223,
    city: "Malang",
  },
  {
    category: 2,
    title: " Jasa Foto Produk Makanan dan Minuman 20 Foto",
    cover: "/assets/images/img-cover-product-2.png",
    price: "1.400.000",
    rate: 4.7,
    review: 223,
    city: "Malang",
  },
  {
    category: 2,
    title: " Jasa Foto Produk Makanan dan Minuman 20 Foto",
    cover: "/assets/images/img-cover-product-2.png",
    price: "1.400.000",
    rate: 4.7,
    review: 223,
    city: "Malang",
  },
];
export default ProductList;
