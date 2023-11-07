import React from "react";
import { ProductList } from "@/app/(routes)/components";
import SwiperSameProduct from "./swipers/SwiperSameProduct";

export const SameProductsSection = () => {
  return (
    <div className="bg-[#DDF1EC] flex justify-center w-full py-24">
      <div className="container flex flex-col px-5 xl:px-36">
        <div className=" flex items-center justify-between">
          <p className="text-heading4Res">
            Produk yang <br className="lg:hidden" />
            Mungkin Kamu Suka
          </p>
          <p className="text-paragraph8Res text-primary">
            Lihat Semua
          </p>
        </div>
        <div className="max-w-full">
          <SwiperSameProduct />
        </div>
      </div>
    </div>
  );
};

export default SameProductsSection;
