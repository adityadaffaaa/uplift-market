"use client";

import React, { useState, useEffect } from "react";
import ProductList from "./ProductList";
import { Toast, CategorySkeleton } from "@/app/components";
import { useCategory } from "@/app/hooks/user/category";

export const FrequentlyUsedServicesSection = () => {
  const [alerts, setAlerts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [click, setClick] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const toggle = (index) => setClick(index);

  const fetchCategories = async () => {
    const { getCategories } = useCategory();
    setIsLoading(true);
    try {
      const res = await getCategories({
        setAlerts,
      });
      if (res.status === 200) {
        setCategories([
          {
            id: 0,
            name: "All",
          },
          ...res.data.data,
        ]);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Fetch categories failed!", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, [setCategories]);

  return (
    <section className="py-20 flex justify-center items-center lg:py-40">
      <Toast duration={2000} alerts={alerts} start />
      <div className="container px-5 text-center flex flex-col lg:px-24 items-center gap-10">
        <h2 className="text-heading2Res text-textBlack lg:text-heading2">
          Jasa yang Sering Digunakan
        </h2>
        <div className="grid grid-cols-2 gap-2 lg:flex">
          {isLoading ? (
            <CategorySkeleton />
          ) : (
            categories.map(({ id, name }) => (
              <CategoryItem
                key={id}
                title={name}
                imgUrl={categoryImage[`imgUrl${id}`]}
                onClick={() => toggle(id)}
                clicked={click === id}
              />
            ))
          )}
        </div>
        {<ProductList categoryNumber={click} />}
      </div>
    </section>
  );
};

const CategoryItem = ({
  title,
  imgUrl = "",
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
        <img
          src={imgUrl}
          alt="img"
          loading="lazy"
          className="w-5 h-5"
        />
      )}
      {title}
    </div>
  );
};

const categoryImage = {
  imgUrl1: "/assets/images/img-fotografi.png",
  imgUrl2: "/assets/images/img-uiuxdesign.png",
  imgUrl3: "/assets/images/img-videografi.png",
};

export default FrequentlyUsedServicesSection;
