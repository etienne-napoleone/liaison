import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  index("dashboard/index.ts"),
  layout("auth/layout.tsx", [route("sign-in", "auth/sign-in.tsx")]),
] satisfies RouteConfig;
