"use client";

import "./style/globals.css";
import { DM_Sans } from "next/font/google";
import Navbar from "./components/Navbar";
import { usePathname } from "next/navigation";
const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Uplift Market",
  description: "Project Tim 4",
};

const RootLayout = ({ children }) => {
  const pathName = usePathname();

  const handleNavbar = () =>
    pathName !== "/login" &&
    pathName !== "/register" && <Navbar />;

  return (
    <html lang="en" data-theme="light">
      <head>
        <title>Uplift Market</title>
        <meta name="description" content="" />
        <link
          rel="icon"
          href="/assets/icons/icon-google.png"
        />
      </head>
      <body className={dmSans.className}>
        {handleNavbar()}
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
