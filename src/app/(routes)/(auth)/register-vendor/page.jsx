"use client";
import React, { useState } from "react";
import Indicator from "@/app/components/Indicator";
import Button from "@/app/components/Button";
import { _api, Icon } from "@iconify/react";
import fetch from "cross-fetch";
import FirstStep from "./components/FirstStep";
import SecondStep from "./components/SecondStep";
import ThirdStep from "./components/ThirdStep";
import FourthStep from "./components/FourthStep";
import { animateScroll as scroll } from "react-scroll";

_api.setFetch(fetch);

const RegisterVendor = () => {
  const [stepNumber, setStepNumber] = useState(1);

  const [error, setError] = useState({
    name: false,
    dateOfBirth: false,
    nik: false,
    email: false,
    phoneNumber: false,
    password: false,
    scanKtp: false,
    businessName: false,
    businessEmail: false,
    businessPhoneNumber: false,
    businessLogo: false,
    businessPortfolio: false,
    category: false,
    completeAddress: false,
    province: false,
    city: false,
    postalCode: false,
    longitude: false,
    latitude: false,
    websiteUrl: false,
    instagram: false,
    firstQuestion: false,
    secondQuestion: false,
  });

  const [formData, setFormData] = useState({
    name: "",
    dateOfBirth: "",
    nik: "",
    email: "",
    phoneNumber: "",
    password: "",
    scanKtp: "",
    businessName: "",
    businessEmail: "",
    businessPhoneNumber: "",
    businessLogo: "",
    businessPortfolio: "",
    category: "",
    completeAddress: "",
    province: "",
    city: "",
    postalCode: "",
    longitude: "",
    latitude: "",
    websiteUrl: "",
    instagram: "",
    firstQuestion: "",
    secondQuestion: "",
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

  const handleClickIndicator = (prevStep) => {
    if (prevStep === 1) {
      setStepNumber(1);
      scrollToTop();
    } else if (prevStep === 2) {
      setStepNumber(2);
      scrollToTop();
    } else if (prevStep === 3) {
      setStepNumber(3);
      scrollToTop();
    }
  };

  const handleSubmit = () => {};

  return (
    <div className="w-full px-5 flex flex-col gap-9 max-w-md mx-auto md:max-w-2xl py-24">
      <article className="text-textBlack flex flex-col items-center">
        <h1 className="text-title">Pendaftaran Vendor</h1>
        <p className="text-subtitle text-center">
          Silahkan lengkapi formulir dengan informasi yang
          <br></br>valid sehingga kami bisa memverifikasi
          bisnis Anda.
        </p>
      </article>

      <section className="flex flex-col items-center gap-9 mt-4 md:bg-white md:p-9 md:rounded-lg">
        <Indicator
          onClick={handleClickIndicator}
          step={stepNumber}
        />
        <hr className="w-full" />
        <form className="w-full flex flex-col gap-4 mx-0">
          <HandleStep
            stepNumber={stepNumber}
            handleChange={handleChange}
            formData={formData}
            error={error}
          />
          <div className="flex flex-col mt-4 w-full gap-8">
            <Button
              onClick={handleClick}
              type="button"
              title={"Selanjutnya"}
              customClassName={
                "text-white bg-primary hover:bg-primary w-full"
              }
              useShadow
              rightIcon={
                <Icon icon="octicon:arrow-right-16" />
              }
            />
          </div>
        </form>
      </section>
    </div>
  );
};

const HandleStep = ({
  stepNumber,
  handleChange,
  formData,
  error,
}) =>
  stepNumber === 1 ? (
    <FirstStep
      onChange={handleChange}
      error={error}
      formData={formData}
    />
  ) : stepNumber === 2 ? (
    <SecondStep
      onChange={handleChange}
      error={error}
      formData={formData}
    />
  ) : stepNumber === 3 ? (
    <ThirdStep
      onChange={handleChange}
      formData={formData}
    />
  ) : (
    <FourthStep
      onChange={handleChange}
      error={error}
      formData={formData}
    />
  );

export default RegisterVendor;
