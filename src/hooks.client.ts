import { init } from '@jill64/sentry-sveltekit-cloudflare/client'

const onError = init(
  'https://4f794b1c54f570c819ef0486a7c7ae40@o4505814639312896.ingest.sentry.io/4506691816980480'
)

export const handleError = onError()
