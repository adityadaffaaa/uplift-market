"use client";

import React, {
  useState,
  useLayoutEffect,
  useEffect,
} from "react";
import Link from "next/link";
import LinkRoundedButton from "./LinkRoundedButton";
import { _api, Icon } from "@iconify/react";
import fetch from "cross-fetch";
import Image from "next/image";
import { useAuth } from "../hooks/auth";
import { animateScroll as scrollPage } from "react-scroll";
import { Badge } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Cookies } from "react-cookie";
_api.setFetch(fetch);

const Navbar = () => {
  const { logout } = useAuth();

  const cookies = new Cookies();

  const [user, setUser] = useState("");
  useEffect(() => {
    // const stored = localStorage.getItem("token");
    // if (stored !== "undefined") {
    //   setUser(JSON.parse(stored));
    // }
    const token = cookies.get("token");
    if (token) {
      setUser(token);
    }
  }, [user]);

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

  const scrollToTop = () => {
    scrollPage.scrollToTop({
      duration: 0,
    });
  };

  const MenuListItem = ({ title, url }) => (
    <li>
      <Link
        className="text-subtitle text-textBlack font-medium lg:hover:text-primary transition-default"
        href={url}
      >
        {title}
      </Link>
    </li>
  );

  const MenuList = () =>
    routes.map(({ title, url }, index) => (
      <MenuListItem key={index} title={title} url={url} />
    ));

  const NavbarOnMobile = () => (
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
            <MenuList />
          </ul>
          <div className="flex flex-col gap-4">
            {user ? (
              <OnLoggedInCondition />
            ) : (
              <GuestCondition />
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const NavbarStandard = () => (
    <menu className="gap-8 items-center hidden lg:flex">
      <ul className="flex gap-9">
        <MenuList />
      </ul>
      <div className="flex gap-4 items-center">
        {user ? (
          <OnLoggedInCondition />
        ) : (
          <GuestCondition />
        )}
      </div>
    </menu>
  );

  const OnLoggedInCondition = () => (
    <div className="flex items-center px-5 lg:px-0">
      <Button
        isIconOnly
        variant="bordered"
        radius="full"
        size="md"
      >
        <Badge content="5" color="danger" size="sm">
          <Icon height={18} icon="ph:bell" />
        </Badge>
      </Button>
      <details className="dropdown">
        <summary className="m-1 btn btn-ghost hover:bg-transparent">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src="assets/images/img-profile-picture.png" />
            </div>
          </div>
          <Icon
            height={24}
            icon="material-symbols:keyboard-arrow-down-rounded"
          />
        </summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-lg w-52">
          <li>
            <button
              className="rounded-md hover:bg-secondary hover:text-white text-paragraph9 text-neutral-600 flex justify-between"
              onClick={handleLogOut}
            >
              Logout
              <Icon height={24} icon="ic:round-logout" />
            </button>
          </li>
        </ul>
      </details>
    </div>
  );

  const GuestCondition = () => (
    <>
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
        customClassName={"text-white hover:bg-green70"}
      />
    </>
  );

  const handleLogOut = async () => {
    const res = await logout(user);
    // localStorage.removeItem("token");
    cookies.remove("token");
    return res;
  };

  return (
    <header
      className={`w-full justify-center py-2 flex fixed top-0 z-50 transition-linear ${
        scroll
          ? "bg-white shadow-defaultShadow lg:py-4"
          : "bg-transparent lg:py-6"
      }`}
    >
      <nav className="flex justify-between w-[90%] lg:w-4/5 items-center ">
        <Link href="/">
          <Image
            height={24}
            width={110}
            src={"/assets/images/img-logo-upliftmarket.png"}
            alt="logo"
          />
        </Link>
        <NavbarStandard />
        <NavbarOnMobile />
      </nav>
      <button
        onClick={scrollToTop}
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
      </button>
    </header>
  );
};

const routes = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About Us",
    url: "#",
  },
  {
    title: "Contact",
    url: "#",
  },
];

export default Navbar;
