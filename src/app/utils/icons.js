"use client";

import { _api, Icon } from "@iconify/react";
import fetch from "cross-fetch";
_api.setFetch(fetch);

const icons = {
  navbarIcon: {
    CloseIcon: () => (
      <Icon height={24} width={24} icon="ic:round-close" />
    ),
    MenuIcon: () => (
      <Icon
        height={24}
        width={24}
        className="text-textBlack"
        icon="healthicons:ui-menu-grid"
      />
    ),
    BellIcon: () => <Icon height={18} icon="ph:bell" />,
    LogoutIcon: () => (
      <Icon height={24} icon="ic:round-logout" />
    ),
    ArrowDownIcon: () => (
      <Icon
        height={24}
        icon="material-symbols:keyboard-arrow-down-rounded"
      />
    ),
    AccountCircleIcon: () => (
      <Icon
        height={24}
        icon="material-symbols:account-circle-outline"
      />
    ),
    LabProfileIcon: () => (
      <Icon
        height={24}
        icon="material-symbols:lab-profile-outline-rounded"
      />
    ),
    ChatIcon: () => (
      <Icon
        height={24}
        icon="material-symbols:chat-outline-rounded"
      />
    ),
    WishlistIcon: () => (
      <Icon
        height={24}
        icon="material-symbols:heart-check-outline-rounded"
      />
    ),
    ArrowUpIcon: () => (
      <Icon
        className="animate-bounce"
        icon="ep:arrow-up-bold"
      />
    ),
  },
};

export default icons;
