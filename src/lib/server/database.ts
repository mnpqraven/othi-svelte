import { drizzle } from 'drizzle-orm/libsql';
import { DB_AUTH_TOKEN, DB_URL } from '$env/static/private';
import { createClient } from '@libsql/client/web';
import { migrate } from 'drizzle-orm/libsql/migrator';
import { dev } from '$app/environment';

const client = createClient({
  url: DB_URL,
  authToken: DB_AUTH_TOKEN
});

/** database instance
 * @usage server only */
export const db = drizzle(client);

if (dev) {
  // automatically run needed migrations on the database
  await migrate(db, { migrationsFolder: 'drizzle' });
}
