"use client";

import React, { useState } from "react";
import { TextInput, FileInput } from "@/app/components";
import { Input } from "@nextui-org/react";
import { _api, Icon } from "@iconify/react";
import fetch from "cross-fetch";
_api.setFetch(fetch);

export const FirstStep = ({
  formData,
  control,
  touchFields,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <>
      <Input
        id="name"
        className="text-paragraph"
        radius="sm"
        variant="bordered"
        color="primary"
        labelPlacement="inside"
        label="Nama Sesuai KTP"
        {...formData("name", {
          required: {
            value: true,
            message: "Nama wajib diisi!",
          },
        })}
        isRequired
      />

      <Input
        id="nik"
        type="number"
        className="text-paragraph"
        radius="sm"
        variant="bordered"
        color="primary"
        labelPlacement="inside"
        label="NIK"
        {...formData("nik", {
          required: {
            value: true,
            message: "NIK wajib diisi!",
          },
          maxLength: 16,
          minLength: 10,
        })}
        isRequired
      />
      <Input
        id="email"
        type="email"
        className="text-paragraph"
        radius="sm"
        variant="bordered"
        color="primary"
        labelPlacement="inside"
        label="Email"
        {...formData("email", {
          required: {
            value: true,
            message: "Email wajib diisi!",
          },
          pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        })}
        isRequired
      />
      <Input
        id="phoneNumber"
        type="number"
        className="text-paragraph text-neutral-800"
        radius="sm"
        variant="bordered"
        color="primary"
        labelPlacement="inside"
        label="No. Handphone"
        startContent={
          <div className="pointer-events-none fle items-center">
            <span className="text-default-400 text-small">
              +62
            </span>
          </div>
        }
        {...formData("phoneNumber", {
          required: {
            value: true,
            message: "No hp wajib diisi!",
          },
          valueAsNumber: true,
          pattern: /^[1-9][0-9]{9,15}$/,
        })}
        isRequired
      />

      <Input
        id="password"
        type={isVisible ? "text" : "password"}
        className="text-paragraph"
        radius="sm"
        variant="bordered"
        color="primary"
        labelPlacement="inside"
        label="Password"
        {...formData("password", {
          required: {
            value: true,
            message: "Password wajib diisi!",
          },
          minLength: 8,
          pattern:
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%^&*?-])[A-Za-z\d@#$!%^&*?-]{8,}$/,
        })}
        endContent={
          <button type="button" onClick={toggleVisibility}>
            {isVisible ? (
              <Icon height={20} icon="ion:eye" />
            ) : (
              <Icon height={20} icon="el:eye-close" />
            )}
          </button>
        }
        isRequired
      />
      <FileInput
        title={"Upload KTP"}
        name={"scanKtp"}
        id={"scanKtp"}
        htmlFor={"scanKtp"}
        {...formData("scanKtp", {
          required: true,
        })}
      />
    </>
  );
};

export default FirstStep;
