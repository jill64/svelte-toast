import { expect, test } from '@playwright/test'

test('resolve', async ({ page }) => {
  await page.goto('/')

  await page.getByRole('button', { name: 'Resolve Action' }).click()

  await expect(page.getByRole('alert')).toHaveText('Loading')
  await expect(page.getByRole('alert')).toHaveText('Resolved')
})
