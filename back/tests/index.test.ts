import { afterAll, describe, expect, test } from '@jest/globals';
import supertest from 'supertest';
import { app, server } from '../src/index';

const request = supertest(app);

afterAll(() => {
    server.close();
});

describe('API Test', () => {
    describe('GET', () => {
        test('Get All Users', async () => {
            const response = await request.get('/');

            expect(response.statusCode).toBe(200);
            expect(response.body).toHaveLength(5);
        });
    });
});
