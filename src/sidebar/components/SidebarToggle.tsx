import { PanelRightClose, PanelRightOpen } from "lucide-react";
import { useSidebarContext } from "../hooks/useSidebarContext";

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
