"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import { _api, Icon } from "@iconify/react";
import fetch from "cross-fetch";

_api.setFetch(fetch);

const Register = () => {
  const [open, setOpen] = useState(false);

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

    console.log({
      key: key,
      value: value,
    });

    setFormData((values) => ({
      ...values,
      [key]: value,
    }));
  };

  const RegisterForm = ({ onSubmit }) => (
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
          onChange={handleChange}
          required
        />
        <TextInput
          id={"lastName"}
          name="lastName"
          placeholder={"Nama Belakang"}
          value={formData.lastName}
          type={"text"}
          onChange={handleChange}
          required
        />
      </div>
      <TextInput
        id={"email"}
        name="email"
        placeholder={"Email"}
        type={"email"}
        value={formData.email}
        onChange={handleChange}
        required
      />
      <TextInput
        id={"phoneNumber"}
        name="phoneNumber"
        placeholder={"No. Handphone"}
        type={"number"}
        value={formData.phoneNumber}
        onChange={handleChange}
        required
      />
      <TextInput
        id={"password"}
        name="password"
        placeholder={"Password"}
        type={open ? "text" : "password"}
        value={formData.password}
        onChange={handleChange}
        icon={
          open ? (
            <Icon height={20} icon="ion:eye" />
          ) : (
            <Icon height={20} icon="el:eye-close" />
          )
        }
        onClick={handleOpen}
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
          title={"Login dengan Google"}
          customClassName={"text-textBlack text-subtitle"}
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

  return (
    <div className="w-full px-5 flex flex-col gap-9 lg:flex-1">
      <article className="text-textBlack flex flex-col items-center">
        <h1 className="text-title">Daftar Akun</h1>
        <p className="text-subtitle">
          Hello there, sign in to continue
        </p>
      </article>
      <section className="flex flex-col items-center gap-9">
        <RegisterForm />
        <p className="text-textBlack text-subtitle">
          Sudah punya akun?{" "}
          <Link
            href={"/login"}
            className="text-subtitleBold"
          >
            Masuk
          </Link>{" "}
          sekarang
        </p>
      </section>
    </div>
  );
};

export default Register;
