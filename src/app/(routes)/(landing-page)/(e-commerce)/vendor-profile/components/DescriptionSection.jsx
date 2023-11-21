"use client";

import React from "react";
import icons from "@/app/utils/icons";
import { Button, Avatar } from "@nextui-org/react";

const { LinkIcon, LocationIcon, SmsIcon } =
  icons.vendorProfileIcon;

export const DescriptionSection = () => {
  return (
    <aside className="w-full flex flex-col items-center lg:flex-[1_1_30%] gap-4 lg:border-2 lg:p-8 rounded-2xl">
      <Avatar
        isBordered
        src="/assets/images/pp-vendor.png"
        classNames={{ base: "h-32 w-32" }}
      />
      <div>
        <p className="w-full text-heading2Res">
          Metrofa Agency
        </p>
      </div>
      <div className="flex border border-[#D2D5DA] rounded-full items-center px-4 py-2">
        <LocationIcon />
        <p className="text-paragraph pl-2">Yogyakarta</p>
      </div>
      <p className="text-paragraph8 text-[#686868] text-center">
        Metrofa Studio adalah salah satu vendor
        <br />
        yang bergerak dibidang video. Menyediakan
        <br className="lg:hidden" />
        banyak layanan seperti editing video,
        <br className="lg:hidden" />
        effects,dll.
      </p>
      <div className="flex gap-x-3 items-center">
        <img
          src={"/assets/images/instagram-icon.png"}
          alt="instagram"
          className="w-9 h-9"
        />
        <img
          src={"/assets/images/facebook-icon.png"}
          alt="facebook"
          className="w-9 h-9"
        />
        <LinkIcon />
        <p className="text-paragraph">metrofastudio.com</p>
      </div>
      <Button
        color="primary"
        fullWidth
        radius="sm"
        startContent={<SmsIcon />}
      >
        Chat
      </Button>
    </aside>
  );
};

export default DescriptionSection;
