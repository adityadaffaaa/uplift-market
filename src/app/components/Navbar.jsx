"use client";

import React, { useState, useLayoutEffect } from "react";
import Link from "next/link";
import LinkRoundedButton from "./LinkRoundedButton";
import { _api, Icon } from "@iconify/react";
import fetch from "cross-fetch";
_api.setFetch(fetch);

const Navbar = () => {
  const [scroll, setScrolled] = useState(false);
  useLayoutEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const MenuList = ({ title, url }) => (
    <li>
      <Link
        className="text-subtitle text-textBlack font-medium lg:hover:text-primary lg:transition-default"
        href={url}
      >
        {title}
      </Link>
    </li>
  );

  return (
    <header
      className={`w-full justify-center py-2 flex fixed top-0 z-50 transition-linear ${
        scroll
          ? "bg-white shadow-defaultShadow lg:py-4"
          : "bg-grey lg:py-6"
      }`}
    >
      <nav className="flex justify-between w-[90%] lg:w-4/5 items-center ">
        <h1>Logo</h1>
        <menu className="gap-8 items-center hidden lg:flex">
          <ul className="flex gap-9">
            <MenuList url={"/"} title={"Home"} />
            <MenuList url={"#"} title={"About Us"} />
            <MenuList url={"#"} title={"Contact"} />
          </ul>
          <div className="flex gap-4">
            <LinkRoundedButton
              url="/login"
              title={"login"}
              customClassName={
                "hover:bg-primary hover:border-primary hover:text-white"
              }
              bordered
            />
            <LinkRoundedButton
              url="/register"
              title={"sign up"}
              customClassName={
                "text-white hover:bg-green70"
              }
            />
          </div>
        </menu>
        <div className="drawer drawer-end lg:hidden flex justify-end">
          <input
            id="my-drawer"
            type="checkbox"
            className="drawer-toggle"
          />
          <div className="drawer-content">
            <label
              htmlFor="my-drawer"
              className="btn btn-ghost drawer-button"
            >
              <Icon
                height={24}
                width={24}
                className="text-textBlack"
                icon="healthicons:ui-menu-grid"
              />
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              className="drawer-overlay"
            ></label>
            <div className="menu flex flex-col gap-5 p-4 w-80 min-h-full bg-base-200 text-base-content">
              <label
                htmlFor="my-drawer"
                className="btn btn-ghost drawer-button flex justify-end self-end "
              >
                <Icon
                  height={24}
                  width={24}
                  icon="ic:round-close"
                />
              </label>
              <ul>
                <MenuList url={"/"} title={"Home"} />
                <MenuList url={"#"} title={"About Us"} />
                <MenuList url={"#"} title={"Contact"} />
              </ul>
              <div className="flex flex-col gap-4">
                <LinkRoundedButton
                  url="/login"
                  title={"login"}
                  customClassName={
                    "hover:bg-primary hover:border-primary hover:text-white flex-1"
                  }
                  bordered
                />
                <LinkRoundedButton
                  url="/register"
                  title={"sign up"}
                  customClassName={"text-white flex-1"}
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <a
        href="#"
        data-aos="fade-up"
        data-aos-duration="1000"
        className="toast "
      >
        <div className="btn btn-ghost rounded-full bg-secondary hover:bg-primary text-white">
          <Icon
            className="animate-bounce"
            icon="ep:arrow-up-bold"
          />
        </div>
      </a>
    </header>
  );
};

export default Navbar;
