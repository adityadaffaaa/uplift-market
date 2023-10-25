"use client";
import React from "react";
import { Footer } from "..";
import { usePathname } from "next/navigation";

const FooterOnRoute = () => {
  const pathName = usePathname();
  return pathName !== "/login" &&
    pathName !== "/register" &&
    pathName !== "/register-vendor" &&
    pathName !== "/login-vendor" &&
    !pathName.startsWith("/reset-password") &&
    !pathName.startsWith("/booking") ? (
    <Footer />
  ) : null;
};

export default FooterOnRoute;
