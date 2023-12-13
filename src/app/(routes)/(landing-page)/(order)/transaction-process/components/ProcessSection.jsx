import React from "react";
import AccordionProcess from "./AccordionProcess";

const ProcessSection = ({ id }) => {
  return (
    <section className="w-full lg:w-auto lg:flex-[1_1_60%]">
      <AccordionProcess id={id} />
    </section>
  );
};

export default ProcessSection;
