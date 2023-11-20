import React from "react";
import InformationSection from "./components/InformationSection";
import InformationDetailSection from "./components/InformationDetailSection";
import DetailScreenLayout from "../../../layouts/DetailScreenLayout";

const AddProduct = () => {
  return (
    <DetailScreenLayout>
      <div className="flex gap-8 flex-col lg:flex-row lg:items-start ">
        <InformationSection />
        <InformationDetailSection />
      </div>
    </DetailScreenLayout>
  );
};

export default AddProduct;
