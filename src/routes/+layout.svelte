<script lang="ts">
  import { browser } from '$app/environment';
  import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
  import '../app.css';
  import Navbar from './Navbar.svelte';

  const client = new QueryClient({
    defaultOptions: {
      queries: {
        enabled: browser,
        refetchOnWindowFocus: false
      }
    }
  });
</script>

<QueryClientProvider {client}>
  <div class="h-11">
    <Navbar />
  </div>

  <main>
    <slot />
  </main>
</QueryClientProvider>
