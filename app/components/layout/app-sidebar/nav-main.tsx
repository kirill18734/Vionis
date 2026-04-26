import { Link, useLocation } from "react-router";
import {
  SidebarContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import type { Icon } from "@tabler/icons-react";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: Icon;
  }[];
}) {
  let location = useLocation();
  return (
    <SidebarContent className="justify-center">
      <SidebarMenu>
        {items.map((item, i) => (
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              isActive={location.pathname == item.url}
              key={i}
            >
              <Link to={item.url}>
                {item.icon && <item.icon />}
                {item.title}
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarContent>
  );
}
