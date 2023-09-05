<script lang="ts">
  export let data;

  let { frameworks } = data;
</script>

<h1>What is this?</h1>

{#each frameworks as framework}
  <div>
    {framework.name} - {framework.language}
  </div>
{/each}
