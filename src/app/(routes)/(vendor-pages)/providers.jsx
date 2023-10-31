"use client";

import React, { useState } from "react";
import { DashboardNavbarContext } from "./context/DashboardNavbarContext";
import { SidebarOnRoute } from "./components";

const Providers = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <DashboardNavbarContext.Provider
      value={{ isSidebarOpen, toggleSidebar }}
    >
      <SidebarOnRoute />
      {children}
    </DashboardNavbarContext.Provider>
  );
};

export default Providers;
