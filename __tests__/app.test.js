const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('GET /discs should return a list of discs', async () => {
    const resp = await request(app).get('/discs');
    expect(resp.body.length).toEqual(6);
    expect(resp.body[0]).toEqual({
      id: expect.any(String),
      name: expect.any(String),
    });
  });
  it('GET /discs/:id should return a disc with details by id', async () => {
    const resp = await request(app).get('/discs/1');
    expect(resp.body).toEqual({
      id: expect.any(String),
      name: expect.any(String),
      type: expect.any(String),
      speed: expect.any(Number),
      glide: expect.any(Number),
    });
  });
  afterAll(() => {
    pool.end();
  });
});
