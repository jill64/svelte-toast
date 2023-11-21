import { expect, test } from '@playwright/test'

test('reject', async ({ page }) => {
  await page.goto('/')

  await page.getByRole('button', { name: 'Reject Action' }).click()

  await expect(page.getByRole('alert')).toHaveText('Loading')
  await expect(page.getByRole('alert')).toHaveText('Rejected')
})
