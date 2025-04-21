import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import { SidebarLayout } from "./sidebar/components/SidebarLayout";
import { Sidebar } from "./sidebar/components/Sidebar";
import { SidebarGroupContent } from "./sidebar/components/SidebarGroup";
import { SidebarItem } from "./sidebar/components/SidebarItem";
import { SidebarToggle } from "./sidebar/components/SidebarToggle";
import { SidebarProvider } from "./sidebar/context/SidebarProvider";

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
