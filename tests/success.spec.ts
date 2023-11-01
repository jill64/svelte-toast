import { expect, test } from '@playwright/test'

test('success', async ({ page }) => {
  await page.goto('/')

  await page.getByRole('button', { name: 'Success Action' }).click()

  await expect(page.getByText('Success Response')).toBeVisible()
})
