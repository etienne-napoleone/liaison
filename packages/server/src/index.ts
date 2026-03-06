import { Hono } from "hono";
import { cors } from "hono/cors";

import auth from "./routes/auth";
import messages from "./routes/messages";

const app = new Hono()
  .use(
    "/*",
    cors({
      origin: "http://127.0.0.1:5173",
      allowHeaders: ["Content-Type", "Authorization"],
      allowMethods: ["POST", "GET", "OPTIONS"],
      exposeHeaders: ["Content-Length"],
      maxAge: 600,
      credentials: true,
    }),
  )
  .route("/api/auth", auth)
  .route("/messages", messages);

export default app;
export type AppType = typeof app;
