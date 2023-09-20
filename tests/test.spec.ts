import { expect, test } from '@playwright/test'

test('success', async ({ page }) => {
  await page.goto('/svelte-toast')

  await page.getByRole('button', { name: 'Success Action' }).click()

  await expect(page.getByText('Success Response')).toBeVisible()
})

test('error', async ({ page }) => {
  await page.goto('/svelte-toast')

  await page.getByRole('button', { name: 'Error Action' }).click()

  await expect(page.getByText('Error Response')).toBeVisible()
})

test('resolve', async ({ page }) => {
  await page.goto('/svelte-toast')

  await page.getByRole('button', { name: 'Resolve Action' }).click()

  await expect(page.getByText('Loading')).toBeVisible()

  await expect(page.getByText('Resolved')).toBeVisible()
})

test('reject', async ({ page }) => {
  await page.goto('/svelte-toast')

  await page.getByRole('button', { name: 'Reject Action' }).click()

  await expect(page.getByText('Loading')).toBeVisible()

  await expect(page.getByText('Rejected')).toBeVisible()
})
