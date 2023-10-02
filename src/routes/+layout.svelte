<script lang="ts">
  // global css
  import '../app.css';

  import { QueryClientProvider } from '@tanstack/svelte-query';
  import Navbar from './Navbar.svelte';

  export let data;
</script>

<QueryClientProvider client={data.queryClient}>
  <div class="h-screen w-screen">
    <div class="h-11">
      <Navbar />
    </div>

    <main class="max-h-full">
      <slot />
    </main>
  </div>
</QueryClientProvider>
