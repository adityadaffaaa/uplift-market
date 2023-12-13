import React from "react";
import ProcessSection from "./ProcessSection";
import ProjectInfoSection from "./ProjectInfoSection";

const MainSection = async ({ id }) => {
  console.log(id);
  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:items-start xl:px-36 w-full">
      <ProcessSection />
      <ProjectInfoSection id={id} />
    </div>
  );
};

export default MainSection;
