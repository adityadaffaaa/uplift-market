"use client";

import React, { useEffect, useRef, useState } from "react";

import {
  Button,
  Input,
  useDisclosure,
  Avatar,
} from "@nextui-org/react";
import Link from "next/link";
import icons from "@/app/utils/icons";
import { useForm } from "react-hook-form";
import { PengaturanUserSkeleton } from "@/app/components";
import ModalPengaturanUser from "./components/ModalPengaturanUser";
import { useProfile } from "@/app/hooks/user/profile";
import { Toast } from "@/app/components";
import { useSession } from "next-auth/react";
import { useSnackbar } from "notistack";
import { Cookies } from "react-cookie";
const {
  AddPhotoAlternateOutlineIcon,
  CheckIcon,
  EditOutlineIcon,
} = icons.pengaturanUserIcon;

const PengaturanUser = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { update } = useSession();
  const [image, setImage] = useState(null);
  const [fixImage, setFixImage] = useState();
  const [token, setToken] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isEditPassword, setIsEditPassword] =
    useState(false);
  const [imageUpdated, setImageUpdated] = useState(false);
  const fileInputRef = useRef(null);
  const { updateProfile } = useProfile();
  const [alerts, setAlerts] = useState([]);
  const { enqueueSnackbar } = useSnackbar();
  const [passwordUpdated, setPasswordUpdated] =
    useState(false);
  const cookies = new Cookies();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
    },
  });

  const getUserSession = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/auth/session");
      const session = await res?.json();
      setToken(session?.user.token);
      setIsLoading(false);
      return session;
    } catch (error) {
      setIsLoading(false);
      console.log("Fetch user session failed!", error);
    }
  };

  useEffect(() => {
    if (passwordUpdated) {
      const resMessage = cookies.get("resMessage");
      enqueueSnackbar({
        message: resMessage,
        variant: "success",
        autoHideDuration: 2000,
      });
      cookies.remove("resMessage");
      setPasswordUpdated(false);
    }
  }, [passwordUpdated]);

  useEffect(() => {
    getUserSession().then((session) => {
      const initKeys = [
        "first_name",
        "last_name",
        "email",
        "phone_number",
      ];
      initKeys.forEach((key) =>
        setValue(key, session?.user.user.attributes[key])
      );
      setImage(
        session?.user.user.attributes?.photo_profile[0]
          .attributes.image_url
      );
    });
  }, []);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const imageHandleChange = (event) => {
    const imageFile = event.target.files[0];

    try {
      if (imageFile.size <= 2097152 && imageFile) {
        setFixImage(imageFile);
        setImageUpdated(true);
        const reader = new FileReader();
        reader.onload = (e) => {
          setImage(e.target.result);
        };
        reader.readAsDataURL(event.target.files[0]);
      } else {
        setImageUpdated(false);
      }
    } catch (error) {
      console.error("Something wrong", error);
    }
  };

  const onSubmit = async (data) => {
    try {
      const res = await updateProfile({
        setAlerts,
        token,
        photo_profile: imageUpdated ? fixImage : undefined,
        ...data,
      });

      if (res.status === 200) {
        update({
          ...data,
          ...res?.data.data.attributes.photo_profile[0]
            .attributes,
        });
        onOpen();
      }
    } catch (error) {
      console.log("Update profile failed!", error);
    }
  };

  if (!isLoading) {
    return (
      <>
        <Toast duration={2000} alerts={alerts} start />
        <section className=" bg-white px-6 rounded-xl lg:p-6 ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-start gap-y-6"
            encType="multipart/form-data"
          >
            <ModalPengaturanUser
              isOpen={isOpen}
              onOpenChange={onOpenChange}
              isEditPassword={isEditPassword}
              token={token}
              setPasswordUpdated={setPasswordUpdated}
            />
            <div className="flex flex-col lg:flex-row lg:gap-x-28 w-full">
              <div className="mt-4 lg:flex-1">
                <p className="text-paragraph6">
                  Foto Profil
                </p>
                <p className="text-paragraph10 text-textGrey">
                  Foto Profil menggunakan{" "}
                  <br className="hidden lg:block" />
                  ukuran 140x140 px
                </p>
              </div>
              <div className="flex flex-row items-center mt-4 lg:flex-[3_1_0%]">
                <Avatar
                  src={image}
                  classNames={{ base: "w-24 h-24" }}
                />
                <input
                  name="image"
                  type="file"
                  className="sr-only"
                  ref={fileInputRef}
                  onChange={imageHandleChange}
                />
                <Button
                  color="default"
                  variant="bordered"
                  radius="sm"
                  size="lg"
                  onClick={handleClick}
                  startContent={
                    <AddPhotoAlternateOutlineIcon />
                  }
                  className="bg-white ml-6"
                >
                  <p className="text-paragraph1Res">
                    Ganti
                  </p>
                </Button>
                <Button
                  color="default"
                  variant="light"
                  radius="sm"
                  size="lg"
                  className="bg-white ml-2"
                  onClick={() => {
                    setImage(null);
                    setImageUpdated(true);
                  }}
                >
                  <p className="text-paragraph1Res text-[#DB234B]">
                    Hapus
                  </p>
                </Button>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:gap-x-28  w-full">
              <p className="text-paragraph9 lg:flex-1">
                Nama Depan dan Belakang
              </p>
              <div className="flex flex-row gap-x-2 lg:gap-x-6 lg:flex-[3_1_0%]">
                <Input
                  type="text"
                  name="first_name"
                  placeholder="Nama Depan"
                  variant="bordered"
                  radius="sm"
                  size="lg"
                  {...register("first_name", {
                    required: {
                      message: "Nama depan wajib diisi!",
                      value: true,
                    },
                  })}
                  errorMessage={errors?.first_name?.message}
                />
                <Input
                  type="text"
                  name="last_name"
                  placeholder="Nama Belakang"
                  variant="bordered"
                  radius="sm"
                  size="lg"
                  {...register("last_name", {
                    required: {
                      message: "Nama belakang wajib diisi!",
                      value: true,
                    },
                  })}
                  errorMessage={errors?.last_name?.message}
                />
              </div>
            </div>
            <div className="flex flex-col w-full lg:flex-row lg:gap-x-28">
              <p className="text-paragraph9 lg:flex-1 lg:gap-x-2">
                Email Akun
              </p>
              <Input
                type="email"
                name="email"
                placeholder="Email Bisnis"
                variant="bordered"
                size="lg"
                radius="sm"
                className="w-full lg:flex-[3_1_0%]"
                {...register("email", {
                  required: {
                    message: "Email wajib diisi!",
                    value: true,
                  },
                })}
                errorMessage={errors?.email?.message}
              />
            </div>
            <div className="flex flex-col w-full lg:flex-row lg:gap-x-28">
              <p className="text-paragraph9 lg:flex-1">
                No. Handphone
              </p>
              <Input
                type="number"
                name="phone_number"
                placeholder="No. Handphone"
                variant="bordered"
                size="lg"
                radius="sm"
                className="w-full lg:flex-[3_1_0%]"
                {...register("phone_number", {
                  required: {
                    message: "No Hp wajib diisi!",
                    value: true,
                  },
                })}
                errorMessage={errors?.phone_number?.message}
              />
            </div>
            <div className="flex flex-col w-full lg:flex-row lg:gap-x-28">
              <p className="text-paragraph9 lg:flex-1">
                Password
              </p>
              <div className="flex flex-row gap-x-2 lg:flex-[3_1_0%] mb-60 lg:mb-0">
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
              <Link href={"/"}>
                <Button
                  color="default"
                  variant="bordered"
                  radius="sm"
                  size="lg"
                >
                  <p className="text-paragraph1Res">
                    Batal
                  </p>
                </Button>
              </Link>
              <Button
                color="primary"
                type="submit"
                variant="solid"
                radius="sm"
                size="lg"
                onPress={() => {
                  setIsEditPassword(false);
                }}
              >
                <p className="text-paragraph1Res text-white">
                  Simpan
                </p>
              </Button>
            </div>
            <div className="btm-nav lg:hidden bg-white p-5 z-50">
              <button className="btn bg-primary text-white">
                <div className="flex justify-center items-center">
                  <CheckIcon className="text-xl" />
                  <p>Update</p>
                </div>
              </button>
            </div>
            <div className="btm-nav lg:hidden bg-white p-5 z-50">
              <button className="btn bg-primary text-white">
                <div className="flex justify-center items-center">
                  <CheckIcon className="text-xl" />
                  <p>Update</p>
                </div>
              </button>
            </div>
          </form>
        </section>
      </>
    );
  }

  return <PengaturanUserSkeleton />;
};
export default PengaturanUser;
