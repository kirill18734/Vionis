import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { navGroup } from "@/config/nav-config";
import { NavMain } from "./nav-main";
import { NavFoot } from "./nav-footer";
import { IconInnerShadowTop } from "@tabler/icons-react";
import { NavHead } from "./nav-header";

export default function AppSidebar() {
  const navData = navGroup;
  return (
    <Sidebar collapsible="icon">
      <NavHead title={navData.navHead} />
      <NavMain items={navData.navMain} />
      <NavFoot user={navData.user} items={navData.navFot} />
      <SidebarRail />
    </Sidebar>
  );
}
