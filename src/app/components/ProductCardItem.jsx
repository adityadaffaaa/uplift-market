import React from "react";
import Link from "next/link";
import icons from "../utils/icons";
import { formatRupiah } from "@/app/utils/extensions";

const { LocationIcon, StarIcon } = icons.homeScreenIcon;

export const ProductCardItem = ({
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

export default ProductCardItem;
