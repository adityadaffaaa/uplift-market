import React from "react";
import { Navbar, Footer } from "@/app/components";
const LandingPageLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default LandingPageLayout;
