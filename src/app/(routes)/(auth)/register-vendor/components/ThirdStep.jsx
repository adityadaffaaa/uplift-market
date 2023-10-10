import React from "react";

import { FileInput } from "@/app/components";

export const ThirdStep = ({ onChange, formData }) => {
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
