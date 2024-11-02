import {
  index,
  integer,
  primaryKey,
  sqliteTable,
} from "drizzle-orm/sqlite-core"

import { addOnItems } from "@db/schemas/entities/add-on-items"
import { menuItems } from "@db/schemas/entities/menu-items"

/**
 * The add-on items of each menu item.
 *
 * Each menu item may have many add-on items.
 */
export const addOnItemsOfMenuItems = sqliteTable(
  "add_on_items_of_menu_items",
  {
    menuItemID: integer("menu_item_id")
      .notNull()
      .references(() => menuItems.id),
    addOnItemID: integer("add_on_item_id")
      .notNull()
      .references(() => addOnItems.id),
  },
  (table) => ({
    key: primaryKey({ columns: [table.menuItemID, table.addOnItemID] }),
    // As there may be many add-on items for a single menu item, the index
    // should not be unique
    menuItemIndex: index("menu_item_index_on_add_ons_of_menu_items").on(
      table.menuItemID
    ),
  })
)
