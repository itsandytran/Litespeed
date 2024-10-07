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

/**
 * Specifies a foreign-key constraint for the given column.
 *
 * @param columnName The name of the column.
 * @param foreignKey A function that returns the referenced column to which the foreign key will point.
 * @param required Specifies whether the column should not accept `null` (default: `true`).
 */
export const reference = (
  columnName: string,
  foreignKey: () => SQLiteColumn,
  required: boolean = true
) => {
  const column = integer(columnName).references(foreignKey)
  return required ? column.notNull() : column
}
