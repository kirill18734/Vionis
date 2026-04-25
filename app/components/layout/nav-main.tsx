import { Link, useLocation } from "react-router";
import { SidebarMenuButton } from "@/components/ui/sidebar";
import { Icons } from "@/components/icons";

export function NavMain({ items }) {
  let location = useLocation();
  return items.map((item, i) => {
    const Icon = item.icon && Icons[item.icon];
    return (
      <SidebarMenuButton
        asChild
        isActive={location.pathname == item.url}
        key={i}
      >
        <Link to={item.url}>
          {item.icon && <Icon />}
          {item.title}
        </Link>
      </SidebarMenuButton>
    );
  });
}
