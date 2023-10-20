"use client";

import React, { useState } from "react";
import {
  TextInput,
  CustomButton,
  Toast,
  LoadingIndicator,
} from "@/app/components";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/app/hooks/auth";
import { useRouter } from "next/navigation";
import { useDisclosure } from "@nextui-org/react";
import icons from "@/app/utils/icons";
const {
  ArrowBackIcon,
  EyeIcon,
  EyeCloseIcon,
  ArrowRightIcon,
} = icons.authScreenIcon;
const Register = () => {
  const router = useRouter();
  const { register, loginGoogle } = useAuth();
  const { isOpen, onOpen, onOpenChange, onClose } =
    useDisclosure();

  const [open, setOpen] = useState(false);

  const [alerts, setAlerts] = useState([]);

  const handleOpen = () => setOpen(!open);

  const [error, setError] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phoneNumber: false,
    password: false,
  });

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

  const handleError = (key, value) => {
    setError((err) => ({
      ...err,
      [key]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let err = {
      firstName: false,
      lastName: false,
      email: false,
      phoneNumber: false,
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
        setAlerts((al) => [...al, errMsg]);
        err[fieldName] = true;
      } else if (
        pattern &&
        !pattern.test(formData[fieldName])
      ) {
        errMsg = `${errorMessage} tidak valid!`;
        handleError(fieldName, true);
        setAlerts((al) => [...al, errMsg]);
        err[fieldName] = true;
      } else {
        handleError(fieldName, false);
        err[fieldName] = false;
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

    const isValid =
      !err.firstName &&
      !err.lastName &&
      !err.email &&
      !err.password &&
      !err.phoneNumber;

    if (isValid) {
      try {
        onOpen();
        const {
          firstName,
          lastName,
          email,
          password,
          phoneNumber,
        } = formData;
        const res = await register({
          first_name: firstName,
          last_name: lastName,
          email,
          password,
          phone_number: phoneNumber,
          setAlerts,
        });

        if (res.status === 200) {
          window.location.pathname = "/login";
        }
        onClose();
      } catch (error) {
        onClose();
        console.error("Something wrong", error);
      }
    }
  };

  const handleClick = async () => {
    try {
      onOpen();

      const res = await loginGoogle({ setAlerts });

      if (res?.response?.status !== 200) onClose();

      router.push(res.data);
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
      <div className="flex items-center flex-[1_1_10%] ">
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
          <h1 className="text-title">Daftar Akun</h1>
          <p className="text-paragraph">
            Hello there, sign in to continue
          </p>
        </article>
        <section className="flex flex-col items-center gap-9">
          <Toast alerts={alerts} start duration={2000} />
          <RegisterForm
            onSubmit={handleSubmit}
            onClick={handleClick}
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
  onClick,
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
      icon={open ? <EyeIcon /> : <EyeCloseIcon />}
      onClick={handleOpen}
      useLabel
      required
    />
    <div className="flex flex-col mt-4 w-full gap-8">
      <CustomButton
        type={"submit"}
        title={"Daftar"}
        customClassName={
          "text-white bg-primary hover:bg-primary"
        }
        useShadow
        rightIcon={<ArrowRightIcon />}
      />
      <hr />
      <CustomButton
        type="button"
        onClick={onClick}
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
