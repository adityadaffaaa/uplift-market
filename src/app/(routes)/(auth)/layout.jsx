import React from "react";
import LayoutOnRoute from "./components/LayoutOnRoute";

const AuthLayout = ({ children }) => {
  return <LayoutOnRoute>{children}</LayoutOnRoute>;
};

export default AuthLayout;
