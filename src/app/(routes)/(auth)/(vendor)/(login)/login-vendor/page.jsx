"use client";

import React, { useState, useEffect } from "react";
import {
  Toast,
  TextInput,
  LoadingIndicator,
} from "@/app/components";
import Link from "next/link";
import { useDisclosure } from "@nextui-org/react";
import { signIn } from "next-auth/react";
import icons from "@/app/utils/icons";
import { Button } from "@nextui-org/react";
import { useSnackbar } from "notistack";
import { Cookies } from "react-cookie";

const {
  EyeIcon,
  EyeCloseIcon,
  ArrowRightIcon,
  ArrowBackIcon,
} = icons.authScreenIcon;

const LoginVendor = () => {
  const { isOpen, onOpen, onOpenChange, onClose } =
    useDisclosure();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const [alerts, setAlerts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const cookies = new Cookies();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const resMessage = cookies.get("resMessage");

    if (resMessage) {
      enqueueSnackbar({
        message: resMessage,
        variant: "success",
        autoHideDuration: 2000,
      });
      cookies.remove("resMessage");
    }
  }, []);

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
    const validateField = ({
      fieldName,
      pattern,
      errorMessage,
    }) => {
      let errMsg;
      alerts.splice(0, alerts.length);
      if (!formData[fieldName]) {
        errMsg = `${errorMessage} wajib diisi!`;
        handleError(fieldName, true);
        err[fieldName] = true;
        setAlerts((al) => [...al, errMsg]);
      } else if (
        pattern &&
        !pattern.test(formData[fieldName])
      ) {
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
        onOpen();
        setIsLoading(true);
        const res = await signIn("vendor", {
          redirect: false,
          ...formData,
        });

        if (res.ok) {
          window.location.pathname = "/dashboard";
        } else {
          setAlerts((values) => [
            ...values,
            "Login Failed!",
          ]);
        }

        onClose();
        setIsLoading(false);
      } catch (error) {
        onClose();
        setIsLoading(false);
        console.error("Something wrong", error);
      }
    }
  };

  return (
    <>
      <LoadingIndicator
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      />
      <div className="container grid place-items-center px-5 lg:px-0">
        <div className="flex flex-col justify-center gap-9 bg-white w-full p-10 max-w-2xl rounded-xl">
          <Link
            href={"/"}
            className="flex items-center gap-2"
          >
            <ArrowBackIcon />
            <p className="text-paragraph2Res lg:text-paragraph6">
              Kembali
            </p>
          </Link>
          <article className="text-textBlack flex flex-col items-center">
            <h1 className="text-title">Login Vendor</h1>
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
              isLoading={isLoading}
            />
            <p className="text-textBlack text-paragraph">
              Belum punya akun vendor?{" "}
              <Link
                href={"/register-vendor"}
                className="text-paragraphBold"
              >
                Daftar
              </Link>{" "}
              sekarang
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

const FormLogin = ({
  onSubmit,
  onChange,
  formData,
  handleOpen,
  open,
  error,
  isLoading,
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
        icon={open ? <EyeIcon /> : <EyeCloseIcon />}
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
          type="submit"
          color="primary"
          radius="sm"
          isLoading={isLoading}
          endContent={<ArrowRightIcon />}
        >
          Masuk
        </Button>
      </div>
    </form>
  );
};

export default LoginVendor;
