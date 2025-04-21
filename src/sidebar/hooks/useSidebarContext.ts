import { useContext } from "react";
import { SidebarContext } from "../context/SidebarProvider";

export const useSidebarContext = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar should not be used outside a Sidebar.");
  }

  return context;
};
