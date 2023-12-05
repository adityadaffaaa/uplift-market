"use client";
import React from "react";
import { Input } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import icons from "@/app/utils/icons";
import { RadioGroup, Radio } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { createSlug } from "@/app/utils/extensions";

const { AddPhotoAlternateIcon, AddIcon } =
  icons.vendorDashboard.addProductVendor;

const InformationDetailSection = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      name: "",
      category: "",
      description: "",
      price: "",
      images: [],
      slug: "",
    },
  });

  const onSubmit = async () => {};

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex-[1_1_70%] flex flex-col items-end gap-5"
    >
      <InformasiProduct formData={register} />
      <Media formData={register} />
      <InformasiPengerjaan formData={register} />
      <Button
        color="primary"
        className="w-full lg:w-auto"
        radius="sm"
      >
        Tambah Produk
      </Button>
    </form>
  );
};

const InformasiProduct = ({ formData }) => {
  return (
    <div
      id="informasiProduct"
      className="p-6 bg-white rounded-lg flex flex-col gap-6 w-full"
    >
      <div className="flex flex-col gap-2">
        <h4 className="text-neutral-800 text-heading4">
          Informasi Produk
        </h4>
        <p className="text-paragraph10">
          Format gambar .jpg .jpeg .png dan ukuran minimum
          300 x 300px (Untuk gambar optimal gunakan ukuran
          minimum 700 x 700 px).Pilih foto produk atau tarik
          dan letakkan hingga 5 foto sekaligus di sini.
          Upload min. 3 foto yang menarik dan berbeda satu
          sama lain untuk menarik perhatian pembeli.
        </p>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h6 className="text-paragraph9">Nama Produk</h6>
          <Input
            placeholder="Masukkan nama produk"
            variant="bordered"
            radius="sm"
            color="primary"
            {...formData("name", {
              required: {
                value: true,
                message: "Nama produk wajib diisi!",
              },
            })}
          />
        </div>
        <div className="flex flex-col gap-2">
          <h6 className="text-paragraph9">
            Kategori Produk
          </h6>
          <Select
            variant="bordered"
            color="primary"
            radius="sm"
            placeholder="Masukkan Waktu Proses"
          >
            <SelectItem value="fotografi">
              Fotografi
            </SelectItem>
            <SelectItem value="videografi">
              Videografi
            </SelectItem>
          </Select>
        </div>
        <div className="flex flex-col gap-2">
          <h6 className="text-paragraph9">
            Deskripsi Produk
          </h6>
          <Textarea
            placeholder="Enter your description"
            variant="bordered"
            radius="sm"
            color="primary"
            rows={10}
            {...formData("description", {
              required: {
                value: true,
                message: "Deskripsi wajib diisi!",
              },
            })}
          />
        </div>
        <div className="flex flex-col gap-2">
          <h6 className="text-paragraph9">Harga Produk</h6>
          <Input
            placeholder="Masukkan Harga Produk"
            variant="bordered"
            type="number"
            radius="sm"
            color="primary"
            {...formData("price", {
              required: {
                value: true,
                message: "Harga produk wajib diisi!",
              },
              valueAsNumber: true,
            })}
            classNames={{
              inputWrapper: "px-0 overflow-hidden",
            }}
            startContent={
              <div className="bg-neutral-100 border-r-2 border-r-neutral-200 p-4 text-paragraph9 text-neutral-800">
                Rp
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};

const Media = ({ formData }) => {
  return (
    <div
      id="media"
      className="p-6 bg-white rounded-lg flex flex-col gap-6 w-full"
    >
      <div className="flex flex-col gap-2">
        <h4 className="text-neutral-800 text-heading4">
          Media
        </h4>
        <p className="text-paragraph10">
          Format gambar .jpg .jpeg .png dan ukuran minimum
          300 x 300px (Untuk gambar optimal gunakan ukuran
          minimum 700 x 700 px).Pilih foto produk atau tarik
          dan letakkan hingga 5 foto sekaligus di sini.
          Upload min. 3 foto yang menarik dan berbeda satu
          sama lain untuk menarik perhatian pembeli.
        </p>
      </div>
      <label className="flex justify-between gap-2">
        <input type="file[]" className="sr-only" />
        {[1, 2, 3, 4, 5].map(() => (
          <UploadFoto isInput />
        ))}
        <UploadFotoMobile />
      </label>
    </div>
  );
};

const InformasiPengerjaan = ({ formData }) => {
  return (
    <div
      id="informasiPengerjaan"
      className="p-6 bg-white rounded-lg flex flex-col gap-6 w-full"
    >
      <div className="flex flex-col gap-2">
        <h4 className="text-neutral-800 text-heading4">
          Informasi Pengerjaan
        </h4>
        <p className="text-paragraph10">
          Masukkan jumlah revisi untuk pengerjaan produk ini
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="text-neutral-800 text-heading4">
          Waktu Pengerjaan
        </h4>
        <div className="flex gap-2">
          <Select
            className="max-w-xs"
            variant="bordered"
            color="primary"
            radius="sm"
            placeholder="Masukkan Waktu Proses"
          >
            <SelectItem color="primary" value="fotografi">
              Fotografi
            </SelectItem>
            <SelectItem color="primary" value="videografi">
              Videografi
            </SelectItem>
          </Select>
          <Select
            className="max-w-xs"
            variant="bordered"
            color="primary"
            radius="sm"
            placeholder="Hari"
          >
            <SelectItem color="primary" value="fotografi">
              Fotografi
            </SelectItem>
            <SelectItem color="primary" value="videografi">
              Videografi
            </SelectItem>
          </Select>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="text-neutral-800 text-heading4">
          Jumlah Revisi
        </h4>
        <Select
          variant="bordered"
          color="primary"
          radius="sm"
          placeholder="Pilih Jumlah Batas Revisi"
        >
          <SelectItem color="primary" value="fotografi">
            Fotografi
          </SelectItem>
          <SelectItem color="primary" value="videografi">
            Videografi
          </SelectItem>
        </Select>
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="text-neutral-800 text-heading4">
          Apakah perlu mengirimkan barang ke lokasi?
        </h4>
        <p className="text-paragraph10">
          Jika Ya, maka pembeli akan mengirim ke lokasi
          sesuai ada yang di{" "}
          <span className="font-bold">pengaturan</span>
        </p>
      </div>
      <RadioGroup>
        <div className="flex gap-4">
          <Radio value="buenos-aires">Ya</Radio>
          <Radio value="sydney">Tidak</Radio>
        </div>
      </RadioGroup>
    </div>
  );
};

const UploadFotoMobile = () => {
  return (
    <div className="p-3 bg-neutral-100 rounded-lg lg:hidden">
      <AddIcon />
    </div>
  );
};

const UploadFoto = ({ isInput }) => {
  return (
    <div
      className={`hidden cursor-pointer rounded-xl border-2 border-dotted gap-3 lg:flex flex-col text-neutral-400 items-center p-6 ${
        !isInput && "bg-neutral-100"
      } `}
    >
      <AddPhotoAlternateIcon />
      <p className="text-paragraph10 text-center">
        Foto Utama
      </p>
    </div>
  );
};

export default InformationDetailSection;
