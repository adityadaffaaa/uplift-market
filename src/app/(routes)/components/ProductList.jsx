import React from "react";
import { _api, Icon } from "@iconify/react";
import fetch from "cross-fetch";
_api.setFetch(fetch);

const ProductList = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <ProductCardItem />
      <ProductCardItem />
      <ProductCardItem />
      <ProductCardItem />
    </div>
  );
};

const ProductCardItem = () => {
  return (
    <div className="card card-compact w-full bg-base-100 rounded-xl border-2 transition-default hover:shadow-defaultShadow">
      <figure>
        <img
          src="/assets/images/img-cover-product.png"
          alt="Shoes"
        />
      </figure>
      <div className="text-start py-3 px-2 text-textBlack flex flex-col gap-4">
        <h2 className=" text-paragraph8Res ">
          Jasa Foto Produk Makanan dan Minuman 20 Foto
        </h2>
        <p className="text-primary text-paragraph7Res">
          Rp1.400.000
        </p>
        <div className="flex flex-col gap-1">
          <div className="flex gap-2">
            <Icon
              className="text-secondary"
              icon="ic:baseline-star"
            />
            <p className="text-paragraph8Res">
              4.7{" "}
              <a className="text-paragraph9Res text-grey2">
                (223 reviews)
              </a>
            </p>
          </div>
          <div className="flex gap-2 text-grey2">
            <Icon icon="ion:location-sharp" />
            <p className="text-paragraph8Res">Yogyakarta</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductList;
