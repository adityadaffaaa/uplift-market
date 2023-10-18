import React from "react";
import { NextTextArea } from "@/app/components";
import { Input, Textarea } from "@nextui-org/react";
export const FourthStep = ({ formData, error }) => {
  return (
    <>
      <Input
        id={"firstQuestion"}
        variant="bordered"
        radius="sm"
        color="primary"
        label={"Dari mana kamu tau Uplift Market?"}
        {...formData("firstQuestion", {
          required: {
            value: true,
          },
        })}
        isRequired
      />
      <Textarea
        radius="sm"
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
        isRequired 
      />
    </>
  );
};

export default FourthStep;
