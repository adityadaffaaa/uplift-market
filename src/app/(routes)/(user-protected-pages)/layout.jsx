import React from "react";
import { Navbar } from "@/app/components";
import LayoutProvider from "./components/LayoutProvider";

const UserProtectedPagesLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <LayoutProvider>{children}</LayoutProvider>
    </>
  );
};

export default UserProtectedPagesLayout;
