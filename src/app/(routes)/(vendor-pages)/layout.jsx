import React from "react";
import { SidebarOnRoute } from "./components";

const VendorLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-neutral-100">
      <SidebarOnRoute />
      {children}
    </div>
  );
};

export default VendorLayout;
