import { blog, type NewBlog } from '$db/blog';
import { db } from '$lib/server/database';
import type { Actions } from './$types';

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();

    const name = data.get('name') as string | null;
    const content = data.get('content') as string | null;

    console.log(name, content);
    if (name) {
      const res = await db
        .insert(blog)
        .values({
          name,
          content
        })
        .returning();
      console.log(res);
    }
  }
} satisfies Actions;
