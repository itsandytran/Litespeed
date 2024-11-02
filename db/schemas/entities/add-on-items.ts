import { integer, real, sqliteTable, text } from "drizzle-orm/sqlite-core"

/** Items that can be added to some menu items (e.g. ketchup, salt, cheese). */
export const addOnItems = sqliteTable("add_on_items", {
  id: integer("id").primaryKey(),
  name: text("name").notNull().unique(),
  price: real("price").notNull().default(0),
})

export interface AddOnItem {
  id: number
  name: string
  price: number
}
