import React from "react";
import HeadSection from "./components/HeadSection";
import BodySection from "./components/BodySection";
import SideSection from "./components/SideSection";

const VendorDashboard = () => {
  return (
    <div className="flex flex-col gap-4 lg:flex-row">
      <div className="flex flex-col gap-4 lg:flex-[1_1_65%]">
        <HeadSection />
        <BodySection />
      </div>
      <SideSection />
    </div>
  );
};

export default VendorDashboard;
