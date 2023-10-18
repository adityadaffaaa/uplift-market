"use client";

import React from "react";
import { Navbar } from "..";
import { usePathname } from "next/navigation";

const NavbarOnRoute = () => {
  const pathName = usePathname();
  return (
    pathName !== "/login" &&
    pathName !== "/register" && <Navbar />
  );
};

export default NavbarOnRoute;
