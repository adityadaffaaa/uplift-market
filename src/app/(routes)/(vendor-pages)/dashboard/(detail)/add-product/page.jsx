import React from "react";
import InformationSection from "./components/InformationSection";
import InformationDetailSection from "./components/InformationDetailSection";

const AddProduct = () => {
  return (
    <div className="flex gap-8 flex-col lg:flex-row lg:items-start ">
      <InformationSection />
      <InformationDetailSection />
    </div>
  );
};

export default AddProduct;
