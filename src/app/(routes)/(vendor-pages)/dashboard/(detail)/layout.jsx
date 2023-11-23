import React from "react";
import HeaderCondition from "../../layouts/HeaderCondition";
const DashboardDetailLayout = ({ children }) => {
  return (
    <div className="flex w-full py-3 justify-center">
      <div className="container p-5 lg:pt-8 pb-3 flex flex-col gap-9 xl:px-36 rounded-xl">
        <HeaderCondition />
        {children}
      </div>
    </div>
  );
};

export default DashboardDetailLayout;
