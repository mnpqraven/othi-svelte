<script lang="ts">
  // global css
  import '../app.css';

  import { QueryClientProvider } from '@tanstack/svelte-query';
  import Navbar from './Navbar.svelte';

  export let data;
</script>

<QueryClientProvider client={data.queryClient}>
  <div class="h-11">
    <Navbar />
  </div>

  <main>
    <slot />
  </main>
</QueryClientProvider>
