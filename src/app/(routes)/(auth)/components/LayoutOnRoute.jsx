"use client";

import React from "react";
import { usePathname, redirect } from "next/navigation";
import { Cookies } from "react-cookie";
const LayoutOnRoute = ({ children }) => {
  const pathName = usePathname();
  const cookies = new Cookies();
  const token = cookies.get("token");

  const HandleLayout = () => {
    if (pathName === "/register-vendor") {
      return <RegisterVendorLayout children={children} />;
    } else if (pathName === "/login-vendor") {
      return <LoginVendorLayout children={children} />;
    } else if (token && token !== undefined) {
      redirect("/");
    } else if (pathName.startsWith("/reset-password")) {
      return <ForgotPasswordLayout children={children} />;
    } else if (pathName.startsWith("/pengaturan-akun")) {
      return <PengaturanAkunLayout children={children} />;
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
      <img
        src={"/assets/images/img-logo-upliftmarket-white.png"}
        alt="logo"
        loading="lazy"
        className="w-[400px]"
      />
    </section>
    {children}
  </div>
);

const ForgotPasswordLayout = ({ children }) => (
  <div className="h-full grid place-items-center py-20">{children}</div>
);

const PengaturanAkunLayout = ({ children }) => (
  <div className="h-full grid place-items-center py-20 lg:bg-greyBackground">
    {children}
  </div>
);

const LoginVendorLayout = ({ children }) => (
  <div className="h-screen grid place-items-center bg-primary relative overflow-hidden">
    <img
      src="/assets/images/img-bg-login-vendor.png"
      alt=""
      className="absolute -right-72 -top-72 h-[800px]"
      loading="lazy"
    />
    {children}
  </div>
);
export default LayoutOnRoute;
