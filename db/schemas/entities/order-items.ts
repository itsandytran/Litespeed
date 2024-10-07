import {
  index,
  integer,
  primaryKey,
  sqliteTable,
} from "drizzle-orm/sqlite-core"

import { addOnCombinationsOfOrderItems } from "@db/schemas/relations/add-ons-of-order-items"
import { menuItems } from "@db/schemas/entities/menu-items"
import { orders } from "@db/schemas/entities/orders"
import { reference } from "@db/schemas/helpers"

/**
 * Items of completed orders.
 *
 * Each order can have many items, and each item can have zero or many add-ons.
 */
export const orderItems = sqliteTable(
  "order_items",
  {
    orderID: reference("order_id", () => orders.id),
    menuItemID: reference("menu_item_id", () => menuItems.id),
    quantity: integer("quantity").notNull(),

    /**
     * The id of the combination of add-on items for the given order item.
     *
     * May be `null` as not all items include add-ons.
     */
    addOnCombinationID: reference(
      "add_on_combination_id",
      () => addOnCombinationsOfOrderItems.id,
      false
    ),
  },
  (table) => ({
    // The combination (orderID, menuItemID, quantity) does not uniquely
    // identify an order item, as the item may or may not include add-ons.
    //
    // For example, let the forth component be the combinationID, then
    // (1, 1, 1, null) and (1, 1, 1, 1) can represent two distinct order items
    // that referes to a same menu item in a same order, but one includes
    // add-on items and another one does not.
    key: primaryKey({
      columns: [
        table.orderID,
        table.menuItemID,
        table.quantity,
        table.addOnCombinationID,
      ],
    }),

    orderIndex: index("order_index").on(table.orderID),
    menuItemIndex: index("menu_item_index").on(table.menuItemID),
  })
)
