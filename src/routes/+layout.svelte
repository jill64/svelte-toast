<script lang="ts">
  import Toaster from '$lib/Toaster.svelte'
  import { FlipButton, ThemeManager, theme } from '@jill64/svelte-dark-theme'
  import github from 'svelte-highlight/styles/github'
  import githubDark from 'svelte-highlight/styles/github-dark'
  import GItHubLogo from './GItHubLogo.svelte'
</script>

<svelte:head>
  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  {@html $theme === 'dark' ? githubDark : github}
</svelte:head>

<Toaster dark={$theme === 'dark'} />
<ThemeManager />

<header>
  <hgroup>
    <h1>@jill64/svelte-toast</h1>
    <p>🍞 Pre-Themed Responsive Toast Notification</p>
  </hgroup>
  <FlipButton />
  <a href="https://github.com/jill64/svelte-toast">
    <GItHubLogo />
  </a>
</header>
<slot />

<style>
  :global(body) {
    font-family: sans-serif;
    margin: 1rem;
  }
  :global(.dark body) {
    background: #161616;
    color: whitesmoke;
  }
  header {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  hgroup {
    margin-right: auto;
  }
</style>
