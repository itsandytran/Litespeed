import {
  integer,
  real,
  sqliteTable,
  text,
} from "drizzle-orm/sqlite-core"

/** Items that should appear on the menu. */
export const menuItems = sqliteTable("menu_items", {
  id: integer("id").primaryKey(),
  name: text("name").notNull().unique(),
  price: real("price").notNull(),
  /**
   * The decimal representation of the `HEX` value of the background color
   * that should be used when the item is shown on the menu.
   */
  menuColor: integer("menu_color"),
})

export interface MenuItem {
  id: number
  name: string
  price: number
  menuColor: number
}
