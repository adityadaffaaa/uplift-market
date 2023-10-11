"use client";

import React from "react";
import { TextInput, CustomButton } from "@/app/components";

import { _api, Icon } from "@iconify/react";
import fetch from "cross-fetch";
_api.setFetch(fetch);

export const HeroSection = () => {
  const handleChange = (event) => {};

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className="h-screen bg-grey flex justify-center lg:h-auto lg:py-40 pt-24">
      <div
        data-aos="fade-down"
        data-aos-duration="1000"
        className="container px-5 flex flex-col gap-8 items justify-center h-full lg:max-w-3xl overflow-x-hidden"
      >
        <article className="text-textBlack text-center flex flex-col gap-4">
          <h1
            data-aos="fade-right"
            data-aos-duration="2000"
            className="text-heading1Res md:text-heading1"
          >
            <a className="text-primary">Empowering </a>
            UMKM through Creative Partnerships
          </h1>
          <p
            data-aos="fade-left"
            data-aos-duration="2000"
            className="text-paragraph3Res md:text-paragraph2"
          >
            Temukan peluang kolaborasi inspiratif dengan
            para profesional untuk mengangkat kualitas
            digital marketing Anda ke level berikutnya.
          </p>
        </article>
        <SearchForm
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </div>
    </section>
  );
};

const SearchForm = ({ onChange, onSubmit }) => {
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-4 lg:flex-row lg:gap-0"
    >
      <TextInput
        id={"search"}
        name="search"
        customBorderClassName="flex-1 border-grey2 lg:rounded-full lg:rounded-r-none  overflow-hidden border-[1px]"
        customClassName="lg:text-paragraph5 lg:rounded-none"
        placeholder="Tips: Search by skills, location, name etc"
        onChange={onChange}
        type="text"
      />
      <CustomButton
        type={"submit"}
        title={"Cari"}
        customClassName={
          "text-white bg-primary hover:bg-green60 lg:rounded-l-none lg:rounded-r-full lg:border-2 lg:border-primary lg:hover:border-primary lg:px-8"
        }
        useShadow
        leftIcon={
          <Icon
            className="hidden lg:block"
            icon="ri:search-line"
          />
        }
        rightIcon={
          <Icon
            className="lg:hidden"
            icon="octicon:arrow-right-16"
          />
        }
      />
    </form>
  );
};

export default HeroSection;
