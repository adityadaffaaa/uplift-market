"use client";

import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
const ProviderPage = ({ children }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return <>{children}</>;
};

export default ProviderPage;
