import { writable } from 'svelte/store'
import type { Palette } from './types/Palette.js'

export const palette = writable<Palette>({
  background: '#EEE',
  text: '#000',
  success: '#29cf60',
  error: '#cf3d29',
  secondary: '#FFF',
  loading: '#BBB'
})
