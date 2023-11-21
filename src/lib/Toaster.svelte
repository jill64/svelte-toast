<script lang="ts">
  import type { ToastOptions, ToastPosition } from 'svelte-french-toast'
  import { Toaster } from 'svelte-french-toast'
  import { palette as paletteStore } from './palette.js'
  import type { Palette } from './types/Palette.js'
  import { isDark } from '@jill64/svelte-device-theme'

  export let reverseOrder: boolean | undefined = undefined
  export let position: ToastPosition = 'bottom-left'
  export let toastOptions: ToastOptions | undefined = undefined
  export let gutter: number | undefined = undefined
  export let containerStyle: string | undefined = undefined
  export let containerClassName: string | undefined = undefined
  export let palette: Partial<Palette> | undefined = undefined
  export let dark: boolean | undefined = undefined

  $: d = dark ?? $isDark

  $: $paletteStore = {
    background: d ? '#222' : '#EEE',
    text: d ? '#EEE' : '#000',
    success: d ? '#157a37' : '#29cf60',
    error: d ? '#781e12' : '#cf3d29',
    secondary: d ? '#DDD' : '#FFF',
    loading: d ? '#555' : '#BBB',
    ...palette
  }
</script>

<Toaster
  {position}
  {reverseOrder}
  {toastOptions}
  {gutter}
  {containerStyle}
  {containerClassName}
/>
