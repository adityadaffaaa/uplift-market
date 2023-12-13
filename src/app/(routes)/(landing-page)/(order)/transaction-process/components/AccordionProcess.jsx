"use client";

import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionItem,
  useDisclosure,
  Input,
  Button,
} from "@nextui-org/react";

import {
  NextTextArea,
  NextButton,
  PopUpDialog,
} from "@/app/components";
import { useForm, Controller } from "react-hook-form";
import DialogBox from "./DialogBox";
import Link from "next/link";
import icons from "@/app/utils/icons";
import { useOrder } from "@/app/hooks/user/order";
import { Toast } from "@/app/components";
import { Cookies } from "react-cookie";
import { useSnackbar } from "notistack";

const {
  AddIcon,
  ArchiveIcon,
  ArrowForwardRoundedIcon,
  AttachFileIcon,
  AwardStarIcon,
  CachedIcon,
  ContentCopyOutlineIcon,
  DescriptionIcon,
  DownloadForOfflineIcon,
  LocalShippingIcon,
  DeleteIcon,
} = icons.transactionProcessIcon;

const AccordionProcess = ({ id }) => {
  const [vendorInfo, setVendorInfo] = useState(null);
  const [alerts, setAlerts] = useState([]);
  const [confirmUpdate, setConfirmUpdate] = useState(false);
  const [token, setToken] = useState("");
  const cookies = new Cookies();
  const { enqueueSnackbar } = useSnackbar();
  const [updated, setUpdated] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const fetchUserToken = async () => {
    try {
      const res = await fetch("/api/auth/session");
      const session = await res?.json();
      const token = session.user.token;
      return token;
    } catch (error) {
      console.log(
        "Fetch user session token failed!",
        error
      );
    }
  };

  const fetchVendorInfo = async (token) => {
    const { getProjectInfo } = useOrder();

    try {
      const res = await getProjectInfo({
        setAlerts,
        id,
        token,
      });
      if (res.status === 200) {
        setToken(token);
        setVendorInfo(res.data.data.vendor_info);
      }
    } catch (error) {
      console.log("Fetch vendor info failed!", error);
    }
  };

  useEffect(() => {
    fetchUserToken().then((token) =>
      fetchVendorInfo(token)
    );
  }, []);

  useEffect(() => {
    if (updated) {
      const resMessage = cookies.get("resMessage");
      enqueueSnackbar({
        message: resMessage,
        autoHideDuration: 2000,
        variant: "success",
      });
      cookies.remove("resMessage");
    }
  }, [updated]);

  return (
    <>
      <Toast duration={2000} alerts={alerts} start />
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
              <LocalShippingIcon />
            </div>
          }
          className="text-paragraph6"
          aria-label="Accordion 1"
          title="Pengiriman Barang"
          indicator={<ArrowForwardRoundedIcon />}
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
              {vendorInfo?.name} <br />{" "}
              {vendorInfo?.address}
            </p>
            {/* <ActionUpdateResi /> */}
            {!confirmUpdate ? (
              <DialogBox
                title={
                  " Apakah sudah melakukan pengiriman?"
                }
                confirmBtnText={"Ya"}
                confirm={() => setConfirmUpdate(true)}
              />
            ) : (
              <InputResi
                token={token}
                onCancel={() => setConfirmUpdate(false)}
                setAlerts={setAlerts}
                id={id}
                setUpdated={setUpdated}
              />
            )}
            {/* <Resi /> */}
          </div>
        </AccordionItem>
        <AccordionItem
          key="2"
          startContent={
            <div className="rounded-full p-2 bg-[#E8F4F1] text-primary">
              <ArchiveIcon />
            </div>
          }
          className="text-paragraph6 "
          aria-label="Accordion 1"
          title="Barang Diterima"
          indicator={<ArrowForwardRoundedIcon />}
        >
          <div className="px-8 py-4 flex flex-wrap gap-3">
            {[1, 2, 3, 4].map((val) => (
              <img
                key={val}
                src={"/assets/images/img-product.png"}
                alt="img"
                loading="lazy"
                className="h-[80px] w-[80px]"
              />
            ))}
          </div>
        </AccordionItem>
        <AccordionItem
          key="3"
          startContent={
            <div className="rounded-full p-2 bg-[#E9F1FC] text-[#2270E5]">
              <CachedIcon />
            </div>
          }
          className="text-paragraph6 "
          aria-label="Accordion 1"
          title="Pengerjaan Project"
          indicator={<ArrowForwardRoundedIcon />}
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
              <DescriptionIcon />
            </div>
          }
          className="text-paragraph6"
          aria-label="Accordion 1"
          title="Pengiriman Project #1"
          indicator={<ArrowForwardRoundedIcon />}
        >
          <div className="flex flex-col p-6 lg:pl-24 gap-6">
            <div className="flex flex-col gap-5">
              <div className="flex gap-3 items-start">
                <img
                  className="flex-[1_1_10%] lg:flex-auto w-8 h-8"
                  src={
                    "/assets/icons/icon-vendor-studio.png"
                  }
                  loading="lazy"
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
                  <img
                    className="flex-[1_1_10%] lg:flex-auto w-8 h-8"
                    src={
                      "/assets/icons/icon-vendor-studio.png"
                    }
                    loading="lazy"
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
              <AwardStarIcon />
            </div>
          }
          className="text-paragraph6"
          aria-label="Accordion 1"
          title="Ulasan"
          indicator={<ArrowForwardRoundedIcon />}
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

