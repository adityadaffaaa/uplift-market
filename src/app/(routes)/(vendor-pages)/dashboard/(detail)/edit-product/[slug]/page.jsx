import React from "react";
import InformationSection from "../components/InformationSection";
import InformationDetailSection from "../components/InformationDetailSection";

const AddProduct = ({ params }) => {
  return (
    <div className="flex gap-8 flex-col lg:flex-row lg:items-start ">
      <InformationSection />
      <InformationDetailSection slug={params.slug} />
    </div>
  );
};

export default AddProduct;
