"use client";

import React, { useEffect, useState } from "react";
import NavbarOnLoggedInCondition from "./NavbarOnLoggedInCondition";
import { useSnackbar } from "notistack";
import { NavbarGuestCondition, LoadingIndicator } from "..";
import { useDisclosure } from "@nextui-org/react";
import { useProfile } from "@/app/hooks/profile";
import { Cookies } from "react-cookie";
import { useSkeletons } from "..";
import { useAuth } from "@/app/hooks/auth";
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
  const { NavbarUserSkeleton } = useSkeletons();
  const [alerts, setAlerts] = useState([]);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { enqueueSnackbar } = useSnackbar();
  const token = cookie.get("token");

  useEffect(() => {
    if (token) {
      const resMessage = localStorage.getItem("resMessage");
      if (resMessage) {
        enqueueSnackbar({
          message: resMessage,
          variant: "success",
          autoHideDuration: 3000,
        });
        localStorage.removeItem("resMessage");
      }
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

  const handleLogOut = () => {
    if (token) {
      try {
        onOpen();
        logout(token);
        cookie.remove("token");
        cookie.remove("laravel_session");
        cookie.remove("XSRF-TOKEN");
      } catch (error) {
        onOpen(false);
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
