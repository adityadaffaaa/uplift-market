"use client";
import React from "react";
import HeaderLayout from "./HeaderLayout";
import { Tabs, Tab } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import icons from "@/app/utils/icons";
import { Button } from "@nextui-org/react";

const { AddIcon } = icons.vendorDashboard.productListVendor;

export const HeaderCondition = () => {
  const pathName = usePathname();

  return pathName.endsWith("/product-list-vendor") ? (
    <ProductListVendorHeadLayout></ProductListVendorHeadLayout>
  ) : pathName.endsWith("/keuangan") ? (
    <KeuanganHeadLayout />
  ) : pathName.endsWith("/pengaturan-vendor") ? (
    <PengaturanVendorLayout />
  ) : pathName.endsWith("/pengaturan-akun") ? (
    <PengaturanAkunVendorLayout />
  ) : pathName.endsWith("/forgot-password") ? (
    <PengaturanAkunVendorLayout />
  ) : (
    <BerandaHeadLayout />
  );
};

const BerandaHeadLayout = () => {
  return <HeaderLayout title={"Beranda"} />;
};

const PengaturanVendorLayout = () => {
  return <HeaderLayout title={"Pengaturan Vendor"} />;
};

const PengaturanAkunVendorLayout = () => {
  return <HeaderLayout title={""} />;
};

const ProductListVendorHeadLayout = () => {
  return (
    <HeaderLayout
      title={"Produk Saya"}
      tabs={
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
      }
      moreAction={
        <Button color="primary" radius="sm" startContent={<AddIcon />}>
          Tambah Produk
        </Button>
      }
    />
  );
};
const KeuanganHeadLayout = () => {
  return <HeaderLayout title={"Keuangan"} />;
};

export default HeaderCondition;
