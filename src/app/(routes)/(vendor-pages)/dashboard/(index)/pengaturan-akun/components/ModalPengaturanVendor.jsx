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
const { CheckIcon, EyeIcon, EyeCloseIcon } =
  icons.pengaturanUserIcon;

const ModalPengaturanVendor = ({
  isOpen,
  onOpenChange,
  isEditPassword,
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
            <EditPasswordContent onClose={onClose} />
          ) : (
            <EditProfileSuccessContent onClose={onClose} />
          )
        }
      </ModalContent>
    </Modal>
  );
};

const EditPasswordContent = ({ onClose }) => {
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

  return (
    <>
      <ModalHeader>
        <h5 className="text-heading5 font-bold">
          Ubah Password
        </h5>
      </ModalHeader>
      <form action="">
        <ModalBody className="flex flex-col gap-5">
          <Input
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
            isRequired
          />
          <Input
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
            isRequired
          />
          <Input
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
            isRequired
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
              onPress={onClose}
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

export default ModalPengaturanVendor;
