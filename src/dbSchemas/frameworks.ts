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
    nameIdx: index('idx_frameworks_name').on(frameworks.name),
    urlIdx: index('idx_frameworks_url').on(frameworks.url)
  })
);
