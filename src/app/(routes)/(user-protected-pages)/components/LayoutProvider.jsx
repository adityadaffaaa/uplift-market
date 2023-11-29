"use client";

import React from "react";
import { usePathname } from "next/navigation";
const LayoutProvider = ({ children }) => {
  const pathName = usePathname();

  const title =
    pathName === "/project-saya"
      ? "Project Saya"
      : "Pengaturan User";

  return (
    <main className="flex justify-center bg-neutral-100">
      <div className="container px-5 lg:px-28 flex flex-col gap-9 py-24">
        <h2 className="text-heading2">{title}</h2>
        {children}
      </div>
    </main>
  );
};

export default LayoutProvider;
