import React from "react";

import { FileInput } from "@/app/components";

export const UploadSection = ({
  control,
  Controller,
  getValues,
  errors,
  fileDefaultValue,
}) => {
  return (
    <>
      <Controller
        name="barangDiterima"
        control={control}
        rules={{
          required: {
            value: true,
            message: "Barang Diterima wajib diisi!",
          },
          validate: {
            isPDF: () => {
              const file = getValues("barangDiterima");
              if (!file) return "Format file wajib ada!";
              return (
                file.type === "application/pdf" || "File foto harus berupa PDF"
              );
            },
            validSize: () => {
              const value = getValues("barangDiterima");
              if (!value) return "Ukuran file wajib ada!";
              return value.size <= 2097152 || "Ukuran file terlalu besar!";
            },
          },
        }}
        render={({ field }) => (
          <FileInput
            title={"Upload Barang Diterima"}
            id={"barangDiterima"}
            defaultValue={fileDefaultValue.portfolio}
            name={"barangDiterima"}
            htmlFor={"barangDiterima"}
            setFile={(data) => field.onChange(data)}
            desc={"PDF, file size no more than 5MB"}
            errorMessage={errors?.barangDiterima?.message}
            isPdf
          />
        )}
      />
    </>
  );
};

export default UploadSection;
