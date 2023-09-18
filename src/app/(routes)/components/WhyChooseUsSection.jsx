import React from "react";

const WhyChooseUsSection = () => {
  return (
    <section className="py-20 flex justify-center items-center">
      <div className="container px-5 flex flex-col items-center gap-10 text-textBlack lg:px-24">
        <h2 className="text-heading2Res lg:text-heading2">
          Kenapa harus memilih kami?
        </h2>
        <div className="flex flex-col gap-6 w-full lg:gap-14 overflow-x-hidden">
          <ContentItem />
          <ContentItem reverse />
          <ContentItem />
        </div>
      </div>
    </section>
  );
};

const ContentItem = ({ reverse }) => {
  return (
    <div
      data-aos={reverse ? "fade-left" : "fade-right"}
      data-aos-duration="1000"
      className={`flex flex-col text-textBlack w-full gap-6 lg:gap-40 o ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } lg:items-center`}
    >
      <article className="flex flex-col gap-4 lg:flex-1 lg:gap-2">
        <h3 className="text-heading3Res">Lorem Ipsum 1</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Maecenas tristique tortor in interdum
          pretium. Suspendisse ultrices gravida bibendum.
          Etiam luctu
        </p>
      </article>
      <div className="h-40 lg:h-60 lg:flex-1 bg-green-50"></div>
    </div>
  );
};

export default WhyChooseUsSection;
