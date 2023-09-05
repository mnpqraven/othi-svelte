import { index, integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const frameworks = sqliteTable(
  'frameworks',
  {
    id: text('id').primaryKey(),
    name: text('name').notNull(),
    language: text('language').notNull(),
    url: text('url'),
    stars: integer('stars')
  },
  (frameworks) => ({
    nameIdx: index('name_idx').on(frameworks.name)
  })
);
