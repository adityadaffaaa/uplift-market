"use client";

import React from "react";
import Image from "next/image";
import { usePathname, redirect } from "next/navigation";
import { Cookies } from "react-cookie";
const LayoutOnRoute = ({ children }) => {
  const pathName = usePathname();
  const cookies = new Cookies();
  const token = cookies.get("token");

  if (token && token !== "undefined") {
    redirect("/");
  }

  const HandleLayout = () => {
    if (pathName === "/register-vendor") {
      return <RegisterVendorLayout children={children} />;
    } else if (token && token !== undefined) {
    } else if (pathName.startsWith("/reset-password")) {
      return <ForgotPasswordLayout children={children} />;
    } else {
      return <UserAuthLayout children={children} />;
    }
  };

  return <HandleLayout />;
};

const RegisterVendorLayout = ({ children }) => (
  <div className="h-full grid place-items-center md:bg-greyBackground">
    {children}
  </div>
);

const UserAuthLayout = ({ children }) => (
  <div className="h-screen flex flex-col items-center lg:flex-row">
    <section className="bg-primary flex-1 lg:grid place-items-center h-full hidden">
      <Image
        height={90}
        width={400}
        src={
          "/assets/images/img-logo-upliftmarket-white.png"
        }
        alt="logo"
      />
    </section>
    {children}
  </div>
);

const ForgotPasswordLayout = ({ children }) => (
  <div className="h-full grid place-items-center py-20">
    {children}
  </div>
);
export default LayoutOnRoute;
