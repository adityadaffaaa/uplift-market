import React from "react";

export const CategorySection = () => {
  return (
    <section className="py-20 flex items-center justify-center lg:py-40">
      <div className="container flex flex-col items-center px-5 lg:px-24 text-textBlack gap-8">
        <h2 className="text-heading2Res lg:text-heading2">
          Kategori
        </h2>
        <div className="flex flex-col lg:flex-row gap-6 w-full">
          {categoryData.map(({ imgUrl, title }, index) => (
            <CardCategory
              key={index}
              imgUrl={imgUrl}
              title={title}
              delay={`${index}00`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const CardCategory = ({ imgUrl, title, delay }) => {
  return (
    <figure
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-delay={delay}
      data-aos-duration="1000"
      className="flex justify-center items-center w-full py-6 rounded-lg border-2 gap-4"
    >
      <img
        alt="img"
        src={imgUrl}
        loading="lazy"
        className="h-12"
      />
      <figcaption className="text-paragraph2Res lg:text-paragraph1">
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
