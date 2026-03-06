import { hc } from "hono/client";
import type { AppType } from "server";

export const api = hc<AppType>("http://127.0.0.1:3000/", {
  init: {
    credentials: "include",
  },
});
