import React from "react";
import { _api, Icon } from "@iconify/react";
import fetch from "cross-fetch";
import Image from "next/image";
_api.setFetch(fetch);

const ProductList = ({ categoryNumber }) => {
  const productCards = products.map(
    (
      { cover, title, city, price, rate, review },
      index
    ) => (
      <ProductCardItem
        key={index}
        imgUrl={cover}
        title={title}
        city={city}
        price={price}
        rate={rate}
        review={review}
      />
    )
  );

  const filteredProductCards =
    categoryNumber !== 0
      ? products
          .filter(
            ({ category }) => categoryNumber === category
          )
          .map(
            (
              { cover, title, city, price, rate, review },
              index
            ) => (
              <ProductCardItem
                key={index}
                imgUrl={cover}
                title={title}
                city={city}
                price={price}
                rate={rate}
                review={review}
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
}) => {
  return (
    <div className="card cursor-pointer card-compact w-full bg-base-100 rounded-xl border-2 transition-default hover:shadow-defaultShadow">
      <figure>
        <Image
          src={imgUrl}
          alt="Shoes"
          width={360}
          height={180}
        />
      </figure>
      <div className="text-start py-3 px-2 text-textBlack flex flex-col gap-4">
        <h2 className=" text-paragraph8Res lg:text-heading6">
          {title}
        </h2>
        <p className="text-primary text-paragraph7Res lg:text-paragraph6">
          Rp{price}
        </p>
        <div className="flex flex-col gap-1">
          <div className="flex gap-2 items-center">
            <Icon
              className="text-secondary"
              icon="ic:baseline-star"
            />
            <p className="text-paragraph8Res lg:text-paragraph9 flex gap-1">
              {rate}
              <a className="text-paragraph9Res text-grey2 lg:text-paragraph10">
                ({review} reviews)
              </a>
            </p>
          </div>
          <div className="flex gap-2 text-grey2 items-center">
            <Icon icon="ion:location-sharp" />
            <p className="text-paragraph8Res lg:text-paragraph10">
              {city}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const products = [
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