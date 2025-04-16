import { ReactNode } from "react";
import "./test.css";
import { useSidebarContext } from "./sidebarProvider";
import { PanelRightOpen, PanelRightClose, LucideIcon } from "lucide-react";

type SidebarContentType = {
  text: string;
  icon?: LucideIcon;
  url?: string;
};

export const SidebarGroupContent = ({ children }: { children: ReactNode }) => {
  return <ul className="sidebarGroup">{children}</ul>;
};

export const SidebarLayout = ({ children }: { children: ReactNode }) => {
  return <div className="layout">{children}</div>;
};

export const SidebarToggle = () => {
  const { cycleCollapseState, collapseState } = useSidebarContext();

  return (
    <button className="sidebarToggle" onClick={cycleCollapseState}>
      {collapseState === "expanded" || collapseState == "minified" ? (
        <PanelRightOpen />
      ) : (
        <PanelRightClose />
      )}
    </button>
  );
};

export const SidebarItem = ({ icon: Icon, text }: SidebarContentType) => {
  const { collapseState } = useSidebarContext();
  return (
    <li className="sidebarItem">
      <a href="#">
        {Icon && <Icon />}
        {collapseState === "expanded" ? <span>{text}</span> : null}
      </a>
    </li>
  );
};

export const Sidebar = ({ children }: { children: ReactNode }) => {
  const { collapseState } = useSidebarContext();

  return <div className={`sidebar sidebar--${collapseState}`}>{children}</div>;
};

/* TODO: Fix responsive, when resizing window on y axis   */
/* TODO: Fix responsive, icon are redimensioned  */
/* TODO: Separate responsabilities */
/* TODO: create tooltips on minified icons */
