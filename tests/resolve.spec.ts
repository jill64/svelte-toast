import { expect, test } from '@playwright/test'

test('resolve', async ({ page }) => {
  await page.goto('/')

  await page.getByRole('button', { name: 'Resolve Action' }).click()

  await expect(page.getByText('Loading')).toBeVisible()

  await expect(page.getByText('Resolved')).toBeVisible()
})
