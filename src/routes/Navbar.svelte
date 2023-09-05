<script lang="ts">
  const routes = [
    { path: '/', label: 'Home' },
    { path: '/framework', label: 'Framework (dev)' }
  ];
</script>

<nav class="fixed h-11 w-full bg-red-300 flex gap-2">
  {#each routes as route}
    <a href={route.path}>{route.label}</a>
  {/each}
</nav>
