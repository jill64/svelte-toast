<script lang="ts">
  import { is } from '@jill64/svelte-device-theme'
  import type { ToastOptions, ToastPosition } from 'svelte-french-toast'
  import { Toaster } from 'svelte-french-toast'
  import { listen } from 'svelte-mq-store'
  import { palette as store } from './palette.svelte.js'
  import type { Palette } from './types/Palette.js'

  let {
    reverseOrder,
    position = 'bottom-left',
    mobilePosition = 'top-center',
    toastOptions = undefined,
    gutter = undefined,
    containerStyle = undefined,
    containerClassName = undefined,
    palette = undefined,
    dark = undefined,
    mobileQuery = '(max-width: 640px)'
  }: {
    reverseOrder?: boolean
    position: ToastPosition
    mobilePosition?: ToastPosition
    toastOptions?: ToastOptions
    gutter?: number
    containerStyle?: string
    containerClassName?: string
    palette?: Partial<Palette>
    dark?: boolean
    mobileQuery: string
  } = $props()

  let isMobile = $derived(listen(mobileQuery))

  let predefined_dark = $derived({
    background: '#222',
    text: 'whitesmoke',
    success: 'darkgreen',
    error: 'darkred',
    secondary: 'gainsboro',
    loading: '#888',
    loading_secondary: '#555',
    ...palette
  })

  let predefined_light = $derived({
    background: 'whitesmoke',
    text: 'black',
    success: 'limegreen',
    error: 'crimson',
    secondary: 'white',
    loading: 'gray',
    loading_secondary: 'lightgray',
    ...palette
  })

  $effect(() => {
    const isDark = dark ?? is.dark

    store.background = isDark
      ? predefined_dark.background
      : predefined_light.background

    store.text = isDark ? predefined_dark.text : predefined_light.text

    store.success = isDark ? predefined_dark.success : predefined_light.success

    store.error = isDark ? predefined_dark.error : predefined_light.error

    store.secondary = isDark
      ? predefined_dark.secondary
      : predefined_light.secondary

    store.loading = isDark ? predefined_dark.loading : predefined_light.loading

    store.loading_secondary = isDark
      ? predefined_dark.loading_secondary
      : predefined_light.loading_secondary
  })
</script>

<Toaster
  position={isMobile.v ? mobilePosition : position}
  {reverseOrder}
  {toastOptions}
  {gutter}
  {containerStyle}
  {containerClassName}
/>
