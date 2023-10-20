"use client";

import React, { useState } from "react";
import { Indicator, CustomButton } from "@/app/components";
import {
  FirstStep,
  SecondStep,
  ThirdStep,
  FourthStep,
} from "./components";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { animateScroll as scroll } from "react-scroll";
import icons from "@/app/utils/icons";

const { ArrowRightIcon } = icons.authScreenIcon;

const validFileExtensions = {
  image: ["jpg", "pdf", "png"],
};

const isValidFileType = (fileName, fileType) => {
  return (
    fileName &&
    validFileExtensions[fileType].indexOf(
      fileName.split(".").pop()
    ) > -1
  );
};

const schema = Yup.object().shape({
  name: "",
  dateOfBirth: "",
  email: "",
  phoneNumber: "",
  password: "",
  scanKtp: "",
  businessName: "",
  businessEmail: "",
  businessPhoneNumber: "",
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
  scanKtp: Yup.mixed()
    .required("Scan KTP wajib diisi!")
    .test(
      "is-valid-type",
      "Format file tidak valid",
      (value) =>
        isValidFileType(
          value && value.name.toLowerCase(),
          "image"
        )
    ),
  businessLogo: Yup.mixed().required(
    "Logo bisnis wajib diisi!"
  ),
  businessPortfolio: Yup.mixed().required(
    "Portofolio bisnis wajib diisi!"
  ),
});

const RegisterVendor = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, touchedFields, isDirty, isValid },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [stepNumber, setStepNumber] = useState(1);

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 0,
    });
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

  const onSubmit = (data) => {
    console.log(data);
  };
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
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-4 mx-0"
        >
          <HandleStep
            stepNumber={stepNumber}
            formData={register}
            control={control}
          />
          <div className="flex flex-col mt-4 w-full gap-8">
            <CustomButton
              onClick={handleClick}
              type="button"
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
  );
};

const HandleStep = ({ stepNumber, formData, control }) =>
  stepNumber === 1 ? (
    <FirstStep formData={formData} control={control} />
  ) : stepNumber === 2 ? (
    <SecondStep formData={formData} control={control} />
  ) : stepNumber === 3 ? (
    <ThirdStep formData={formData} control={control} />
  ) : (
    <FourthStep formData={formData} />
  );

export default RegisterVendor;
