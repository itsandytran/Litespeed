import {
  integer,
  SQLiteColumn,
  text,
  uniqueIndex,
} from "drizzle-orm/sqlite-core"

/** An auto-incrementing integer primary key. */
export const id = {
  id: integer("id").primaryKey({ autoIncrement: true }),
}

/** A non-`null` unique name. */
export const name = {
  name: text("name").notNull().unique(),
}

/** A unique index on `name`. */
export const nameIndex = (table: { name: SQLiteColumn }) => ({
  nameIndex: uniqueIndex("name_index").on(table.name),
})
