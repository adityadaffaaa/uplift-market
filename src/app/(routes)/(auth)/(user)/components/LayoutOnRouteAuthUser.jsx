"use client";

import React from "react";
import { Cookies } from "react-cookie";

const LayoutOnRouteAuthUser = async ({ children }) => {
  const cookies = new Cookies();
  const token = await cookies.get("token");

  if (token) {
    window.location.href = "/";
  }
  return token ? null : (
    <div className="h-screen flex flex-col items-center lg:flex-row">
      <section className="bg-primary flex-1 lg:grid place-items-center h-full hidden">
        <img
          src={
            "/assets/images/img-logo-upliftmarket-white.png"
          }
          alt="logo"
          loading="lazy"
          className="w-[400px]"
        />
      </section>
      {children}
    </div>
  );
};

export default LayoutOnRouteAuthUser;
