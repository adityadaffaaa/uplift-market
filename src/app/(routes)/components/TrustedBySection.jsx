import React from "react";
import TrustedBySlider from "./TrustedBySlider";
const TrustedBySection = () => {
  return (
    <section className="py-10 w-full flex justify-center">
      <div className="container flex flex-col items-center gap-6">
        <h2 className="text-heading2Res text-textBlack ">
          Telah Dipercaya Oleh
        </h2>
        <TrustedBySlider />
        <TrustedBySlider reverse />
      </div>
    </section>
  );
};

export default TrustedBySection;
