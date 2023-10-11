import React from "react";

import { TextInput, FileInput } from "@/app/components";

export const SecondStep = ({
  onChange,
  formData,
  error,
}) => {
  return (
    <>
      <TextInput
        id={"businessName"}
        placeholder={"Nama Bisnis"}
        type={"text"}
        onChange={onChange}
        value={formData.businessName}
        error={error.businessName}
        useLabel
        required
      />
      <FileInput
        title={"Upload Logo"}
        id={"businessLogo"}
        name={"businessLogo"}
        htmlFor={"businessLogo"}
        onChange={onChange}
        value={formData.businessLogo}
        desc={formData.businessLogo}
      />
      {/* <TextInput
        placeholder={"Logo Bisnis"}
        type={"text"}
        customClassName="md:hidden"
        customBorderClassName="md:hidden"
      /> */}
      <TextInput
        id={"category"}
        placeholder={"Kategori"}
        type={"text"}
        onChange={onChange}
        value={formData.category}
        error={error.category}
        useLabel
        required
      />
      <TextInput
        id={"businessEmail"}
        placeholder={"Email Bisnis"}
        type={"email"}
        onChange={onChange}
        value={formData.businessEmail}
        error={error.businessEmail}
        useLabel
        required
      />
      <TextInput
        id={"businessPhoneNumber"}
        placeholder={"No. Handphone Bisnis"}
        type={"number"}
        onChange={onChange}
        value={formData.businessPhoneNumber}
        error={error.businessPhoneNumber}
        useLabel
        required
      />
      <TextInput
        id={"completeAddress"}
        placeholder={"Alamat Lengkap"}
        type={"text"}
        onChange={onChange}
        value={formData.completeAddress}
        error={error.completeAddress}
        useLabel
        required
      />
      <TextInput
        id={"province"}
        placeholder={"Provinsi"}
        type={"text"}
        onChange={onChange}
        value={formData.province}
        error={error.province}
        useLabel
        required
      />
      <div className="gap-4 md:flex md:space-y-0 space-y-4">
        <TextInput
          id={"city"}
          placeholder={"Kota/Kabupaten"}
          type={"text"}
          onChange={onChange}
          value={formData.city}
          error={error.city}
          useLabel
          required
        />
        <TextInput
          id={"postalCode"}
          placeholder={"Kode Pos"}
          type={"text"}
          onChange={onChange}
          value={formData.postalCode}
          error={error.postalCode}
          useLabel
          required
        />
      </div>
      <div className="gap-4 md:flex md:space-y-0 space-y-4">
        <TextInput
          id={"websiteUrl"}
          placeholder={"Website"}
          type={"text"}
          onChange={onChange}
          value={formData.websiteUrl}
          error={error.websiteUrl}
          useLabel
          required
        />
        <TextInput
          id={"instagram"}
          placeholder={"Instagram"}
          type={"text"}
          onChange={onChange}
          value={formData.instagram}
          error={error.instagram}
          useLabel
          required
        />
      </div>
    </>
  );
};

export default SecondStep;
