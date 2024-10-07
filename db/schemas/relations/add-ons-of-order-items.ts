import {
  foreignKey,
  index,
  primaryKey,
  sqliteTable,
} from "drizzle-orm/sqlite-core"

import { addOnItems } from "@db/schemas/entities/add-on-items"
import { addOnItemsOfMenuItems } from "./add-ons-of-menu-items"
import { id, reference } from "@db/schemas/helpers"
import { menuItems } from "@db/schemas/entities/menu-items"

/** Provides primary keys for each combination of add-on items for each order item. */
export const addOnCombinationsOfOrderItems = sqliteTable(
  "add_on_combinations_of_order_items",
  { ...id }
)

/** The actual add-on combinations for each order item. */
export const addOnCombinationItems = sqliteTable(
  "add_on_combination_items",
  {
    combinationID: reference(
      "combination_id",
      () => addOnCombinationsOfOrderItems.id
    ),
    menuItemID: reference("menu_item_id", () => menuItems.id),
    addOnItemID: reference("add_on_item_id", () => addOnItems.id),
  },
  (table) => ({
    key: primaryKey({
      columns: [table.combinationID, table.menuItemID, table.addOnItemID],
    }),

    // Ensures no menu item is associated with invalid add-on item
    addOnOfMenuItemReference: foreignKey({
      columns: [table.menuItemID, table.addOnItemID],
      foreignColumns: [
        addOnItemsOfMenuItems.menuItemID,
        addOnItemsOfMenuItems.addOnItemID,
      ],
    }),

    menuItemIndex: index("menu_item_index").on(table.menuItemID),
    menuItemAndAddOnIndex: index("menu_item_and_add_on_index").on(
      table.menuItemID,
      table.addOnItemID
    ),
  })
)
