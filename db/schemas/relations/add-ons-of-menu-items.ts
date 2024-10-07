import { index, primaryKey, sqliteTable } from "drizzle-orm/sqlite-core"

import { addOnItems } from "@db/schemas/entities/add-on-items"
import { menuItems } from "@db/schemas/entities/menu-items"
import { reference } from "@db/schemas/helpers"

/**
 * The add-on items of each menu item.
 *
 * Each menu item may have many add-on items.
 */
export const addOnItemsOfMenuItems = sqliteTable(
  "add_on_items_of_menu_items",
  {
    menuItemID: reference("menu_item_id", () => menuItems.id),
    addOnItemID: reference("add_on_item_id", () => addOnItems.id),
  },
  (table) => ({
    key: primaryKey({ columns: [table.menuItemID, table.addOnItemID] }),
    // As there may be many add-on items for a single menu item, the index
    // should not be unique
    menuItemIndex: index("menu_item_index").on(table.menuItemID),
  })
)
