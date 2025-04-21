import { useSidebarContext } from "./SidebarProvider";
import { SidebarItemType } from "./types";

export const SidebarItem = ({ icon: Icon, text, url }: SidebarItemType) => {
  const { collapseState } = useSidebarContext();
  const showTooltips = collapseState === "minified";

  return (
    <li className="sidebarItem">
      <a
        href={url && url}
        className={showTooltips ? "hasTooltip" : ""}
        data-tooltip={text}
      >
        {Icon && <Icon />}
        {collapseState === "expanded" ? <span>{text}</span> : null}
      </a>
    </li>
  );
};
