"use client";

import React from "react";
import { Badge } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import icons from "@/app/utils/icons";

const { BellIcon, LogoutIcon } = icons.navbarIcon;

export const NotificationButton = () => {
  const handleClick = () => {};

  return (
    <Button
      onClick={handleClick}
      isIconOnly
      variant="bordered"
      radius="full"
      size="md"
      className="hidden place-items-center lg:grid"
    >
      <Badge content="5" color="danger" size="sm">
        <BellIcon />
      </Badge>
    </Button>
  );
};

export const LogOutButton = ({ handleLogOut }) => {
  return (
    <button
      className="rounded-md hover:bg-secondary hover:text-white text-paragraph9 text-neutral-600 flex gap-3"
      onClick={handleLogOut}
    >
      <LogoutIcon />
      Logout
    </button>
  );
};
