import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
});

test.describe('E2E Tests', () => {
    test('has title', async ({ page }) => {
        await expect(page).toHaveTitle(/CI\CD Study/);
    });
});
