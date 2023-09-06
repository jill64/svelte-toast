<script lang="ts">
  import Toaster from '$lib/Toaster.svelte'
</script>

<Toaster />
<slot />

<style>
  :global(body) {
    font-family: sans-serif;
  }
  @media (prefers-color-scheme: dark) {
    :global(body) {
      background: #111;
      color: #eee;
    }
  }
</style>