const InputResi = ({
  id,
  token = "",
  onCancel = () => {},
  setAlerts = () => [],
  setUpdated,
}) => {
  const { storeShipmentSend } = useOrder();
  const [imageRendered, setImageRendered] = useState([]);
  const cookies = new Cookies();
  const {
    register,
    formState: { errors },
    control,
    handleSubmit,
    getValues,
    setValue,
    reset,
  } = useForm({
    defaultValues: {
      shipment: "",
      resi: "",
      delivery_photo: [],
    },
  });

  const handleRender = (files = []) => {
    if (files.length) {
      try {
        files.forEach((file) => {
          const reader = new FileReader();
          reader.onload = (e) => {
            setImageRendered((values) => [
              ...values,
              e.target.result,
            ]);
          };
          reader.readAsDataURL(file);
        });
      } catch (error) {
        console.log("Render image failed!", error);
      }
    }
  };

  const onSubmit = async (data) => {
    try {
      const res = await storeShipmentSend({
        setAlerts,
        id,
        token,
        ...data,
      });

      if (res.status === 200) {
        const resMessage = await res.data.message;
        cookies.set("resMessage", resMessage);
        setUpdated(true);
        reset();
        setImageRendered([]);
      }
    } catch (error) {
      console.log("Store shipment send failed!", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      encType="multipart/form-data"
      className="p-3 border-2 rounded-lg flex flex-col items-end gap-8"
    >
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
          <Input
            id="shipment"
            name="shipment"
            variant="bordered"
            radius="sm"
            color="primary"
            placeholder="Kurir"
            {...register("shipment", {
              required: {
                value: true,
                message: "Kurir wajib diisi!",
              },
            })}
            errorMessage={errors?.shipment?.message}
          />
          {/* <Input
            id="layanan"
            name="layanan"
            variant="bordered"
            radius="sm"
            color="primary"
            placeholder="Layanan"
          /> */}
          <Input
            id="resi"
            name="resi"
            variant="bordered"
            radius="sm"
            color="primary"
            placeholder="No Resi"
            {...register("resi", {
              required: {
                value: true,
                message: "Resi wajib diisi!",
              },
            })}
            errorMessage={errors?.resi?.message}
          />
        </div>
      </div>
      <div className="flex flex-col w-full gap-4">
        <h4 className="text-paragraph4Res">
          Lampirkan foto resi dan kondisi barang sebelum
          dikirim
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-6 place-items-center gap-3">
          <Controller
            name="delivery_photo"
            control={control}
            rules={{
              required: {
                value: true,
                message:
                  "Lampiran foto barang wajib diisi!",
              },
              validate: {
                validFormat: () => {
                  const values = getValues(
                    "delivery_photo"
                  ).map(({ type }) => type);
                  if (!values)
                    return "Format file wajib ada!";

                  const allowedFormats = [
                    "image/png",
                    "image/jpeg",
                    "image/jpg",
                  ];

                  return (
                    values.map((value) =>
                      allowedFormats.includes(value)
                    ) || "Format file invalid!"
                  );
                },
                validSize: () => {
                  const values = getValues(
                    "delivery_photo"
                  ).map(({ size }) => size);

                  if (!values)
                    return "Ukuran file wajib ada!";
                  return (
                    values.some(
                      (value) => value <= 2097152
                    ) || "Ukuran file terlalu besar!"
                  );
                },
              },
            }}
            render={({ field }) => (
              <label
                htmlFor="delivery_photo"
                className="flex justify-self-start cursor-pointer"
              >
                <input
                  id="delivery_photo"
                  name="delivery_photo"
                  type="file"
                  multiple
                  accept=".png, .jpg, .jpeg"
                  onChange={(value) => {
                    field.onChange([
                      ...field.value,
                      ...value?.target?.files,
                    ]);
                    handleRender([...value.target.files]);
                  }}
                  className="sr-only"
                />
                <span className="p-2 bg-neutral-200  rounded-lg">
                  <AddIcon />
                </span>
              </label>
            )}
          />
          {imageRendered.length
            ? imageRendered.map((imgUrl, index) => (
                <div className="relative">
                  <Button
                    isIconOnly
                    radius="full"
                    color="danger"
                    size="sm"
                    className="absolute -top-1 -right-1 z-30"
                    onClick={() => {
                      const valueForm = getValues(
                        "delivery_photo"
                      );
                      const newValueForm = [...valueForm];
                      const value = [...imageRendered];
                      value.splice(index, 1);
                      setImageRendered(value);
                      newValueForm.splice(index, 1);
                      setValue(
                        "delivery_photo",
                        newValueForm
                      );
                    }}
                  >
                    <DeleteIcon
                      className={"text-white text-[16px]"}
                    />
                  </Button>
                  <div
                    key={index}
                    className="aspect-square overflow-hidden rounded-lg "
                  >
                    <img
                      src={imgUrl}
                      alt="img"
                      loading="lazy"
                      className="object-cover h-full w-full"
                    />
                  </div>
                </div>
              ))
            : null}
        </div>
        <p className="text-danger-500 text-xs">
          {errors?.delivery_photo?.message}
        </p>
      </div>
      <div className="flex gap-2">
        <Button
          color="default"
          variant="bordered"
          radius="sm"
          onClick={onCancel}
        >
          Cancel
        </Button>
        <Button type="submit" color="primary" radius="sm">
          Update
        </Button>
      </div>
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
        <ContentCopyOutlineIcon />
      </div>
      <span className="p-1 rounded-full border-2 ">
        <ArrowForwardRoundedIcon
          height={12}
          className={"rotate-90"}
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
        <img
          src={"/assets/icons/icon-asset.png"}
          alt="img"
          loading="lazy"
          className="w-9 h-9"
        />
        <div className="flex flex-col items-start text-paragraph9Res">
          <p className="text-inherit">Logo Fix.png</p>
          <p className="text-inherit text-neutral-400">
            2 MB
          </p>
        </div>
      </div>
      <span className="p-1 rounded-full border-2 ">
        <DownloadForOfflineIcon />
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
          <AttachFileIcon onClick={() => alert("halo")} />
        }
      />
      <NextButton color={"primary"}>Kirim</NextButton>
    </div>
  );
};

export default AccordionProcess;
