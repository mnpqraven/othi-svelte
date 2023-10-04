<script lang="ts">
  const routes = [
    { path: '/', label: 'Home' },
    { path: '/planner', label: 'Planner' }
  ];
</script>

<nav class="fixed flex h-11 w-full gap-2 py-2 border-b border-gray-400">
  {#each routes as route}
    <a href={route.path} class="btn variant-filled">
      {route.label}
    </a>
  {/each}
</nav>
