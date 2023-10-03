import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const blog = sqliteTable('blog', {
  id: int('id').primaryKey(),
  name: text('name', { length: 255 }).notNull(),
  content: text('content'),
  createdAt: int('createdAt', { mode: 'timestamp' })
    .notNull()
    .$defaultFn(() => new Date()),
  updatedAt: int('updatedAt', { mode: 'timestamp' })
    .notNull()
    .$defaultFn(() => new Date())
});

export type Blog = typeof blog.$inferSelect;
export type NewBlog = typeof blog.$inferInsert;

// export const blogCategory = sqliteTable('blog_category', {
//   blogId: integer('id').primaryKey(),
//   category: ,
// })
