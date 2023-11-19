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

const EditFormSection = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="flex flex-col bg-white lg:w-[1170px] px-6 rounded-xl lg:p-6 gap-y-6 items-start">
      <p className="hidden lg:block text-heading2">Pengaturan Akun</p>
      <div className="flex flex-col lg:flex-row lg:gap-x-28">
        <div className="mt-4 lg:w-[210px]">
          <p className="text-paragraph6">Foto Profil</p>
          <p className="text-paragraph10 text-textGrey">
            Foto Profil menggunakan <br className="hidden lg:block" />
            ukuran 140x140 px
          </p>
        </div>
        <div className="flex flex-row items-center mt-4 lg:w-[500px]">
          <img
            src={"/assets/images/pp-vendor.png"}
            alt="pp-vendor"
            className="w-16 h-16 lg:w-24 lg:h-24 rounded-full"
          />
          <Button
            color="default"
            variant="bordered"
            radius="sm"
            size="lg"
            startContent={
              <Icon
                icon={"material-symbols:add-photo-alternate-outline"}
                className="text-xl"
              />
            }
            className="bg-white ml-6"
          >
            <p className="text-paragraph1Res">Ganti</p>
          </Button>
          <Button
            color="default"
            variant="light"
            radius="sm"
            size="lg"
            className="bg-white ml-2"
          >
            <p className="text-paragraph1Res text-[#DB234B]">Hapus</p>
          </Button>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:gap-x-28">
        <p className="text-paragraph9 lg:w-[210px]">Nama Depan dan Belakang</p>
        <div className="flex flex-row gap-x-2 lg:gap-x-6">
          <Input
            type="text"
            label="Nama Depan"
            variant="bordered"
            size="sm"
            className="lg:w-[385px]"
          />
          <Input
            type="text"
            label="Nama Belakang"
            variant="bordered"
            size="sm"
            className="lg:w-[385px]"
          />
        </div>
      </div>
      <div className="flex flex-col w-full lg:flex-row lg:gap-x-28">
        <p className="text-paragraph9 lg:w-[210px] lg:gap-x-2">Email Bisnis</p>
        <Input
          type="email"
          label="Email Bisnis"
          variant="bordered"
          size="sm"
          className="w-full lg:w-[794px]"
        />
      </div>
      <div className="flex flex-col w-full lg:flex-row lg:gap-x-28">
        <p className="text-paragraph9 lg:w-[210px]">No. Handphone</p>
        <Input
          type="number"
          label="No. Handphone"
          variant="bordered"
          size="sm"
          className="w-full lg:w-[794px]"
        />
      </div>
      <div className="flex flex-col w-full lg:flex-row lg:gap-x-28">
        <p className="text-paragraph9 lg:w-[210px]">Password</p>
        <div className="flex flex-row gap-x-2 lg:w-[794px] mb-60 lg:mb-0">
          <div className="h-8 items-center justify-center ">
            <p className="text-paragraph10 pt-2">***************</p>
          </div>
          <Button
            color="default"
            variant="light"
            radius="sm"
            size="sm"
            endContent={
              <Icon
                icon={"material-symbols:edit-outline"}
                className="text-xl text-primary"
              />
            }
          >
            <p className="text-paragraph9 text-primary">Ubah</p>
          </Button>
        </div>
      </div>
      <div className="hidden lg:flex w-full items-end justify-end gap-x-2">
        <Button color="default" variant="bordered" radius="sm" size="lg">
          <p className="text-paragraph1Res">Batal</p>
        </Button>
        <Button
          color="primary"
          variant="solid"
          radius="sm"
          size="lg"
          onPress={onOpen}
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
      <div className="btm-nav lg:hidden bg-white p-5">
        <button className="btn bg-primary text-white">
          <div className="flex justify-center items-center">
            <Icon icon={"material-symbols:check"} className="text-xl" />
            <p>Update</p>
          </div>
        </button>
      </div>
      <div className="btm-nav lg:hidden bg-white p-5">
        <button className="btn bg-primary text-white">
          <div className="flex justify-center items-center">
            <Icon icon={"material-symbols:check"} className="text-xl" />
            <p>Update</p>
          </div>
        </button>
      </div>
    </div>
  );
};
export default EditFormSection;
