export const code = {
  '': `

`,
  success: `$toast.success('Success Response')`,
  error: `$toast.error('Error Response')`,
  resolve: `$toast.promise(new Promise((resolve) => setTimeout(resolve, 2000)), {
  success: 'Resolved',
  error: 'Rejected',
  loading: 'Loading'
})}`,
  reject: `$toast.promise(new Promise((_, reject) => setTimeout(reject, 2000)), {
  success: 'Resolved',
  error: 'Rejected',
  loading: 'Loading'
})`
}
