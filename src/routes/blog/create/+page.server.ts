import type { Actions } from './$types';

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();

    const name = data.get('name');
    const content = data.get('content');

    // TODO: CRUD using this

    console.log(data);
  }
} satisfies Actions;
