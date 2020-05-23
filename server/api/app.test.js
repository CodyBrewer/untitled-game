const request = require('supertest');

const app = require('./app.js');

describe('app', () => {
  describe('GET /', () => {
    test('should return 404', async () => {
      const response = await request(app).get('/');

      expect(response.status).toBe(404);
    });
  });
});