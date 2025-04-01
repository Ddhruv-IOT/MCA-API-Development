const request = require('supertest');
const app = require('./index');

describe('API Tests', () => {

    test('GET /api/hello should return "Hello, World!"', async () => {
        const res = await request(app).get('/api/hello');
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('message', 'Hello, World!');
    });

    test('POST /api/add should return the sum of two numbers', async () => {
        const res = await request(app)
            .post('/api/add')
            .send({ a: 5, b: 7 });
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('result', 12);
    });

    test('POST /api/add should return 400 for invalid input', async () => {
        const res = await request(app)
            .post('/api/add')
            .send({ a: "5", b: 7 });
        expect(res.statusCode).toBe(400);
        expect(res.body).toHaveProperty('error', 'Invalid input');
    });

});
