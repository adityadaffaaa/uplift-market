import React from "react";
import { LinkRoundedButton } from "@/app/components";
export const NavbarGuestCondition = () => (
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

export default NavbarGuestCondition;
