"use client";

import React, { useState } from "react";
import { TextInput, FileInput } from "@/app/components";
import { Input } from "@nextui-org/react";
import icons from "@/app/utils/icons";

const { EyeIcon, EyeCloseIcon } = icons.authScreenIcon;

export const FirstStep = ({ formData, control }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageURL, setImageURL] = useState(null);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageURL(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

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
          maxLength: {
            value: 16,
            message: "NIK maksimal 16 karakter!",
          },
          minLength: {
            value: 10,
            message: "NIK minimal 10 karakter!",
          },
          valueAsNumber: {
            value: true,
            message: "NIK wajib berisi angka!",
          },
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
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Format email tidak valid!",
          },
        })}
        isRequired
      />
      <Input
        id="phoneNumber"
        type="number"
        className="text-paragraph text-neutral-800 "
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
          valueAsNumber: {
            value: true,
            message: "No hp wajib berisi angka!",
          },
          pattern: {
            value: /^[1-9][0-9]{9,15}$/,
            message: "No hp tidak valid!",
          },
        })}
        fullWidth
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
          minLength: {
            value: 8,
            message: "Password minimal 8 karakter!",
          },
          pattern: {
            value:
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%^&*?-])[A-Za-z\d@#$!%^&*?-]{8,}$/,
            message: "Password tidak valid",
          },
        })}
        endContent={
          <button type="button" onClick={toggleVisibility}>
            {isVisible ? <EyeIcon /> : <EyeCloseIcon />}
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
