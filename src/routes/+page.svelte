<script lang="ts">
  import { toast } from '@jill64/npm-demo-layout'
  import { HighlightSvelte } from '@jill64/npm-demo-layout/highlight'
  import { code } from './code'
  import { rootCode } from './rootCode'

  let state: '' | 'success' | 'error' | 'resolve' | 'reject' = $state('')
</script>

<main>
  <button
    onclick={() => {
      state = 'success'
      toast.success('Success Response')
    }}
  >
    Success Action
  </button>
  <button
    onclick={() => {
      state = 'error'
      toast.error('Error Response')
    }}
  >
    Error Action</button
  >
  <button
    onclick={() => {
      state = 'resolve'
      toast.promise(new Promise((_) => setTimeout(_, 2000)), {
        success: 'Resolved',
        error: 'Rejected',
        loading: 'Loading'
      })
    }}
  >
    Resolve Action
  </button>
  <button
    onclick={() => {
      state = 'reject'
      toast.promise(new Promise((_, reject) => setTimeout(reject, 2000)), {
        success: 'Resolved',
        error: 'Rejected',
        loading: 'Loading'
      })
    }}
  >
    Reject Action
  </button>
</main>
<output>
  <HighlightSvelte code={rootCode.trim()} />
  <HighlightSvelte code={code(state).trim()} />
</output>

<style>
  output {
    font-size: larger;
  }
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
  button:hover {
    background: rgba(0, 0, 0, 0.1);
  }
  button:active {
    background: rgba(0, 0, 0, 0.2);
  }
  :global(.dark) button:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  :global(.dark) button:active {
    background: rgba(255, 255, 255, 0.2);
  }
  main {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
  }
  :global(code) {
    padding: 1rem;
    border-radius: 1rem;
  }
</style>
