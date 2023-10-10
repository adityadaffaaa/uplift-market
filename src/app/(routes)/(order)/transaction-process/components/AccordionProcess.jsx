"use client";

import React from "react";
import {
  Accordion,
  AccordionItem,
} from "@nextui-org/react";

import {
  NextTextArea,
  TextInput,
  NextButton,
  PopUpDialog,
} from "@/app/components";
import { useDisclosure } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import DialogBox from "./DialogBox";
import Image from "next/image";
import Link from "next/link";
import { _api, Icon } from "@iconify/react";
import fetch from "cross-fetch";
_api.setFetch(fetch);

const AccordionProcess = ({ data }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {},
  });

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleChange = () => {};

  return (
    <>
      {" "}
      <Accordion
        variant="shadow"
        style={{
          borderRadius: "0px",
        }}
        className="bg-white"
      >
        <AccordionItem
          key="1"
          startContent={
            <div className="rounded-full p-2 bg-secondary text-white">
              <Icon icon="material-symbols:local-shipping-rounded" />
            </div>
          }
          className="text-paragraph6"
          aria-label="Accordion 1"
          title="Pengiriman Barang"
          indicator={
            <Icon icon="material-symbols:arrow-forward-ios-rounded" />
          }
        >
          <div className="flex flex-col  p-6 gap-8">
            {" "}
            <p className="text-paragraph6Res lg:text-paragraph8">
              {" "}
              Mohon segera untuk melakukan pengiriman produk
              ke alamat berikut sebelum tanggal 27 September
              2 023
            </p>
            <p className="text-paragraph6Res lg:text-paragraph8">
              {" "}
              Andi <br /> Perumahan Semlowoaru Baru No 16 A
              Jl. Rungkut Asri Utara II, Kali Rungkut, Kec.
              Rungkut, Surabaya, Jawa Timur 60293
            </p>
            {/* <ActionUpdateResi /> */}
            {/* <InputResi onChange={handleChange} /> */}
            <DialogBox
              title={" Apakah sudah melakukan pengiriman?"}
              confirmBtnText={"Update"}
            />
            {/* <Resi /> */}
          </div>
        </AccordionItem>
        <AccordionItem
          key="2"
          startContent={
            <div className="rounded-full p-2 bg-[#E8F4F1] text-primary">
              <Icon icon="material-symbols:archive" />
            </div>
          }
          className="text-paragraph6 "
          aria-label="Accordion 1"
          title="Barang Diterima"
          indicator={
            <Icon icon="material-symbols:arrow-forward-ios-rounded" />
          }
        >
          <div className="px-8 py-4 flex flex-wrap gap-3">
            {[1, 2, 3, 4].map((val) => (
              <Image
                key={val}
                src={"/assets/images/img-product.png"}
                height={80}
                width={80}
                alt="img"
              />
            ))}
          </div>
        </AccordionItem>
        <AccordionItem
          key="3"
          startContent={
            <div className="rounded-full p-2 bg-[#E9F1FC] text-[#2270E5]">
              <Icon icon="material-symbols:cached" />
            </div>
          }
          className="text-paragraph6 "
          aria-label="Accordion 1"
          title="Pengerjaan Project"
          indicator={
            <Icon icon="material-symbols:arrow-forward-ios-rounded" />
          }
        >
          <div className="px-6 py-3">
            <p className="text-paragraph6Res lg:text-paragraph8">
              Mohon bersabar. Projek km sedang dikerjakan
            </p>
          </div>
        </AccordionItem>
        <AccordionItem
          key="4"
          startContent={
            <div className="rounded-full p-2 bg-[#F1E9FC] text-[#7822E5]">
              <Icon icon="material-symbols:description" />
            </div>
          }
          className="text-paragraph6"
          aria-label="Accordion 1"
          title="Pengiriman Project #1"
          indicator={
            <Icon icon="material-symbols:arrow-forward-ios-rounded" />
          }
        >
          <div className="flex flex-col p-6 lg:pl-24 gap-6">
            <div className="flex flex-col gap-5">
              <div className="flex gap-3 items-start">
                <Image
                  className="flex-[1_1_10%] lg:flex-auto"
                  src={
                    "/assets/icons/icon-vendor-studio.png"
                  }
                  height={32}
                  width={32}
                  alt="img"
                />
                <article className="flex flex-col gap-2 flex-[1_1_90%] lg:flex-auto">
                  <div className="flex items-center justify-between ">
                    <h4 className="lg:text-paragraph6">
                      Metrofa Photography
                    </h4>
                    <p className="text-paragraph10Res lg:text-paragraph9 text-neutral-400">
                      12 Sep 15.30
                    </p>
                  </div>
                  <p className="text-paragraph10 lg:text-paragraph7">
                    Ini ya kak saya lampirkan untuk delivery
                    pertama. Silahkan dicek-cek. Jika ada
                    yang ingin ditanyakan sok aja blehhh
                  </p>
                </article>
              </div>
              <hr />
              <div className="flex flex-col gap-6">
                <div className="flex gap-3 items-start">
                  <Image
                    className="flex-[1_1_10%] lg:flex-auto"
                    src={
                      "/assets/icons/icon-vendor-studio.png"
                    }
                    height={32}
                    width={32}
                    alt="img"
                  />
                  <article className="flex flex-col gap-2 flex-[1_1_90%] lg:flex-auto">
                    <div className="flex items-center justify-between ">
                      <h4 className="lg:text-paragraph6">
                        Metrofa Photography
                      </h4>
                      <p className="text-paragraph10Res lg:text-paragraph9 text-neutral-400">
                        12 Sep 15.30
                      </p>
                    </div>
                    <p className="text-paragraph10 lg:text-paragraph7">
                      Ini ya kak saya lampirkan untuk
                      delivery pertama. Silahkan dicek-cek.
                      Jika ada yang ingin ditanyakan sok aja
                      blehhh
                    </p>
                    <div className="flex flex-col lg:grid lg:grid-cols-2 gap-2">
                      <AssetItem />
                      <AssetItem />
                      <AssetItem />
                    </div>
                  </article>
                </div>
                <DialogBox
                  title={"Apa kamu ingin merevisi ini?"}
                  confirmBtnText={"Ya"}
                  deny={() => onOpen(true)}
                  denyBtn
                />
                <PopUpDialog
                  isOpen={isOpen}
                  onClose={onClose}
                />
                {/* <ChatInput /> */}
              </div>
              <hr />
            </div>
          </div>
        </AccordionItem>
        <AccordionItem
          key="5"
          startContent={
            <div className="rounded-full p-2 bg-[#fbe2f5] text-[#E522AF]">
              <Icon icon="material-symbols:award-star-rounded" />
            </div>
          }
          className="text-paragraph6"
          aria-label="Accordion 1"
          title="Ulasan"
          indicator={
            <Icon icon="material-symbols:arrow-forward-ios-rounded" />
          }
        >
          <div className="px-6 py-3">
            <p className="text-paragraph6Res  lg:text-paragraph8">
              Yeay! Selamat projek kamu telah selesai
              silahkan mengisi ulasannya
              <Link
                className="text-primary"
                href={"transaction-process/review"}
              >
                {" disini"}
              </Link>
            </p>
          </div>
        </AccordionItem>
      </Accordion>
    </>
  );
};

