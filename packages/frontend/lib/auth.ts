import { createAuthClient } from "better-auth/react";

export const auth = createAuthClient({
  baseURL: "http://127.0.0.1:3000",
});
