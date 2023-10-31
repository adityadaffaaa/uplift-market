"use client";

import React, { useEffect } from "react";
import { Button } from "@nextui-org/react";
import icons from "@/app/utils/icons";
import { Tabs, Tab } from "@nextui-org/react";
import { DashboardNavbar } from "../components";
import { useSnackbar } from "notistack";

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
      <section className="w-full lg:w-[calc(100%-280px)] p-5 lg:pt-8 lg:px-8 pb-3 flex flex-col gap-9 mt-16 lg:mt-0">
        <div className="flex justify-between items-center ">
          <div className="flex flex-col gap-4">
            <p className="text-paragraph3 lg:text-heading1Res">
              Produk Saya
            </p>
            <Tabs
              variant="underlined"
              aria-label="Tabs variants"
              className="hidden lg:block"
              color="primary"
            >
              <Tab key="all" title="Semua Produk (10)" />
              <Tab key="active" title="Aktif" />
              <Tab key="nonActive" title="Nonaktif" />
            </Tabs>
          </div>
          <Button
            color="primary"
            radius="sm"
            startContent={<AddIcon />}
          >
            Tambah Produk
          </Button>
        </div>
        {children}
      </section>
    </>
  );
};

export default DashboardMainLayout;
