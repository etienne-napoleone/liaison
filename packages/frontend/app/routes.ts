import { type RouteConfig, layout, route } from "@react-router/dev/routes";

export default [layout("auth/layout.tsx", [route("sign-in", "auth/sign-in.tsx")])] satisfies RouteConfig;
