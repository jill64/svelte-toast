# svelte-toast

[![npm version](https://badge.fury.io/js/@jill64%2Fsvelte-toast.svg)](https://badge.fury.io/js/@jill64%2Fsvelte-toast)

My quick setup for [svelte-french-toast](https://github.com/kbrgl/svelte-french-toast).

- Color palette makes theme setting quick and simple
- Applies device dark theme by default
- Most of the original methods are available

## Install

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

  const onPromise = () => () =>
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
