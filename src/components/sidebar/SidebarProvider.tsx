import { createContext, ReactNode, useContext, useState } from "react";
import { CollapseLevel } from "./types";

type SidebarContextType = {
  collapseState: CollapseLevel;
  cycleCollapseState: () => void;
};

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const useSidebarContext = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar should not be used outside a Sidebar.");
  }

  return context;
};

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [collapseState, setCollapseState] = useState<CollapseLevel>("expanded");

  const cycleCollapseState = () => {
    switch (collapseState) {
      case "expanded":
        setCollapseState("minified");
        break;
      case "minified":
        setCollapseState("collapsed");
        break;
      case "collapsed":
        setCollapseState("expanded");
        break;

      default:
        break;
    }
  };

  return (
    <SidebarContext.Provider value={{ collapseState, cycleCollapseState }}>
      {children}
    </SidebarContext.Provider>
  );
};
