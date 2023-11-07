import React from "react";

import SwiperOtherProduct from "./swipers/SwiperOtherProduct";

export const OtherProductsSection = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <p className="text-heading4Res">
          Produk Lain dari Toko Ini
        </p>
        <p className="text-paragraph8Res text-primary">
          Lihat Semua
        </p>
      </div>
      {/* <div className=" w-full max-w-sm md:max-w-full">
        <SwiperOtherProduct />
      </div> */}
    </div>
  );
};

export default OtherProductsSection;
