"use client";

import React, { useState } from "react";
import fetch from "cross-fetch";
import { CustomButton, TextInput } from "@/app/components";

import { animateScroll as scroll } from "react-scroll";
import { _api, Icon } from "@iconify/react";
_api.setFetch(fetch);

const ForgotPassword2 = () => {
  return (
    <div className="w-full px-5 flex flex-col gap-9 max-w-md mx-auto md:max-w-2xl py-24">
      <article className="text-textBlack flex flex-col items-center">
        <h1 className="text-title">Lupa Password</h1>
        <p className="text-subtitle text-center">
          Email telah dikirimkan ke email yang kamu
          <br /> daftarkan. Silahkan cek email
        </p>
      </article>

      <section className="flex flex-col items-center gap-9 mt-4 md:bg-white md:p-9 md:rounded-lg">
        <form className="w-full flex flex-col gap-4 mx-0">
          <div className="flex flex-col mt-4 w-full gap-8">
            <img
              src={"/assets/images/resetPassword.png"}
              alt="reset"
              className="w-full p-6"
            />
          </div>
        </form>
      </section>
    </div>
  );
};

export default ForgotPassword2;
