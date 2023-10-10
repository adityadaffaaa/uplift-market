import React from "react";
import {
  TextInput,
  TextArea,
  FileInput,
} from "@/app/components";

export const OrderDataSection = ({
  onChange,
  formData,
  error,
}) => {
  return (
    <section className="flex flex-col gap-9 md:bg-white py-6 md:p-6 md:rounded-lg lg:flex-[1_1_60%]">
      <OrderForm
        formData={formData}
        onChange={onChange}
        error={error}
      />
      <BriefForm
        formData={formData}
        onChange={onChange}
        error={error}
      />
    </section>
  );
};

const OrderForm = ({ onChange, formData, error }) => {
  return (
    <div className="flex flex-col gap-4 items-start text-textBlack">
      <h4 className="text-paragraph6 lg:text-heading4">
        Data Pemesan
      </h4>
      <div className="flex flex-col gap-4 w-full">
        <TextInput
          id="name"
          type={"text"}
          name="name"
          onChange={onChange}
          error={error.name}
          value={formData.name}
          required
          placeholder="Nama"
          useLabel
        />
        <TextInput
          id="email"
          type={"email"}
          name="email"
          onChange={onChange}
          error={error.email}
          value={formData.email}
          required
          placeholder="Email"
          useLabel
        />
        <TextInput
          id="phoneNumber"
          type={"number"}
          name="phoneNumber"
          onChange={onChange}
          error={error.phoneNumber}
          value={formData.phoneNumber}
          required
          placeholder="No. Handphone"
          useLabel
        />
      </div>
    </div>
  );
};

const BriefForm = ({ onChange, formData, error }) => {
  return (
    <div className="flex flex-col gap-4 items-start text-textBlack text-paragraph10">
      <h4 className="text-paragraph6 lg:text-heading4 ">
        Data Pemesan
      </h4>
      <div className="flex flex-col gap-4 w-full">
        <TextArea
          id={"briefText"}
          name="briefText"
          onChange={onChange}
          placeholder={"Tuliskan brief Anda disini..."}
          rows={10}
          customClass={
            "focus:border-primary text-paragraph10 lg:text-paragraph8"
          }
          required
          error={error.briefText}
        />
        <FileInput
          id="briefDocument"
          name="briefDocument"
          htmlFor="briefDocument"
          title="Upload Brief"
          value={formData.briefDocument}
          desc={formData.briefDocument}
          onChange={onChange}
          error={error.briefDocument}
        />
      </div>
    </div>
  );
};

export default OrderDataSection;
