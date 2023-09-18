"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Indicator from "@/app/components/Indicator";
import Button from "@/app/components/Button";
import TextInput from "@/app/components/TextInput";
import { _api, Icon } from "@iconify/react";
import fetch from "cross-fetch";

_api.setFetch(fetch);

const RegisterVendor = () => {
  return (
    <div className="w-full px-5 flex flex-col gap-9 mt-14 max-w-md mx-auto md:max-w-2xl">
      <article className="text-textBlack flex flex-col items-center">
        <h1 className="text-title">Pendaftaran Vendor</h1>
        <p className="text-subtitle text-center">
          Silahkan lengkapi formulir dengan informasi yang<br></br>valid
          sehingga kami bisa memverifikasi bisnis Anda.
        </p>
      </article>

      <section className="flex flex-col items-center gap-9 mt-4 md:bg-white md:p-9 md:rounded-lg">
        <Indicator
          color1={"bg-primary"}
          color2={"bg-neutral"}
          color3={"bg-neutral"}
          color4={"bg-neutral"}
          textColor1={"white"}
          textColor2={"textDarkGrey"}
          textColor3={"textDarkGrey"}
          textColor4={"textDarkGrey"}
          step={1}
        />
        <hr className="w-full" />
        <form className="w-full flex flex-col gap-4 mx-0">
          <TextInput placeholder={"Nama Sesuai KTP"} type={"text"} />
          <TextInput placeholder={"Tanggal Lahir"} type={"text"} />
          <TextInput placeholder={"NIK"} type={"number"} />
          <TextInput placeholder={"Email"} type={"email"} />
          <TextInput placeholder={"No. Handphone"} type={"number"} />
          <TextInput
            placeholder={"Password"}
            type={"password"}
            icon={<Icon height={20} icon="ion:eye" />}
          />
          <div className="w-full flex-col border-dashed h-[283px] border-gray-200  border-2 rounded-[10px] place-items-center flex">
            <Image
              src="/assets/images/img-upload.png"
              width={48}
              height={48}
              alt="Picture of the author"
              className="mt-14"
            />
            <p className="mt-6">Upload KTP</p>
            <p className="text-paragraph9Res opacity-40 mt-3">
              JPG or PNG, file size no more than 5MB
            </p>
            <Button
              type={"submit"}
              title={"Upload"}
              customClassName={
                "text-white bg-primary hover:bg-primary w-[106px] rounded-full mt-6"
              }
              useShadow
            />
          </div>
          <div className="flex flex-col mt-4 w-full gap-8">
            <Link href={"/register-vendor/2"}>
              <Button
                type={"submit"}
                title={"Selanjutnya"}
                customClassName={
                  "text-white bg-primary hover:bg-primary w-full"
                }
                useShadow
                rightIcon={<Icon icon="octicon:arrow-right-16" />}
              />
            </Link>
          </div>
        </form>
      </section>
    </div>
  );
};

export default RegisterVendor;
