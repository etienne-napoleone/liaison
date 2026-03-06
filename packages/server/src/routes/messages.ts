import { gmail_v1 } from "@googleapis/gmail";
import { OAuth2Client } from "google-auth-library";
import { Hono } from "hono";

import { auth, requireAuth } from "@/lib/auth";

import { AuthenticatedState } from "../state";

const app = new Hono<AuthenticatedState>().use("*", requireAuth).get("/", async (c) => {
  const { accessToken } = await auth.api.getAccessToken({
    body: {
      providerId: "google",
    },
    headers: c.req.raw.headers,
  });

  const googleAuth = new OAuth2Client();
  googleAuth.setCredentials({ access_token: accessToken });

  const gmail = new gmail_v1.Gmail({ auth: googleAuth });
  const list = await gmail.users.messages.list({ userId: "me", maxResults: 10 });
  const fullMessages = await Promise.all(
    (list.data.messages ?? []).map((m) =>
      gmail.users.messages.get({
        userId: "me",
        id: m.id!,
        format: "metadata",
        metadataHeaders: ["From", "Subject", "Date"],
      }),
    ),
  );
  return c.json(fullMessages.map((m) => m.data));
});

export default app;
