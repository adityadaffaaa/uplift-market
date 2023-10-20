"use client";

import React, { useState } from "react";

export const EasyStepsToStartedSection = () => {
  const ContentItems = () => {
    let items = [];
    for (let index = 0; index < 3; index++) {
      items.push(
        <ContentItem key={index} dotsNumber={index + 1} />
      );
    }
    return items;
  };

  return (
    <section className="py-20 bg-grey flex justify-center">
      <div className="container px-5 flex flex-col lg:flex-row lg:px-24 lg:items-center gap-10 lg:gap-0 text-textBlack lg:overflow-hidden">
        <div className="flex flex-col flex-1 gap-8 ">
          <h2 className="text-heading2Res text-center lg:text-start lg:w-full lg:text-heading2">
            Langkah Mudah untuk Memulai
          </h2>
          <ContentItemLarge />
        </div>
        <div className="h-auto flex-1">
          <img
            className="translate-x-48 hidden lg:block w-[800px]"
            src={
              "/assets/images/img-easy-steps-to-started-1.png"
            }
            alt="img"
            loading="lazy"
          />
        </div>
        <ContentItems />
      </div>
    </section>
  );
};

const ContentItemLarge = () => {
  const [click, setClick] = useState(0);

  const toggle = (index) => {
    if (click === index) setClick(null);
    setClick(index);
  };

  return (
    <div className="lg:flex flex-col max-w-[612px] gap-6 hidden">
      {easyStepDatas.map(({ title, desc }, index) => (
        <ContentItemLargeCard
          key={index}
          title={title}
          desc={desc}
          onClick={() => toggle(index)}
          number={index + 1}
          clicked={click === index}
        />
      ))}
    </div>
  );
};

const ContentItemLargeCard = ({
  title,
  desc,
  number,
  onClick,
  clicked,
}) => {
  return (
    <div
      onClick={onClick}
      className={`p-6 flex gap-6 rounded-2xl justify-start items-center cursor-pointer ${
        clicked
          ? "text-white bg-primary"
          : "bg-white text-textBlack"
      }`}
    >
      <DotsElement number={number} white={clicked} />
      <div className="flex flex-col">
        <h4 className="text-heading4">{title}</h4>
        <div
          className={`overflow-hidden transition-default ${
            clicked ? "h-auto mt-2" : "h-0 mt-0"
          }`}
        >
          <p className="text-paragraph5 text-white text-ellipsis w-[500px]">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

const ContentItem = ({ dotsNumber }) => {
  return (
    <div
      data-aos={"fade-up"}
      data-aos-duration="1000"
      className="flex flex-col gap-6 w-full lg:hidden"
    >
      <article className="flex flex-col items-start gap-3">
        <DotsElement number={dotsNumber} />
        <h4 className="text-heading4Res">
          Pesan Jasanya dan Berikan Brief yang Jelas
        </h4>
        <p className="text-paragraph3Res">
          Isikan secara jelas brief-brienfnya beserta
          materinya.
        </p>
      </article>
      <div className="h-[228px] bg-green-100"></div>
    </div>
  );
};

const DotsElement = ({ number, white }) => {
  return (
    <div
      className={`h-8 w-8 grid place-items-center rounded-full  text-paragraph1Res ${
        white
          ? "bg-white text-primary"
          : "bg-primary text-white"
      }`}
    >
      {number}
    </div>
  );
};

const easyStepDatas = [
  {
    title: "Pesan Jasanya dan Berikan Brief",
    desc: "Isikan secara jelas brief-briefnya beserta materinya. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, dolor? ",
  },
  {
    title: "Tunggu Proses Pengerjaan",
    desc: "Isikan secara jelas brief-briefnya beserta materinya.",
  },
  {
    title: "Terima Hasil dan Revisi Jika Ada",
    desc: "Isikan secara jelas brief-briefnya beserta materinya.",
  },
  {
    title: "Selesai",
    desc: "Isikan secara jelas brief-briefnya beserta materinya.",
  },
];

export default EasyStepsToStartedSection;
