import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

import { db, schema } from "../db";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "sqlite",
    schema,
  }),
  baseURL: process.env.BETTER_AUTH_URL,
  trustedOrigins: ["http://127.0.0.1:5173"],
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      scope: ["https://www.googleapis.com/auth/gmail.readonly"],
      accessType: "offline",
      prompt: "consent",
    },
  },
});
