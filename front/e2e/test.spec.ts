import { test, expect } from '@playwright/test';

const data = [
    { id: 1, name: '山田太郎', age: 20 },
    { id: 2, name: '鈴木花子', age: 10 },
    { id: 3, name: '佐藤一郎', age: 25 },
    { id: 4, name: '田中美咲', age: 30 },
    { id: 5, name: '渡辺健太', age: 45 }
];

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

    test('check data header', async ({ page }) => {
        await page.getByRole('link', { name: 'データ' }).click();

        const locatorId = page.getByRole('cell', { name: 'ID' });
        const locatorName = page.getByRole('cell', { name: 'Name' });
        const locatorAge = page.getByRole('cell', { name: 'Age' });

        await expect(locatorId).toHaveCount(1);
        await expect(locatorName).toHaveCount(1);
        await expect(locatorAge).toHaveCount(1);
    });

    test('check data rows', async ({ page }) => {
        await page.getByRole('link', { name: 'データ' }).click();

        for (const row of data) {
            const locatorId = page.getByRole('cell', { name: String(row.id), exact: true });
            const locatorName = page.getByRole('cell', { name: row.name });
            const locatorAge = page.getByRole('cell', { name: String(row.age) });

            await expect(locatorId).toHaveCount(1);
            await expect(locatorName).toHaveCount(1);
            await expect(locatorAge).toHaveCount(1);
        }
    });
});
