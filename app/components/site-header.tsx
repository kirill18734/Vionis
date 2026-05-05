import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Icons } from "./icons";

export function SiteHeader() {
  return (
    <header className="flex shrink-0 items-center border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <SidebarTrigger />
      <Button
        className="ml-auto rounded-none border-none p-5"
        variant="outline"
        size="icon-lg"
      >
        <Icons.minus className="size-9" />
      </Button>
      <Button
        className="rounded-none border-none p-5 dark:hover:bg-red-600 hover:bg-red-600 hover:text-white"
        variant="outline"
        size="icon-lg"
      >
        <Icons.close className="size-9" />
      </Button>
    </header>
  );
}
