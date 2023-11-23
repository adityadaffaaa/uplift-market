import React from "react";
import ScreenCondition from "./components/ScreenCondition";

const ResetPassword = () => {
  return (
    <div className="w-full px-5 flex flex-col gap-9 max-w-md mx-auto md:max-w-2xl py-24">
      <ScreenCondition />
    </div>
  );
};

export default ResetPassword;
