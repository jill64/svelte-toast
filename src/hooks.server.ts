import { serverInit } from '@jill64/sentry-sveltekit-cloudflare'
import { hooks } from '@jill64/npm-demo-layout'

const { onHandle, onError } = serverInit(
  'https://a002be94e5a9dfad1fdc56df5ea34f4b@o4505814639312896.ingest.sentry.io/4506253567328256'
)

export const handle = onHandle(hooks)
export const handleError = onError()
