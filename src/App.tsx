import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import { SidebarLayout } from "./components/sidebar/SidebarLayout";
import { Sidebar } from "./components/sidebar/Sidebar";
import { SidebarGroupContent } from "./components/sidebar/SidebarGroup";
import { SidebarItem } from "./components/sidebar/SidebarItem";
import { SidebarToggle } from "./components/sidebar/SidebarToggle";
import { SidebarProvider } from "./components/sidebar/SidebarProvider";

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
