"use client";

import React, { useState } from "react";
import {
  Toast,
  TextInput,
  CustomButton,
  LoadingIndicator,
} from "@/app/components";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/app/hooks/auth";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";
import { useDisclosure } from "@nextui-org/react";
import { _api, Icon } from "@iconify/react";
import fetch from "cross-fetch";
_api.setFetch(fetch);

const LoginVendor = () => {
  const router = useRouter();
  const { login, loginGoogle } = useAuth();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [cookies, setCookie] = useCookies(["token"]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const [alerts, setAlerts] = useState([]);

  const [error, setError] = useState({
    email: false,
    password: false,
  });

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleError = (key, error) => {
    setError((values) => ({
      ...values,
      [key]: error,
    }));
  };

  const handleChange = (event) => {
    const key = event.target.id;
    const value = event.target.value;

    setFormData((values) => ({
      ...values,
      [key]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let err = {
      email: false,
      password: false,
    };
    const validateField = ({ fieldName, pattern, errorMessage }) => {
      let errMsg;
      alerts.splice(0, alerts.length);
      if (!formData[fieldName]) {
        errMsg = `${errorMessage} wajib diisi!`;
        handleError(fieldName, true);
        err[fieldName] = true;
        setAlerts((al) => [...al, errMsg]);
      } else if (pattern && !pattern.test(formData[fieldName])) {
        errMsg = `${errorMessage} tidak valid!`;
        handleError(fieldName, true);
        err[fieldName] = true;
        setAlerts((al) => [...al, errMsg]);
      } else {
        handleError(fieldName, false);
        err[fieldName] = false;
      }
    };

    validateField({
      fieldName: "email",
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      errorMessage: "Email",
    });
    validateField({
      fieldName: "password",
      pattern: null,
      errorMessage: "Password",
    });

    if (!err.email && !err.password) {
      try {
        onOpen(true);
        const res = await login({
          ...formData,
          setAlerts,
        });
        const token = res?.data.token;

        setCookie("token", token);
        // localStorage.setItem(
        //   "token",
        //   JSON.stringify(token)
        // );

        if (token || cookies.token || cookies.token !== undefined) {
          window.location.pathname = "/";
        }
      } catch (error) {
        console.error("Something wrong", error);
      }
    }
  };

  const handleClick = async () => {
    try {
      onOpen(true);

      const res = await loginGoogle({ setAlerts });

      router.push(res.data);
    } catch (error) {
      console.error("Something wrong", error);
    }
  };

  return (
    <div className="w-full px-5 flex flex-col h-full pb-8 bg-primary lg:flex-1 lg:bg-white">
      <LoadingIndicator isOpen={isOpen} onOpenChange={onOpenChange} />
      <div className="flex items-center flex-[1_1_10%]">
        <Link href={"/"} className="flex items-center gap-2 pt-5">
          <Icon
            icon="material-symbols:arrow-back-ios-rounded"
            className="text-white"
          />
          <p className="text-paragraph2Res text-white lg:text-paragraph6">
            Kembali
          </p>
        </Link>
      </div>
      <div className="flex flex-col justify-center gap-9 flex-[1_1_70%] bg-white px-4 rounded-xl">
        <article className="text-textBlack flex flex-col items-center">
          <h1 className="text-title">Welcome Back!</h1>
          <p className="text-paragraph">Hello there, sign in to continue</p>
        </article>
        <section className="flex flex-col items-center gap-9">
          <Toast start alerts={alerts} duration={2000} />
          <FormLogin
            onSubmit={handleSubmit}
            onClick={handleClick}
            formData={formData}
            onChange={handleChange}
            handleOpen={handleOpen}
            error={error}
            open={open}
          />
          <p className="text-textBlack text-paragraph">
            Belum punya akun?{" "}
            <Link href={"/register-vendor"} className="text-paragraphBold">
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
  onClick,
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
        id="email"
        placeholder={"Email"}
        type={"email"}
        name={"email"}
        onChange={onChange}
        value={formData.email}
        error={error.email}
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
      <Link className="text-paragraph text-primary" href={"#"}>
        Lupa Password?
      </Link>
      <div className="flex flex-col mt-4 w-full gap-8">
        <CustomButton
          type={"submit"}
          title={"Masuk"}
          customClassName={"text-white bg-primary hover:bg-green60"}
          useShadow
          rightIcon={<Icon icon="octicon:arrow-right-16" />}
        />
        <hr />
      </div>
    </form>
  );
};

export default LoginVendor;
