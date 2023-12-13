"use client";

import React, { useEffect, useState } from "react";

import {
  Button,
  Input,
  Textarea,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import ModalPengaturanVendor from "./ModalPengaturanVendor";
import icons from "@/app/utils/icons";
import { useForm } from "react-hook-form";
import { useSession } from "next-auth/react";
import { useProfile } from "@/app/hooks/vendor/profile";
import { Toast } from "@/app/components";

const { CheckIcon, EditOutlineIcon } =
  icons.vendorDashboard.pengaturanAkunIcon;

const AkunEditFormSection = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { data: session, status, update } = useSession();
  const { editProfile } = useProfile();
  const [alerts, setAlerts] = useState([]);

  const [isEditPassword, setIsEditPassword] =
    useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone_number: "",
    },
  });

  useEffect(() => {
    const initKeys = ["name", "email", "phone_number"];

    initKeys.forEach((key) =>
      setValue(key, session?.user.vendor[key])
    );
  }, [status]);

  const onSubmit = async (data) => {
    const { token } = session.user;
    try {
      const res = await editProfile({
        setAlerts,
        token,
        ...data,
      });

      if (res.status === 200) {
        update({ ...data });
        onOpen();
        setIsEditPassword(false);
      }
    } catch (error) {
      console.log("Edit profile failed!", error);
    }
  };

  return (
    <>
      <Toast duration={2000} alerts={alerts} start />
      <ModalPengaturanVendor
        isOpen={isOpen}
        isEditPassword={isEditPassword}
        onOpenChange={onOpenChange}
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col bg-white w-full rounded-xl lg:p-6 gap-y-6"
      >
        <div className="flex flex-col lg:flex-row lg:gap-x-0">
          <p className="text-paragraph9 lg:w-[210px]">
            Nama
          </p>
          <Input
            type="text"
            placeholder="Nama"
            variant="bordered"
            size="sm"
            className="lg:w-[500px]"
            classNames={{
              base: " h-[52px]",
              inputWrapper: "h-full",
            }}
            {...register("name", {
              required: {
                value: true,
                message: "Nama depan wajib diisi!",
              },
            })}
          />
        </div>
        <div className="flex flex-col lg:flex-row">
          <p className="text-paragraph9 lg:w-[210px] lg:gap-x-2">
            Email
          </p>
          <Input
            type="email"
            placeholder="Email Bisnis"
            variant="bordered"
            size="sm"
            className="lg:w-[500px]"
            classNames={{
              base: " h-[52px]",
              inputWrapper: "h-full",
            }}
            {...register("email", {
              required: {
                value: true,
                message: "Email wajib diisi!",
              },
            })}
          />
        </div>
        <div className="flex flex-col lg:flex-row">
          <p className="text-paragraph9 lg:w-[210px]">
            No. Handphone
          </p>
          <Input
            type="number"
            placeholder="No. Handphone"
            variant="bordered"
            size="sm"
            className="lg:w-[500px]"
            classNames={{
              base: " h-[52px]",
              inputWrapper: "h-full",
            }}
            {...register("phone_number", {
              required: {
                value: true,
                message: "No. handphone wajib diisi!",
              },
            })}
          />
        </div>
        <div className="flex flex-col lg:flex-row">
          <p className="text-paragraph9 lg:w-[210px]">
            Password
          </p>
          <div className="flex flex-row gap-x-2">
            <div className="h-8 items-center justify-center">
              <p className="text-paragraph10 pt-2">
                ***************
              </p>
            </div>
            <Button
              color="default"
              variant="light"
              radius="sm"
              size="sm"
              onClick={() => {
                setIsEditPassword(true);
                onOpen();
              }}
              endContent={<EditOutlineIcon />}
            >
              <p className="text-paragraph9 text-primary">
                Ubah
              </p>
            </Button>
          </div>
        </div>
        <div className="hidden lg:flex w-full items-end justify-end gap-x-2">
          <Button
            color="default"
            variant="solid"
            radius="sm"
            size="lg"
          >
            <p className="text-paragraph1Res">Batal</p>
          </Button>
          <Button
            type="submit"
            color="primary"
            variant="solid"
            radius="sm"
            size="lg"
            onPress={() => {
              setIsEditPassword(false);
              onOpen();
            }}
          >
            <p className="text-paragraph1Res text-white">
              Simpan
            </p>
          </Button>
        </div>
        <div className="btm-nav lg:hidden bg-white p-5">
          <button className="btn bg-primary text-white">
            <div className="flex justify-center items-center">
              <CheckIcon />
              <p>Update</p>
            </div>
          </button>
        </div>
      </form>
    </>
  );
};
export default AkunEditFormSection;
