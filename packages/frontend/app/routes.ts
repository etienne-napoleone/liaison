import { type RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes";

export default [
  layout("dashboard/layout.tsx", [index("dashboard/index.tsx")]),
  layout("auth/layout.tsx", [route("sign-in", "auth/sign-in.tsx")]),
] satisfies RouteConfig;
