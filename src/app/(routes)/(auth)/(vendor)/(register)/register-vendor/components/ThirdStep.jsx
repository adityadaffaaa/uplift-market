import React from "react";

import { FileInput } from "@/app/components";

export const ThirdStep = ({
  control,
  Controller,
  getValues,
  errors,
  fileDefaultValue,
}) => {
  return (
    <>
      <Controller
        name="businessPortfolio"
        control={control}
        rules={{
          required: {
            value: true,
            message: "Portofolio wajib diisi!",
          },
          validate: {
            isPDF: () => {
              const file = getValues("businessPortfolio");
              if (!file) return "Format file wajib ada!";
              return (
                file.type === "application/pdf" ||
                "File portofolio harus berupa PDF"
              );
            },
            validSize: () => {
              const value = getValues("businessPortfolio");
              if (!value) return "Ukuran file wajib ada!";
              return (
                value.size <= 2097152 ||
                "Ukuran file terlalu besar!"
              );
            },
          },
        }}
        render={({ field }) => (
          <FileInput
            title={"Upload Portofolio"}
            id={"businessPortfolio"}
            defaultValue={fileDefaultValue.portfolio}
            name={"businessPortfolio"}
            htmlFor={"businessPortfolio"}
            setFile={(data) => field.onChange(data)}
            desc={"PDF, file size no more than 5MB"}
            errorMessage={
              errors?.businessPortfolio?.message
            }
            isPdf
          />
        )}
      />
    </>
  );
};

export default ThirdStep;
