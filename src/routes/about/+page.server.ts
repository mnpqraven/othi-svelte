import { frameworks } from '$lib/databaseSchema';
import { db } from '$lib/server/database';

export const load = async () => {
  return { frameworks: getFrameworks() };
};

async function getFrameworks() {
  const res = await db.select().from(frameworks);
  return res;
}
