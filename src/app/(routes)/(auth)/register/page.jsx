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
    if (!formData.firstName) {
      setError((err) => ({
        ...err,
        firstName: true,
      }));
      alerts.splice(0, alerts.length);
      setAlerts((al) => [...al, "Nama depan wajib diisi!"]);
    } else {
      setError((err) => ({
        ...err,
        firstName: false,
      }));
    }

    if (!formData.lastName) {
      setError((err) => ({
        ...err,
        lastName: true,
      }));
      alerts.splice(0, alerts.length);
      setAlerts((al) => [
        ...al,
        "Nama belakang wajib diisi!",
      ]);
    } else {
      setError((err) => ({
        ...err,
        lastName: false,
      }));
    }

    if (!formData.email) {
      setError((err) => ({
        ...err,
        email: true,
      }));
      alerts.splice(0, alerts.length);
      setAlerts((al) => [...al, "Email wajib Diisi!"]);
    } else {
      setError((err) => ({
        ...err,
        email: false,
      }));
    }

    if (!formData.phoneNumber) {
      setError((err) => ({
        ...err,
        phoneNumber: true,
      }));
      alerts.splice(0, alerts.length);
      setAlerts((al) => [...al, "No Hp wajib Diisi!"]);
    } else {
      setError((err) => ({
        ...err,
        phoneNumber: false,
      }));
    }

    if (!formData.password) {
      setError((err) => ({
        ...err,
        password: true,
      }));
      alerts.splice(0, alerts.length);
      setAlerts((al) => [...al, "Password Wajib Diisi!"]);
    } else {
      setError((err) => ({
        ...err,
        password: false,
      }));
    }
  };

  return (
    <div className="w-full px-5 flex flex-col gap-9 lg:flex-1">
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
        customBorderClassName={
          error.firstName && "border-error"
        }
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
        customBorderClassName={
          error.lastName && "border-error"
        }
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
      customBorderClassName={error.email && "border-error"}
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
      customBorderClassName={
        error.phoneNumber && "border-error"
      }
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
      customBorderClassName={
        error.password && "border-error"
      }
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
