<script lang="ts">
  import { isDark } from '@jill64/svelte-device-theme'
  import type { ToastOptions, ToastPosition } from 'svelte-french-toast'
  import { Toaster } from 'svelte-french-toast'
  import { palette as paletteStore } from './palette.js'
  import type { Palette } from './types/Palette.js'

  export let reverseOrder: boolean | undefined = undefined
  export let position: ToastPosition = 'bottom-left'
  export let toastOptions: ToastOptions | undefined = undefined
  export let gutter: number | undefined = undefined
  export let containerStyle: string | undefined = undefined
  export let containerClassName: string | undefined = undefined
  export let palette: Partial<Palette> | undefined = undefined

  $: $paletteStore = {
    background: $isDark ? '#222' : '#EEE',
    text: $isDark ? '#EEE' : '#000',
    success: $isDark ? '#157a37' : '#29cf60',
    error: $isDark ? '#781e12' : '#cf3d29',
    secondary: $isDark ? '#DDD' : '#FFF',
    loading: $isDark ? '#555' : '#BBB',
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
