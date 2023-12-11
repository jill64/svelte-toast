<!----- BEGIN GHOST DOCS HEADER ----->

# svelte-toast

[![npm-version](https://img.shields.io/npm/v/@jill64/svelte-toast)](https://npmjs.com/package/@jill64/svelte-toast) [![npm-license](https://img.shields.io/npm/l/@jill64/svelte-toast)](https://npmjs.com/package/@jill64/svelte-toast) [![npm-download-month](https://img.shields.io/npm/dm/@jill64/svelte-toast)](https://npmjs.com/package/@jill64/svelte-toast) [![npm-min-size](https://img.shields.io/bundlephobia/min/@jill64/svelte-toast)](https://npmjs.com/package/@jill64/svelte-toast) [![ci.yml](https://github.com/jill64/svelte-toast/actions/workflows/ci.yml/badge.svg)](https://github.com/jill64/svelte-toast/actions/workflows/ci.yml) [![website](https://img.shields.io/website?up_message=working&down_message=down&url=https%3A%2F%2Fsvelte-toast.jill64.dev)](https://svelte-toast.jill64.dev)

🍞 Pre-Themed Responsive Toast Notification

## [Demo](https://svelte-toast.jill64.dev)

<!----- END GHOST DOCS HEADER ----->

This library is a personal extension of [svelte-french-toast](https://github.com/kbrgl/svelte-french-toast)

- Color palette makes theme setting quick and simple
- Applies device dark theme by default
- Most of the original methods are available

## Installation

```sh
npm i @jill64/svelte-toast
```

## Usage

```svelte
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

```svelte
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
