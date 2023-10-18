import React from "react";

import { FileInput } from "@/app/components";

export const ThirdStep = ({ formData }) => {
  return (
    <>
      <FileInput
        title={"Upload Portofolio"}
        id={"businessPortfolio"}
        name={"businessPortfolio"}
        htmlFor={"businessPortfolio"}
        {...formData("businessPortfolio", {
          required: {
            value: true,
          },
        })}
      />
    </>
  );
};

export default ThirdStep;
