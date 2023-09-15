import React from "react";
import { _api, Icon } from "@iconify/react";
import fetch from "cross-fetch";
import Link from "next/link";
_api.setFetch(fetch);
const Footer = () => {
  return (
    <footer className="py-16 bg-[#002A2A] flex flex-col gap-16 items-center">
      <h1 className="text-white">Logo</h1>
      <div className="flex flex-col items-center gap-8 text-white">
        <div className="flex flex-col items-center gap-6">
          <h4 className="text-heading4">Learn More</h4>
          <ul className="flex flex-col gap-2 text-paragraph6Res">
            <li>About Lift</li>
            <li>Privacy Policy</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="flex flex-col items-center gap-6">
          <h4 className="text-heading4">Contact Us</h4>
          <ul className="flex flex-col items-center gap-2 text-paragraph6Res">
            <li>upliftmarket@gmail.com</li>
            <li>0858 7127 29123</li>
          </ul>
        </div>
        <div className="flex flex-col items-center gap-6">
          <h4 className="text-heading4">Social</h4>
          <div className="flex items-center gap-2 text-paragraph6Res">
            <Link href={"#"}>
              <Icon
                height={24}
                width={24}
                className="transition-default hover:scale-125"
                icon="mdi:instagram"
              />
            </Link>
            <Link href={"#"}>
              <Icon
                height={24}
                width={24}
                className="transition-default hover:scale-125"
                icon="gg:facebook"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
