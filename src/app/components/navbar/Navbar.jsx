import React from "react";
import Link from "next/link";
import NavbarLayout from "./NavbarLayout";
import NavbarCondition from "./NavbarCondition";
import icons from "@/app/utils/icons";

const { CloseIcon, MenuIcon } = icons.navbarIcon;

export const Navbar = () => {
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
          <MenuIcon />
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
            <CloseIcon />
          </label>
          <ul>
            <MenuList />
          </ul>
          <div className="flex flex-col gap-4">
            <NavbarCondition />
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
        <NavbarCondition />
      </div>
    </menu>
  );

  return (
    <NavbarLayout>
      <nav className="flex justify-between w-[90%] lg:w-4/5 items-center ">
        <Link href="/">
          <img
            src={"/assets/images/img-logo-upliftmarket.png"}
            alt="logo"
            className="w-[110px]"
            loading="lazy"
          />
        </Link>
        <NavbarStandard />
        <NavbarOnMobile />
      </nav>
    </NavbarLayout>
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
