import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("routes/dashboard/layout.tsx", [
    index("routes/dashboard/commands.tsx"),
    route("dashboard/settings", "routes/dashboard/settings.tsx"),
  ]),

  route("action/set-theme", "routes/action.set-theme.tsx"),
  route("action/set-theme-style", "routes/action.set-theme-style.tsx"),

  route("*", "routes/redirect.tsx"),
] satisfies RouteConfig;
