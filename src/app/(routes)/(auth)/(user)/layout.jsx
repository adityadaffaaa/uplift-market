import React from "react";
import LayoutOnRouteAuthUser from "./components/LayoutOnRouteAuthUser";

const UserAuthLayout = ({ children }) => (
  <LayoutOnRouteAuthUser>{children}</LayoutOnRouteAuthUser>
);

export default UserAuthLayout;
