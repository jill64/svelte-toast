import type { Palette } from './types/Palette'

let background = $state('whitesmoke')
let text = $state('black')
let success = $state('limegreen')
let error = $state('crimson')
let secondary = $state('white')
let loading = $state('gray')
let loading_secondary = $state('lightgray')

export let palette = {
  get background() {
    return background
  },
  set background(value: string) {
    background = value
  },
  get text() {
    return text
  },
  set text(value: string) {
    text = value
  },
  get success() {
    return success
  },
  set success(value: string) {
    success = value
  },
  get error() {
    return error
  },
  set error(value: string) {
    error = value
  },
  get secondary() {
    return secondary
  },
  set secondary(value: string) {
    secondary = value
  },
  get loading() {
    return loading
  },
  set loading(value: string) {
    loading = value
  },
  get loading_secondary() {
    return loading_secondary
  },
  set loading_secondary(value: string) {
    loading_secondary = value
  }
} satisfies Palette
