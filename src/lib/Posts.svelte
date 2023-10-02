<script lang="ts">
  import { useQueryClient, createQuery } from '@tanstack/svelte-query';
  import { api } from './api';
  import { cn } from '$lib';

  const client = useQueryClient();

  let limit = 10;

  const posts = createQuery<
    { id: number; title: string; body: string }[],
    Error
  >({
    queryKey: ['posts', limit],
    queryFn: () => api().getPosts(limit)
  });
</script>

<div>
  <div>
    {#if $posts.status === 'pending'}
      <span>Loading...</span>
    {:else if $posts.status === 'error'}
      <span>Error: {$posts.error.message}</span>
    {:else}
      <ul>
        {#each $posts.data as post}
          <article>
            <a
              href={`/${post.id}`}
              class={cn(
                client.getQueryData(['post', post.id])
                  ? 'font-bold text-red-300'
                  : 'text-blue-400'
              )}
            >
              {post.title}
            </a>
          </article>
        {/each}
      </ul>
      {#if $posts.isFetching}
        <div style="color:darkgreen; font-weight:700">
          Background Updating...
        </div>
      {/if}
    {/if}
  </div>
</div>

<style>
  article {
    text-align: left;
  }
</style>
