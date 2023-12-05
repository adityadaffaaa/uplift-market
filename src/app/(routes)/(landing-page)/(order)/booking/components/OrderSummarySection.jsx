"use client";
import React from "react";
import { Button } from "@nextui-org/react";
import icons from "@/app/utils/icons";
import { formatRupiah } from "@/app/utils/extensions";

const { ArrowRightIcon } = icons.bookingIcon;
export const OrderSummarySection = ({
  product,
  isLoading,
}) => {
  const {
    attributes: { name, description, price },
  } = product;

  const adminFee = 7500;

  return (
    <aside className="flex flex-col gap-10 md:bg-white rounded-lg md:p-6 flex-[1_1_40%]">
      <div className="flex flex-col gap-5 rounded-xl border-2 p-5 text-textBlack md:border-none">
        <h3 className="text-heading4Res">{name}</h3>
        <div className="flex flex-col gap-4">
          <figure className="flex gap-2 items-center">
            <img
              className="rounded-lg flex-[1_1_20%] w-[90px]"
              src={"/assets/images/img-summary-product.png"}
              alt="img"
              loading="lazy"
            />
            <figcaption className="text-paragraph9 flex-[1_1_80%]">
              {description}
            </figcaption>
          </figure>
          <div className="flex justify-between">
            <p className="text-paragraph6Res">Subtotal</p>
            <p className="text-paragraph4Res">
              Rp{formatRupiah(price)}
            </p>
          </div>
          <div className="flex justify-between">
            <p className="text-paragraph6Res">Admin Fee</p>
            <p className="text-paragraph4Res">Rp7.500</p>
          </div>
          <hr />
          <div className="flex justify-between">
            <p className="text-paragraph6Res">Total</p>
            <p className="text-paragraph4Res">
              Rp{formatRupiah(price + adminFee)}
            </p>
          </div>
        </div>
      </div>
      <Button
        isLoading={isLoading}
        type="submit"
        radius="sm"
        color="primary"
        endContent={<ArrowRightIcon />}
      >
        Pesan
      </Button>
    </aside>
  );
};

export default OrderSummarySection;
