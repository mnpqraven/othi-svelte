<script lang="ts">
  import Post from '$lib/Post.svelte';

  export let data;
</script>

<Post postId={data.postId} />
