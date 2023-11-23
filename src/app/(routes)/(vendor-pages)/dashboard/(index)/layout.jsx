import React from "react";

import { DashboardNavbar, Sidebar } from "../../components";
import HeaderCondition from "../../layouts/HeaderCondition";

const DashboardIndexLayout = ({ children }) => {
  return (
    <>
      <Sidebar />
      <DashboardNavbar />
      <section className="w-full lg:w-[calc(100%-280px)] h-screen overflow-y-auto custom-scrollbar p-5 lg:pt-8 lg:px-8 pb-3 flex flex-col gap-9 mt-16 bg-white lg:bg-transparent lg:mt-0">
        <HeaderCondition />
        {children}
      </section>
    </>
  );
};

export default DashboardIndexLayout;
