"use client";

import React from "react";
import { CustomButton } from "@/app/components";
import icons from "@/app/utils/icons";
import { formatRupiah } from "@/helpers/extensions";

const {
  ArrowForwardIcon,
  SmsIcon,
  FavoriteOutlineIcon,
  ShareOutlineIcon,
} = icons.productDetailIcon;

export const SubtotalSection = ({ price }) => {
  return (
    <aside className="flex-col hidden lg:flex lg:flex-[1_1_25%] border border-[#D9D9D9] rounded-xl p-6 h-80">
      <div className="flex flex-col w-full justify-between pb-5">
        <p className="text-paragraph">Subtotal</p>
        <p className="text-paragraph6">
          Rp {formatRupiah(price)}
        </p>
      </div>
      <div className="flex flex-col w-full justify-between">
        <CustomButton
          title="Pesan"
          customClassName="bg-primary text-white w-full mb-4"
          leftIcon={<ArrowForwardIcon />}
        ></CustomButton>
        <CustomButton
          title="Chat"
          leftIcon={<SmsIcon />}
          customClassName="border border-black w-full"
        ></CustomButton>
        <div className="flex flex-row pt-5 justify-center items-center">
          <CustomButton
            title="Wishlist"
            leftIcon={<FavoriteOutlineIcon />}
            customClassName="w-lg"
          ></CustomButton>
          <div className="divider divider-horizontal mt-3 mb-3 place-items-center"></div>
          <CustomButton
            title="Share"
            leftIcon={<ShareOutlineIcon />}
            customClassName="w-lg"
          ></CustomButton>
        </div>
      </div>
    </aside>
  );
};

export default SubtotalSection;
