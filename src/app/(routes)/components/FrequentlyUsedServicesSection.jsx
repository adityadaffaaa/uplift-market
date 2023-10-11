"use client";

import React, { useState } from "react";
import Image from "next/image";
import ProductList from "./ProductList";

export const FrequentlyUsedServicesSection = () => {
  const [click, setClick] = useState(0);

  const toggle = (index) => setClick(index);

  return (
    <section className="py-20 flex justify-center items-center lg:py-40">
      <div className="container px-5 text-center flex flex-col lg:px-24 items-center gap-10">
        <h2 className="text-heading2Res text-textBlack lg:text-heading2">
          Jasa yang Sering Digunakan
        </h2>
        <div className="grid grid-cols-2 gap-2 lg:flex">
          {categoryList.map(({ title, imgUrl }, index) => (
            <CategoryItem
              key={index}
              title={title}
              imgUrl={imgUrl}
              onClick={() => toggle(index)}
              clicked={click === index}
            />
          ))}
        </div>
        <ProductList categoryNumber={click} />
      </div>
    </section>
  );
};

const CategoryItem = ({
  title,
  imgUrl,
  onClick,
  clicked,
}) => {
  return (
    <div
      onClick={onClick}
      className={`flex btn justify-center gap-2 border-2 py-2 rounded-full text-textBlack capitalize ${
        title === "all" ? "px-2 lg:px-6" : "px-6"
      } ${
        clicked
          ? "bg-primary text-white border-primary hover:bg-primary hover:border-primary"
          : "bg-transparent hover:bg-transparent"
      } `}
    >
      {imgUrl && (
        <Image
          src={imgUrl}
          width={20}
          height={20}
          alt="img"
        />
      )}
      {title}
    </div>
  );
};

const categoryList = [
  {
    title: "all",
  },
  {
    imgUrl: "/assets/images/img-fotografi.png",
    title: "fotografi",
  },
  {
    imgUrl: "/assets/images/img-uiuxdesign.png",
    title: "design",
  },
  {
    imgUrl: "/assets/images/img-videografi.png",
    title: "videografi",
  },
];

export default FrequentlyUsedServicesSection;
