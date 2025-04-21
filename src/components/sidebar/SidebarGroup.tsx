import { ReactNode } from "react";

export const SidebarGroupContent = ({ children }: { children: ReactNode }) => {
  return <ul className="sidebarGroup">{children}</ul>;
};
