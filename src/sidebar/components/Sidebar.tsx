import { ReactNode } from "react";
import "./sidebar.css";
import { useSidebarContext } from "../hooks/useSidebarContext";

export const Sidebar = ({ children }: { children: ReactNode }) => {
  const { collapseState } = useSidebarContext();

  if (collapseState === "collapsed") {
    return null;
  }

  return <div className={`sidebar sidebar--${collapseState}`}>{children}</div>;
};
