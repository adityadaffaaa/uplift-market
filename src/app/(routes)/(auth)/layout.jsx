"use client";

import React from "react";
import Image from "next/image";
import { usePathname, redirect } from "next/navigation";
import { Cookies } from "react-cookie";

const AuthLayout = ({ children }) => {
  const pathName = usePathname();
  const cookies = new Cookies();
  const token = cookies.get("token");

  const HandleLayout = () => {
    if (pathName === "/register-vendor") {
      return <RegisterVendorLayout />;
    } else if (token && token !== undefined) {
      redirect("/");
    } else if (
      pathName === "/forgot-password/1" ||
      pathName === "/forgot-password/2" ||
      pathName === "/forgot-password/3"
    ) {
      return <ForgotPasswordLayout />;
    } else {
      return <UserAuthLayout />;
    }
  };

  const RegisterVendorLayout = () => (
    <div className="h-full grid place-items-center md:bg-greyBackground">
      {children}
    </div>
  );

  const ForgotPasswordLayout = () => (
    <div className="h-full grid place-items-center bg-white py-20">
      {children}
    </div>
  );

  const UserAuthLayout = () => (
    <div className="h-screen flex flex-col items-center lg:flex-row">
      <section className="bg-primary flex-1 lg:grid place-items-center h-full hidden">
        <Image
          height={90}
          width={400}
          src={"/assets/images/img-logo-upliftmarket-white.png"}
          alt="logo"
        />
      </section>
      {children}
    </div>
  );

  return <HandleLayout />;
};

export default AuthLayout;
