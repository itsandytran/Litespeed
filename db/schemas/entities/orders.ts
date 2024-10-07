import {
  index,
  integer,
  real,
  sqliteTable,
  text,
} from "drizzle-orm/sqlite-core"

/** Orders that have been completed. */
export const orders = sqliteTable(
  "orders",
  {
    id: integer("id").primaryKey(),
    dateTime: integer("date_time")
      .notNull()
      .$default(() => Date.now()),
    subtotal: real("subtotal").notNull(),
    tax: real("tax").notNull(),
    total: real("total").notNull(),
    /** Special instructions of the order. */
    instructions: text("instructions"),
  },
  (table) => ({
    dateTimeIndex: index("date_time_index_on_orders").on(table.dateTime),
  })
)

export interface Order {
  id: number
  dateTime: Date
  subtotal: number
  tax: number
  total: number
  instructions?: string
}
