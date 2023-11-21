import { writable } from 'svelte/store'
import { lightPalette } from './lightPalette.js'
import type { Palette } from './types/Palette.js'

export const palette = writable<Palette>(lightPalette)
