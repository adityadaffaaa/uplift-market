"use client";

import "./style/globals.css";
import { DM_Sans } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { usePathname } from "next/navigation";
const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Uplift Market",
  description: "Project Tim 4",
};

const RootLayout = ({ children }) => {
  const pathName = usePathname();

  const HandleNavbar = () =>
    pathName !== "/login" &&
    pathName !== "/register" && <Navbar />;

  const HandleFooter = () =>
    pathName !== "/login" &&
    pathName !== "/register" &&
    pathName !== "/register-vendor" && <Footer />;

  return (
    <html
      className="scroll-smooth"
      lang="en"
      data-theme="light"
    >
      <head>
        <title>Uplift Market</title>
        <meta name="description" content="" />
        <link
          rel="icon"
          href="/assets/icons/icon-logo-upliftmarket.png"
        />
      </head>
      <body
        className={`${dmSans.className} scrollbar custom-scrollbar`}
      >
        <HandleNavbar />
        <main>{children}</main>
        <HandleFooter />
      </body>
    </html>
  );
};

export default RootLayout;
