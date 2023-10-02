<script lang="ts">
  import { cn } from '$lib';
  import Posts from '$lib/Posts.svelte';
</script>

<h1 class={cn('bg-black text-white')}>Welcome to SvelteKit</h1>
<p>
  Visit <a target="_blank" href="https://kit.svelte.dev">kit.svelte.dev</a> to read
  the documentation
</p>
<Posts />
