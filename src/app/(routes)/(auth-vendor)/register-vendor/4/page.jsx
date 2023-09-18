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

const RegisterVendor4 = () => {
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
          color2={"bg-primary"}
          color3={"bg-primary"}
          color4={"bg-primary"}
          textColor1={"white"}
          textColor2={"white"}
          textColor3={"white"}
          textColor4={"white"}
          step={4}
        />
        <hr className="w-full" />
        <form className="w-full flex flex-col gap-4 mx-0">
          <TextInput
            placeholder={"Dari mana kamu tau Digicrest?"}
            type={"text"}
          />
          <TextInput
            placeholder={
              "Apa alasan kamu mendaftar sebagai vendor di Digicrest?"
            }
            type={"text"}
            customClassName={"h-[96px] items-start"}
          />

          <div className="flex flex-col mt-4 w-full gap-8">
            <Link href={"/login"}>
              <Button
                type={"submit"}
                title={"Daftar"}
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

export default RegisterVendor4;
