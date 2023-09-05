import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const frameworks = sqliteTable('frameworks', {
  id: text('id').primaryKey(),
  name: text('name'),
  language: text('language'),
  url: text('image'),
  stars: integer('stars')
});
