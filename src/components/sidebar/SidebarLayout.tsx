import { ReactNode } from "react";

export const SidebarLayout = ({ children }: { children: ReactNode }) => {
  return <div className="layout">{children}</div>;
};
