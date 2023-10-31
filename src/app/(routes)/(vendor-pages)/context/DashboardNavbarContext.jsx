import { useContext, createContext } from "react";

export const DashboardNavbarContext = createContext(false);

export const useSidebar = () =>
  useContext(DashboardNavbarContext);
