import { expect, test } from '@playwright/test'

test('error', async ({ page }) => {
  await page.goto('/')

  await page.getByRole('button', { name: 'Error Action' }).click()

  await expect(page.getByText('Error Response')).toBeVisible()
})
