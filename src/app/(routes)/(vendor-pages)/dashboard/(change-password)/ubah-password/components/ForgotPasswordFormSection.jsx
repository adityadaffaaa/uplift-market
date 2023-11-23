"use client";

import React from "react";

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
import { _api, Icon } from "@iconify/react";

const ForgotPasswordFormSection = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const [isVisible2, setIsVisible2] = React.useState(false);
  const toggleVisibility2 = () => setIsVisible2(!isVisible2);
  const [isVisible3, setIsVisible3] = React.useState(false);

  const toggleVisibility3 = () => setIsVisible3(!isVisible3);

  return (
    <div className="flex flex-col bg-white w-full rounded-xl lg:p-6 gap-y-6 items-center">
      <div className="rounded-full bg-green-100 w-min p-3">
        <Icon
          icon={"material-symbols:lock"}
          className="text-2xl text-primary"
        />
      </div>
      <p className="text-heading2">Ganti Password</p>
      <div className="border-1 border-[#FBC947] bg-[#FEFAED] flex flex-row rounded-[10px] p-4 items-center gap-x-[10px] w-[370px]">
        <Icon
          icon={"material-symbols:info-outline"}
          className="text-5xl text-[#FBC947]"
        />
        <p className="text-paragraph">
          Buat password kuat dengan gabungan huruf besar-kecil, angka, dan
          simbol.
        </p>
      </div>
      <Input
        label="Password Lama"
        variant="bordered"
        size="sm"
        className="lg:w-[370px]"
        endContent={
          <button
            className="focus:outline-none"
            type="button"
            onClick={toggleVisibility}
          >
            {isVisible ? (
              <Icon
                icon={"material-symbols:visibility-off-outline"}
                className="text-md text-textGrey"
              />
            ) : (
              <Icon
                icon={"material-symbols:visibility-outline"}
                className="text-md text-textGrey"
              />
            )}
          </button>
        }
        type={isVisible ? "text" : "password"}
      />
      <Input
        label="Password Baru"
        variant="bordered"
        size="sm"
        className="lg:w-[370px]"
        endContent={
          <button
            className="focus:outline-none"
            type="button"
            onClick={toggleVisibility2}
          >
            {isVisible2 ? (
              <Icon
                icon={"material-symbols:visibility-off-outline"}
                className="text-md text-textGrey"
              />
            ) : (
              <Icon
                icon={"material-symbols:visibility-outline"}
                className="text-md text-textGrey"
              />
            )}
          </button>
        }
        type={isVisible2 ? "text" : "password"}
      />
      <Input
        label="Konfirmasi Password Baru"
        variant="bordered"
        size="sm"
        className="lg:w-[370px]"
        endContent={
          <button
            className="focus:outline-none"
            type="button"
            onClick={toggleVisibility3}
          >
            {isVisible3 ? (
              <Icon
                icon={"material-symbols:visibility-off-outline"}
                className="text-md text-textGrey"
              />
            ) : (
              <Icon
                icon={"material-symbols:visibility-outline"}
                className="text-md text-textGrey"
              />
            )}
          </button>
        }
        type={isVisible3 ? "text" : "password"}
      />

      <Button
        color="primary"
        variant="solid"
        radius="sm"
        size="lg"
        onPress={onOpen}
        className="lg:w-[370px] w-full"
        endContent={
          <Icon
            icon={"material-symbols:arrow-forward"}
            className="text-md text-white"
          />
        }
      >
        <p className="text-paragraph1Res text-white">Simpan</p>
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody className="items-center">
                <div className="rounded-full p-4 bg-green-100 w-min">
                  <div className="rounded-full bg-primary w-min p-1">
                    <Icon
                      icon={"material-symbols:check"}
                      className="text-md text-white"
                    />
                  </div>
                </div>

                <p className="text-paragraph6">Sukses!</p>
                <p className="text-paragraph8 text-center">
                  Perubahan berhasil disimpan. Klik selesai untuk kembali
                </p>
              </ModalBody>
              <ModalFooter className="justify-center">
                <Button color="default" variant="bordered" onPress={onClose}>
                  Selesai
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};
export default ForgotPasswordFormSection;
