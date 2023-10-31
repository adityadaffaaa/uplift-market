"use client";

import React, { useState } from "react";
import Link from "next/link";
import icons from "@/app/utils/icons";
import { Button } from "@nextui-org/react";
import {
  Accordion,
  AccordionItem,
} from "@nextui-org/react";
import { useSidebar } from "../../context/DashboardNavbarContext";
import { usePathname } from "next/navigation";

const {
  ChatOutlineIcon,
  ContractOutlineIcon,
  HomeOutlineIcon,
  InfoOutlineIcon,
  InventoryIcon,
  SettingsOutlineIcon,
  TableChartViewOutlineIcon,
  PaymentOutlineIcon,
  RateReviewOutlineIcon,
} = icons.vendorDashboard.sideBar;

const { CloseIcon } = icons.navbarIcon;

const Sidebar = () => {
  const pathName = usePathname();
  const [expand, setExpand] = useState(null);

  const { isSidebarOpen, toggleSidebar } = useSidebar();

  const MenuItem = ({
    keyAccordion,
    link,
    children,
    className,
    isActive,
    icon,
    title,
    hasMoreMenu,
    moreMenu,
    isMoreMenu,
  }) => (
    <li>
      {hasMoreMenu ? (
        <Accordion defaultExpandedKeys={[expand]}>
          <AccordionItem
            key={keyAccordion}
            onPress={() => setExpand(keyAccordion)}
            aria-label="Accordion 1"
            title={
              <div className="flex items-center gap-2 text-neutral-600">
                {icon}
                {title}
              </div>
            }
            classNames={{
              title: "text-paragraph9",
              trigger: "py-2 px-0",
            }}
          >
            <div className="flex flex-col gap-1">
              {moreMenu}
            </div>
          </AccordionItem>
        </Accordion>
      ) : (
        <Link
          href={link}
          className={`flex  items-center w-full p-2 gap-3 rounded-lg transition-linear hover:bg-neutral-100 text-paragraph9 text-neutral-600 ${className} ${
            isActive
              ? "bg-neutral-100 text-primary"
              : "bg-white"
          }`}
        >
          {isMoreMenu ? (
            <span className="w-[6px]"></span>
          ) : (
            icon
          )}
          {children}
        </Link>
      )}
    </li>
  );

  return (
    <aside
      className={`p-3 h-full lg:w-[280px] w-full bg-[rgba(0,0,0,0.5)] lg:bg-transparent fixed lg:relative z-50 lg:block ${
        isSidebarOpen ? "block " : "hidden"
      }
      `}
    >
      <menu
        className={`bg-white shadow-defaultShadow h-full p-3 w-full md:w-[280px] lg:w-full rounded-xl overflow-y-auto custom-scrollbar lg:translate-x-0 ${
          isSidebarOpen
            ? "translate-x-0"
            : "-translate-x-96"
        }
        transition-transform duration-300 ease-linear delay-300
        `}
      >
        <Button
          variant="light"
          isIconOnly
          className="lg:hidden"
          onClick={toggleSidebar}
        >
          <CloseIcon />
        </Button>
        <ul className="flex flex-col gap-1">
          {menuData.map(
            (
              { icon, link, title, hasMoreMenu, moreMenu },
              index
            ) => {
              return (
                <MenuItem
                  key={index}
                  icon={icon}
                  link={link}
                  title={title}
                  hasMoreMenu={hasMoreMenu}
                  isActive={link === pathName}
                  moreMenu={
                    <>
                      {moreMenu?.map(
                        ({ link, titleMore }, index) => {
                          return (
                            <MenuItem
                              key={index}
                              keyAccordion={title}
                              isActive={link === pathName}
                              isMoreMenu
                              link={link}
                            >
                              {titleMore}
                            </MenuItem>
                          );
                        }
                      )}
                    </>
                  }
                >
                  {title}
                </MenuItem>
              );
            }
          )}
        </ul>
      </menu>
    </aside>
  );
};

const menuData = [
  {
    icon: <HomeOutlineIcon />,
    link: "/dashboard",
    title: "Beranda",
  },
  {
    icon: <ChatOutlineIcon />,
    link: "/dashboard/chat",
    title: "Chat",
  },
  {
    icon: <InventoryIcon />,
    link: null,
    title: "Produk",
    hasMoreMenu: true,
    moreMenu: [
      {
        link: "/dashboard/product-list-vendor",
        titleMore: "Produk Saya",
      },
      {
        link: "/dashboard/add-product",
        titleMore: "Tambah Produk",
      },
    ],
  },
  {
    icon: <ContractOutlineIcon />,
    link: null,
    title: "Pesanan",
    hasMoreMenu: true,
    moreMenu: [
      {
        link: "/dashboard/pesanan-saya",
        titleMore: "Pesanan Saya",
      },
      {
        link: "/dashboard/pesanan-masuk",
        titleMore: "Pesanan Masuk",
      },
    ],
  },
  {
    icon: <PaymentOutlineIcon />,
    link: "/dashboard/keuangan",
    title: "Keuangan",
  },
  {
    icon: <SettingsOutlineIcon />,
    link: null,
    title: "Pengaturan",
    hasMoreMenu: true,
    moreMenu: [
      {
        link: "/dashboard/alamat-saya",
        titleMore: "Alamat Saya",
      },
      {
        link: "/dashboard/pengaturan-vendor",
        titleMore: "Pengaturan Vendor",
      },
      {
        link: "/dashboard/pengaturan-akun",
        titleMore: "Pengaturan Akun",
      },
    ],
  },
  {
    icon: <TableChartViewOutlineIcon />,
    link: "/dashboard/statistik-vendor",
    title: "Statistik Vendor",
  },
  {
    icon: <RateReviewOutlineIcon />,
    link: "/dashboard/ulasan",
    title: "Ulasan",
  },
  {
    icon: <InfoOutlineIcon />,
    link: "/dashboard/bantuan",
    title: "Bantuan",
  },
];

export default Sidebar;
