import React from "react";
import { NextTextArea } from "@/app/components";
import { Input, Textarea } from "@nextui-org/react";
export const FourthStep = ({
  formData,
  errors,
  getValues,
}) => {
  return (
    <>
      <Input
        id={"firstQuestion"}
        variant="bordered"
        radius="sm"
        defaultValue={getValues("firstQuestion")}
        color="primary"
        errorMessage={errors?.firstQuestion?.message}
        label={"Dari mana kamu tau Uplift Market?"}
        {...formData("firstQuestion", {
          required: {
            value: true,
            message: "Pertanyaan pertama wajib diisi!",
          },
        })}
        autoComplete="off"
        isRequired
      />
      <Textarea
        id="secondQuestion"
        defaultValue={getValues("secondQuestion")}
        radius="sm"
        autoComplete="off"
        minRows={6}
        maxRows={10}
        variant="bordered"
        label="Apa alasan kamu mendaftar sebagai vendor di Uplift Market?"
        color="primary"
        {...formData("secondQuestion", {
          required: {
            value: true,
            message: "Pertanyaan kedua wajib diisi!",
          },
        })}
        errorMessage={errors?.secondQuestion?.message}
        isRequired
      />
    </>
  );
};

export default FourthStep;
