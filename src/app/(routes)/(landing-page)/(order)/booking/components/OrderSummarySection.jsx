"use client";
import React from "react";
import { CustomButton } from "@/app/components";
import { _api, Icon } from "@iconify/react";
import fetch from "cross-fetch";
_api.setFetch(fetch);
export const OrderSummarySection = () => {
  return (
    <aside className="flex flex-col gap-10 md:bg-white rounded-lg md:p-6 flex-[1_1_40%]">
      <div className="flex flex-col gap-5 rounded-xl border-2 p-5 text-textBlack md:border-none">
        <h3 className="text-heading4Res">Order Summary</h3>
        <div className="flex flex-col gap-4">
          <figure className="flex gap-2 items-center">
            <img
              className="rounded-lg flex-[1_1_20%] w-[90px]"
              src={"/assets/images/img-summary-product.png"}
              alt="img"
              loading="lazy"
            />
            <figcaption className="text-paragraph9 flex-[1_1_80%]">
              Jasa Video Editing Profesional, Motion
              Graphics, Cepat dan Berkualitas
            </figcaption>
          </figure>
          <div className="flex justify-between">
            <p className="text-paragraph6Res">Subtotal</p>
            <p className="text-paragraph4Res">Rp150.000</p>
          </div>
          <div className="flex justify-between">
            <p className="text-paragraph6Res">Admin Fee</p>
            <p className="text-paragraph4Res">Rp150.000</p>
          </div>
          <hr />
          <div className="flex justify-between">
            <p className="text-paragraph6Res">Total</p>
            <p className="text-paragraph4Res">Rp157.500</p>
          </div>
        </div>
      </div>
      <CustomButton
        type="submit"
        customClassName="bg-primary hover:bg-green80 transition-default text-white text-paragraph1Res"
        title="Pesan"
        rightIcon={<Icon icon="octicon:arrow-right-16" />}
      />
    </aside>
  );
};

export default OrderSummarySection;
