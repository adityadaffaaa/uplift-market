"use client";

import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";

const AuthLayout = ({ children }) => {
  const pathName = usePathname();

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
