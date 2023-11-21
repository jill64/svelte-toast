<script lang="ts">
  import { isDark } from '@jill64/svelte-device-theme'
  import type { ToastOptions, ToastPosition } from 'svelte-french-toast'
  import { Toaster } from 'svelte-french-toast'
  import { listen } from 'svelte-mq-store'
  import { lightPalette } from './lightPalette.js'
  import { palette as store } from './palette.js'
  import type { Palette } from './types/Palette.js'

  export let reverseOrder: boolean | undefined = undefined
  export let position: ToastPosition = 'bottom-left'
  export let mobilePosition: ToastPosition | undefined = 'top-center'
  export let toastOptions: ToastOptions | undefined = undefined
  export let gutter: number | undefined = undefined
  export let containerStyle: string | undefined = undefined
  export let containerClassName: string | undefined = undefined
  export let palette: Partial<Palette> | undefined = undefined
  export let dark: boolean | undefined = undefined
  export let mobileQuery = '(max-width: 640px)'

  $: isMobile = listen(mobileQuery)

  $: $store =
    dark ?? $isDark
      ? {
          background: '#222',
          text: 'whitesmoke',
          success: 'darkgreen',
          error: 'darkred',
          secondary: 'gainsboro',
          loading: '#888',
          loading_secondary: '#555',
          ...palette
        }
      : {
          ...lightPalette,
          ...palette
        }
</script>

<Toaster
  position={$isMobile ? mobilePosition : position}
  {reverseOrder}
  {toastOptions}
  {gutter}
  {containerStyle}
  {containerClassName}
/>
