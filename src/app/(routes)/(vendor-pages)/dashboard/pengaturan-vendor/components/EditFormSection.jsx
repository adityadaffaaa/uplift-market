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
  return (
    <div className="flex flex-col bg-white w-full rounded-xl lg:p-6">
      <div className="flex relative h-24 lg:h-72">
        <img
          src={"/assets/images/banner-vendor-web.png"}
          alt="banner"
          className="w-full absolute rounded-[10px]"
        />
        <Button
          color="default"
          variant="solid"
          radius="sm"
          size="lg"
          startContent={
            <Icon
              icon={"material-symbols:add-photo-alternate-outline"}
              className="text-xl"
            />
          }
          className="bg-white absolute right-32 top-6 lg:right-6 lg:top-3"
        >
          <p className="hidden lg:block text-paragraph1Res">Ganti</p>
        </Button>
      </div>
      <div className="hidden lg:block lg:mt-12">
        <p>Ukuran cover header 1440x407 px</p>
      </div>
      <div className="flex flex-col">
        <div className="mt-4">
          <p className="text-paragraph6">Foto Profil</p>
          <p className="text-paragraph10 text-textGrey">
            Foto Profil menggunakan ukuran 140x140 px
          </p>
        </div>
        <div className="flex flex-row items-center mt-4">
          <img
            src={"/assets/images/pp-vendor.png"}
            alt="pp-vendor"
            className="w-16 h-16 lg:w-32 lg:h-32 rounded-full"
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
      <div className="flex flex-col mt-4 lg:flex-row">
        <p className="text-paragraph9 lg:w-52">Nama Toko</p>
        <div className="mt-2 mb-4 lg:w-full lg:ml-48 lg:mt-0">
          <Input type="text" label="Nama" variant="bordered" size="sm" />
        </div>
      </div>

      <div className="flex flex-col mt-6 lg:flex-row">
        <div className="flex flex-col lg:w-52">
          <p className="text-paragraph9">Deskripsi Produk</p>
          <p className="text-paragraph10 text-textGrey">
            Masukkan dekrispi singkat mengenai tokomu. Maks. 100 kata
          </p>
        </div>
        <div className="mt-2 mb-4 lg:w-full lg:ml-48 lg:mt-0">
          <Textarea
            placeholder="Enter your description"
            variant="bordered"
            minRows={6}
          />
        </div>
      </div>
      <div className="flex flex-col mt-6 lg:flex-row">
        <p className="text-paragraph9 lg:w-52">Email Bisnis</p>
        <div className="mt-2 mb-4 lg:w-full lg:ml-48 lg:mt-0">
          <Input
            type="email"
            label="Email Bisnis"
            variant="bordered"
            size="sm"
          />
        </div>
      </div>
      <div className="flex flex-col mt-6 lg:flex-row">
        <p className="text-paragraph9 lg:w-52">No. Handphone</p>
        <div className="mt-2 mb-4 lg:w-full lg:ml-48 lg:mt-0">
          <Input
            type="number"
            label="No. Handphone"
            variant="bordered"
            size="sm"
          />
        </div>
      </div>
      <div className="flex flex-col mt-6 lg:flex-row">
        <div className="flex flex-col lg:w-52">
          <p className="text-paragraph9">Alamat Toko</p>
          <p className="hidden lg:block text-paragraph10 text-textGrey">
            Masukkan alamatmu dengan lengkap dan jelas untuk mempermudahkan
            customer mengirim barang
          </p>
        </div>

        <div className="mt-2 mb-4 lg:w-full lg:ml-48 lg:mt-0">
          <Input type="text" label="Alamat Toko" variant="bordered" size="sm" />
        </div>
      </div>
      <div className="flex flex-col mt-6 lg:flex-row">
        <p className="text-paragraph9 lg:w-52">Alamat Toko</p>
        <div className="mt-2 mb-4 lg:w-full lg:ml-48 lg:mt-0">
          <Input type="text" label="Alamat Toko" variant="bordered" size="sm" />
        </div>
      </div>
      <div className="flex flex-col mt-6 lg:flex-row">
        <p className="text-paragraph9 lg:w-52">Instagram</p>
        <div className="mt-2 mb-4 lg:w-full lg:ml-48 lg:mt-0">
          <Input type="text" label="Instagram" variant="bordered" size="sm" />
        </div>
      </div>
      <div className="flex flex-col mt-6 pb-20 lg:pb-0 lg:flex-row">
        <p className="text-paragraph9 lg:w-52">Link Website</p>
        <div className="mt-2 mb-4 lg:w-full lg:ml-48 lg:mt-0">
          <Input
            type="text"
            label="Link Website"
            variant="bordered"
            size="sm"
          />
        </div>
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
