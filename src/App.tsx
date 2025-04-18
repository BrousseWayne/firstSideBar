import {
  Sidebar,
  SidebarGroupContent,
  SidebarItem,
  SidebarLayout,
  SidebarToggle,
} from "./sidebar";
import { SidebarProvider } from "./sidebarProvider";
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

const items = [
  {
    title: "Home",
    url: "#ddd",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

function App() {
  return (
    <>
      <SidebarProvider>
        <SidebarLayout>
          <Sidebar>
            <SidebarGroupContent>
              {items.map((value, index) => (
                <SidebarItem
                  text={value.title}
                  icon={value.icon}
                  key={index}
                  url={value.url}
                />
              ))}
            </SidebarGroupContent>
          </Sidebar>
          <SidebarToggle />
        </SidebarLayout>
      </SidebarProvider>
    </>
  );
}

export default App;
