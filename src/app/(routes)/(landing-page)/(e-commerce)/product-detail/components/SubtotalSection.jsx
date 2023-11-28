"use client";

import React from "react";
import icons from "@/app/utils/icons";
import Link from "next/link";
import { formatRupiah } from "@/app/utils/extensions";
import { Button } from "@nextui-org/react";

const {
  ArrowForwardIcon,
  SmsIcon,
  FavoriteOutlineIcon,
  ShareOutlineIcon,
} = icons.productDetailIcon;

export const SubtotalSection = ({ price, slug }) => {
  return (
    <aside className="flex-col hidden lg:flex lg:flex-[1_1_25%] border border-[#D9D9D9] rounded-xl p-6 h-80">
      <div className="flex flex-col w-full justify-between pb-5">
        <p className="text-paragraph">Subtotal</p>
        <p className="text-paragraph6">
          Rp {formatRupiah(price)}
        </p>
      </div>
      <div className="flex flex-col w-full gap-2 justify-between">
        <Link className="w-full" href={`/booking/${slug}`}>
          <Button
            color="primary"
            radius="sm"
            fullWidth
            endContent={<ArrowForwardIcon />}
          >
            Pesan
          </Button>
        </Link>
        <Button
          radius="sm"
          variant="bordered"
          startContent={<SmsIcon />}
        >
          Chat
        </Button>
        <div className="flex flex-row pt-5 justify-center items-center">
          <Button
            radius="sm"
            variant=""
            endContent={<FavoriteOutlineIcon />}
          >
            Wishlist
          </Button>
          <div className="divider divider-horizontal mt-3 mb-3 place-items-center"></div>
          <Button
            radius="sm"
            variant=""
            endContent={<ShareOutlineIcon />}
          >
            Share
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default SubtotalSection;
