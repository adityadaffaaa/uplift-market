"use client";

import React from "react";
import TextInput from "@/app/components/TextInput";
import FileInput from "./FileInput";
import { _api, Icon } from "@iconify/react";
import fetch from "cross-fetch";

_api.setFetch(fetch);

const FirstStep = ({ onChange, formData, error }) => {
  return (
    <>
      <TextInput
        id={"name"}
        placeholder={"Nama Sesuai KTP"}
        type={"text"}
        onChange={onChange}
        value={formData.name}
        error={error.name}
        useLabel
        required
      />
      <TextInput
        id={"dateOfBirth"}
        placeholder={"Tanggal Lahir"}
        type={"text"}
        onChange={onChange}
        value={formData.dateOfBirth}
        error={error.dateOfBirth}
        useLabel
        required
      />
      <TextInput
        id={"nik"}
        placeholder={"NIK"}
        type={"number"}
        onChange={onChange}
        value={formData.nik}
        error={error.nik}
        useLabel
        required
      />
      <TextInput
        id={"email"}
        placeholder={"Email"}
        type={"email"}
        onChange={onChange}
        value={formData.email}
        error={error.email}
        useLabel
        required
      />
      <TextInput
        id={"phoneNumber"}
        placeholder={"No. Handphone"}
        type={"number"}
        onChange={onChange}
        value={formData.phoneNumber}
        error={error.phoneNumber}
        useLabel
        required
      />
      <TextInput
        id={"password"}
        placeholder={"Password"}
        type={"password"}
        icon={<Icon height={20} icon="ion:eye" />}
        onChange={onChange}
        value={formData.password}
        error={error.password}
        useLabel
        required
      />
      <FileInput
        title={"Upload KTP"}
        name={"scanKtp"}
        id={"scanKtp"}
        htmlFor={"scanKtp"}
        onChange={onChange}
        value={formData.scanKtp}
        desc={formData.scanKtp}
      />
    </>
  );
};

export default FirstStep;
