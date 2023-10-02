"use client";

import React, {
  useState,
  useLayoutEffect,
  useEffect,
} from "react";
import Link from "next/link";
import LinkRoundedButton from "./LinkRoundedButton";
import { _api, Icon } from "@iconify/react";
import fetch from "cross-fetch";
import Image from "next/image";
import { useAuth } from "../hooks/auth";
import { animateScroll as scrollPage } from "react-scroll";
import { Badge } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Cookies, useCookies } from "react-cookie";
import { useProfile } from "../hooks/profile";
import Toast from "./Toast";
import {
  useSearchParams,
  useRouter,
} from "next/navigation";
import { useDisclosure } from "@nextui-org/react";
import LoadingIndicator from "./LoadingIndicator";
_api.setFetch(fetch);

const Navbar = () => {
  const { logout } = useAuth();
  const { getProfile } = useProfile();
  const cookies = new Cookies();
  const [getCookies, setCookies] = useCookies();
  const [alerts, setAlerts] = useState([]);
  const [session, setSession] = useState("");
  const [user, setUser] = useState(null);
  const [scroll, setScrolled] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const data = searchParams.get("data");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    const token = cookies.get("token");
    if (token) {
      setSession(token);
      const fetchUser = async () => {
        try {
          const res = await getProfile({
            setAlerts,
            token,
          });
          setUser(res);
        } catch (error) {
          console.error("Something wrong", error);
        }
      };
      fetchUser();
    }

    if (data) {
      try {
        const userData = JSON.parse(data);
        setCookies("token", userData.original.data.token);
        setSession(token);
        router.replace("/");
      } catch (error) {
        console.error("Something wrong", error);
      }
    }
  }, [session, setAlerts]);

  useLayoutEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    scrollPage.scrollToTop({
      duration: 0,
    });
  };

  const MenuListItem = ({ title, url }) => (
    <li>
      <Link
        className="text-subtitle text-textBlack font-medium lg:hover:text-primary transition-default"
        href={url}
      >
        {title}
      </Link>
    </li>
  );

  const MenuList = () =>
    routes.map(({ title, url }, index) => (
      <MenuListItem key={index} title={title} url={url} />
    ));

  const NavbarOnMobile = () => (
    <div className="drawer drawer-end lg:hidden flex justify-end">
      <input
        id="my-drawer"
        type="checkbox"
        className="drawer-toggle"
      />
      <div className="drawer-content">
        <label
          htmlFor="my-drawer"
          className="btn btn-ghost drawer-button"
        >
          <Icon
            height={24}
            width={24}
            className="text-textBlack"
            icon="healthicons:ui-menu-grid"
          />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          className="drawer-overlay"
        ></label>
        <div className="menu flex flex-col gap-5 p-4 w-80 min-h-full bg-base-200 text-base-content">
          <label
            htmlFor="my-drawer"
            className="btn btn-ghost drawer-button flex justify-end self-end "
          >
            <Icon
              height={24}
              width={24}
              icon="ic:round-close"
            />
          </label>
          <ul>
            <MenuList />
          </ul>
          <div className="flex flex-col gap-4">
            {session ? (
              <OnLoggedInCondition />
            ) : (
              <GuestCondition />
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const NavbarStandard = () => (
    <menu className="gap-8 items-center hidden lg:flex">
      <ul className="flex gap-9">
        <MenuList />
      </ul>
      <div className="flex gap-4 items-center">
        {session ? (
          <OnLoggedInCondition />
        ) : (
          <GuestCondition />
        )}
      </div>
    </menu>
  );

  const OnLoggedInCondition = () => (
    <div className="flex items-center text-neutral-600 gap-2">
      <Button
        isIconOnly
        variant="bordered"
        radius="full"
        size="md"
        className="hidden place-items-center lg:grid"
      >
        <Badge content="5" color="danger" size="sm">
          <Icon height={18} icon="ph:bell" />
        </Badge>
      </Button>
      <menu className="flex flex-col w-full gap-4 lg:hidden">
        <div className="flex items-center gap-4 px-4 ">
          <div className="avatar">
            <div className="w-10 rounded-xl">
              <img src="assets/images/img-profile-picture.png" />
            </div>
          </div>
          <p className="capitalize text-paragraph7">
            {user && user.data.attributes.first_name}
          </p>
        </div>
        <hr />
        <ul>
          <li>
            <div className="flex">
              <Icon height={24} icon="ph:bell" />
              <Link href={"#"}>Notifikasi</Link>
            </div>
          </li>
          {accountMenu.map(
            ({ url, title, icon }, index) => (
              <li key={index}>
                <div className="flex">
                  {icon}
                  <Link href={url}>{title}</Link>
                </div>
              </li>
            )
          )}
          <li>
            <button
              className="rounded-md hover:bg-secondary hover:text-white text-paragraph9 text-neutral-600 flex gap-3"
              onClick={handleLogOut}
            >
              <Icon height={24} icon="ic:round-logout" />
              Logout
            </button>
          </li>
        </ul>
      </menu>
      <details className="dropdown hidden lg:block">
        <summary className="m-1 items-center cursor-pointer flex gap-1 lg:gap-4 hover:bg-transparent">
          <div className="avatar">
            <div className="w-10 rounded-xl">
              <img src="assets/images/img-profile-picture.png" />
            </div>
          </div>
          <p className="capitalize text-paragraph7">
            {user && user.data.attributes.first_name}
          </p>
          <Icon
            height={24}
            icon="material-symbols:keyboard-arrow-down-rounded"
          />
        </summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-lg w-52">
          {accountMenu.map(
            ({ icon, title, url }, index) => (
              <li key={index}>
                <Link
                  href={url}
                  className="rounded-md text-paragraph9 text-neutral-600 flex gap-3"
                >
                  {icon}
                  {title}
                </Link>
              </li>
            )
          )}
          <li>
            <button
              className="rounded-md hover:bg-secondary hover:text-white text-paragraph9 text-neutral-600 flex gap-3"
              onClick={handleLogOut}
            >
              <Icon height={24} icon="ic:round-logout" />
              Logout
            </button>
          </li>
        </ul>
      </details>
    </div>
  );

  const GuestCondition = () => (
    <>
      <LinkRoundedButton
        url="/login"
        title={"login"}
        customClassName={
          "hover:bg-primary hover:border-primary hover:text-white"
        }
        bordered
      />
      <LinkRoundedButton
        url="/register"
        title={"sign up"}
        customClassName={"text-white hover:bg-green70"}
      />
    </>
  );

  const handleLogOut = async () => {
    onOpen(true);
    const res = await logout(session);
    cookies.remove("token");
    cookies.remove("laravel_session");
    cookies.remove("XSRF-TOKEN");
    return res;
  };

  return (
    <header
      className={`w-full justify-center py-2 flex fixed top-0 z-50 transition-linear ${
        scroll
          ? "bg-white shadow-defaultShadow lg:py-4"
          : "bg-transparent lg:py-6"
      }`}
    >
      <Toast alerts={alerts} start duration={2000} />
      <LoadingIndicator
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      />
      <nav className="flex justify-between w-[90%] lg:w-4/5 items-center ">
        <Link href="/">
          <Image
            height={24}
            width={110}
            src={"/assets/images/img-logo-upliftmarket.png"}
            alt="logo"
          />
        </Link>
        <NavbarStandard />
        <NavbarOnMobile />
      </nav>
      <button
        onClick={scrollToTop}
        data-aos="fade-up"
        data-aos-duration="1000"
        className="toast "
      >
        <div className="btn btn-ghost rounded-full bg-secondary hover:bg-primary text-white">
          <Icon
            className="animate-bounce"
            icon="ep:arrow-up-bold"
          />
        </div>
      </button>
    </header>
  );
};

const routes = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About Us",
    url: "#",
  },
  {
    title: "Contact",
    url: "#",
  },
];

const accountMenu = [
  {
    title: "Akun Saya",
    url: "#",
    icon: (
      <Icon
        height={24}
        icon="material-symbols:account-circle-outline"
      />
    ),
  },
  {
    title: "Project",
    url: "#",
    icon: (
      <Icon
        height={24}
        icon="material-symbols:lab-profile-outline-rounded"
      />
    ),
  },
  {
    title: "Chat",
    url: "#",
    icon: (
      <Icon
        height={24}
        icon="material-symbols:chat-outline-rounded"
      />
    ),
  },
  {
    title: "Whislist",
    url: "#",
    icon: (
      <Icon
        height={24}
        icon="material-symbols:heart-check-outline-rounded"
      />
    ),
  },
];
export default Navbar;
