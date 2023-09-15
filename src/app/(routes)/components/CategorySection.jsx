import Image from "next/image";
import React from "react";

const CategorySection = () => {
  return (
    <section className="h-screen flex items-center justify-center lg:h-auto lg:py-40">
      <div className="container flex flex-col items-center px-5 text-textBlack gap-8">
        <h2 className="text-heading2Res">Kategori</h2>
        <div className="flex flex-col gap-6 w-full">
          {categoryData.map(({ imgUrl, title }, index) => (
            <CardCategory
              key={index}
              imgUrl={imgUrl}
              title={title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const CardCategory = ({ imgUrl, title }) => {
  return (
    <figure className="flex justify-center items-center w-full py-6 rounded-lg border-2 gap-4">
      <Image
        alt="img"
        src={imgUrl}
        height={48}
        width={48}
      />
      <figcaption className="text-paragraph2Res">
        {title}
      </figcaption>
    </figure>
  );
};

const categoryData = [
  {
    imgUrl: "/assets/images/img-fotografi.png",
    title: "Fotografi",
  },
  {
    imgUrl: "/assets/images/img-uiuxdesign.png",
    title: "Design",
  },
  {
    imgUrl: "/assets/images/img-videografi.png",
    title: "Videografi",
  },
];
export default CategorySection;
