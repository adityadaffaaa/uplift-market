"use client";

import React, { useState } from "react";
import {
  CustomButton,
  LoadingIndicator,
  Toast,
} from "@/app/components";
import { Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import icons from "@/app/utils/icons";
import { useAuth } from "@/app/hooks/auth";
import { useDisclosure } from "@nextui-org/react";
import { Cookies } from "react-cookie";
const { ArrowRightIcon } = icons.authScreenIcon;

export const ForgotPasswordSection = ({
  handleSuccess,
}) => {
  const cookies = new Cookies();
  const { forgotPassword } = useAuth();
  const [alerts, setAlerts] = useState([]);
  const { isOpen, onOpen, onOpenChange, onClose } =
    useDisclosure();
  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data) => {
    const val = watch("email");
    alerts.splice(0, alerts.length);
    if (!val || val.length <= 0) {
      setAlerts((values) => [
        ...values,
        "Email wajib diisi!",
      ]);
    } else {
      try {
        onOpen();
        const res = await forgotPassword({
          ...data,
          setAlerts,
        });

        if (res?.status === 200) {
          cookies.set("email", val);
          handleSuccess(true);
          onClose();
        }
        onClose();
      } catch (error) {
        onClose();
        console.error("Something wrong", error);
      }
    }
  };

  return (
    <>
      <Toast start duration={2000} alerts={alerts}></Toast>
      <LoadingIndicator
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      />
      <hr className="w-full" />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-4 mx-0"
      >
        <div className="flex flex-col mt-4 w-full gap-8">
          <Input
            id="email"
            type="email"
            label="Email"
            color="primary"
            radius="sm"
            size="md"
            labelPlacement="outside"
            variant="bordered"
            {...register("email")}
            isRequired
          />

          <CustomButton
            type="submit"
            title={"Selanjutnya"}
            customClassName={
              "text-white bg-primary hover:bg-primary w-full"
            }
            useShadow
            rightIcon={<ArrowRightIcon />}
          />
        </div>
      </form>
    </>
  );
};

export default ForgotPasswordSection;
