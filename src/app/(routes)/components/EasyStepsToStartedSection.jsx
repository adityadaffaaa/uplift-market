import React from "react";

const EasyStepsToStartedSection = () => {
  return (
    <section className="py-20 bg-grey flex justify-center">
      <div className="container px-5 flex flex-col items-center gap-10 text-textBlack ">
        <h2 className="text-heading2Res text-center">
          Langkah Mudah untuk Memulai
        </h2>
        <ContentItem dotsNumber={1} />
        <ContentItem dotsNumber={2} />
        <ContentItem dotsNumber={3} />
      </div>
    </section>
  );
};

const ContentItem = ({ dotsNumber }) => {
  return (
    <div className="flex flex-col gap-6 w-full">
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

const DotsElement = ({ number }) => {
  return (
    <div className="bg-primary h-8 w-8 grid place-items-center rounded-full text-white text-paragraph1Res">
      {number}
    </div>
  );
};

export default EasyStepsToStartedSection;
