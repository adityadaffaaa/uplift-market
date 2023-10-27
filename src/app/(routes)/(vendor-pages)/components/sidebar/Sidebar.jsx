"use client";

import React from "react";
import Link from "next/link";
import icons from "@/app/utils/icons";
import {
  Accordion,
  AccordionItem,
} from "@nextui-org/react";

const {
  ChatOutlineIcon,
  ContractOutlineIcon,
  DensityIcon,
  ExpandMoreIcon,
  HomeOutlineIcon,
  InfoOutlineIcon,
  InventoryIcon,
  SettingsOutlineIcon,
  TableChartViewOutlineIcon,
  PaymentOutlineIcon,
  RateReviewOutlineIcon,
} = icons.vendorDashboard.sideBar;

const Sidebar = () => {
  const MenuItem = ({
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
        <Accordion>
          <AccordionItem
            key="1"
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
            {moreMenu}
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
    <aside className="p-3 h-full w-[280px]">
      <menu className="bg-white shadow-defaultShadow h-full p-3 rounded-xl overflow-y-auto custom-scrollbar">
        <ul className="flex flex-col gap-1">
          <MenuItem
            icon={<HomeOutlineIcon />}
            link={"/dashboard"}
            isActive
          >
            Beranda
          </MenuItem>
          <MenuItem
            icon={<ChatOutlineIcon />}
            link={"/dashboard"}
          >
            Chat
          </MenuItem>
          <MenuItem
            icon={<InventoryIcon />}
            title={"Produk"}
            hasMoreMenu
            moreMenu={
              <>
                <MenuItem isMoreMenu link={"/dashboard"}>
                  Produk Saya
                </MenuItem>
                <MenuItem isMoreMenu link={"/dashboard"}>
                  Tambah Produk
                </MenuItem>
              </>
            }
          />
          <MenuItem
            icon={<ContractOutlineIcon />}
            title={"Pesanan"}
            hasMoreMenu
            moreMenu={
              <>
                <MenuItem isMoreMenu link={"/dashboard"}>
                  Pesanan Saya
                </MenuItem>
                <MenuItem isMoreMenu link={"/dashboard"}>
                  Pesanan Masuk
                </MenuItem>
              </>
            }
          />
          <MenuItem
            icon={<PaymentOutlineIcon />}
            link={"/dashboard"}
          >
            Keuangan
          </MenuItem>
          <MenuItem
            icon={<SettingsOutlineIcon />}
            title={"Pengaturan"}
            hasMoreMenu
            moreMenu={
              <>
                <MenuItem isMoreMenu link={"/dashboard"}>
                  Alamat Saya
                </MenuItem>
                <MenuItem isMoreMenu link={"/dashboard"}>
                  Pengaturan Vendor
                </MenuItem>
                <MenuItem isMoreMenu link={"/dashboard"}>
                  Pengaturan Akun
                </MenuItem>
              </>
            }
          />
          <MenuItem
            icon={<TableChartViewOutlineIcon />}
            link={"/dashboard"}
          >
            Statistik Vendor
          </MenuItem>
          <MenuItem
            icon={<RateReviewOutlineIcon />}
            link={"/dashboard"}
          >
            Ulasan
          </MenuItem>
          <MenuItem
            icon={<InfoOutlineIcon />}
            link={"/dashboard"}
          >
            Bantuan
          </MenuItem>
        </ul>
      </menu>
    </aside>
  );
};
export default Sidebar;
// const [isCollapsed, setIsCollapsed] = useState(true);
// const [isCollapsed2, setIsCollapsed2] = useState(true);
// const [isCollapsed3, setIsCollapsed3] = useState(true);
{
  /* <div className="drawer lg:drawer-open bg-white lg:bg-grey">
      <input
        id="my-drawer"
        type="checkbox"
        className="drawer-toggle"
      />
      <div className="drawer-content">
        <div className="w-full flex flex-col max-w-md lg:max-w-full mx-auto md:max-w-2x"></div>
        <div className="btm-nav lg:hidden">
          <div className="flex flex-col">
            <Button
              color="primary"
              variant="light"
              size="sm"
              aria-label="Take a photo"
            >
              <HomeOutlineIcon
                className={"text-2xl text-textGrey"}
              />
            </Button>
            <p className="text-smallParagraph text-textGrey">
              Home
            </p>
          </div>
          <div className="flex flex-col">
            <Button
              color="primary"
              variant="light"
              size="sm"
              aria-label="Take a photo"
            >
              <ChatOutlineIcon
                className={"text-2xl text-textGrey"}
              />
            </Button>
            <p className="text-smallParagraph text-textGrey">
              Pesan
            </p>
          </div>
          <div className="flex flex-col">
            <Button
              color="primary"
              variant="light"
              size="sm"
              aria-label="Take a photo"
            >
              <ContractOutlineIcon
                className={"text-2xl text-textGrey"}
              />
            </Button>
            <p className="text-smallParagraph text-textGrey">
              Transaksi
            </p>
          </div>
          <div className="flex flex-col">
            <Button
              color="primary"
              variant="light"
              size="sm"
              aria-label="Take a photo"
            >
              <InventoryIcon />
            </Button>
            <p className="text-smallParagraph text-primary">
              Produk
            </p>
          </div>
          <div className="flex flex-col">
            <Button
              color="primary"
              variant="light"
              size="sm"
              aria-label="Take a photo"
            >
              <DensityIcon />
            </Button>
            <p className="text-smallParagraph text-textGrey">
              Lainnya
            </p>
          </div>
        </div>
      </div>
      <div className="drawer-side hidden lg:block bg-white">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <div className="flex flex-col mt-6 items-start gap-y-3 w-64">
          <Link href="#">
            <div className="flex justify-center items-center gap-3 ml-5">
              <HomeOutlineIcon className={"text-black"} />
              <p className="text-paragraph7">Beranda</p>
            </div>
          </Link>
          <Link href="#">
            <div className="flex justify-center items-center gap-3 ml-5">
              <ChatOutlineIcon className={"text-black"} />
              <p className="text-paragraph7">Chat</p>
            </div>
          </Link>
          <Link
            href="#"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <div className="flex flex-row justify-between items-center gap-3 ml-5 w-52">
              <div className="flex items-center gap-3">
                <InventoryIcon />
                <p className="text-paragraph6 text-primary">
                  Produk
                </p>
              </div>
              <div>
                <ExpandMoreIcon />
              </div>
            </div>
          </Link>
          {isCollapsed ? null : (
            <div className="flex flex-col gap-3">
              <Link href="#">
                <div className="flex flex-row justify-between items-center gap-3 ml-5 w-52 bg-[#F0F0F0] rounded-md">
                  <div className="flex items-center gap-3">
                    <p className="text-paragraph8 text-[#595959] ml-7">
                      Produk Saya
                    </p>
                  </div>
                </div>
              </Link>
              <Link href="#">
                <div className="flex flex-row justify-between items-center gap-3 ml-5 w-52 rounded-md">
                  <div className="flex items-center gap-3">
                    <p className="text-paragraph8 text-[#595959] ml-7">
                      Tambah Produk
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          )}
          <Link
            href="#"
            onClick={() => setIsCollapsed2(!isCollapsed2)}
          >
            <div className="flex flex-row justify-between items-center gap-3 ml-5 w-52">
              <div className="flex items-center gap-3">
                <ContractOutlineIcon />
                <p className="text-paragraph7">Pesanan</p>
              </div>
              <div>
                <ExpandMoreIcon />
              </div>
            </div>
          </Link>
          {isCollapsed2 ? null : (
            <div className="flex flex-col gap-3">
              <Link href="#">
                <div className="flex flex-row justify-between items-center gap-3 ml-5 w-52 rounded-md">
                  <div className="flex items-center gap-3">
                    <p className="text-paragraph8 text-[#595959] ml-7">
                      Pesanan Masuk
                    </p>
                  </div>
                </div>
              </Link>
              <Link href="#">
                <div className="flex flex-row justify-between items-center gap-3 ml-5 w-52 rounded-md">
                  <div className="flex items-center gap-3">
                    <p className="text-paragraph8 text-[#595959] ml-7">
                      Pesanan Dibatalkan
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          )}
          <Link href="#">
            <div className="flex justify-center items-center gap-3 ml-5">
              <PaymentOutlineIcon />
              <p className="text-paragraph7">Keuangan</p>
            </div>
          </Link>
          <Link
            href="#"
            onClick={() => setIsCollapsed3(!isCollapsed3)}
          >
            <div className="flex flex-row justify-between items-center gap-3 ml-5 w-52">
              <div className="flex items-center gap-3">
                <SettingsOutlineIcon />
                <p className="text-paragraph7">
                  Pengaturan
                </p>
              </div>
              <div>
                <ExpandMoreIcon />
              </div>
            </div>
          </Link>
          {isCollapsed3 ? null : (
            <div className="flex flex-col gap-3">
              <Link href="#">
                <div className="flex flex-row justify-between items-center gap-3 ml-5 w-52 rounded-md">
                  <div className="flex items-center gap-3">
                    <p className="text-paragraph8 text-[#595959] ml-7">
                      Alamat Saya
                    </p>
                  </div>
                </div>
              </Link>
              <Link href="#">
                <div className="flex flex-row justify-between items-center gap-3 ml-5 w-52 rounded-md">
                  <div className="flex items-center gap-3">
                    <p className="text-paragraph8 text-[#595959] ml-7">
                      Pengaturan Vendor
                    </p>
                  </div>
                </div>
              </Link>
              <Link href="#">
                <div className="flex flex-row justify-between items-center gap-3 ml-5 w-52 rounded-md">
                  <div className="flex items-center gap-3">
                    <p className="text-paragraph8 text-[#595959] ml-7">
                      Pengaturan Akun
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          )}
          <Link href="#">
            <div className="flex justify-center items-center gap-3 ml-5">
              <TableChartViewOutlineIcon />
              <p className="text-paragraph7">
                Statistik Vendor
              </p>
            </div>
          </Link>
          <Link href="#">
            <div className="flex justify-center items-center gap-3 ml-5">
              <RateReviewOutlineIcon />
              <p className="text-paragraph7">Ulasan</p>
            </div>
          </Link>
          <Link href="#">
            <div className="flex justify-center items-center gap-3 ml-5">
              <InfoOutlineIcon />
              <p className="text-paragraph7">Bantuan</p>
            </div>
          </Link>
        </div>
      </div>
    </div> */
}
