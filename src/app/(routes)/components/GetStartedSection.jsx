"use client";

import React, { useState, useEffect } from "react";
import { LinkRoundedButton } from "@/app/components";
export const GetStartedSection = ({ session }) => {
  const [width, setWidth] = useState(null);
  useEffect(() => {
    setWidth(window.innerWidth);

    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  const handleImageSize = () =>
    width < 640 ? 120 : width < 1140 ? 180 : 240;

  return (
    <section className="py-20 px-5 flex lg:px-24 justify-center">
      <div
        data-aos="zoom-in"
        data-aos-duration="1000"
        className="container px-6 bg-[#066A69] py-20 rounded-xl flex flex-col gap-4 items-center text-white relative overflow-hidden"
      >
        <img
          className="absolute -top-6 -left-16 w-[120px] lg:w-[180px] xl:w-[240px]"
          src={"/assets/images/img-get-started-2.png"}
          alt="img"
          loading="lazy"
        />
        <img
          className="absolute -bottom-6 -right-16 w-[120px] lg:w-[180px] xl:w-[240px]"
          src={"/assets/images/img-get-started-1.png"}
          alt="img"
          loading="lazy"
        />
        <h2 className=" text-heading2Res text-center lg:text-heading2">
          Get Started with Uplift Market Now!
        </h2>
        <p className="text-paragraph3Res text-center lg:text-paragraph5 max-w-md ">
          Bergabunglah dengan lebih 1.000+ cliet dan 200+
          vendor untuk memajukan UMKM Indonesia
        </p>
        <div className="flex gap-2 lg:text-paragraph7">
          {!session ? (
            <LinkRoundedButton
              title="Daftar Akun"
              url="/register"
              customClassName="flex-1 bg-white text-textBlack "
            />
          ) : null}
          <LinkRoundedButton
            title="Menjadi Vendor"
            url="/login-vendor"
            customClassName="flex-1 border-white text-white hover:bg-[#065554]"
            bordered
          />
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
