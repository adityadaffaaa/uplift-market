
import React from "react";

export const Indicator = ({ step, onClick }) => {
  const handleStep = (number) =>
    (number === 1 && step >= 1) ||
    (number === 2 && step >= 2) ||
    (number === 3 && step >= 3) ||
    (number === 4 && step === 4)
      ? "bg-primary text-white cursor-pointer"
      : "bg-neutral text-textDarkGrey";

  return (
    <div className="flex place-content-center space-x-4 gap-5 md:gap-4 items-center md:items-top">
      <div
        onClick={step >= 1 ? () => onClick(1) : null}
        className="flex flex-col items-center"
      >
        <div
          className={`${handleStep(
            1
          )} h-[32px] w-[32px] rounded-full grid place-items-center text-paragraph`}
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
      <div
        onClick={step >= 2 ? () => onClick(2) : null}
        className="flex flex-col items-center"
      >
        <div
          className={`${handleStep(
            2
          )} h-[32px] w-[32px] rounded-full grid place-items-center  text-paragraph`}
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
      <div
        onClick={step >= 3 ? () => onClick(3) : null}
        className="flex flex-col items-center"
      >
        <div
          className={`${handleStep(
            3
          )} h-[32px] w-[32px] rounded-full grid place-items-center text-paragraph`}
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
      <div
        className="flex flex-col items-center"
      >
        <div
          className={`${handleStep(
            4
          )} h-[32px] w-[32px] rounded-full grid place-items-center  text-paragraph`}
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
