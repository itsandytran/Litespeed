import { integer, real, sqliteTable, text } from "drizzle-orm/sqlite-core"

import { id } from "@db/schemas/helpers"

/** Orders that have been completed. */
export const orders = sqliteTable("orders", {
  ...id,
  dateTime: integer("date_time")
    .notNull()
    .$default(() => Date.now()),
  subtotal: real("subtotal").notNull(),
  tax: real("tax").notNull(),
  total: real("total").notNull(),
  /** Special instructions of the order. */
  instructions: text("instructions"),
})

export interface Order {
  id: number
  dateTime: Date
  subtotal: number
  tax: number
  total: number
  instructions?: string
}
