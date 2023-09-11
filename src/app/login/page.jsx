"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import { _api, Icon } from "@iconify/react";
import fetch from "cross-fetch";
_api.setFetch(fetch);

const Login = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const [error, setError] = useState({
    phoneNumber: false,
    password: false,
  });

  const [initValue, setInitValue] = useState({
    phoneNumber: "",
    password: "",
  });

  const handleChange = (event) => {
    const key = event.target.id;
    const value = event.target.value;
    setInitValue((values) => ({
      ...values,
      [key]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    initValue.phoneNumber === ""
      ? setError((err) => ({
          ...err,
          phoneNumber: true,
        }))
      : initValue.password === ""
      ? setError((err) => ({ ...err, password: true }))
      : null;
  };

  const LoginForm = ({ onSubmit }) => (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-4 w-full lg:max-w-md items-end"
    >
      <TextInput
        id="phoneNumber"
        placeholder={"No. Handphone"}
        type={"number"}
        name={"phoneNumber"}
      />
      {error.phoneNumber && (
        <p>No. Handphone wajib diisi!</p>
      )}
      <TextInput
        id="password"
        placeholder={"Password"}
        type={open ? "text" : "password"}
        icon={<Icon height={20} icon="ion:eye" />}
        name={"password"}
        onClick={handleOpen}
      />
      {error.phoneNumber && <p>Password wajib diisi!</p>}
      <Link
        className="text-subtitle text-primary"
        href={"#"}
      >
        Lupa Password?
      </Link>
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
        <h1 className="text-title">Login</h1>
        <p className="text-subtitle">
          Hello there, sign in to continue
        </p>
      </article>
      <section className="flex flex-col items-center gap-9">
        <LoginForm onSubmit={handleSubmit} />
        <p className="text-textBlack text-subtitle">
          Belum punya akun?{" "}
          <Link
            href={"/register"}
            className="text-subtitleBold"
          >
            Daftar
          </Link>{" "}
          sekarang
        </p>
      </section>
    </div>
  );
};

export default Login;
