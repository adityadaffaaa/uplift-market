"use client";

import React, { useEffect, useState } from "react";
import NavbarOnLoggedInCondition from "./NavbarOnLoggedInCondition";
import { useSnackbar } from "notistack";
import { NavbarGuestCondition, LoadingIndicator } from "..";
import { useDisclosure } from "@nextui-org/react";
import { useProfile } from "@/app/hooks/user/profile";
import { Cookies } from "react-cookie";
import { NavbarUserSkeleton } from "..";
import { useAuth } from "@/app/hooks/user/auth";
import { Toast } from "..";
import icons from "@/app/utils/icons";

const {
  AccountCircleIcon,
  ChatIcon,
  LabProfileIcon,
  WishlistIcon,
} = icons.navbarIcon;

const NavbarCondition = () => {
  const { getProfile } = useProfile();
  const { logout } = useAuth();
  const cookie = new Cookies();

  const [alerts, setAlerts] = useState([]);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { enqueueSnackbar } = useSnackbar();
  const token = cookie.get("token");

  useEffect(() => {
    const resMessage = localStorage.getItem("resMessage");

    if (resMessage) {
      enqueueSnackbar({
        message: resMessage,
        variant: "success",
        autoHideDuration: 3000,
      });
      localStorage.removeItem("resMessage");
    }

    if (token) {
      const fetchUser = async () => {
        try {
          setIsLoading(true);
          const res = await getProfile({
            token,
            setAlerts,
          });
          setUser(res);

          setIsLoading(false);
        } catch (error) {
          setIsLoading(false);
          console.error("Something wrong", error);
        }
      };
      if (!user) {
        fetchUser();
      }
    }
  }, [user, alerts]);

  const handleLogOut = async () => {
    if (token) {
      try {
        onOpen();
        const res = await logout(token);

        if (res?.status === 200) {
          const resMessage = res?.data?.message;
          localStorage.setItem("resMessage", resMessage);
          cookie.remove("token");
          cookie.remove("laravel_session");
          cookie.remove("XSRF-TOKEN");
        }
      } catch (error) {
        onClose();
        console.error("Something wrong", error);
      }
    }
  };

  return (
    <>
      <Toast alerts={alerts} start duration={2000} />
      <LoadingIndicator
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      />
      {!isLoading ? (
        user ? (
          <NavbarOnLoggedInCondition
            user={user}
            accountMenu={accountMenu}
            handleLogOut={handleLogOut}
          />
        ) : (
          <NavbarGuestCondition />
        )
      ) : (
        <NavbarUserSkeleton />
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