const InputResi = ({ onChange }) => {
  return (
    <form className="p-3 border-2 rounded-lg flex flex-col items-end gap-8">
      <div className="flex flex-col w-full gap-4">
        <article className="flex flex-col gap-1">
          <h4 className="text-paragraph4Res">
            Masukkan No Resi Pengirimanmu
          </h4>
          <p className="text-paragraph6Res">
            Periksa dengan teliti dan detail jangan sampai
            salah input resi
          </p>
        </article>
        <div className="flex flex-col gap-2">
          <TextInput
            id="kurir"
            name="kurir"
            placeholder="Kurir"
            onChange={onChange}
          />
          <TextInput
            id="layanan"
            name="layanan"
            placeholder="Layanan"
            onChange={onChange}
          />
          <TextInput
            id="noResi"
            name="noResi"
            placeholder="No Resi"
            onChange={onChange}
          />
        </div>
      </div>
      <div className="flex flex-col w-full gap-4">
        <h4 className="text-paragraph4Res">
          Lampirkan foto resi dan kondisi barang sebelum
          dikirim
        </h4>
        <label
          htmlFor="resiPhoto"
          className="flex flex-wrap cursor-pointer"
        >
          <input
            id="resiPhoto"
            name="resiPhoto"
            type="file"
            className="sr-only"
          />
          <span className="p-2 bg-neutral-200 rounded-lg">
            <Icon
              icon="material-symbols:add"
              className="text-neutral-400"
              height={36}
            />
          </span>
        </label>
      </div>
      <NextButton color={"primary"}>Update</NextButton>
    </form>
  );
};

const Resi = () => {
  return (
    <div className="px-4 py-3 flex justify-between items-center bg-neutral-100 border-2 rounded-lg">
      <div className="flex gap-2">
        <p className="text-paragraph7Res">
          JNE - 1928372087263893
        </p>
        <Icon
          className="text-primary"
          icon="material-symbols:content-copy-outline"
        />
      </div>
      <span className="p-1 rounded-full border-2 ">
        <Icon
          height={12}
          className="rotate-90"
          icon="material-symbols:arrow-forward-ios-rounded"
        />
      </span>
    </div>
  );
};

const AssetItem = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="p-2 flex justify-between items-center bg-neutral-100 border-2 rounded-xl"
    >
      <div className="flex gap-2">
        <Image
          src={"/assets/icons/icon-asset.png"}
          height={36}
          width={36}
          alt="img"
        />
        <div className="flex flex-col items-start text-paragraph9Res">
          <p className="text-inherit">Logo Fix.png</p>
          <p className="text-inherit text-neutral-400">
            2 MB
          </p>
        </div>
      </div>
      <span className="p-1 rounded-full border-2 ">
        <Icon
          className="text-neutral-500"
          icon="material-symbols:download-for-offline-outline-rounded"
        />
      </span>
    </button>
  );
};

const ChatInput = () => {
  return (
    <div className="flex w-full flex-col gap-3 items-end">
      <NextTextArea
        variant={"faded"}
        radius={"sm"}
        placeholder={"Ketik disini untuk membalas"}
        minRows={5}
        maxRows={12}
        fullWidth
        rightContent={
          <Icon
            onClick={() => alert("halo")}
            height={20}
            className="text-neutral-400"
            icon="material-symbols:attach-file-rounded"
          />
        }
      />
      <NextButton color={"primary"}>Kirim</NextButton>
    </div>
  );
};

export default AccordionProcess;
