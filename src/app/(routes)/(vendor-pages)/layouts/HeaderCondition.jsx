"use client";
import React from "react";
import HeaderLayout from "./HeaderLayout";
import { Tabs, Tab } from "@nextui-org/react";
import { usePathname, useRouter } from "next/navigation";
import icons from "@/app/utils/icons";
import { Button } from "@nextui-org/react";

const { AddIcon } = icons.vendorDashboard.productListVendor;
const { ArrowBackIcon } =
  icons.vendorDashboard.addProductVendor;

export const HeaderCondition = () => {
  const pathName = usePathname();

  return pathName.endsWith("/product-list-vendor") ? (
    <ProductListVendorHeadLayout />
  ) : pathName.endsWith("/keuangan") ? (
    <KeuanganHeadLayout />
  ) : pathName.endsWith("/pengaturan-vendor") ? (
    <PengaturanVendorLayout />
  ) : pathName.endsWith("/add-product") ? (
    <TambahProdukLayout />
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

const ProductListVendorHeadLayout = () => {
  const router = useRouter();

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
        <Button
          color="primary"
          radius="sm"
          onClick={() =>
            router.push(
              "/dashboard/product-list-vendor/add-product"
            )
          }
          startContent={<AddIcon />}
        >
          Tambah Produk
        </Button>
      }
    />
  );
};
const KeuanganHeadLayout = () => {
  return <HeaderLayout title={"Keuangan"} />;
};
const TambahProdukLayout = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-start gap-2">
      <Button
        color="primary"
        variant="light"
        radius="sm"
        onClick={() => router.back()}
        startContent={<ArrowBackIcon />}
      >
        Kembali
      </Button>
      <HeaderLayout title={"Tambah Produk"} />
    </div>
  );
};

export default HeaderCondition;
