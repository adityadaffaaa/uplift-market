"use client";

import React, { useEffect, useState } from "react";
import NavbarOnLoggedInCondition from "./NavbarOnLoggedInCondition";
import { useSnackbar } from "notistack";
import {
  NavbarGuestCondition,
  LoadingIndicator,
  Toast,
} from "..";
import { useDisclosure } from "@nextui-org/react";
import { Cookies } from "react-cookie";
import { NavbarUserSkeleton } from "..";
import { useAuth } from "@/app/hooks/user/auth";
import icons from "@/app/utils/icons";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
const {
  AccountCircleIcon,
  ChatIcon,
  LabProfileIcon,
  WishlistIcon,
} = icons.navbarIcon;

const NavbarCondition = () => {
  const { data: session, status } = useSession();
  const [alerts, setAlerts] = useState([]);
  const cookie = new Cookies();
  const { logout } = useAuth();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const resMessage = cookie.get("resMessage");

    if (resMessage) {
      enqueueSnackbar({
        message: resMessage,
        variant: "success",
        autoHideDuration: 2000,
      });
      cookie.remove("resMessage");
    }
  }, []);

  const handleLogOut = async () => {
    const token = session?.user.token;

    if (token && session.user.role === "user") {
      try {
        onOpen();
        const res = await logout({ setAlerts, token });
        if (res?.status === 200) {
          const resMessage = res?.data?.message;
          cookie.set("resMessage", resMessage);
          await signOut({ redirect: false });
          window.location.href = "/";
        }
      } catch (error) {
        onClose();
        console.error("Something wrong", error);
      }
    }
  };

  return (
    <>
      <Toast alerts={alerts} duration={2000} start />
      <LoadingIndicator
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      />
      {status === "loading" ? (
        <NavbarUserSkeleton />
      ) : status === "authenticated" &&
        session.user.role === "user" ? (
        <NavbarOnLoggedInCondition
          user={session}
          accountMenu={accountMenu}
          handleLogOut={handleLogOut}
        />
      ) : (
        <NavbarGuestCondition />
      )}
    </>
  );
};

const accountMenu = [
  {
    title: "Akun Saya",
    url: "#",
    icon: <AccountCircleIcon />,
  },
  {
    title: "Project",
    url: "#",
    icon: <LabProfileIcon />,
  },
  {
    title: "Chat",
    url: "#",
    icon: <ChatIcon />,
  },
  {
    title: "Wishlist",
    url: "#",
    icon: <WishlistIcon />,
  },
];

export default NavbarCondition;
