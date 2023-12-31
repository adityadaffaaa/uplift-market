
import React from "react";
import Link from "next/link";
import icons from "@/app/utils/icons";

const { InstagramIcon, FacebookIcon } = icons.footerIcon;
export const Footer = () => {
  return (
    <footer className="py-16 bg-[#002A2A] flex justify-center">
      <div className="container flex flex-col gap-20 lg:gap-40 lg:px-24">
        <div className="flex flex-col gap-16 items-center lg:items-start md:flex-row w-full ">
          <div className="md:flex-[1_1_100px]">
            <img
              src={
                "/assets/images/img-logo-upliftmarket-white.png"
              }
              alt="logo"
              className="w-[165px]"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col items-center gap-8 text-white md:flex-row md:flex-[4_1_100px] md:items-start md:justify-between">
            <div className="flex flex-col items-center gap-6 md:items-start">
              <h4 className="text-heading4">Learn More</h4>
              <ul className="flex flex-col gap-2 text-paragraph6Res">
                <li>
                  <Link href={"#"}>About Lift</Link>
                </li>
                <li>
                  <Link href={"#"}>Privacy Policy</Link>
                </li>
                <li>
                  <Link href={"#"}>Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center md:items-start gap-6">
              <h4 className="text-heading4">Contact Us</h4>
              <ul className="flex flex-col items-center gap-2 md:items-start text-paragraph6Res">
                <li>upliftmarket@gmail.com</li>
                <li>0858 7127 29123</li>
              </ul>
            </div>
            <div className="flex flex-col items-center gap-6">
              <h4 className="text-heading4">Social</h4>
              <div className="flex items-center gap-2 text-paragraph6Res">
                <Link href={"#"}>
                  <InstagramIcon />
                </Link>
                <Link href={"#"}>
                  <FacebookIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-7 text-white">
          <hr className="opacity-20 w-full" />
          <p className="text-paragraph10 text-center">
            &copy; 2023 Uplift Market | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
