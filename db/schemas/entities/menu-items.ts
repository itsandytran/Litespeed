import { integer, real, sqliteTable } from "drizzle-orm/sqlite-core"

import { id, name, nameIndex } from "@db/schemas/helpers"

/** Items that should appear on the menu. */
export const menuItems = sqliteTable(
  "menu_items",
  {
    ...id,
    ...name,
    price: real("price").notNull(),
    /**
     * The decimal representation of the `HEX` value of the background color
     * that should be used when the item is shown on the menu.
     */
    menuColor: integer("menu_color"),
  },
  nameIndex
)

export interface MenuItem {
  id: number
  name: string
  price: number
  menuColor: number
}
