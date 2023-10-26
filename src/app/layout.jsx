"use client";

import "./style/globals.css";
import { DM_Sans } from "next/font/google";
import { Navbar, Footer } from "@/app/components";
import { usePathname } from "next/navigation";
import { NextUIProvider } from "@nextui-org/react";
const dmSans = DM_Sans({ subsets: ["latin"] });

const RootLayout = ({ children }) => {
  const pathName = usePathname();

  const HandleNavbar = () =>
    pathName !== "/login" && pathName !== "/register" && <Navbar />;

  const HandleFooter = () =>
    pathName !== "/login" &&
    pathName !== "/register" &&
    pathName !== "/register-vendor" &&
    !pathName.startsWith("/booking") ? (
      <Footer />
    ) : null;

  const DashboardVendorLayout = () => (
    <html className="scroll-smooth" lang="en" data-theme="light">
      <head>
        <title>Uplift Market</title>
        <meta name="description" content="" />
        <link rel="icon" href="/assets/icons/icon-logo-upliftmarket.png" />
      </head>
      <body className={`${dmSans.className} scrollbar custom-scrollbar`}>
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );

  const HandleLayout = () => {
    if (pathName === "/product-list-vendor") {
      return <DashboardVendorLayout />;
    } else {
      return <DefaultLayout />;
    }
  };

  const DefaultLayout = () => (
    <html className="scroll-smooth" lang="en" data-theme="light">
      <head>
        <title>Uplift Market</title>
        <meta name="description" content="" />
        <link rel="icon" href="/assets/icons/icon-logo-upliftmarket.png" />
      </head>
      <body className={`${dmSans.className} scrollbar custom-scrollbar`}>
        <NextUIProvider>
          <HandleNavbar />
          <main>{children}</main>
          <HandleFooter />
        </NextUIProvider>
      </body>
    </html>
  );

  return <HandleLayout />;
};

export default RootLayout;
