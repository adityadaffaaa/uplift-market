"use client";

import React from "react";
import Sidebar from "./Sidebar";
import { usePathname } from "next/navigation";

export const SidebarOnRoute = () => {
  const pathName = usePathname();

  const HandleSidebar = () =>
    pathName.endsWith("/add-product") ? null : <Sidebar />;

  return <HandleSidebar />;
};

export default SidebarOnRoute;
