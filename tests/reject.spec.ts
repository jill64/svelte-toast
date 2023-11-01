import { expect, test } from '@playwright/test'

test('reject', async ({ page }) => {
  await page.goto('/')

  await page.getByRole('button', { name: 'Reject Action' }).click()

  await expect(page.getByText('Loading')).toBeVisible()

  await expect(page.getByText('Rejected')).toBeVisible()
})
