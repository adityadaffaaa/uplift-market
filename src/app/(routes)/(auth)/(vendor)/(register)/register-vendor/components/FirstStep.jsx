"use client";

import React, { useState } from "react";
import { FileInput } from "@/app/components";
import { Input } from "@nextui-org/react";
import icons from "@/app/utils/icons";

const { EyeIcon, EyeCloseIcon } = icons.authScreenIcon;

export const FirstStep = ({
  formData,
  control,
  Controller,
  getValues,
  errors,
  fileDefaultValue,
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
        defaultValue={getValues("name")}
        {...formData("name", {
          required: {
            value: true,
            message: "Nama wajib diisi!",
          },
        })}
        errorMessage={errors?.name?.message}
        isRequired
      />
      <div className="flex flex-col gap-1">
        <input
          type="date"
          id="dob"
          placeholder="Tanggal lahir"
          className="p-3 border-2 border-neutral-200 hover:border-neutral-400 focus:border-primary focus:outline-none outline-none cursor-pointer rounded-lg transition-linear text-paragraph10 text-neutral-600"
          {...formData("dob", {
            required: {
              value: true,
              message: "Tanggal lahir wajib diisi!",
            },
          })}
          required
        />
        {errors?.dob?.message && (
          <p className="text-danger-500 text-xs">
            {errors?.dob?.message}
          </p>
        )}
      </div>
      <Input
        id="nik"
        type="number"
        className="text-paragraph"
        radius="sm"
        variant="bordered"
        color="primary"
        labelPlacement="inside"
        defaultValue={getValues("nik")}
        label="NIK"
        {...formData("nik", {
          required: {
            value: true,
            message: "NIK wajib diisi!",
          },
          validate: {
            minLength: (value) =>
              value.length > 10 ||
              "NIK minimal 10 karakter",
            maxLength: (value) =>
              value.length < 20 ||
              "NIK maksimal 20 karakter",
          },
        })}
        errorMessage={errors?.nik?.message}
        isRequired
      />
      <Input
        id="email"
        type="email"
        defaultValue={getValues("email")}
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
        errorMessage={errors?.email?.message}
        isRequired
      />
      <Input
        id="phoneNumber"
        type="number"
        className="text-paragraph text-neutral-800 "
        radius="sm"
        variant="bordered"
        color="primary"
        defaultValue={getValues("phoneNumber")}
        labelPlacement="inside"
        label="No. Handphone"
        errorMessage={errors?.phoneNumber?.message}
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
        autoComplete="on"
        type={isVisible ? "text" : "password"}
        className="text-paragraph"
        radius="sm"
        defaultValue={getValues("password")}
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
        errorMessage={errors?.password?.message}
        isRequired
      />
      {/* <p>
        {getValues("scanKtp") && getValues("scanKtp").name}
      </p> */}
      <Controller
        name="scanKtp"
        control={control}
        rules={{
          required: {
            value: true,
            message: "Upload foto KTP wajib diisi!",
          },
          validate: {
            validFormat: () => {
              const value = getValues("scanKtp");

              if (!value) return "Format file wajib ada!";
              const allowedFormats = [
                "image/png",
                "image/jpeg",
                "image/jpg",
              ];
              return (
                allowedFormats.includes(value.type) ||
                "Format file invalid!"
              );
            },
            validSize: () => {
              const value = getValues("scanKtp");
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
            title={"Upload KTP"}
            name={"scanKtp"}
            id={"scanKtp"}
            htmlFor={"scanKtp"}
            defaultValue={fileDefaultValue.scanKtp}
            setFile={(data) => field.onChange(data)}
            nameItem={"scanKtp"}
            errorMessage={errors?.scanKtp?.message}
          />
        )}
      />
    </>
  );
};

export default FirstStep;
