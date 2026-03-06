import { Hono } from "hono";
import { cors } from "hono/cors";

import { auth } from "./auth";

const app = new Hono();

app.use(
  "/api/auth/*", // or replace with "*" to enable cors for all routes
  cors({
    origin: "http://127.0.0.1:5173", // replace with your origin
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["POST", "GET", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
    credentials: true,
  }),
);

app.on(["POST", "GET"], "/api/auth/*", (c) => {
  return auth.handler(c.req.raw);
});

export default app;
