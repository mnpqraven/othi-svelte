<script lang="ts">
  import { img } from '$lib/utils';

  export let data;
  let { characterList } = data;
</script>

<p>charas</p>
<p>TODO: option to filter disabled charas</p>
<button class="btn btn-sm variant-filled">Custom</button>

<div class="flex flex-wrap gap-3 rounded-md border">
  {#each characterList as character}
    <div class="flex flex-col gap-1">
      <img
        src={img(`icon/avatar/${character.avatar_id}.png`)}
        alt={character.avatar_name}
        class="h-16 w-16"
      />
    </div>
  {/each}
</div>
