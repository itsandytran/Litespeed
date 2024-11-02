import { defineConfig } from "drizzle-kit"

export default defineConfig({
  schema: ["db/schemas/entities/*", "db/schemas/relations/*"],
  out: "db/drizzle",
  dialect: "sqlite",
  driver: "expo",
})
