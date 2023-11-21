<script lang="ts">
  import { toast } from '$lib/toast.js'
  import { HighlightAuto } from 'svelte-highlight'
</script>

<HighlightAuto code="" />
<button on:click={() => $toast.success('Success Response')}>
  Success Action
</button>
<button on:click={() => $toast.error('Error Response')}>Error Action</button>
<button
  on:click={() =>
    $toast.promise(new Promise((_) => setTimeout(_, 2000)), {
      success: 'Resolved',
      error: 'Rejected',
      loading: 'Loading'
    })}
>
  Resolve Action
</button>
<button
  on:click={() =>
    $toast.promise(new Promise((_, reject) => setTimeout(reject, 2000)), {
      success: 'Resolved',
      error: 'Rejected',
      loading: 'Loading'
    })}
>
  Reject Action
</button>

<style>
  button {
    padding: 1rem 2rem;
    border-radius: 9999px;
    border: none;
    font-size: large;
    cursor: pointer;
    background: inherit;
    color: inherit;
    border: 1px solid #aaa;
  }
</style>
