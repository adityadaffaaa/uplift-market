"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TextInput from "../../../components/TextInput";
import Button from "../../../components/Button";
import { _api, Icon } from "@iconify/react";
import fetch from "cross-fetch";
import Toast from "@/app/components/Toast";

_api.setFetch(fetch);

const Register = () => {
  const [open, setOpen] = useState(false);

  const [alerts, setAlerts] = useState([]);

  const [error, setError] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phoneNumber: false,
    password: false,
  });

  const handleOpen = () => setOpen(!open);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const handleChange = (event) => {
    const key = event.target.id;
    const value = event.target.value;

    setFormData((values) => ({
      ...values,
      [key]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validateField = ({
      fieldName,
      pattern,
      errorMessage,
    }) => {
      let errMsg;
      alerts.splice(0, alerts.length);
      if (!formData[fieldName]) {
        errMsg = `${errorMessage} wajib diisi!`;
        setError((err) => ({
          ...err,
          [fieldName]: true,
        }));
        setAlerts((al) => [...al, errMsg]);
      } else if (
        pattern &&
        !pattern.test(formData[fieldName])
      ) {
        errMsg = `${errorMessage} tidak valid!`;
        setError((err) => ({
          ...err,
          [fieldName]: true,
        }));
        setAlerts((al) => [...al, errMsg]);
      } else {
        setError((err) => ({
          ...err,
          [fieldName]: false,
        }));
      }
    };

    validateField({
      fieldName: "firstName",
      pattern: null,
      errorMessage: "Nama depan",
    });
    validateField({
      fieldName: "lastName",
      pattern: null,
      errorMessage: "Nama belakang",
    });
    validateField({
      fieldName: "email",
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      errorMessage: "Email",
    });
    validateField({
      fieldName: "phoneNumber",
      pattern: /^[0-9]{10,16}$/,
      errorMessage: "No Hp",
    });
    validateField({
      fieldName: "password",
      pattern:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%^&*?-])[A-Za-z\d@#$!%^&*?-]{8,}$/,
      errorMessage: "Password",
    });
  };

  return (
    <div className="w-full px-5 flex flex-col h-full lg:flex-1">
      <div className="flex items-center flex-[1_1_10%] ">
        <Link
          href={"/"}
          className="flex items-center gap-2"
        >
          <Icon icon="material-symbols:arrow-back-ios-rounded" />
          <p className="text-paragraph2Res lg:text-paragraph6">
            Kembali
          </p>
        </Link>
      </div>
      <div className="flex flex-col justify-center gap-9 flex-[1_1_80%]">
        <article className="text-textBlack flex flex-col items-center">
          <h1 className="text-title">Daftar Akun</h1>
          <p className="text-paragraph">
            Hello there, sign in to continue
          </p>
        </article>
        <section className="flex flex-col items-center gap-9">
          <Toast alerts={alerts} start duration={2000} />
          <RegisterForm
            onSubmit={handleSubmit}
            onChange={handleChange}
            formData={formData}
            handleOpen={handleOpen}
            open={open}
            error={error}
          />
          <p className="text-textBlack text-paragraph">
            Sudah punya akun?{" "}
            <Link
              href={"/login"}
              className="text-paragraphBold"
            >
              Masuk
            </Link>{" "}
            sekarang
          </p>
        </section>
      </div>
    </div>
  );
};

const RegisterForm = ({
  onSubmit,
  onChange,
  formData,
  handleOpen,
  open,
  error,
}) => (
  <form
    onSubmit={onSubmit}
    className="flex flex-col gap-4 w-full lg:max-w-md"
  >
    <div className="flex gap-4">
      <TextInput
        id={"firstName"}
        name="firstName"
        placeholder={"Nama Depan"}
        type={"text"}
        value={formData.firstName}
        onChange={onChange}
        error={error.firstName}
        useLabel
        required
      />
      <TextInput
        id={"lastName"}
        name="lastName"
        placeholder={"Nama Belakang"}
        value={formData.lastName}
        type={"text"}
        onChange={onChange}
        error={error.lastName}
        useLabel
        required
      />
    </div>
    <TextInput
      id={"email"}
      name="email"
      placeholder={"Email"}
      type={"email"}
      value={formData.email}
      onChange={onChange}
      error={error.email}
      useLabel
      required
    />
    <TextInput
      id={"phoneNumber"}
      name="phoneNumber"
      placeholder={"No. Handphone"}
      type={"number"}
      value={formData.phoneNumber}
      onChange={onChange}
      error={error.phoneNumber}
      useLabel
      required
    />
    <TextInput
      id={"password"}
      name="password"
      placeholder={"Password"}
      type={open ? "text" : "password"}
      value={formData.password}
      onChange={onChange}
      error={error.password}
      icon={
        open ? (
          <Icon height={20} icon="ion:eye" />
        ) : (
          <Icon height={20} icon="el:eye-close" />
        )
      }
      onClick={handleOpen}
      useLabel
      required
    />
    <div className="flex flex-col mt-4 w-full gap-8">
      <Button
        type={"submit"}
        title={"Daftar"}
        customClassName={
          "text-white bg-primary hover:bg-primary"
        }
        useShadow
        rightIcon={<Icon icon="octicon:arrow-right-16" />}
      />
      <hr />
      <Button
        type="button"
        title={"Login dengan Google"}
        customClassName={"text-textBlack text-paragraph"}
        leftIcon={
          <Image
            src={"/assets/icons/icon-google.png"}
            alt="img"
            width={20}
            height={20}
          />
        }
        bordered
      />
    </div>
  </form>
);
export default Register;
