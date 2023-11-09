"use client";

import React, { useEffect } from "react";
import { Button } from "@nextui-org/react";
import icons from "@/app/utils/icons";
import { Tabs, Tab } from "@nextui-org/react";
import { DashboardNavbar } from "../components";
import { useSnackbar } from "notistack";

import HeaderCondition from "./HeaderCondition";
const { AddIcon } = icons.vendorDashboard.productListVendor;

export const DashboardMainLayout = ({ children }) => {
  const { enqueueSnackbar } = useSnackbar();

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
  return (
    <>
      <DashboardNavbar />
      <section className="w-full lg:w-[calc(100%-280px)] h-screen overflow-y-auto custom-scrollbar p-5 lg:pt-8 lg:px-8 pb-3 flex flex-col gap-9 mt-16 lg:mt-0">
        <HeaderCondition />
        {children}
      </section>
    </>
  );
};

export default DashboardMainLayout;
