import React from "react";
import Image from "next/image";
import Button from "@/app/components/Button";
import FileInput from "../../../../components/FileInput";

const ThirdStep = ({ onChange, formData }) => {
  return (
    <>
      <FileInput
        title={"Upload Portofolio"}
        id={"businessPortfolio"}
        name={"businessPortfolio"}
        htmlFor={"businessPortfolio"}
        onChange={onChange}
        value={formData.businessPortfolio}
        desc={formData.businessPortfolio}
      />
    </>
  );
};

export default ThirdStep;
