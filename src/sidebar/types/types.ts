import { LucideIcon } from "lucide-react";

export type SidebarItemType = {
  text: string;
  icon?: LucideIcon;
  url?: string;
};

export type CollapseLevel = "expanded" | "minified" | "collapsed";
