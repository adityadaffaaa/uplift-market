import React from "react";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import icons from "@/app/utils/icons";
import { useSidebar } from "../../context/DashboardNavbarContext";

const { MenuIcon } = icons.navbarIcon;

export const DashboardNavbar = () => {
  const { toggleSidebar } = useSidebar();
  return (
    <header
      className={`w-full justify-center flex fixed top-0 z-40 transition-linear bg-white shadow-defaultShadow py-4 lg:hidden`}
    >
      <nav className="flex justify-between w-[90%] lg:w-4/5 items-center ">
        <Button
          onClick={toggleSidebar}
          isIconOnly
          radius="sm"
          variant="light"
        >
          <MenuIcon />
        </Button>
        <Link href="/dashboard">
          <img
            src={"/assets/images/img-logo-upliftmarket.png"}
            alt="logo"
            className="w-[110px]"
            loading="lazy"
          />
        </Link>
      </nav>
    </header>
  );
};

export default DashboardNavbar;
