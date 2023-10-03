import { drizzle } from 'drizzle-orm/libsql';
import { DB_AUTH_TOKEN, DB_URL } from '$env/static/private';
import { createClient } from '@libsql/client/web';

const client = createClient({
  url: DB_URL,
  authToken: DB_AUTH_TOKEN
});

/** database instance
 * @usage server only */
export const db = drizzle(client);
