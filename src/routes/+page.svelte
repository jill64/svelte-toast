<script lang="ts">
  import { toast } from '$lib/toast.js'
</script>

<h1>svelte-toast</h1>
<button on:click={() => $toast.success('Success')}> Success </button>
<button on:click={() => $toast.error('Error')}>Error</button>
<button
  on:click={() =>
    $toast.promise(new Promise((_) => setTimeout(_, 2000)), {
      success: 'Success',
      error: 'Error',
      loading: 'Loading'
    })}
>
  Promise
</button>

<style>
  button {
    padding: 8px 16px;
    margin: 4px;
    border-radius: 9999px;
    cursor: pointer;
    border: none;
  }
  @media (prefers-color-scheme: dark) {
    button {
      background: #444;
      color: #eee;
    }
  }
</style>
