import type { Config } from "drizzle-kit";

export default {
  schema: "./src/database/schema.ts",
  dialect: "postgresql",
  verbose: true,
  out: "./drizzle",
  dbCredentials: {
    url: process.env.DATABASE_URL || "",
  },
} satisfies Config;
