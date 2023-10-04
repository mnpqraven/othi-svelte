<script lang="ts">
  // global css
  import '../app.css';

  import { QueryClientProvider } from '@tanstack/svelte-query';
  import Navbar from './Navbar.svelte';

  import { AppShell } from '@skeletonlabs/skeleton';

  export let data;
</script>

<QueryClientProvider client={data.queryClient}>
  <AppShell>
    <svelte:fragment slot="header">
      <Navbar />
    </svelte:fragment>

    <div class="mt-11">
      <slot />
    </div>
  </AppShell>
</QueryClientProvider>
