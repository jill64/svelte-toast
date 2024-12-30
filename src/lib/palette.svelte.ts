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
  set background(value) {
    background = value
  },
  get text() {
    return text
  },
  set text(value) {
    text = value
  },
  get success() {
    return success
  },
  set success(value) {
    success = value
  },
  get error() {
    return error
  },
  set error(value) {
    error = value
  },
  get secondary() {
    return secondary
  },
  set secondary(value) {
    secondary = value
  },
  get loading() {
    return loading
  },
  set loading(value) {
    loading = value
  },
  get loading_secondary() {
    return loading_secondary
  },
  set loading_secondary(value) {
    loading_secondary = value
  }
} satisfies Palette
