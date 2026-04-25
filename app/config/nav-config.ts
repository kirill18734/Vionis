import { Icons } from "@/components/icons";

export const navGroup = {
  user: {
    name: "Guest",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navHead: { name: "Vionis", icon: Icons.title, url: "/" },
  navMain: [{ title: "Команды", url: "/", icon: Icons.workspace }],
  navFot: [
    {
      title: "Профиль",
      url: "/dashboard/profile",
      icon: Icons.account,
      separator: false,
    },
    {
      title: "Настройки",
      url: "/dashboard/settings",
      icon: Icons.settings,
      separator: true,
    },
    {
      title: "Войти",
      url: "/auth/sign-in",
      icon: Icons.login,
      separator: false,
    },
  ],
};
