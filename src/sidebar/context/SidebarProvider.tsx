import { createContext, ReactNode, useState } from "react";
import { CollapseLevel } from "../types/types";

type SidebarContextType = {
  collapseState: CollapseLevel;
  cycleCollapseState: () => void;
};

export const SidebarContext = createContext<SidebarContextType | undefined>(
  undefined
);

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
