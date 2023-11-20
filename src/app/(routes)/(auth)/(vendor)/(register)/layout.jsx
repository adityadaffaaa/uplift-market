import React from "react";
import { Navbar } from "@/app/components";
const RegisterVendorLayout = ({ children }) => (
  <>
    <Navbar />
    <div className="h-full grid place-items-center md:bg-greyBackground">
      {children}
    </div>
  </>
);

export default RegisterVendorLayout;
