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
  route("*", "routes/redirect.tsx"),
] satisfies RouteConfig;
