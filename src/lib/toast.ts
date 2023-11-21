import type { Renderable, ToastOptions } from 'svelte-french-toast'
import { toast as t } from 'svelte-french-toast'
import { derived } from 'svelte/store'
import { palette } from './palette.js'

const { remove, dismiss } = t

export const toast = derived(palette, ($palette) => {
  const { background, text, secondary } = $palette

  const baseStyle = (border: string) =>
    `background: ${background}; color: ${text}; border: solid 1px ${border};`

  const successStyle = {
    style: baseStyle($palette.success),
    iconTheme: {
      primary: $palette.success,
      secondary
    }
  }

  const loadingsStyle = {
    style: baseStyle($palette.loading_secondary),
    iconTheme: {
      primary: $palette.loading,
      secondary: $palette.loading_secondary
    }
  }

  const errorStyle = {
    style: baseStyle($palette.error),
    iconTheme: {
      primary: $palette.error,
      secondary
    }
  }

  const loading = (message: Renderable, options?: ToastOptions) =>
    t.loading(message, {
      ...loadingsStyle,
      ...options
    })

  const promise = <T>(
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

  const plain = (message: Renderable, options?: ToastOptions) =>
    t(message, {
      style: baseStyle($palette.loading),
      ...options
    })

  const custom = (message: Renderable, options?: ToastOptions) =>
    t.custom(message, {
      style: baseStyle($palette.loading),
      ...options
    })

  const success = (message: Renderable, options?: ToastOptions) =>
    t.success(message, {
      ...successStyle,
      ...options
    })

  const error = (message: Renderable, options?: ToastOptions) =>
    t.error(message, {
      ...errorStyle,
      ...options
    })

  return {
    promise,
    dismiss,
    plain,
    success,
    error,
    remove,
    custom,
    loading
  }
})
