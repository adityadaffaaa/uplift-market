import React from "react";
import { useState } from "react";

const Indicator = ({
  color1,
  color2,
  color3,
  color4,
  textColor1,
  textColor2,
  textColor3,
  textColor4,
  step,
}) => {
  return (
    <div className="flex place-content-center space-x-4 gap-5 md:gap-4 items-center md:items-top">
      <div className="flex flex-col items-center">
        <div
          className={`${color1} h-[32px] w-[32px] rounded-full grid place-items-center text-${textColor1} text-paragraph`}
        >
          1
        </div>
        <p
          className={`text-paragraph font-medium text-center gap-3 md:text-paragraph6 ${
            step === 1 ? "text-primary" : "text-black"
          } md:mt-4`}
        >
          Data <br className="md:hidden"></br>Diri
        </p>
      </div>
      <div className="bg-neutral h-[4px] w-[32px] place-items-center rounded-full md:w-[32px] md:mt-12 hidden md:block"></div>
      <div className="flex flex-col items-center">
        <div
          className={`${color2} h-[32px] w-[32px] rounded-full grid place-items-center text-${textColor2} text-paragraph`}
        >
          2
        </div>
        <p
          className={`text-paragraph font-medium text-center gap-3 md:text-paragraph6 ${
            step === 2 ? "text-primary" : "text-black"
          } md:mt-4`}
        >
          Data <br className="md:hidden"></br>Bisnis
        </p>
      </div>
      <div className="bg-neutral h-[4px] w-[32px] place-items-center rounded-full md:w-[32px] md:mt-12 hidden md:block"></div>
      <div className="flex flex-col items-center">
        <div
          className={`${color3} h-[32px] w-[32px] rounded-full grid place-items-center text-${textColor3} text-paragraph`}
        >
          3
        </div>
        <p
          className={`text-paragraph font-medium text-center gap-3 md:text-paragraph6 ${
            step === 3 ? "text-primary" : "text-black"
          } md:mt-4`}
        >
          Upload<br></br>Portofolio
        </p>
      </div>
      <div className="bg-neutral h-[4px] w-[32px] place-items-center rounded-full md:w-[32px] md:mt-12 hidden md:block"></div>
      <div className="flex flex-col items-center">
        <div
          className={`${color4} h-[32px] w-[32px] rounded-full grid place-items-center text-${textColor4} text-paragraph`}
        >
          4
        </div>
        <p
          className={`text-paragraph font-medium text-center gap-3 md:text-paragraph6 ${
            step === 4 ? "text-primary" : "text-black"
          } md:mt-4`}
        >
          Informasi<br></br>Tambahan
        </p>
      </div>
    </div>
  );
};

export default Indicator;
