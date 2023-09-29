"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { usePathname, redirect } from "next/navigation";
import { Cookies } from "react-cookie";

const AuthLayout = ({ children }) => {
  const pathName = usePathname();
  const cookies = new Cookies();

  useEffect(() => {
    const token = cookies.get("token");
    if (token && token !== undefined) {
      redirect("/");
    }
  }, [cookies]);

  const HandleLayout = () =>
    pathName === "/register-vendor" ? (
      <RegisterVendorLayout />
    ) : (
      <UserAuthLayout />
    );

  const RegisterVendorLayout = () => (
    <div className="h-full grid place-items-center md:bg-greyBackground">
      {children}
    </div>
  );

  const UserAuthLayout = () => (
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

  return <HandleLayout />;
};

export default AuthLayout;
