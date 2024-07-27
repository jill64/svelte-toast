<script lang="ts">
  import { is } from '@jill64/svelte-device-theme'
  import type { ToastOptions, ToastPosition } from 'svelte-french-toast'
  import { Toaster } from 'svelte-french-toast'
  import { listen } from 'svelte-mq-store'
  import { lightPalette } from './lightPalette.js'
  import { toast } from './toast.svelte.js'
  import type { Palette } from './types/Palette.js'

  let {
    reverseOrder = undefined,
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
    reverseOrder?: boolean | undefined
    position?: ToastPosition
    mobilePosition?: ToastPosition | undefined
    toastOptions?: ToastOptions | undefined
    gutter?: number | undefined
    containerStyle?: string | undefined
    containerClassName?: string | undefined
    palette?: Partial<Palette> | undefined
    dark?: boolean | undefined
    mobileQuery?: string
  } = $props()

  let isMobile = $derived(listen(mobileQuery))

  console.log(is.dark, 'is.dark')

  $effect(() => {
    toast.palette =
      (dark ?? is.dark)
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
  })
</script>

<Toaster
  position={isMobile ? mobilePosition : position}
  {reverseOrder}
  {toastOptions}
  {gutter}
  {containerStyle}
  {containerClassName}
/>
