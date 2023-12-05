"use client";

import React, { useState } from "react";
import icons from "@/app/utils/icons";
import { Toast, LoadingIndicator } from "@/app/components";
import { useForm } from "react-hook-form";
import {
  Input,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { useAuth } from "@/app/hooks/user/auth";
const { EyeIcon, EyeCloseIcon, ArrowRightIcon } =
  icons.authScreenIcon;

const FormResetToken = ({ token, email }) => {
  const { resetPassword } = useAuth();
  const [alerts, setAlerts] = useState([]);
  const { isOpen, onOpen, onOpenChange, onClose } =
    useDisclosure();

  const [isVisible, setIsVisible] = useState({
    password: false,
    passwordConfirmation: false,
  });

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      password: "",
      passwordConfirmation: "",
    },
  });

  const toggle = (key) => {
    setIsVisible((val) => ({
      ...val,
      [key]: !isVisible[key],
    }));
  };

  const onSubmit = async (data) => {
    try {
      onOpen();
      const res = await resetPassword({
        setAlerts,
        email,
        password: data.password,
        password_confirmation: data.passwordConfirmation,
        token,
      });

      if (res?.status === 200) {
        window.location.pathname = "/login";
      }

      onClose();
    } catch (error) {
      onClose();
      console.error("Something wrong", error);
    }
  };

  return (
    <>
      <LoadingIndicator
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      />
      <Toast start duration={2000} alerts={alerts} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-4 mx-0"
        noValidate
      >
        <div className="flex flex-col mt-4 w-full gap-8">
          <div className="flex flex-col gap-1">
            <Input
              id="password"
              type={
                isVisible.password ? "text" : "password"
              }
              label="Password"
              color="primary"
              radius="sm"
              size="md"
              labelPlacement="outside"
              errorMessage={errors?.password?.message}
              variant="bordered"
              {...register("password", {
                required: {
                  value: true,
                  message: "Password wajib diisi!",
                },
                pattern: {
                  value:
                    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=*!_?-])[A-Za-z\d@#$%^&+=*!_?-]{8,}$/,
                  message: "Password tidak valid!",
                },
                minLength: {
                  value: 8,
                  message: "Password minimal 8 karakter!",
                },
              })}
              endContent={
                <button
                  type="button"
                  onClick={() => toggle("password")}
                  className="cursor-pointer"
                >
                  {isVisible.password ? (
                    <EyeIcon />
                  ) : (
                    <EyeCloseIcon />
                  )}
                </button>
              }
            />
            <p className="text-danger-500"></p>
          </div>
          <div className="flex flex-col gap-1">
            <Input
              id="passwordConfirmation"
              type={
                isVisible.passwordConfirmation
                  ? "text"
                  : "password"
              }
              label="Konfirmasi Password"
              color="primary"
              radius="sm"
              size="md"
              errorMessage={
                errors?.passwordConfirmation?.message
              }
              labelPlacement="outside"
              variant="bordered"
              {...register("passwordConfirmation", {
                required: {
                  value: true,
                  message:
                    "Konfirmasi password wajib diisi!",
                },
                validate: {
                  sameValue: (value) =>
                    value === getValues("password") ||
                    "Konfirmasi password tidak valid!",
                },
              })}
              endContent={
                <button
                  type="button"
                  onClick={() =>
                    toggle("passwordConfirmation")
                  }
                  className="cursor-pointer"
                >
                  {isVisible.passwordConfirmation ? (
                    <EyeIcon />
                  ) : (
                    <EyeCloseIcon />
                  )}
                </button>
              }
            />
          </div>
          <Button
            type="submit"
            isLoading={isOpen}
            color="primary"
            radius="sm"
            size="lg"
            endContent={<ArrowRightIcon />}
          >
            Selanjutnya
          </Button>
        </div>
      </form>
    </>
  );
};

export default FormResetToken;
