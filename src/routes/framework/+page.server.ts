import { db } from '$lib/server/database';
import { frameworks } from '$db/frameworks';

export const load = async () => {
  return { frameworks: getFrameworks() };
};

async function getFrameworks() {
  const res = await db.select().from(frameworks);
  return res;
}
