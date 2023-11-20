"use client";

import React, { useState } from "react";
import Link from "next/link";
import { _api, Icon } from "@iconify/react";
import fetch from "cross-fetch";
import { FileInput } from "@/app/components";
import {
  Navbar,
  Button,
  Input,
  Select,
  SelectItem,
  Textarea,
  RadioGroup,
  Radio,
} from "@nextui-org/react";

_api.setFetch(fetch);

const EditVendorProduct = () => {
  const kategori = [
    {
      label: "Fotografi",
      value: "fotografi",
    },
    {
      label: "Videografi",
      value: "videografi",
    },
    {
      label: "Desain",
      value: "desain",
    },
    {
      label: "Lainnya",
      value: "lainnya",
    },
  ];
  const waktu = [
    {
      label: "Hari",
      value: "hari",
    },
    {
      label: "Minggu",
      value: "minggu",
    },
    {
      label: "Bulan",
      value: "bulan",
    },
  ];
  const jumlahRevisi = [
    {
      label: "1",
      value: "1",
    },
    {
      label: "2",
      value: "2",
    },
    {
      label: "3",
      value: "3",
    },
    {
      label: "4",
      value: "4",
    },
  ];
  const [formData, setFormData] = useState({
    vendorMedia: "",
  });
  const handleChange = (event) => {
    const key = event.target.id;
    const value = event.target.value;
    setFormData((values) => ({
      ...values,
      [key]: value,
    }));
  };
  return (
    <div className="flex flex-col w-full bg-[#F1F1F1]">
      <Navbar
        maxWidth="full"
        isBlurred="false"
        className="w-full lg:hidden"
      >
        <div className="w-full flex items-center justify-between">
          <Button
            isIconOnly
            color="primary"
            variant="light"
            size="sm"
            aria-label="Take a photo"
          >
            <Icon
              icon={"material-symbols:arrow-back"}
              className="text-primary text-lg"
            />
          </Button>
          <p className="text-paragraph6">Edit Produk</p>
          <p className="w-8"> </p>
        </div>
      </Navbar>
      <div className="hidden lg:flex flex-col mt-16 ml-16 items-start">
        <Button
          variant="light"
          startContent={
            <Icon
              icon={"material-symbols:arrow-back"}
              className="text-primary text-lg"
            />
          }
          className="text-primary"
        >
          Kembali
        </Button>
        <p className="text-heading1Res">Edit Produk</p>
      </div>
      <div className="flex lg:ml-16 lg:mr-16 gap-x-5 h-min">
        <div className="bg-white p-4 rounded-md flex-col w-80 h-min hidden lg:flex">
          <Button
            variant="light"
            startContent={
              <p className="w-full text-start">
                Informasi Dasar
              </p>
            }
          ></Button>
          <Button
            variant="light"
            startContent={
              <p className="w-full text-start">Media</p>
            }
          ></Button>
          <Button
            variant="light"
            startContent={
              <p className="w-full text-start">
                Pengerjaan
              </p>
            }
          ></Button>
        </div>
        <div className="flex flex-col lg:items-end">
          <div className="flex bg-white m-5 mb-0 rounded-md p-4 lg:m-0 lg:mb-5 lg:w-full items-center justify-between">
            <p className="text-paragraph6">Status Produk</p>
            <input
              type="checkbox"
              className="toggle toggle-success toggle-sm"
            />
          </div>
          <div className="bg-white m-5 rounded-md p-4 lg:m-0 lg:w-full">
            <p className="text-paragraph6">
              Informasi Dasar
            </p>
            <p className="text-paragraph mt-2 mb-4">
              Pastikan nama produk, kategori, deskripsi
              hingga harga produk menggunakan kalimat yang
              bagus, sehingga meningkatkan performa Anda.
            </p>
            <p className="text-paragraph6">Nama Produk</p>
            <div className="mt-2 mb-4">
              <Input
                type="text"
                label="Nama"
                variant="bordered"
                size="sm"
              />
            </div>
            <p className="text-paragraph6">
              Kategori Produk
            </p>
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
              <div className="mt-2 mb-4 w-full">
                <Select
                  label="Pilih Kategori"
                  variant="bordered"
                  size="sm"
                >
                  {kategori.map((kategori) => (
                    <SelectItem
                      key={kategori.value}
                      value={kategori.value}
                    >
                      {kategori.label}
                    </SelectItem>
                  ))}
                </Select>
              </div>
            </div>
            <p className="text-paragraph6">
              Deskripsi Produk
            </p>
            <div className="mt-2 mb-4">
              <Textarea
                placeholder="Enter your description"
                variant="bordered"
                minRows={6}
              />
            </div>
            <p className="text-paragraph6">Harga</p>
            <div className="mt-2 mb-4 flex">
              <Input
                type="text"
                placeholder="Harga"
                variant="bordered"
                size="lg"
                classNames={{
                  inputWrapper: "p-0 overflow-hidden",
                }}
                startContent={
                  <div className="bg-greyBackground border-r-1 h-full w-[42px] flex justify-center items-center">
                    <p className="text-center text-paragraph9">
                      Rp
                    </p>
                  </div>
                }
              />
            </div>
          </div>
          <div className="bg-white m-5 mt-0 rounded-md p-4 lg:m-0 lg:mt-5">
            <p className="text-paragraph6">Media</p>
            <p className="text-paragraph mt-2 mb-4">
              Format gambar .jpg .jpeg .png dan ukuran
              minimum 300 x 300px (Untuk gambar optimal
              gunakan ukuran minimum 700 x 700 px).Pilih
              foto produk atau tarik dan letakkan hingga 5
              foto sekaligus di sini. Upload min. 3 foto
              yang menarik dan berbeda satu sama lain untuk
              menarik perhatian pembeli.
            </p>
            <FileInput
              title={"Upload Media"}
              id={"vendorMedia"}
              name={"vendorMedia"}
              htmlFor={"vendorMedia"}
              onChange={handleChange}
              value={formData.vendorMedia}
              desc={formData.vendorMedia}
            />
          </div>
          <div className="bg-white mt-0 mb-11 m-5 rounded-md p-4 lg:m-0 lg:mt-5 items-end lg:w-full">
            <p className="text-paragraph6 mt-2 mb-4">
              Informasi Pengerjaan
            </p>
            <p className="text-paragraph">
              Masukkan jumlah revisi untuk pengerjaan produk
              ini
            </p>
            <p className="text-paragraph6">
              Waktu Pengerjaan
            </p>
            <div className="mt-2 mb-4 flex gap-x-2">
              <Input
                type="text"
                label="Harga"
                variant="bordered"
                size="sm"
              />
              <Select
                label="Rentang"
                variant="bordered"
                size="sm"
                className="max-w-[111px]"
              >
                {waktu.map((waktu) => (
                  <SelectItem
                    key={waktu.value}
                    value={waktu.value}
                  >
                    {waktu.label}
                  </SelectItem>
                ))}
              </Select>
            </div>
            <p className="text-paragraph6">Jumlah Revisi</p>
            <div className="mt-2 mb-4 w-full">
              <Select
                label="Pilih Jumlah Batas Revisi"
                variant="bordered"
                size="sm"
              >
                {jumlahRevisi.map((jumlahRevisi) => (
                  <SelectItem
                    key={jumlahRevisi.value}
                    value={jumlahRevisi.value}
                  >
                    {jumlahRevisi.label}
                  </SelectItem>
                ))}
              </Select>
            </div>

            <p className="text-paragraph6">
              Apakah perlu mengirimkan ke lokasi?
            </p>
            <p className="text-paragraph mt-2">
              Jika Ya, maka pembeli akan mengirim ke lokasi
              sesuai ada yang di Pengaturan
            </p>
            <div className="mt-2 mb-4">
              <RadioGroup
                orientation="horizontal"
                size="sm"
              >
                <Radio value="ya">Ya</Radio>
                <Radio value="tidak">Tidak</Radio>
              </RadioGroup>
            </div>
          </div>
          <div className="flex lg:mt-5 lg:mb-11">
            <Button
              color="primary"
              className="w-full lg:w-24"
            >
              Simpan
            </Button>
            <Button
              isIconOnly
              variant="bordered"
              aria-label="Take a photo"
              className="ml-2"
              onClick={() =>
                document
                  .getElementById("my_modal_1")
                  .showModal()
              }
            >
              <Icon
                icon={"material-symbols:delete-outline"}
                className="text-lg"
              />
            </Button>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <div className="flex flex-col justify-center items-center">
                  <img
                    src={"/assets/images/deletePopUp.png"}
                    alt="delete"
                    className="h-14 aspect-square rounded-full object-cover items-center"
                  />
                  <h3 className="font-bold text-lg text-center mt-7">
                    Apakah kamu yakin ingin menghapus?
                  </h3>
                  <p className="py-4 text-center mb-7">
                    Dengan klik hapus kamu tidak bisa
                    <br />
                    mengembalikannya lagi.
                  </p>
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <div className="flex items-center justify-center gap-x-2">
                      <button className="btn bg-white text-textGrey text-paragraph4Res">
                        Batal
                      </button>
                      <button className="btn bg-red-600 text-white text-paragraph4Res">
                        Hapus
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
          <div className="btm-nav lg:hidden p-5 bg-white">
            <div className="flex flex-row">
              <Button
                color="primary"
                className="w-full lg:w-24"
              >
                Simpan
              </Button>
              <Button
                isIconOnly
                variant="bordered"
                aria-label="Take a photo"
                className="ml-2 w-min"
                onClick={() =>
                  document
                    .getElementById("my_modal_1")
                    .showModal()
                }
              >
                <Icon
                  icon={"material-symbols:delete-outline"}
                  className="text-lg"
                />
              </Button>
              <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                  <div className="flex flex-col justify-center items-center">
                    <img
                      src={"/assets/images/deletePopUp.png"}
                      alt="delete"
                      className="h-14 aspect-square rounded-full object-cover items-center"
                    />
                    <h3 className="font-bold text-lg text-center mt-7">
                      Apakah kamu yakin ingin menghapus?
                    </h3>
                    <p className="py-4 text-center mb-7">
                      Dengan klik hapus kamu tidak bisa
                      <br />
                      mengembalikannya lagi.
                    </p>
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <div className="flex items-center justify-center gap-x-2">
                        <button className="btn bg-white text-textGrey text-paragraph4Res">
                          Batal
                        </button>
                        <button className="btn bg-red-600 text-white text-paragraph4Res">
                          Hapus
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditVendorProduct;
