<!----- BEGIN GHOST DOCS HEADER ----->

# svelte-toast

[![npm-version](https://img.shields.io/npm/v/@jill64/svelte-toast)](https://npmjs.com/package/@jill64/svelte-toast) [![npm-license](https://img.shields.io/npm/l/@jill64/svelte-toast)](https://npmjs.com/package/@jill64/svelte-toast) [![npm-download-month](https://img.shields.io/npm/dm/@jill64/svelte-toast)](https://npmjs.com/package/@jill64/svelte-toast) [![npm-min-size](https://img.shields.io/bundlephobia/min/@jill64/svelte-toast)](https://npmjs.com/package/@jill64/svelte-toast) [![ci.yml](https://github.com/jill64/svelte-toast/actions/workflows/ci.yml/badge.svg)](https://github.com/jill64/svelte-toast/actions/workflows/ci.yml) [![stackblitz](https://img.shields.io/badge/StackBlitz-jill64--svelte--toast-dodgerblue)](https://stackblitz.com/edit/jill64-svelte-toast?file=src%2Froutes%2FDemo.svelte)

🍞 My quick setup for svelte-french-toast

## [Demo](https://stackblitz.com/edit/jill64-svelte-toast?file=src%2Froutes%2FDemo.svelte)

## Install

```sh
npm i @jill64/svelte-toast
```

<!----- END GHOST DOCS HEADER ----->

[svelte-french-toast](https://github.com/kbrgl/svelte-french-toast)

- Color palette makes theme setting quick and simple
- Applies device dark theme by default
- Most of the original methods are available

## Usage

```svelte:+layout.svelte
<!-- +layout.svelte -->
<script>
  import { Toaster } from '@jill64/svelte-toast'

  // Optional Color Palette
  $: palette = {
    background: '#EEE',
    text: '#000',
    success: '#29cf60',
    error: '#cf3d29',
    secondary: '#FFF',
    loading: '#BBB'
  }
</script>

<Toaster {palette} />
<!-- ... -->
<slot />
<!-- ... -->
```

```svelte:+page.svelte
<!-- +page.svelte -->
<script>
  import { toast } from '@jill64/svelte-toast'

  const onSuccess = () => $toast.success('Success', {
    // Optional Toast Config
  })

  const onError= () => $toast.error('Error', {
    // Optional Toast Config
  })

  const onPromise = () =>
    $toast.promise(
      // Your Promise
      ,
      {
        success: 'Success',
        error: 'Error',
        loading: 'Loading'
      },
      {
        // Optional Toast Config
      }
    )
</script>

<button on:click={onSuccess}> Success </button>
<button on:click={onError}> Error </button>
<button on:click={onPromise}> Promise </button>
```
