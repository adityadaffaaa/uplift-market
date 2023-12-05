"use client";

import React, { useEffect, useState } from "react";
import {
  Indicator,
  CustomButton,
  Toast,
  LoadingIndicator,
} from "@/app/components";
import {
  FirstStep,
  SecondStep,
  ThirdStep,
  FourthStep,
} from "./components";
import { useForm, Controller } from "react-hook-form";
import { animateScroll as scroll } from "react-scroll";
import { useAuth } from "@/app/hooks/vendor/auth";
import { useDisclosure } from "@nextui-org/react";
import { Cookies } from "react-cookie";
import icons from "@/app/utils/icons";
const { ArrowRightIcon } = icons.authScreenIcon;
const RegisterVendor = () => {
  const { regis } = useAuth();
  const cookies = new Cookies();
  const [alerts, setAlerts] = useState([]);

  const { isOpen, onOpen, onOpenChange, onClose } =
    useDisclosure();

  const {
    register,
    handleSubmit,
    control,
    getValues,
    watch,
    setValue,
    trigger,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      nik: "",
      dob: "",
      email: "",
      phoneNumber: "",
      password: "",
      businessName: "",
      slug: "",
      businessEmail: "",
      businessPhoneNumber: "",
      address: "",
      province: "",
      city: "",
      postalCode: "",
      longitude: "",
      latitude: "",
      websiteUrl: "",
      instagram: "",
      firstQuestion: "",
      secondQuestion: "",
    },
  });

  const [fileValue, setFileValue] = useState({
    scanKtp: "",
    businessLogo: "",
    portfolio: "",
  });

  useEffect(() => {
    const inputFormValue = localStorage.getItem(
      "inputFormValue"
    );

    const scanKtpVal = localStorage.getItem("scanKtp");
    const businessLogo =
      localStorage.getItem("businessLogo");
    const pdfPortfolio =
      localStorage.getItem("PDFPortfolio");

    if (inputFormValue) {
      const parsedFormValue = JSON.parse(inputFormValue);
      Object.keys(parsedFormValue).forEach((key) => {
        setValue(key, parsedFormValue[key]);
      });
    }

    if (scanKtpVal) {
      setFileValue({
        scanKtp: scanKtpVal,
      });
    }
    if (businessLogo) {
      setFileValue({
        businessLogo: businessLogo,
      });
    }
    if (pdfPortfolio) {
      setFileValue({
        portfolio: pdfPortfolio,
      });
    }
  }, [setValue]);

  const [stepNumber, setStepNumber] = useState(1);

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 0,
    });
  };

  const handleClick = async () => {
    const scanKtpVal = localStorage.getItem("scanKtp");
    const businessLogoVal =
      localStorage.getItem("businessLogo");
    const pdfPortfolio =
      localStorage.getItem("PDFPortfolio");

    const result = await trigger();

    if (scanKtpVal) {
      setFileValue({
        scanKtp: scanKtpVal,
      });
    }

    if (businessLogoVal) {
      setFileValue({
        businessLogo: businessLogoVal,
      });
    }

    if (pdfPortfolio) {
      setFileValue({
        portfolio: pdfPortfolio,
      });
    }

    localStorage.setItem(
      "inputFormValue",
      JSON.stringify(getValues())
    );

    if (result) {
      handleStep();
    }
  };

  const handleStep = () => {
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

  const onSubmit = async (data) => {
    console.log(data);
    try {
      onOpen();
      const {
        name,
        dob,
        nik,
        email,
        phoneNumber,
        password,
        businessName,
        slug,
        businessEmail,
        businessPhoneNumber,
        address,
        province,
        city,
        postalCode,
        longitude,
        latitude,
        websiteUrl,
        instagram,
        firstQuestion,
        secondQuestion,
        scanKtp,
        businessLogo,
        businessPortfolio,
      } = data;

      const res = await regis({
        setAlerts,
        name,
        dob,
        nik,
        email,
        phone_number: `62${phoneNumber}`,
        password,
        business_name: businessName,
        slug,
        email_business: businessEmail,
        phone_business: businessPhoneNumber,
        address,
        province,
        city,
        postal_code: postalCode,
        latitude,
        longitude,
        website: websiteUrl,
        instagram,
        know: firstQuestion,
        reason: secondQuestion,
        ktp: scanKtp,
        logo: businessLogo,
        portofolio: businessPortfolio,
      });

      console.log(res);
      if (res.status === 201) {
        localStorage.clear();
        const resMessage = await res.data.message;
        cookies.set("resMessage", resMessage);
        window.location.href = "/login-vendor";
      }
      onClose();
    } catch (error) {
      onClose();
      console.error("Something wrong", error);
    }
  };

  return (
    <>
      <Toast start duration={2000} alerts={alerts} />
      <LoadingIndicator
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      />
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
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-4 mx-0"
            encType="multipart/form-data"
          >
            <HandleStep
              stepNumber={stepNumber}
              formData={register}
              control={control}
              Controller={Controller}
              watch={watch}
              setValue={setValue}
              getValues={getValues}
              errors={errors}
              fileDefaultValue={fileValue}
            />
            <div className="flex flex-col mt-4 w-full gap-8">
              <CustomButton
                onClick={
                  stepNumber < 4 ? handleClick : () => {}
                }
                type={stepNumber < 4 ? "button" : "submit"}
                title={"Selanjutnya"}
                customClassName={
                  "text-white bg-primary hover:bg-primary w-full"
                }
                useShadow
                rightIcon={<ArrowRightIcon />}
              />
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

const HandleStep = ({
  stepNumber,
  formData,
  control,
  Controller,
  watch,
  getValues,
  setValue,
  errors,
  fileDefaultValue,
}) =>
  stepNumber === 1 ? (
    <FirstStep
      formData={formData}
      control={control}
      Controller={Controller}
      getValues={getValues}
      errors={errors}
      fileDefaultValue={fileDefaultValue}
    />
  ) : stepNumber === 2 ? (
    <SecondStep
      formData={formData}
      watch={watch}
      control={control}
      Controller={Controller}
      setValue={setValue}
      getValues={getValues}
      errors={errors}
      fileDefaultValue={fileDefaultValue}
    />
  ) : stepNumber === 3 ? (
    <ThirdStep
      control={control}
      Controller={Controller}
      getValues={getValues}
      errors={errors}
      fileDefaultValue={fileDefaultValue}
    />
  ) : (
    <FourthStep
      formData={formData}
      getValues={getValues}
      errors={errors}
    />
  );

export default RegisterVendor;
