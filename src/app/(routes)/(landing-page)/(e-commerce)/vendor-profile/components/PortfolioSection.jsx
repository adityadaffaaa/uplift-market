import React from "react";

const portofolios = [
  "/assets/images/porto1.png",
  "/assets/images/porto2.png",
  "/assets/images/porto3.png",
  "/assets/images/porto4.png",
  "/assets/images/porto5.png",
  "/assets/images/porto6.png",
  "/assets/images/porto7.png",
  "/assets/images/porto8.png",
  "/assets/images/porto9.png",
];

const PortfolioSection = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 lg:gap-4">
      {portofolios.map((value, index) => (
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
