"use client";

import React, { useState, useEffect } from "react";

import ForgotPasswordSection from "./ForgotPasswordSection";
import EmailCheckSection from "./EmailCheckSection";

export const ScreenCondition = () => {
  const { ForgotPassword, EmailCheck } = articleContent();

  const [isSuccess, setIsSuccess] = useState(false);

  const handleSuccess = (val) => setIsSuccess(val);

  useEffect(() => {}, [isSuccess]);

  return (
    <>
      <article className="text-textBlack flex flex-col items-center">
        {!isSuccess ? <ForgotPassword /> : <EmailCheck />}
      </article>
      {!isSuccess ? (
        <section className="flex flex-col items-center gap-9 mt-4 md:bg-white md:p-9 md:rounded-lg">
          <ForgotPasswordSection
            handleSuccess={handleSuccess}
          />
        </section>
      ) : (
        <section className="flex flex-col items-center gap-9 mt-4 md:bg-white md:p-9 md:rounded-lg">
          <EmailCheckSection />
        </section>
      )}
    </>
  );
};

const articleContent = () => {
  const ForgotPassword = () => {
    return (
      <>
        <h1 className="text-title">Lupa Password</h1>
        <p className="text-subtitle text-center">
          Silahkan Masukkan Email yang terdaftar
        </p>
      </>
    );
  };
  const EmailCheck = () => {
    return (
      <>
        <h1 className="text-title">
          Silakan cek email Anda
        </h1>

        <p className="text-subtitle text-center">
          Email telah dikirimkan ke email yang kamu
          <br /> daftarkan. Silahkan cek email
        </p>
      </>
    );
  };

  return {
    ForgotPassword,
    EmailCheck,
  };
};

export default ScreenCondition;
