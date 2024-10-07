import { real, sqliteTable } from "drizzle-orm/sqlite-core"

import { id, name, nameIndex } from "@db/schemas/helpers"

/** Items that can be added to some menu items (e.g. ketchup, salt, cheese). */
export const addOnItems = sqliteTable(
  "add_on_items",
  {
    ...id,
    ...name,
    price: real("price").notNull().default(0),
  },
  nameIndex
)

export interface AddOnItem {
  id: number
  name: string
  price: number
}
