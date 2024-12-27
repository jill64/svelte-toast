import type { Renderable, ToastOptions } from 'svelte-french-toast'
import { toast as t } from 'svelte-french-toast'
import { palette } from './palette.svelte.js'

const { remove, dismiss } = t

let success = $derived.by(() => {
  const { background, text, secondary } = palette

  const baseStyle = (border: string) =>
    `background: ${background}; color: ${text}; border: solid 1px ${border};`

  const successStyle = {
    style: baseStyle(palette.success),
    iconTheme: {
      primary: palette.success,
      secondary
    }
  }

  return (message: Renderable, options?: ToastOptions) =>
    t.success(message, {
      ...successStyle,
      ...options
    })
})

let error = $derived.by(() => {
  const { background, text, secondary } = palette

  const baseStyle = (border: string) =>
    `background: ${background}; color: ${text}; border: solid 1px ${border};`

  const errorStyle = {
    style: baseStyle(palette.error),
    iconTheme: {
      primary: palette.error,
      secondary
    }
  }

  return (message: Renderable, options?: ToastOptions) =>
    t.error(message, {
      ...errorStyle,
      ...options
    })
})

let loading = $derived.by(() => {
  const { background, text } = palette

  const baseStyle = (border: string) =>
    `background: ${background}; color: ${text}; border: solid 1px ${border};`

  const loadingsStyle = {
    style: baseStyle(palette.loading_secondary),
    iconTheme: {
      primary: palette.loading,
      secondary: palette.loading_secondary
    }
  }

  return (message: Renderable, options?: ToastOptions) =>
    t.loading(message, {
      ...loadingsStyle,
      ...options
    })
})

let promise = $derived.by(() => {
  const { background, text, secondary } = palette

  const baseStyle = (border: string) =>
    `background: ${background}; color: ${text}; border: solid 1px ${border};`

  const successStyle = {
    style: baseStyle(palette.success),
    iconTheme: {
      primary: palette.success,
      secondary
    }
  }

  const loadingsStyle = {
    style: baseStyle(palette.loading_secondary),
    iconTheme: {
      primary: palette.loading,
      secondary: palette.loading_secondary
    }
  }

  const errorStyle = {
    style: baseStyle(palette.error),
    iconTheme: {
      primary: palette.error,
      secondary
    }
  }

  return <T>(
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
})

let plain = $derived.by(() => {
  const { background, text } = palette

  const baseStyle = (border: string) =>
    `background: ${background}; color: ${text}; border: solid 1px ${border};`

  return (message: Renderable, options?: ToastOptions) =>
    t(message, {
      style: baseStyle(palette.loading),
      ...options
    })
})

let custom = $derived.by(() => {
  const { background, text } = palette

  const baseStyle = (border: string) =>
    `background: ${background}; color: ${text}; border: solid 1px ${border};`

  return (message: Renderable, options?: ToastOptions) =>
    t.custom(message, {
      style: baseStyle(palette.loading),
      ...options
    })
})

export const toast = {
  get success() {
    return success
  },
  get error() {
    return error
  },
  get loading() {
    return loading
  },
  get promise() {
    return promise
  },
  get plain() {
    return plain
  },
  get custom() {
    return custom
  },
  get remove() {
    return remove
  },
  get dismiss() {
    return dismiss
  }
}
