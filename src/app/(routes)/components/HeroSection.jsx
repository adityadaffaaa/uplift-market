"use client";

import React from "react";
import TextInput from "@/app/components/TextInput";
import Button from "@/app/components/Button";
import { _api, Icon } from "@iconify/react";
import fetch from "cross-fetch";
_api.setFetch(fetch);

const HeroSection = () => {
  const handleChange = (event) => {};

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className="h-screen bg-grey flex justify-center lg:h-auto lg:py-40">
      <div className="container px-5 flex flex-col gap-8 items justify-center h-full">
        <article className="text-textBlack text-center flex flex-col gap-4">
          <h1 className="text-heading1Res">
            <a className="text-primary">Empowering </a>
            UMKM through Creative Partnerships
          </h1>
          <p className="text-paragraph3Res">
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
      className="flex flex-col gap-4"
    >
      <TextInput
        id={"tips"}
        customBorderClassName="flex-1 border-grey2 rounded-l-none border-[1px]"
        placeholder="Tips: Search by skills, location, name etc"
        onChange={onChange}
        type="text"
      />
      <Button
        type={"submit"}
        title={"Cari"}
        customClassName={
          "text-white bg-primary hover:bg-green60"
        }
        useShadow
        rightIcon={<Icon icon="octicon:arrow-right-16" />}
      />
    </form>
  );
};

export default HeroSection;
