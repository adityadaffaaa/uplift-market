import React from "react";

const WhyChooseUsSection = () => {
  return (
    <section className="py-20 flex justify-center items-center">
      <div className="container px-5 flex flex-col items-center gap-10 text-textBlack">
        <h2 className="text-heading2Res">
          Kenapa harus memilih kami?
        </h2>
        <div className="flex flex-col gap-6 w-full">
          <ContentItem />
          <ContentItem />
          <ContentItem />
        </div>
      </div>
    </section>
  );
};

const ContentItem = () => {
  return (
    <div className="flex flex-col text-textBlack w-full gap-6">
      <article className="flex flex-col gap-4">
        <h3 className="text-heading3Res">Lorem Ipsum 1</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Maecenas tristique tortor in interdum
          pretium. Suspendisse ultrices gravida bibendum.
          Etiam luctu
        </p>
      </article>
      <div className="h-40 bg-green-50"></div>
    </div>
  );
};

export default WhyChooseUsSection;
