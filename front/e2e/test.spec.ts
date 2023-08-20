import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('/');
});

test.describe('E2E Tests', () => {
    test('has title', async ({ page }) => {
        await expect(page).toHaveTitle(/CI\/CD\s*?Study/);
    });

    test('go to data page', async ({ page }) => {
        await page.getByRole('link', { name: 'データ' }).click();

        await expect(page).toHaveURL('/data');
    });
});
