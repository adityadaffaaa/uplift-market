"use client";

import React from "react";
import { Navbar } from "..";
import { usePathname } from "next/navigation";

const NavbarOnRoute = () => {
  const pathName = usePathname();
  return (
    pathName !== "/login" &&
    !pathName.startsWith("/reset-password") &&
    pathName !== "/login-vendor" &&
    pathName !== "/register" && <Navbar />
  );
};

export default NavbarOnRoute;
