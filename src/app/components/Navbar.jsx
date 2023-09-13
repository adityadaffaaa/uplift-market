"use client";

import React from "react";
import Link from "next/link";
import LinkRoundedButton from "./LinkRoundedButton";

const Navbar = () => {
  const MenuList = ({ title, url }) => (
    <li>
      <Link
        className="text-subtitle text-textBlack font-medium hover:text-primary transition-default"
        href={url}
      >
        {title}
      </Link>
    </li>
  );

  return (
    <header className="w-full justify-center py-6 hidden lg:flex">
      <nav className="flex justify-between w-4/5 items-center ">
        <h1>Logo</h1>
        <menu className="flex gap-8 items-center">
          <ul className="flex gap-9">
            <MenuList url={"#"} title={"Home"} />
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
              customClassName={"text-white"}
            />
          </div>
        </menu>
      </nav>
    </header>
  );
};

export default Navbar;
