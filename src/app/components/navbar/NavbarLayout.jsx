"use client";
import React, { useLayoutEffect, useState } from "react";
import { animateScroll as scrollPage } from "react-scroll";
import icons from "@/app/utils/icons";
const { ArrowUpIcon } = icons.navbarIcon;

const NavbarLayout = ({ children }) => {
  const [scroll, setScrolled] = useState(false);
  useLayoutEffect(() => {
    const handleScroll = () => {
      const isScroll = window.scrollY > 0;
      setScrolled(isScroll);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    scrollPage.scrollToTop({
      duration: 0,
    });
  };
  return (
    <header
      className={`w-full justify-center py-2 flex fixed top-0 z-50 transition-linear ${
        scroll
          ? "bg-white shadow-defaultShadow lg:py-4"
          : "bg-transparent lg:py-6"
      }`}
    >
      {children}
      <button
        onClick={scrollToTop}
        data-aos="fade-up"
        data-aos-duration="1000"
        className="toast "
      >
        <div className="btn btn-ghost rounded-full bg-secondary hover:bg-primary text-white">
          <ArrowUpIcon />
        </div>
      </button>
    </header>
  );
};

export default NavbarLayout;
