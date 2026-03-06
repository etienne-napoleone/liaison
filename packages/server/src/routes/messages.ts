import { Hono } from "hono";

import { auth, requireAuth } from "@/lib/auth";

import { AuthenticatedState } from "../state";

const app = new Hono<AuthenticatedState>().use("*", requireAuth).get("/", async (c) => {
  const token = await auth.api.getAccessToken({
    body: {
      providerId: "google",
    },
    headers: c.req.raw.headers,
  });

  return c.json({ token: token.accessToken });
});

export default app;
