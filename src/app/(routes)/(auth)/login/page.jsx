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

const Login = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const [alerts, setAlerts] = useState([]);

  const [error, setError] = useState({
    phoneNumber: false,
    password: false,
  });

  const [formData, setFormData] = useState({
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
      <div className="flex items-center flex-[1_1_10%]">
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
          <h1 className="text-title">Login</h1>
          <p className="text-paragraph">
            Hello there, sign in to continue
          </p>
        </article>
        <section className="flex flex-col items-center gap-9">
          <Toast start alerts={alerts} duration={2000} />
          <FormLogin
            onSubmit={handleSubmit}
            formData={formData}
            onChange={handleChange}
            handleOpen={handleOpen}
            error={error}
            open={open}
          />
          <p className="text-textBlack text-paragraph">
            Belum punya akun?{" "}
            <Link
              href={"/register"}
              className="text-paragraphBold"
            >
              Daftar
            </Link>{" "}
            sekarang
          </p>
        </section>
      </div>
    </div>
  );
};

const FormLogin = ({
  onSubmit,
  onChange,
  formData,
  handleOpen,
  open,
  error,
}) => {
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-4 w-full lg:max-w-md items-end"
    >
      <TextInput
        id="phoneNumber"
        placeholder={"No. Handphone"}
        type={"number"}
        name={"phoneNumber"}
        onChange={onChange}
        value={formData.phoneNumber}
        error={error.phoneNumber}
        useLabel
        required
      />
      <TextInput
        id="password"
        placeholder={"Password"}
        type={open ? "text" : "password"}
        icon={
          open ? (
            <Icon height={20} icon="ion:eye" />
          ) : (
            <Icon height={20} icon="el:eye-close" />
          )
        }
        name={"password"}
        onChange={onChange}
        value={formData.password}
        error={error.password}
        onClick={handleOpen}
        useLabel
        required
      />
      <Link
        className="text-paragraph text-primary"
        href={"#"}
      >
        Lupa Password?
      </Link>
      <div className="flex flex-col mt-4 w-full gap-8">
        <Button
          type={"submit"}
          title={"Daftar"}
          customClassName={
            "text-white bg-primary hover:bg-green60"
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
};

export default Login;
