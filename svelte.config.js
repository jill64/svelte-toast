import adapter from '@sveltejs/adapter-cloudflare'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),
    alias:
      process.env.NODE_ENV === 'production'
        ? {}
        : {
            '@jill64/svelte-toast': './dist/index.js'
          }
  }
}

export default config
