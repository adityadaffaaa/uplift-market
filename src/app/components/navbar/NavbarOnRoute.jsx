"use client";

import React from "react";
import { Navbar } from "..";
import { usePathname } from "next/navigation";

const NavbarOnRoute = () => {
  const pathName = usePathname();
  return (
    pathName !== "/login" &&
    pathName !== "/login-vendor" &&
    pathName !== "/register" &&
    !pathName.startsWith("/reset-password") &&
    !pathName.startsWith("/dashboard") && <Navbar />
  );
};

export default NavbarOnRoute;
