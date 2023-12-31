"use client";

import React, { useState } from "react";

import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
  ModalHeader,
  Input,
} from "@nextui-org/react";
import icons from "@/app/utils/icons";
import { useForm } from "react-hook-form";
import { useProfile } from "@/app/hooks/user/profile";
import { Toast } from "@/app/components";
import { Cookies } from "react-cookie";

const { CheckIcon, EyeIcon, EyeCloseIcon } =
  icons.pengaturanUserIcon;

const ModalPengaturanUser = ({
  isOpen,
  onOpenChange,
  isEditPassword,
  token = "",
  setPasswordUpdated = () => {},
}) => {
  return (
    <Modal
      size={isEditPassword ? "3xl" : "md"}
      isOpen={isOpen}
      backdrop="blur"
      onOpenChange={onOpenChange}
    >
      <ModalContent>
        {(onClose) =>
          isEditPassword ? (
            <EditPasswordContent
              onClose={onClose}
              token={token}
              setPasswordUpdated={setPasswordUpdated}
            />
          ) : (
            <EditProfileSuccessContent onClose={onClose} />
          )
        }
      </ModalContent>
    </Modal>
  );
};

const EditPasswordContent = ({
  onClose,
  token = "",
  setPasswordUpdated = () => {},
}) => {
  const { updatePassword } = useProfile();
  const [alerts, setAlerts] = useState([]);
  const cookies = new Cookies();
  const [isVisible, setIsVisible] = useState({
    oldPassword: false,
    newPassword: false,
    newPasswordConfirmation: false,
  });

  const handleVisibilityOldPassword = () => {
    setIsVisible((values) => ({
      ...values,
      oldPassword: !isVisible.oldPassword,
    }));
  };
  const handleVisibilityNewPassword = () => {
    setIsVisible((values) => ({
      ...values,
      newPassword: !isVisible.newPassword,
    }));
  };
  const handleVisibilityNewPasswordConf = () => {
    setIsVisible((values) => ({
      ...values,
      newPasswordConfirmation:
        !isVisible.newPasswordConfirmation,
    }));
  };

  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      password_lama: "",
      password_baru: "",
      konfirmasi_password: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const res = await updatePassword({
        setAlerts,
        token,
        ...data,
      });
      if (res.status === 200) {
        const resMessage = await res.data.message;
        cookies.set("resMessage", resMessage);
        reset();
        setPasswordUpdated(true);
        onClose();
      }
    } catch (error) {
      console.log("Update password failed!", error);
    }
  };

  return (
    <>
      <Toast duration={2000} alerts={alerts} start />
      <ModalHeader>
        <h5 className="text-heading5 font-bold">
          Ubah Password
        </h5>
      </ModalHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ModalBody className="flex flex-col gap-5">
          <Input
            name="password_lama"
            id="password_lama"
            type={
              isVisible.oldPassword ? "text" : "password"
            }
            variant="bordered"
            radius="sm"
            color="primary"
            label="Masukkan password lama"
            endContent={
              <Button
                isIconOnly
                variant="light"
                onClick={handleVisibilityOldPassword}
              >
                {isVisible.oldPassword ? (
                  <EyeIcon />
                ) : (
                  <EyeCloseIcon />
                )}
              </Button>
            }
            {...register("password_lama", {
              required: {
                value: true,
                message: "Password lama wajib diisi!",
              },
            })}
            isRequired
            errorMessage={errors?.password_lama?.message}
          />
          <Input
            name="password_baru"
            id="password_baru"
            type={
              isVisible.newPassword ? "text" : "password"
            }
            variant="bordered"
            radius="sm"
            color="primary"
            label="Masukkan password baru"
            endContent={
              <Button
                isIconOnly
                variant="light"
                onClick={handleVisibilityNewPassword}
              >
                {isVisible.newPassword ? (
                  <EyeIcon />
                ) : (
                  <EyeCloseIcon />
                )}
              </Button>
            }
            {...register("password_baru", {
              required: {
                value: true,
                message: "Password baru wajib diisi!",
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
            isRequired
            errorMessage={errors?.password_baru?.message}
          />
          <Input
            name="konfirmasi_password"
            id="konfirmasi_password"
            type={
              isVisible.newPasswordConfirmation
                ? "text"
                : "password"
            }
            variant="bordered"
            radius="sm"
            color="primary"
            label="Masukkan konfirmasi password baru"
            endContent={
              <Button
                isIconOnly
                variant="light"
                onClick={handleVisibilityNewPasswordConf}
              >
                {isVisible.newPasswordConfirmation ? (
                  <EyeIcon />
                ) : (
                  <EyeCloseIcon />
                )}
              </Button>
            }
            {...register("konfirmasi_password", {
              required: {
                value: true,
                message: "Konfirmasi password wajib diisi!",
              },
              validate: {
                sameValue: (value) =>
                  value === getValues("password_baru") ||
                  "Konfirmasi password tidak valid!",
              },
            })}
            isRequired
            errorMessage={
              errors?.konfirmasi_password?.message
            }
          />
        </ModalBody>
        <ModalFooter className="">
          <div className="flex gap-2">
            <Button
              radius="sm"
              color="default"
              variant="bordered"
              onPress={onClose}
            >
              Batal
            </Button>
            <Button
              type="submit"
              radius="sm"
              color="primary"
              variant="solid"
              onPress={() => {}}
            >
              Simpan
            </Button>
          </div>
        </ModalFooter>
      </form>
    </>
  );
};

const EditProfileSuccessContent = ({ onClose }) => {
  return (
    <>
      <ModalBody className="items-center">
        <div className="rounded-full p-4 bg-green-100 w-min">
          <div className="rounded-full bg-primary w-min p-1">
            <CheckIcon className="text-md text-white" />
          </div>
        </div>
        <p className="text-paragraph6">Sukses!</p>
        <p className="text-paragraph8 text-center">
          Perubahan berhasil disimpan. Klik selesai untuk
          kembali
        </p>
      </ModalBody>
      <ModalFooter className="justify-center">
        <Button
          color="default"
          variant="bordered"
          onPress={onClose}
        >
          Selesai
        </Button>
      </ModalFooter>
    </>
  );
};

export default ModalPengaturanUser;
