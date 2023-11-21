import React from "react";
import { portofolioImages } from "@/helpers/constants";

const PortfolioSection = () => {
  return (
    <div className="grid grid-cols-2 w-full md:grid-cols-3 gap-2 lg:gap-4">
      {portofolioImages.map((value, index) => (
        <div
          key={index}
          className="aspect-square overflow-hidden rounded-xl"
        >
          <img
            className="w-full h-full object-cover"
            src={value}
            alt="img"
          />
        </div>
      ))}
    </div>
  );
};

export default PortfolioSection;
