"use client";

import React, { useState, useEffect } from "react";
import { DashboardNavbarContext } from "./context/DashboardNavbarContext";
import { useSnackbar } from "notistack";
import { Cookies } from "react-cookie";
const Providers = ({ children }) => {
  const cookie = new Cookies();
  const { enqueueSnackbar } = useSnackbar();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const resMessage = cookie.get("resMessage");

    if (resMessage) {
      enqueueSnackbar({
        message: resMessage,
        variant: "success",
        autoHideDuration: 3000,
      });
      cookie.remove("resMessage");
    }
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <DashboardNavbarContext.Provider
      value={{ isSidebarOpen, toggleSidebar }}
    >
      {children}
    </DashboardNavbarContext.Provider>
  );
};

export default Providers;
