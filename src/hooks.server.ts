import { hooks } from '@jill64/npm-demo-layout'
import { init } from '@jill64/sentry-sveltekit-cloudflare/server'

const { onHandle, onError } = init(
  'https://4f794b1c54f570c819ef0486a7c7ae40@o4505814639312896.ingest.sentry.io/4506691816980480'
)

export const handle = onHandle(hooks)
export const handleError = onError()
