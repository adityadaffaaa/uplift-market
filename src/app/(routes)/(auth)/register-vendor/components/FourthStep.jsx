import React from "react";
import TextInput from "@/app/components/TextInput";

const FourthStep = ({ onChange, formData, error }) => {
  return (
    <>
      <TextInput
        id={"firstQuestion"}
        placeholder={"Dari mana kamu tau Uplift Market?"}
        type={"text"}
        onChange={onChange}
        value={formData.firstQuestion}
        error={error.firstQuestion}
        useLabel
        required
      />
      <TextInput
        id={"secondQuestion"}
        placeholder={
          "Apa alasan kamu mendaftar sebagai vendor di Uplift Market?"
        }
        type={"text"}
        customClassName={"h-[96px] items-start"}
        onChange={onChange}
        value={formData.secondQuestion}
        error={error.secondQuestion}
        useLabel
        required
      />
    </>
  );
};

export default FourthStep;
