"use client";

import React, { useState, useEffect } from "react";
import { DashboardNavbarContext } from "./context/DashboardNavbarContext";
import { useSnackbar } from "notistack";

const Providers = ({ children }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const resMessage = localStorage.getItem("resMessage");

    if (resMessage) {
      enqueueSnackbar({
        message: resMessage,
        variant: "success",
        autoHideDuration: 3000,
      });
      localStorage.removeItem("resMessage");
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
