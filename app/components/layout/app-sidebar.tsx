import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { navGroup } from "@/config/nav-config";
import { NavMain } from "./nav-main";
import { NavFooter } from "./nav-footer";

export default function AppSidebar() {
  const navData = navGroup;
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader />
      <SidebarContent>
        <NavMain items={navData.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavFooter items={navData.navFot} />
      </SidebarFooter>
    </Sidebar>
  );
}
