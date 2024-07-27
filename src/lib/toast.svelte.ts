import type { Renderable, ToastOptions } from 'svelte-french-toast'
import { toast as t } from 'svelte-french-toast'
import { lightPalette } from './lightPalette.js'
import type { Palette } from './types/Palette.js'

let palette = $state<Palette>(lightPalette)

const { remove, dismiss } = t

let background = $derived(palette.background)
let text = $derived(palette.text)
let secondary = $derived(palette.secondary)

const baseStyle = (border: string) =>
  `background: ${background}; color: ${text}; border: solid 1px ${border};`

let successStyle = $derived({
  style: baseStyle(palette.success),
  iconTheme: {
    primary: palette.success,
    secondary
  }
})

let loadingsStyle = $derived({
  style: baseStyle(palette.loading_secondary),
  iconTheme: {
    primary: palette.loading,
    secondary: palette.loading_secondary
  }
})

let errorStyle = $derived({
  style: baseStyle(palette.error),
  iconTheme: {
    primary: palette.error,
    secondary
  }
})

let loading = $derived((message: Renderable, options?: ToastOptions) =>
  t.loading(message, {
    ...loadingsStyle,
    ...options
  })
)

let promise = $derived(
  <T>(
    promise: Promise<T>,
    message: Parameters<typeof t.promise>[1],
    options?: Parameters<typeof t.promise>[2]
  ) =>
    t.promise(promise, message, {
      ...{
        success: successStyle,
        loading: loadingsStyle,
        error: errorStyle
      },
      ...options
    })
)

let plain = $derived((message: Renderable, options?: ToastOptions) =>
  t(message, {
    style: baseStyle(palette.loading),
    ...options
  })
)

let custom = $derived((message: Renderable, options?: ToastOptions) =>
  t.custom(message, {
    style: baseStyle(palette.loading),
    ...options
  })
)

let success = $derived((message: Renderable, options?: ToastOptions) =>
  t.success(message, {
    ...successStyle,
    ...options
  })
)

let error = $derived((message: Renderable, options?: ToastOptions) =>
  t.error(message, {
    ...errorStyle,
    ...options
  })
)

export let toast = {
  get promise() {
    return promise
  },
  get dismiss() {
    return dismiss
  },
  get plain() {
    return plain
  },
  get success() {
    return success
  },
  get error() {
    return error
  },
  get remove() {
    return remove
  },
  get custom() {
    return custom
  },
  get loading() {
    return loading
  },
  get palette() {
    return palette
  },
  set palette(value: Palette) {
    palette = value
  }
}
