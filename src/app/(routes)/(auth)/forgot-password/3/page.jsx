"use client";

import React, { useState } from "react";
import fetch from "cross-fetch";
import { CustomButton, TextInput } from "@/app/components";

import { animateScroll as scroll } from "react-scroll";
import { _api, Icon } from "@iconify/react";
_api.setFetch(fetch);

const ForgotPassword3 = () => {
  const [error, setError] = useState({
    email: false,
  });

  const [formData, setFormData] = useState({
    email: "",
  });

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 0,
    });
  };

  const handleChange = (event) => {
    const key = event.target.id;
    const value = event.target.value;
    setFormData((values) => ({
      ...values,
      [key]: value,
    }));
  };

  const handleClick = () => {
    if (stepNumber < 4) {
      setStepNumber((prev) => prev + 1);
    }
    scrollToTop();
  };

  const handleSubmit = () => {};
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full px-5 flex flex-col gap-9 max-w-md mx-auto md:max-w-2xl py-24">
      <article className="text-textBlack flex flex-col items-center">
        <h1 className="text-title">Reset Password</h1>
        <div className=" bg-green-100 rounded-xl">
          <p className="text-subtitle text-center text-primary p-4">
            Buat password kuat dengan gabungan huruf besar-
            <br className="hidden lg:block" />
            kecil, angka, dan simbol, hindari info pribadi.
          </p>
        </div>
      </article>

      <section className="flex flex-col items-center gap-9 mt-4 md:bg-white md:p-9 md:rounded-lg">
        <hr className="w-full" />
        <form className="w-full flex flex-col gap-4 mx-0">
          <div className="flex flex-col mt-4 w-full gap-8">
            <TextInput
              id="password"
              placeholder={"Password"}
              type={open ? "text" : "password"}
              icon={
                open ? (
                  <Icon height={20} icon="ion:eye" />
                ) : (
                  <Icon height={20} icon="el:eye-close" />
                )
              }
              name={"password"}
              onChange={handleChange}
              value={formData.password}
              error={error.password}
              useLabel
              required
            />
            <TextInput
              id="passwordConfirmation"
              placeholder={"Konfirmasi Password"}
              type={open ? "text" : "password"}
              icon={
                open ? (
                  <Icon height={20} icon="ion:eye" />
                ) : (
                  <Icon height={20} icon="el:eye-close" />
                )
              }
              name={"password"}
              onChange={handleChange}
              value={formData.password}
              error={error.password}
              useLabel
              required
            />
            <CustomButton
              onClick={handleClick}
              type="button"
              title={"Selanjutnya"}
              customClassName={"text-white bg-primary hover:bg-primary w-full"}
              useShadow
              rightIcon={<Icon icon="octicon:arrow-right-16" />}
            />
          </div>
        </form>
      </section>
    </div>
  );
};

export default ForgotPassword3;
