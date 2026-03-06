import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "db/migrations",
  schema: "db/schema",
  dialect: "sqlite",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
