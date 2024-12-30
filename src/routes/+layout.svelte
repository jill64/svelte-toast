<script lang="ts">
  import Toaster from '$lib/Toaster.svelte'
  import { FlipButton, ThemeManager } from '@jill64/svelte-dark-theme'
  import GitHubLogo from './GitHubLogo.svelte'

  let { children } = $props()
</script>

<ThemeManager />
<Toaster />

<header>
  <hgroup>
    <h1>@jill64/svelte-toast</h1>
    <p>🍞 Pre-Themed Responsive Toast Notification</p>
  </hgroup>
  <FlipButton />
  <GitHubLogo />
</header>

{@render children()}

<style>
  :global(body) {
    font-family: sans-serif;
    padding: 0 1rem;
  }
  :global(.dark body) {
    background-color: #161616;
    color: whitesmoke;
  }
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }
  hgroup {
    margin-right: auto;
  }
</style>
