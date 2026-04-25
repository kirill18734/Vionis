import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { navGroup } from "@/config/nav-config";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-footer";
import { IconInnerShadowTop } from "@tabler/icons-react";
import { NavHead } from "./nav-header";

export default function AppSidebar() {
  const navData = navGroup;
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <NavHead title={navData.navHead} />
      </SidebarHeader>
      <SidebarContent className="justify-center">
        <NavMain items={navData.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={navData.user} items={navData.navFot} />
      </SidebarFooter>
    </Sidebar>
  );
}
