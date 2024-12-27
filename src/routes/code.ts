import { match } from 'ts-pattern'

const base = (label: string, fn: string) => () => /* html */ `
<script>
  import { toast } from '@jill64/svelte-toast'

  const onClick = () => ${fn}
</script>

<button onclick={onClick}>
  ${label}
</button>
`

export const code = (state: '' | 'success' | 'error' | 'resolve' | 'reject') =>
  match(state)
    .with('', base('', '{}'))
    .with(
      'success',
      base('Success Action', '$toast.success("Success Response")')
    )
    .with('error', base('Error Action', '$toast.error("Error Response")'))
    .with(
      'resolve',
      base(
        'Resolve Action',
        `$toast.promise(
    new Promise((resolve) => setTimeout(resolve, 2000)),
    {
      success: 'Resolved',
      error: 'Rejected',
      loading: 'Loading'
    }
  )`
      )
    )
    .with(
      'reject',
      base(
        'Reject Action',
        `$toast.promise(
    new Promise((_, reject) => setTimeout(reject, 2000)),
    {
      success: 'Resolved',
      error: 'Rejected',
      loading: 'Loading'
    }
  )`
      )
    )
    .exhaustive()
