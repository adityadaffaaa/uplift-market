"use client";

import React, { useState } from "react";
import Image from "next/image";
import ProductList from "./ProductList";

const FrequentlyUsedServicesSection = () => {
  const [click, setClick] = useState(0);

  const toggle = (index) => setClick(index);

  return (
    <section className="h-screen flex justify-center items-center lg:h-auto lg:py-40">
      <div className="container px-5 text-center flex flex-col items-center gap-10">
        <h2 className="text-heading2Res text-textBlack">
          Jasa yang Sering Dibeli
        </h2>
        <div className="grid grid-cols-2 gap-2">
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
        <ProductList />
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
      className={`flex btn justify-center gap-2 border-2 py-2 rounded-full text-textBlack capitalize  ${
        title === "all" ? "px-2" : "px-6"
      } ${
        clicked
          ? "bg-primary text-white border-primary"
          : "bg-transparent"
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
