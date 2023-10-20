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
  footerIcon: {
    InstagramIcon: () => (
      <Icon
        height={24}
        width={24}
        className="transition-default hover:scale-125"
        icon="mdi:instagram"
      />
    ),
    FacebookIcon: () => (
      <Icon
        height={24}
        width={24}
        className="transition-default hover:scale-125"
        icon="gg:facebook"
      />
    ),
  },
  homeScreenIcon: {
    SearchIcon: () => (
      <Icon
        className="hidden lg:block"
        icon="ri:search-line"
      />
    ),
    ArrowRightIcon: () => (
      <Icon
        className="lg:hidden"
        icon="octicon:arrow-right-16"
      />
    ),
    StarIcon: () => (
      <Icon
        className="text-secondary"
        icon="ic:baseline-star"
      />
    ),
    ArrowDownIcon: ({ clicked }) => (
      <Icon
        height={24}
        className={`text-white transition-linear ${
          clicked ? "rotate-180" : "rotate-0"
        }`}
        icon="iconamoon:arrow-down-2"
      />
    ),
  },
  authScreenIcon: {
    ArrowBackIcon: ({ className }) => (
      <Icon
        icon="material-symbols:arrow-back-ios-rounded"
        className={className}
      />
    ),
    EyeIcon: () => <Icon height={20} icon="ion:eye" />,
    EyeCloseIcon: () => (
      <Icon height={20} icon="el:eye-close" />
    ),
    ArrowRightIcon: () => (
      <Icon icon="octicon:arrow-right-16" />
    ),
  },
  productDetailIcon: {
    StarIcon: () => (
      <Icon
        icon="material-symbols:star-rounded"
        className="text-amber-300"
      />
    ),
    ArrowDownIcon: () => (
      <Icon
        icon="material-symbols:keyboard-arrow-down"
        className="text-[20px]"
      />
    ),
    ArrowForwardIcon: () => (
      <Icon
        icon="material-symbols:arrow-forward"
        className="text-[20px]"
      />
    ),
    SmsIcon: () => (
      <Icon
        icon="material-symbols:sms-outline"
        className="text-[20px]"
      />
    ),
    FavoriteOutlineIcon: () => (
      <Icon
        icon="material-symbols:favorite-outline"
        className="text-[20px] h-6"
      />
    ),
    ShareOutlineIcon: () => (
      <Icon
        icon="material-symbols:share-outline"
        className="text-[20px] h-6"
      />
    ),
  },
  searchFilterProductIcon: {
    SearchRoundedIcon: () => (
      <Icon
        icon="material-symbols:search-rounded"
        className="lg:hidden"
      />
    ),
    CancelIcon: () => (
      <Icon icon="material-symbols:cancel" />
    ),
    SearchIcon: () => (
      <Icon
        icon="material-symbols:search"
        className="text-white text-[24px]"
      />
    ),
    TuneRoundedIcon: () => (
      <Icon
        icon="material-symbols:tune-rounded"
        className="h-[14px]"
      />
    ),
    RoundCloseIcon: () => (
      <Icon
        height={24}
        width={24}
        icon="ic:round-close"
        className="lg:hidden"
      />
    ),
    StarIcon: () => (
      <Icon
        icon="material-symbols:star-rounded"
        className="text-amber-300"
      />
    ),
    ArrowBackIcon: () => (
      <Icon icon="material-symbols:arrow-back-rounded" />
    ),
  },
  vendorPortfolioIcon: {
    LinkIcon: () => <Icon icon="material-symbols:link" />,
    SmsIcon: () => (
      <Icon icon="material-symbols:sms-outline" />
    ),
    LocationIcon: () => (
      <Icon icon="material-symbols:location-on-outline" />
    ),
  },
  vendorProfileIcon: {
    LinkIcon: () => <Icon icon="material-symbols:link" />,
    SmsIcon: () => (
      <Icon icon="material-symbols:sms-outline" />
    ),
    LocationIcon: () => (
      <Icon icon="material-symbols:location-on-outline" />
    ),
  },
};

export default icons;
