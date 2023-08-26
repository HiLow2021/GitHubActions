import { afterAll, describe, expect, test } from '@jest/globals';
import supertest from 'supertest';
import { app, server } from '../src/index';

const request = supertest(app);

const data = [
    { id: 1, name: '山田太郎', age: 20 },
    { id: 2, name: '鈴木花子', age: 10 },
    { id: 3, name: '佐藤一郎', age: 25 },
    { id: 4, name: '田中美咲', age: 30 },
    { id: 5, name: '渡辺健太', age: 45 }
];

afterAll(() => {
    server.close();
});

describe('API Test', () => {
    describe('GET', () => {
        test('Get All Users', async () => {
            const response = await request.get('/');

            expect(response.statusCode).toBe(200);
            expect(response.body).toEqual(data);
            expect(response.body).toHaveLength(5);
        });
    });
});
