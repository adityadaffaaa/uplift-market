"use client";

import React, { useState, useEffect } from "react";
import {
  Toast,
  TextInput,
  CustomButton,
  LoadingIndicator,
} from "@/app/components";
import Link from "next/link";
import { useAuth } from "@/app/hooks/user/auth";
import { useRouter } from "next/navigation";
import { useDisclosure } from "@nextui-org/react";
import icons from "@/app/utils/icons";
import { signIn } from "next-auth/react";
import Error from "next/error";
import { useSnackbar } from "notistack";
import { Cookies } from "react-cookie";
import { Button } from "@nextui-org/react";
const {
  ArrowBackIcon,
  EyeIcon,
  EyeCloseIcon,
  ArrowRightIcon,
} = icons.authScreenIcon;

const Login = () => {
  const router = useRouter();
  const { loginGoogle } = useAuth();
  const { isOpen, onOpen, onOpenChange, onClose } =
    useDisclosure();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const [alerts, setAlerts] = useState([]);
  const cookie = new Cookies();
  const [isLoading, setIsLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const resMessage = cookie.get("resMessage");

    if (resMessage) {
      enqueueSnackbar({
        message: resMessage,
        variant: "success",
        autoHideDuration: 2000,
      });
      cookie.remove("resMessage");
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
        const res = await signIn("user", {
          redirect: false,
          ...formData,
        });
        if (res.ok) {
          window.location.pathname = "/";
        } else {
          onClose();
          setIsLoading(false);
          setAlerts((values) => [...values, res.error]);
        }
      } catch (error) {
        onClose();
        setIsLoading(false);
        setAlerts((values) => [...values, error]);
        throw new Error(error);
      }
    }
  };

  const handleClick = async () => {
    try {
      onOpen();
      signIn("google");
  
      onClose();
    } catch (error) {
      onClose();
      console.error("Something wrong", error);
    }
  };

  return (
    <div className="w-full px-5 flex flex-col h-full lg:flex-1">
      <LoadingIndicator
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      />
      <div className="flex items-center flex-[1_1_10%]">
        <Link
          href={"/"}
          className="flex items-center gap-2"
        >
          <ArrowBackIcon />
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
            onClick={handleClick}
            formData={formData}
            onChange={handleChange}
            handleOpen={handleOpen}
            error={error}
            open={open}
            isLoading={isLoading}
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
  onClick,
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
        href={"/reset-password"}
      >
        Lupa Password?
      </Link>
      <div className="flex flex-col mt-4 w-full gap-8">
        <Button
          type="submit"
          isLoading={isLoading}
          radius="sm"
          color="primary"
          endContent={<ArrowRightIcon />}
        >
          Login
        </Button>
        <hr />
        <CustomButton
          type="button"
          onClick={onClick}
          title={"Login dengan Google"}
          customClassName={"text-textBlack text-paragraph"}
          leftIcon={
            <img
              src={"/assets/icons/icon-google.png"}
              alt="img"
              className="h-5 w-5"
              loading="lazy"
            />
          }
          bordered
        />
      </div>
    </form>
  );
};

export default Login;
