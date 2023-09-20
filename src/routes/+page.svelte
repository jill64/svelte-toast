<script lang="ts">
  import { toast } from '$lib/toast.js'
</script>

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
